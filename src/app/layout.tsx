import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://neptune.suryamidde.com";

export const viewport: Viewport = {
  themeColor: "#C9A227",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neptune | Surya Midde - AI/ML Engineer",
    template: "%s | Neptune",
  },
  description: "Dark sci-fi AI portfolio showcasing production-grade RAG pipelines, multi-agent systems, and LLM applications. Built with Next.js, React Three Fiber, and FLUX image generation.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LLM",
    "RAG",
    "Portfolio",
    "Surya Midde",
    "Machine Learning",
    "Artificial Intelligence",
    "LangChain",
    "Multi-Agent Systems",
    "GPT-4",
    "Claude",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Surya Midde", url: siteUrl }],
  creator: "Surya Midde",
  publisher: "Surya Midde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Neptune",
    title: "Neptune | AI Portfolio by Surya Midde",
    description: "Explore the temporal nexus of AI innovation. Production-grade RAG pipelines, multi-agent systems, and LLM applications.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Neptune - AI Portfolio by Surya Midde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neptune | AI Portfolio by Surya Midde",
    description: "Explore the temporal nexus of AI innovation. Production-grade RAG pipelines, multi-agent systems, and LLM applications.",
    images: ["/og-image.svg"],
    creator: "@suryamidde",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
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
