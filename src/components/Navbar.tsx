"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLenis } from "@/hooks/useLenis";
import ThemeToggle from "./ThemeToggle";
import CVDownloader from "./CVDownloader";
import MagneticButton from "./MagneticButton";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Navigation principale"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass-navbar py-3" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Retour à l'accueil"
          >
            HCM
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <MagneticButton key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === link.href
                      ? "text-accent-violet"
                      : "text-text-primary hover:text-accent-cyan"
                  )}
                  aria-current={activeSection === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <CVDownloader variant="outline" size="sm" showIcon={false} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu mobile"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background-primary md:hidden"
          >
            <nav
              role="navigation"
              aria-label="Navigation mobile"
              className="flex flex-col items-center justify-center h-full gap-8 px-8"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    activeSection === link.href
                      ? "text-accent-violet"
                      : "text-text-secondary hover:text-accent-cyan"
                  )}
                  aria-current={activeSection === link.href ? "page" : undefined}
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
