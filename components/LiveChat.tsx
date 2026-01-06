
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Mic, X, MessageSquare, Loader2, Volume2, Power } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from "@google/genai";

// --- Manual Base64 Helper Functions ---

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

function createBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [agentState, setAgentState] = useState<'idle' | 'listening' | 'speaking'>('idle');
  const [volumeLevel, setVolumeLevel] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const cleanup = () => {
    if (sessionPromiseRef.current) {
      sessionPromiseRef.current.then(session => {
        try { session.close(); } catch (e) {}
      });
      sessionPromiseRef.current = null;
    }

    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) {}
    });
    sourcesRef.current.clear();

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    setIsConnected(false);
    setIsConnecting(false);
    setAgentState('idle');
    setVolumeLevel(0);
  };

  const visualizeAudio = () => {
    if (!analyzerRef.current) return;
    const dataArray = new Uint8Array(analyzerRef.current.frequencyBinCount);
    analyzerRef.current.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
    setVolumeLevel(Math.min(1, (sum / dataArray.length) / 50));
    animationFrameRef.current = requestAnimationFrame(visualizeAudio);
  };

  const connectToJessica = async () => {
    setIsConnecting(true);
    cleanup();

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const inputCtx = new AudioContextClass({ sampleRate: 16000 });
      inputAudioContextRef.current = inputCtx;
      
      const outputCtx = new AudioContextClass({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;
      const outputNode = outputCtx.createGain();
      outputNode.connect(outputCtx.destination);
      nextStartTimeRef.current = outputCtx.currentTime;

      // Resume context explicitly to prevent latency due to browser auto-play policy
      await inputCtx.resume();
      await outputCtx.resume();

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const analyzer = outputCtx.createAnalyser();
      analyzer.fftSize = 32;
      analyzerRef.current = analyzer;
      outputNode.connect(analyzer);
      visualizeAudio();

      // Initialize GoogleGenAI right before connection
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: 'Your name is Jessica L. You are a senior Executive Agent for Infinite Suites. AS SOON AS THE CONNECTION IS ESTABLISHED, YOU MUST INITIATE THE CONVERSATION. Do not wait for the user to speak. Introduce yourself warmly as Jessica L and ask how you can assist them with premium corporate or insurance housing today. Be professional and proactive.',
        },
        callbacks: {
          onopen: () => {
            setIsConnected(true);
            setIsConnecting(false);
            setAgentState('listening');

            const source = inputCtx.createMediaStreamSource(stream);
            // Reduced buffer size for lower latency packet processing
            const processor = inputCtx.createScriptProcessor(1024, 1, 1);
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(processor);
            processor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio && audioContextRef.current) {
              setAgentState('speaking');
              const ctx = audioContextRef.current;
              
              // Tight timing for low latency playback - no gaps!
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              
              try {
                const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
                const source = ctx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(outputNode);
                
                source.addEventListener('ended', () => {
                  sourcesRef.current.delete(source);
                  if (sourcesRef.current.size === 0) setAgentState('listening');
                });

                source.start(nextStartTimeRef.current);
                nextStartTimeRef.current += audioBuffer.duration;
                sourcesRef.current.add(source);
              } catch (err) {
                console.error("Audio decode error", err);
              }
            }

            if (message.serverContent?.interrupted) {
              for (const source of sourcesRef.current) {
                try { source.stop(); } catch (e) {}
              }
              sourcesRef.current.clear();
              nextStartTimeRef.current = audioContextRef.current?.currentTime || 0;
              setAgentState('listening');
            }
          },
          onclose: () => cleanup(),
          onerror: () => cleanup(),
        }
      });
      
      sessionPromiseRef.current = sessionPromise;

    } catch (error) {
      console.error("Jessica connection error:", error);
      cleanup();
    }
  };

  const handleToggleChat = () => {
    if (isOpen) {
      cleanup();
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    return () => cleanup();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-fade-in-up">
          <div className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[#bf9b30] animate-pulse' : 'bg-slate-500'}`}></div>
              <span className="text-white font-semibold text-sm">Jessica L - Executive Agent</span>
            </div>
            <button onClick={handleToggleChat} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 flex flex-col items-center justify-center min-h-[280px] bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <Volume2 className="w-48 h-48" />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full">
              {!isConnected ? (
                isConnecting ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-[#bf9b30] animate-spin mb-4" />
                    <p className="text-slate-600 font-medium">Connecting to Jessica...</p>
                  </div>
                ) : (
                  <div className="text-center">
                     <div className="w-16 h-16 bg-[#bf9b30]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-[#bf9b30]" />
                     </div>
                     <p className="text-slate-800 font-bold mb-1 text-base uppercase tracking-tight">Executive Concierge</p>
                     <p className="text-slate-500 text-[10px] mb-6 px-4 uppercase tracking-[0.2em] font-black">Jessica L is available to speak</p>
                     <button
                      onClick={connectToJessica}
                      className="bg-[#bf9b30] hover:bg-[#997b26] text-white font-black py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-[#bf9b30]/30 text-xs uppercase tracking-widest"
                    >
                      Establish Connection
                    </button>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center w-full">
                  <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-all duration-300 ${agentState === 'speaking' ? 'scale-110' : 'scale-100'}`}>
                    <div className="absolute inset-0 bg-[#bf9b30] rounded-full opacity-20 animate-ping"></div>
                    <div className="absolute inset-0 bg-[#bf9b30] rounded-full opacity-10 transition-all duration-75" style={{ transform: `scale(${1 + volumeLevel})` }}></div>
                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-100 z-10">
                       {agentState === 'speaking' ? <Volume2 className="w-8 h-8 text-[#bf9b30]" /> : <Mic className="w-8 h-8 text-[#bf9b30]" />}
                    </div>
                  </div>
                  
                  <p className="text-slate-900 font-black text-lg mb-1 uppercase tracking-tighter">
                    {agentState === 'speaking' ? 'Jessica is Speaking' : 'Listening...'}
                  </p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Live Executive Link Active</p>
                
                  <button onClick={cleanup} className="mt-10 text-slate-400 hover:text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center transition-colors">
                    <Power className="w-3 h-3 mr-2" />
                    Terminate Connection
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={handleToggleChat}
          className="group relative flex items-center justify-center w-16 h-16 bg-[#bf9b30] hover:bg-[#997b26] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <div className="absolute inset-0 bg-[#bf9b30] rounded-full animate-ping opacity-20"></div>
          <MessageSquare className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

export default LiveChat;
