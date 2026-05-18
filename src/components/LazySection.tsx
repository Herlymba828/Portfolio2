"use client";

import { Suspense, lazy, ComponentType } from "react";
import { motion } from "framer-motion";

// Skeleton loader pour les sections
function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-[50vh] animate-pulse bg-background-secondary/50 ${className}`}
    />
  );
}

// HOC pour lazy load des sections
export function lazySection<P extends Record<string, unknown>>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  skeletonClassName?: string
) {
  const LazyComponent = lazy(importFn);

  return function LazySectionWrapper(props: P) {
    return (
      <Suspense fallback={<SectionSkeleton className={skeletonClassName} />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
