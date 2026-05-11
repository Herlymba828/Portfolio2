"use client";

import { useInView } from "framer-motion";
import { useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Hook to detect if an element is in the viewport.
 * Returns a ref to attach to the element and a boolean.
 */
export function useScrollReveal(options?: {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: (options?.margin ?? "-100px") as Parameters<typeof useInView>[1] extends { margin?: infer M } ? M : never,
    amount: options?.amount ?? 0.1,
  });

  return { ref, isInView };
}

/**
 * Re-export Framer Motion's useReducedMotion for convenience.
 * Returns true if the user has requested reduced motion.
 */
export { useFramerReducedMotion as useReducedMotion };
