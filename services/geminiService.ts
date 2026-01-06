
import { GoogleGenAI } from "@google/genai";

/**
 * Edits an image using the Gemini 2.5 Flash Image model based on a text prompt.
 * @param base64Image The base64 encoded image string (without the data:image/ prefix).
 * @param mimeType The mime type of the image (e.g., 'image/jpeg').
 * @param prompt The text prompt describing the edit.
 * @returns The edited image as a base64 data URL or throws an error.
 */
export const editImageWithGemini = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  // Always initialize GoogleGenAI inside the function to use the most up-to-date API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Iterate through parts to find the image output
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image generated in the response.");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
