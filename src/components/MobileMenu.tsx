"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/utils/cn";
import ThemeToggle from "./ThemeToggle";
import CVDownloader from "./CVDownloader";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onNavClick: (href: string) => void;
}

export default function MobileMenu({
  isOpen,
  activeSection,
  onNavClick,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-background-primary md:hidden"
    >
      <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
        {NAV_LINKS.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onNavClick(link.href);
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "text-2xl font-medium transition-colors",
              activeSection === link.href
                ? "text-accent-violet"
                : "text-text-muted hover:text-accent-cyan"
            )}
          >
            {link.label}
          </motion.a>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: NAV_LINKS.length * 0.1 }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <ThemeToggle />
          <CVDownloader />
        </motion.div>
      </div>
    </motion.div>
  );
}
