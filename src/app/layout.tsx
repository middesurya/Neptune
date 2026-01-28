import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Orbitron, Space_Mono } from "next/font/google";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { HomePageJsonLd } from "@/components/seo/JsonLd";
import { SkipToContent } from "@/hooks/useKeyboardNavigation";
import GlobalEnhancements from "@/components/ui/GlobalEnhancements";
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HomePageJsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('neptune-theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  var d = document.documentElement;
                  d.classList.remove('dark', 'light');
                  d.classList.add(theme);
                  if (theme === 'light') {
                    d.style.setProperty('--bg-primary', '#f5f5f7');
                    d.style.setProperty('--bg-elevated', '#ffffff');
                    d.style.setProperty('--bg-surface', '#e8e8ec');
                    d.style.setProperty('--bg-card', '#ffffff');
                    d.style.setProperty('--text-primary', '#0a0a12');
                    d.style.setProperty('--text-secondary', '#404050');
                    d.style.setProperty('--text-muted', '#808090');
                    d.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.08)');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${spaceMono.variable} antialiased scanlines grain`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SkipToContent />
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
                  <LoadingSpinner size="lg" message="Initializing..." />
                </div>
              }
            >
              {children}
            </Suspense>
          </ErrorBoundary>
          <GlobalEnhancements />
        </ThemeProvider>
      </body>
    </html>
  );
}
