
import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LiveChat from "../components/LiveChat";

export const metadata: Metadata = {
  title: "Infinite Suites | Premium Corporate Housing",
  description: "Elite executive suites and insurance relocation housing in Los Angeles, Burbank, and Long Beach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans min-h-screen bg-white text-slate-900 selection:bg-[#bf9b30] selection:text-white`}>
        <Header />
        <main className="transition-opacity duration-500">
          {children}
        </main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  );
}
