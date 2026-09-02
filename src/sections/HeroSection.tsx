/**
 * Section Hero - Première impression du portfolio
 * 
 * Cette section constitue la première impression du visiteur avec :
 * - Effet machine à écrire pour les rôles techniques
 * - Avatar animé avec effets de glow
 * - Liens sociaux avec animations magnétiques
 * - Badge de disponibilité en temps réel
 * - Call-to-action vers le CV et les projets
 * 
 * Fonctionnalités techniques :
 * - Animation typewriter avec rotation automatique des rôles
 * - Animations Framer Motion avec stagger effect
 * - Responsive design avec grid adaptatif
 * - Effets de particules en arrière-plan
 * 
 * @author MAMBOUNDOU MOULOUNGUI Herly Charmand
 */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, ArrowDown } from "lucide-react";
import { heroContainer, heroItem } from "@/animations/variants";
import { personal } from "@/data/personal";
import MagneticButton from "@/components/MagneticButton";
import CVDownloader from "@/components/CVDownloader";
import { Button } from "@/components/ui/button";

/**
 * Composant principal de la section Hero
 * 
 * Gère l'affichage de la première section du portfolio avec animations
 * et interactions utilisateur avancées.
 */
export default function HeroSection() {
  // ─── ÉTAT LOCAL POUR L'EFFET MACHINE À ÉCRIRE ────────────────────────────
  /** Index du rôle actuellement affiché dans la rotation */
  const [roleIndex, setRoleIndex] = useState(0);
  
  /** Texte actuellement affiché (en cours de frappe/suppression) */
  const [displayText, setDisplayText] = useState("");
  
  /** Indique si on est en mode suppression de texte */
  const [isDeleting, setIsDeleting] = useState(false);

  // ─── EFFET MACHINE À ÉCRIRE ───────────────────────────────────────────────
  /**
   * Gère l'animation typewriter pour les rôles techniques
   * 
   * Logique :
   * 1. Tape le rôle caractère par caractère (100ms/caractère)
   * 2. Pause 2 secondes une fois le rôle complet
   * 3. Supprime le rôle caractère par caractère (50ms/caractère)
   * 4. Passe au rôle suivant et recommence
   */
  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Plus rapide en suppression

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Mode frappe : ajouter un caractère
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Rôle complet, attendre puis commencer la suppression
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Mode suppression : retirer un caractère
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          // Suppression terminée, passer au rôle suivant
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // ─── GESTIONNAIRES D'ÉVÉNEMENTS ──────────────────────────────────────────
  /**
   * Scroll fluide vers la section projets
   * Utilisé par le bouton "Voir les projets"
   */
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-24"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 md:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            {/* Available Badge */}
            <motion.div variants={heroItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-text-secondary">Disponible pour de nouveaux projets</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={heroItem}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text leading-tight"
            >
              {personal.nameDisplay}
            </motion.h1>

            {/* Title with Typewriter */}
            <motion.div variants={heroItem} className="h-16">
              <p className="text-xl md:text-2xl text-text-secondary">
                {personal.title.split("•")[0]} •
              </p>
              <p className="text-xl md:text-2xl text-accent-cyan font-mono typewriter-cursor">
                {displayText}
              </p>
            </motion.div>

            {/* Slogan */}
            <motion.p
              variants={heroItem}
              className="text-lg text-text-secondary max-w-2xl leading-relaxed"
            >
              {personal.slogan}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-4 pt-4"
            >
              <MagneticButton>
                <CVDownloader size="lg" />
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleScrollToProjects}
                >
                  Voir les projets
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={heroItem}
              className="flex gap-4 pt-4"
            >
              <MagneticButton>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-full glass-light hover:glass transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <GitHubLogoIcon className="h-5 w-5 text-text-muted hover:text-accent-violet transition-colors" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-full glass-light hover:glass transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedInLogoIcon className="h-5 w-5 text-text-muted hover:text-accent-cyan transition-colors" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center p-3 rounded-full glass-light hover:glass transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-text-muted hover:text-accent-blue transition-colors" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column - Avatar */}
          <motion.div
            variants={heroItem}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan opacity-20 blur-3xl animate-pulse-slow" />
              
              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass-card p-2 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 flex items-center justify-center text-8xl font-bold gradient-text">
                  HCM
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-violet/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent-cyan/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
