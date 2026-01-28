import type { Metadata } from "next";
import { Orbitron, Space_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Neptune | Surya Midde - AI/ML Engineer",
  description: "Dark sci-fi AI portfolio showcasing RAG pipelines, multi-agent systems, and LLM applications. Built with Next.js, React Three Fiber, and FLUX image generation.",
  keywords: ["AI Engineer", "ML Engineer", "LLM", "RAG", "Portfolio", "Surya Midde"],
  authors: [{ name: "Surya Midde" }],
  openGraph: {
    title: "Neptune | AI Portfolio by Surya Midde",
    description: "Explore the temporal nexus of AI innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${spaceMono.variable} antialiased scanlines grain`}
      >
        {children}
      </body>
    </html>
  );
}
