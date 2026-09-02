/**
 * Page principale du portfolio - Point d'entrée de l'application
 * 
 * Cette page utilise Next.js 15 App Router avec une stratégie de chargement optimisée :
 * - Imports statiques pour les sections critiques (Hero, About, Skills, Projects)
 * - Imports dynamiques pour les sections non-critiques (Experience, Education, etc.)
 * - Projets vedettes maintenus statiquement dans src/data/projects.ts
 * 
 * @author MAMBOUNDOU MOULOUNGUI Herly Charmand
 */

import dynamic from "next/dynamic";
import { projects } from "@/data/projects";
import ClientEffects from "@/components/ClientEffects";

// ─── IMPORTS STATIQUES - SECTIONS CRITIQUES ──────────────────────────────────
// Ces sections sont chargées immédiatement car elles sont visibles au-dessus de la ligne de flottaison
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";

// ─── IMPORTS DYNAMIQUES - SECTIONS NON-CRITIQUES ─────────────────────────────
// Ces sections sont chargées de manière asynchrone pour améliorer les performances
// SSR activé pour maintenir le SEO et l'accessibilité

// Loading placeholder component
function SectionLoading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="animate-pulse w-full max-w-6xl mx-auto px-4">
        <div className="h-12 bg-background-tertiary rounded-lg w-1/3 mb-8 mx-auto" />
        <div className="h-4 bg-background-tertiary rounded w-2/3 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-background-tertiary rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

const ExperienceSection = dynamic(() => import("@/sections/ExperienceSection"), {
  ssr: true,
  loading: () => <SectionLoading />,
});

const EducationSection = dynamic(() => import("@/sections/EducationSection"), {
  ssr: true,
  loading: () => <SectionLoading />,
});

const CertificationsSection = dynamic(
  () => import("@/sections/CertificationsSection"),
  { ssr: true, loading: () => <SectionLoading /> }
);

const ContactSection = dynamic(() => import("@/sections/ContactSection"), {
  ssr: true,
  loading: () => <SectionLoading />,
});

// ─── COMPOSANTS CLIENT - INTERFACE UTILISATEUR ───────────────────────────────
// Ces composants nécessitent l'exécution côté client pour les interactions
import Navbar from "@/components/Navbar";

/**
 * Composant principal de la page d'accueil
 * 
 * Fonctionnalités :
 * - Écran de chargement premium avec animations
 * - Effet de curseur personnalisé
 * - Navigation fixe avec highlighting des sections actives
 * - 8 sections principales du portfolio
 * 
 * @returns {JSX.Element} Page d'accueil complète du portfolio
 */
export default function Home() {
  return (
    <>
      {/* ─── COMPOSANTS GLOBAUX ─────────────────────────────────────────── */}
      {/* Écran de chargement avec barre de progression et animations */}
      <ClientEffects />
      
      {/* Navigation fixe avec glassmorphisme et menu mobile */}
      <Navbar />
      
      {/* ─── CONTENU PRINCIPAL ──────────────────────────────────────────── */}
      <main className="relative">
        {/* Section Hero - Première impression avec effet machine à écrire */}
        <HeroSection />
        
        {/* Section À propos - Bio personnelle avec compteurs animés */}
        <AboutSection />
        
        {/* Section Compétences - 40+ technologies avec barres de progression */}
        <SkillsSection />
        
        {/* Section Projets - Projets vedettes avec détails techniques */}
        <ProjectsSection projects={projects} />
        
        {/* ─── SECTIONS CHARGÉES DYNAMIQUEMENT ─────────────────────────── */}
        {/* Ces sections se chargent de manière asynchrone pour optimiser les performances */}
        
        {/* Timeline des expériences professionnelles */}
        <ExperienceSection />
        
        {/* Parcours académique et formations */}
        <EducationSection />
        
        {/* Domaines d'expertise et certifications */}
        <CertificationsSection />
        
        {/* Formulaire de contact avec validation et envoi d'email */}
        <ContactSection />
      </main>
    </>
  );
}
