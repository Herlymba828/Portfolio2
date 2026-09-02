// Analytics utilities for tracking user interactions and performance

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Analytics configuration
// Read lazily (not captured at module-load time) so it reflects the current
// env at call time — important for tests and for env vars injected at runtime.
export const getGaTrackingId = () => process.env.NEXT_PUBLIC_GA_ID;

// Initialize Google Analytics
export const initGA = () => {
  const gaTrackingId = getGaTrackingId();
  if (!gaTrackingId || typeof window === "undefined") return;

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", gaTrackingId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  const gaTrackingId = getGaTrackingId();
  if (!gaTrackingId || !window.gtag) return;

  window.gtag("config", gaTrackingId, {
    page_title: title || document.title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!getGaTrackingId() || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event trackers
export const analytics = {
  // Navigation events
  trackNavigation: (section: string) => {
    trackEvent("navigate", "navigation", section);
  },

  // Theme events
  trackThemeChange: (theme: "light" | "dark") => {
    trackEvent("theme_change", "ui", theme);
  },

  // Contact form events
  trackContactFormSubmit: () => {
    trackEvent("submit", "contact_form", "form_submission");
  },

  trackContactFormError: (error: string) => {
    trackEvent("error", "contact_form", error);
  },

  // CV download events
  trackCVDownload: () => {
    trackEvent("download", "cv", "pdf_download");
  },

  // Project interactions
  trackProjectView: (projectId: string, projectTitle: string) => {
    trackEvent("view", "project", `${projectId}_${projectTitle}`);
  },

  trackProjectLink: (projectId: string, linkType: "github" | "demo") => {
    trackEvent("click", "project_link", `${projectId}_${linkType}`);
  },

  // Social media clicks
  trackSocialClick: (platform: "github" | "linkedin" | "email" | "whatsapp") => {
    trackEvent("click", "social", platform);
  },

  // Performance tracking
  trackPerformance: (metric: string, value: number) => {
    trackEvent("performance", "metrics", metric, value);
  },

  // Error tracking
  trackError: (error: string, section?: string) => {
    trackEvent("error", "application", `${section || "unknown"}_${error}`);
  },
};

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window === "undefined") return;

  // Track Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const { name, startTime } = entry;
      
      // Track navigation timing
      if (entry.entryType === "navigation") {
        const navEntry = entry as PerformanceNavigationTiming;
        
        analytics.trackPerformance("dom_content_loaded", 
          navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart
        );
        
        analytics.trackPerformance("load_complete", 
          navEntry.loadEventEnd - navEntry.loadEventStart
        );
      }
      
      // Track paint timing
      if (entry.entryType === "paint") {
        analytics.trackPerformance(name.replace("-", "_"), startTime);
      }
    });
  });

  // Observe navigation and paint events
  try {
    observer.observe({ entryTypes: ["navigation", "paint"] });
  } catch (error) {
    console.warn("Performance Observer not supported:", error);
  }
};

// Session tracking
export const trackSession = () => {
  if (typeof window === "undefined") return;

  const sessionStart = Date.now();
  
  // Track session duration on page unload
  const handleBeforeUnload = () => {
    const sessionDuration = Date.now() - sessionStart;
    analytics.trackPerformance("session_duration", Math.round(sessionDuration / 1000));
  };

  window.addEventListener("beforeunload", handleBeforeUnload);
  
  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
};

// Privacy-compliant analytics (GDPR)
export const initPrivacyCompliantAnalytics = () => {
  if (typeof window === "undefined") return;

  // Check for consent (you can integrate with a consent management platform)
  const hasConsent = localStorage.getItem("analytics_consent") === "true";
  
  if (hasConsent) {
    initGA();
    trackWebVitals();
    trackSession();
  }
};

// Consent management
export const setAnalyticsConsent = (consent: boolean) => {
  if (typeof window === "undefined") return;

  localStorage.setItem("analytics_consent", consent.toString());
  
  if (consent) {
    initPrivacyCompliantAnalytics();
  }
};