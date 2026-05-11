"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize animations for performance
    const optimizeAnimations = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty("--animation-duration", "0.01ms");
        document.documentElement.style.setProperty("--transition-duration", "0.01ms");
      }

      // Use IntersectionObserver for will-change optimization
      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.willChange = "transform, opacity";
          } else {
            el.style.willChange = "auto";
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      });

      const animatedElements = document.querySelectorAll(
        "[data-animate], .animate-float, .animate-pulse-premium, .gradient-text-premium"
      );
      
      animatedElements.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect();
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll("img:not([loading])");
      images.forEach((img) => {
        img.setAttribute("loading", "lazy");
        img.setAttribute("decoding", "async");
      });
    };

    // Prefetch visible links
    const prefetchVisibleLinks = () => {
      const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const href = link.getAttribute("href");
            if (href && !href.startsWith("http") && !href.startsWith("#")) {
              const prefetchLink = document.createElement("link");
              prefetchLink.rel = "prefetch";
              prefetchLink.href = href;
              document.head.appendChild(prefetchLink);
            }
          }
        });
      }, { rootMargin: "200px" });

      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => linkObserver.observe(link));
      
      return () => linkObserver.disconnect();
    };

    // Cleanup unused resources
    const cleanupResources = () => {
      setTimeout(() => {
        const unusedElements = document.querySelectorAll(".loading-skeleton");
        unusedElements.forEach((el) => {
          if (!el.classList.contains("active")) {
            el.remove();
          }
        });
      }, 3000);
    };

    // Initialize optimizations
    const animationCleanup = optimizeAnimations();
    optimizeImages();
    const prefetchCleanup = prefetchVisibleLinks();
    cleanupResources();

    // Performance monitoring
    let perfObserver: PerformanceObserver | null = null;
    if (typeof window !== "undefined" && "performance" in window) {
      perfObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log("Navigation timing:", {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              firstPaint: performance.getEntriesByType("paint")[0]?.startTime,
            });
          }
        });
      });

      perfObserver.observe({ entryTypes: ["navigation", "paint"] });
    }

    // Cleanup all observers on unmount
    return () => {
      animationCleanup?.();
      prefetchCleanup?.();
      perfObserver?.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}