"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/animations/hooks";

export default function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const followerX = useSpring(0, { stiffness: 80, damping: 15 });
  const followerY = useSpring(0, { stiffness: 80, damping: 15 });

  useEffect(() => {
    // Check if device has a mouse (not touch)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    
    if (!hasPointer || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY, followerX, followerY, prefersReducedMotion]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9998] h-2 w-2 rounded-full bg-accent-violet mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Follower cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9997] h-8 w-8 rounded-full border border-accent-cyan/50 mix-blend-difference"
        style={{
          left: followerX,
          top: followerY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
}
