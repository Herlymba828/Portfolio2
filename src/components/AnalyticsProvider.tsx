"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initPrivacyCompliantAnalytics, trackPageView } from "@/lib/analytics";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount
    initPrivacyCompliantAnalytics();

    // Register service worker for PWA
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(window.location.href, document.title);
  }, [pathname]);

  return <>{children}</>;
}