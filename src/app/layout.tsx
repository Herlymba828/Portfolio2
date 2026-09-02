import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { personal } from "@/data/personal";
import { LenisProvider } from "@/components/LenisProvider";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import ErrorBoundary from "@/components/ErrorBoundary";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false, // Only preload critical font
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mamboundou-herly.vercel.app"),
  title: `${personal.name} — Fullstack & DevOps Engineer`,
  description: `Portfolio premium de ${personal.name}, développeur Fullstack, DevOps et Infrastructure Engineer basé à ${personal.location}. Spécialisé en NestJS, Django, React, Docker, CI/CD et systèmes distribués.`,
  keywords: [
    personal.name,
    "MAMBOUNDOU MOULOUNGUI Herly Charmand",
    "Herly Charmand",
    "Fullstack Developer",
    "DevOps Engineer",
    "Infrastructure Engineer",
    "NestJS",
    "Django",
    "React",
    "Docker",
    "CI/CD",
    "Gabon",
    "Libreville",
    "PostgreSQL",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "Kubernetes",
    "Terraform",
  ],
  authors: [{ name: personal.name, url: personal.linkedin }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mamboundou-herly.vercel.app",
    title: `${personal.name} — Portfolio Premium`,
    description: `Portfolio professionnel premium de ${personal.name}. Développeur Fullstack spécialisé en DevOps, infrastructures modernes et systèmes distribués.`,
    siteName: `${personal.name} Portfolio Premium`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${personal.name} Portfolio Premium`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Portfolio Premium`,
    description: `Portfolio professionnel premium de ${personal.name}. Développeur Fullstack spécialisé en DevOps et infrastructures modernes.`,
    images: ["/og-image.svg"],
  },
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
  ...(process.env.GOOGLE_VERIFICATION_CODE && {
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE,
    },
  }),
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://resend.com" />
        
        {/* Viewport meta for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#7c3aed" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/og-image.svg" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ErrorBoundary>
          <AnalyticsProvider>
            <PerformanceOptimizer />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange={false}
            >
              <LenisProvider>{children}</LenisProvider>
            </ThemeProvider>
          </AnalyticsProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
