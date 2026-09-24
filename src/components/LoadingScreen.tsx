"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { loadingContainer, loadingText } from "@/animations/variants";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem("visited");

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Simulate loading progress for better UX
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("visited", "true");
          }, 100);
          return 100;
        }
        return prev + 25;
      });
    }, 30);

    // Minimum loading time for smooth UX
    const minLoadTime = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
      sessionStorage.setItem("visited", "true");
    }, 350);

    return () => {
      clearInterval(interval);
      clearTimeout(minLoadTime);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={loadingContainer}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-primary"
        >
          <motion.div
            variants={loadingText}
            className="flex flex-col items-center gap-6"
          >
            {/* Enhanced Logo with Premium Animation */}
            <div className="relative">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-premium opacity-20 animate-pulse-premium"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-premium opacity-40 animate-pulse-premium" style={{ animationDelay: "0.3s" }}></div>
                <div className="absolute inset-4 rounded-full bg-gradient-premium opacity-60 animate-pulse-premium" style={{ animationDelay: "0.6s" }}></div>
                <div className="absolute inset-6 rounded-full bg-gradient-premium animate-pulse-premium" style={{ animationDelay: "0.9s" }}></div>
              </div>
              
              <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-white/20 shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Herly Charmand Mamboundou"
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-64 mx-auto"
            >
              <div className="h-1 bg-background-tertiary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-premium rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Loading text with progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg font-medium gradient-text-premium mb-2">
                Portfolio Premium
              </p>
              <p className="text-sm text-text-muted">
                Chargement... {Math.round(Math.min(progress, 100))}%
              </p>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-accent-violet rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
