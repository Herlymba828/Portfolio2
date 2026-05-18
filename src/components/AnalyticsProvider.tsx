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

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(window.location.href, document.title);
  }, [pathname]);

  return <>{children}</>;
}