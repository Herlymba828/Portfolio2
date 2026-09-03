/**
 * Données personnelles et informations de contact
 * 
 * Ce fichier centralise toutes les informations personnelles utilisées dans le portfolio.
 * Il utilise 'as const' pour garantir l'immutabilité et améliorer l'inférence de types TypeScript.
 * 
 * @author MAMBOUNDOU MOULOUNGUI Herly Charmand
 * @version 1.0.0
 */

/**
 * Interface pour les données personnelles
 * Définit la structure des informations de contact et professionnelles
 */
export interface PersonalData {
  /** Nom complet officiel */
  name: string;
  /** Nom d'affichage (peut être différent pour la présentation) */
  nameDisplay: string;
  /** Titre professionnel principal */
  title: string;
  /** Slogan/description courte des compétences */
  slogan: string;
  /** Adresse email principale */
  email: string;
  /** Liste des numéros de téléphone */
  phones: readonly string[];
  /** Numéro WhatsApp avec indicatif international */
  whatsapp: string;
  /** Localisation géographique */
  location: string;
  /** URL du profil LinkedIn */
  linkedin: string;
  /** URL du profil GitHub */
  github: string;
  /** Chemin vers le fichier CV (PDF) */
  cvFile: string;
  /** Statut de disponibilité pour de nouveaux projets */
  available: boolean;
  /** Liste des rôles/spécialisations pour l'effet machine à écrire */
  roles: readonly string[];
}

/**
 * Données personnelles complètes
 * 
 * Contient toutes les informations nécessaires pour le portfolio :
 * - Informations de contact (email, téléphones, réseaux sociaux)
 * - Localisation géographique
 * - Statut professionnel et disponibilité
 * - Rôles techniques pour l'animation typewriter
 */
export const personal: PersonalData = {
  // ─── IDENTITÉ ──────────────────────────────────────────────────────────────
  /** Nom complet officiel utilisé dans les métadonnées et documents officiels */
  name: "Herly Charmand MAMBOUNDOU MOULOUNGUI",
  
  /** Nom d'affichage optimisé pour l'interface utilisateur */
  nameDisplay: "Herly Charmand MAMBOUNDOU MOULOUNGUI",
  
  /** Titre professionnel résumant les principales compétences */
  title: "Développeur Fullstack • DevOps • Gestionnaire de réseaux sociaux",
  
  /** Slogan décrivant l'approche technique et les domaines d'expertise */
  slogan:
    "Je conçois des plateformes web, mobiles et infrastructures modernes orientées performance, scalabilité et automatisation.",

  // ─── CONTACT ───────────────────────────────────────────────────────────────
  /** Adresse email professionnelle principale */
  email: "herlymba828@gmail.com",
  
  /** Numéros de téléphone locaux (Gabon) */
  phones: ["060360121", "077990079"],
  
  /** Numéro WhatsApp avec indicatif international pour contact direct */
  whatsapp: "+241060360121",
  
  /** Localisation géographique précise */
  location: "Libreville, Charbonnage, Gabon",

  // ─── RÉSEAUX SOCIAUX ───────────────────────────────────────────────────────
  /** Profil LinkedIn professionnel */
  linkedin: "https://www.linkedin.com/in/herly-mamboundou-195055372/",
  
  /** Repository GitHub avec projets open source */
  github: "https://github.com/Herlymba828",

  // ─── DOCUMENTS ─────────────────────────────────────────────────────────────
  /** Lien Canva du CV, toujours synchronisé avec la dernière version éditée */
  cvFile: "https://canva.link/7uivxc7tmkd3qwp",

  // ─── STATUT PROFESSIONNEL ─────────────────────────────────────────────────
  /** Disponibilité pour de nouveaux projets (affiché avec badge vert) */
  available: true,
  
  /** 
   * Rôles techniques pour l'effet machine à écrire dans la section Hero
   * Ordre d'affichage : du plus général au plus spécialisé
   */
  roles: [
    "Fullstack Engineer",      // Développement web complet
    "DevOps Engineer",         // Automatisation et déploiement
    "Infrastructure Engineer", // Architecture système
    "Systems Engineer",        // Ingénierie système
    "Future Software Architect", // Aspiration professionnelle
  ],
} as const; // 'as const' pour l'immutabilité et l'inférence de types stricte
