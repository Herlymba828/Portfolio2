/**
 * Système de gestion des compétences techniques
 * 
 * Ce fichier définit toutes les compétences techniques avec leurs niveaux de maîtrise,
 * organisées par catégories pour une présentation structurée dans l'interface.
 * 
 * Fonctionnalités :
 * - Catégorisation des technologies (Frontend, Backend, Mobile, etc.)
 * - Niveaux de compétence quantifiés (0-100%)
 * - Intégration avec React Icons pour l'affichage des logos
 * - Interface à onglets dans la section Skills
 * 
 * @author MAMBOUNDOU MOULOUNGUI Herly Charmand
 * @version 1.0.0
 */

/**
 * Types de catégories de compétences disponibles
 * Utilisé pour organiser les technologies par domaine d'expertise
 */
export type SkillCategory =
  | "Frontend"   // Technologies d'interface utilisateur
  | "Backend"    // Technologies serveur et API
  | "Mobile"     // Développement d'applications mobiles
  | "Database"   // Systèmes de gestion de base de données
  | "DevOps"     // Automatisation, déploiement, monitoring
  | "Systems";   // Administration système et infrastructure

/**
 * Interface définissant la structure d'une compétence technique
 */
export interface Skill {
  /** Nom de la technologie ou compétence */
  name: string;
  
  /** 
   * Nom de l'icône React Icons (format: SiReact, SiNodedotjs, etc.)
   * Correspond aux icônes Simple Icons disponibles dans react-icons/si
   */
  icon: string;
  
  /** 
   * Niveau de maîtrise sur une échelle de 0 à 100
   * - 0-30: Débutant
   * - 31-60: Intermédiaire  
   * - 61-80: Avancé
   * - 81-100: Expert
   */
  level: number;
  
  /** Catégorie à laquelle appartient cette compétence */
  category: SkillCategory;
}

/**
 * Liste complète des compétences techniques
 * 
 * Organisation par catégorie pour faciliter la maintenance et l'affichage.
 * Les niveaux reflètent l'expérience réelle et les projets réalisés.
 */
export const skills: Skill[] = [
  // ─── FRONTEND - TECHNOLOGIES D'INTERFACE UTILISATEUR ─────────────────────
  // Frameworks et bibliothèques pour le développement d'interfaces
  { 
    name: "React", 
    icon: "SiReact", 
    level: 90, 
    category: "Frontend" 
  },
  { 
    name: "Angular", 
    icon: "SiAngular", 
    level: 85, 
    category: "Frontend" 
  },
  
  // Langages de programmation frontend
  { 
    name: "TypeScript", 
    icon: "SiTypescript", 
    level: 88, 
    category: "Frontend" 
  },
  { 
    name: "JavaScript", 
    icon: "SiJavascript", 
    level: 92, 
    category: "Frontend" 
  },
  
  // Technologies web fondamentales
  { 
    name: "HTML5", 
    icon: "SiHtml5", 
    level: 95, 
    category: "Frontend" 
  },
  { 
    name: "CSS3", 
    icon: "SiCss3", 
    level: 90, 
    category: "Frontend" 
  },
  
  // Frameworks CSS
  { 
    name: "Tailwind CSS", 
    icon: "SiTailwindcss", 
    level: 88, 
    category: "Frontend" 
  },

  // ─── BACKEND - TECHNOLOGIES SERVEUR ET API ───────────────────────────────
  // Frameworks backend principaux
  { 
    name: "Django", 
    icon: "SiDjango", 
    level: 90, 
    category: "Backend" 
  },
  { 
    name: "NestJS", 
    icon: "SiNestjs", 
    level: 88, 
    category: "Backend" 
  },
  { 
    name: "Laravel", 
    icon: "SiLaravel", 
    level: 85, 
    category: "Backend" 
  },
  { 
    name: "Node.js", 
    icon: "SiNodedotjs", 
    level: 87, 
    category: "Backend" 
  },
  
  // Langages de programmation backend
  { 
    name: "Python", 
    icon: "SiPython", 
    level: 90, 
    category: "Backend" 
  },
  { 
    name: "PHP", 
    icon: "SiPhp", 
    level: 85, 
    category: "Backend" 
  },
  { 
    name: "Go", 
    icon: "SiGo", 
    level: 70, 
    category: "Backend" 
  },
  { 
    name: "Rust", 
    icon: "SiRust", 
    level: 75, 
    category: "Backend" 
  },

  // ─── MOBILE - DÉVELOPPEMENT D'APPLICATIONS MOBILES ───────────────────────
  { 
    name: "React Native", 
    icon: "SiReact", 
    level: 85, 
    category: "Mobile" 
  },

  // ─── DATABASE - SYSTÈMES DE GESTION DE BASE DE DONNÉES ───────────────────
  // Bases de données relationnelles
  { 
    name: "PostgreSQL", 
    icon: "SiPostgresql", 
    level: 90, 
    category: "Database" 
  },
  { 
    name: "MySQL", 
    icon: "SiMysql", 
    level: 85, 
    category: "Database" 
  },
  
  // Bases de données NoSQL
  { 
    name: "MongoDB", 
    icon: "SiMongodb", 
    level: 80, 
    category: "Database" 
  },

  // ─── DEVOPS - AUTOMATISATION ET DÉPLOIEMENT ──────────────────────────────
  // Conteneurisation
  { 
    name: "Docker", 
    icon: "SiDocker", 
    level: 90, 
    category: "DevOps" 
  },
  { 
    name: "Docker Compose", 
    icon: "SiDocker", 
    level: 88, 
    category: "DevOps" 
  },
  
  // CI/CD et automatisation
  { 
    name: "Jenkins", 
    icon: "SiJenkins", 
    level: 85, 
    category: "DevOps" 
  },
  
  // Monitoring et observabilité
  { 
    name: "Grafana", 
    icon: "SiGrafana", 
    level: 80, 
    category: "DevOps" 
  },
  { 
    name: "Prometheus", 
    icon: "SiPrometheus", 
    level: 80, 
    category: "DevOps" 
  },
  
  // Serveurs web et reverse proxy
  { 
    name: "Nginx", 
    icon: "SiNginx", 
    level: 85, 
    category: "DevOps" 
  },
  
  // Administration système et infrastructure
  { 
    name: "Linux (Ubuntu/CentOS)", 
    icon: "SiLinux", 
    level: 88, 
    category: "DevOps" 
  },
  { 
    name: "OpenLDAP", 
    icon: "SiOpenldap", 
    level: 85, 
    category: "DevOps" 
  },
  { 
    name: "Samba", 
    icon: "SiSamba", 
    level: 82, 
    category: "DevOps" 
  },
  { 
    name: "BIND9 (DNS)", 
    icon: "SiCloudflare", 
    level: 80, 
    category: "DevOps" 
  },
  
  // Services de messagerie
  { 
    name: "Postfix", 
    icon: "SiGmail", 
    level: 80, 
    category: "DevOps" 
  },
  { 
    name: "Dovecot", 
    icon: "SiGmail", 
    level: 78, 
    category: "DevOps" 
  },
  { 
    name: "Zimbra", 
    icon: "SiGmail", 
    level: 75, 
    category: "DevOps" 
  },
  { 
    name: "Roundcube", 
    icon: "SiGmail", 
    level: 78, 
    category: "DevOps" 
  },

  // ─── SYSTEMS - LANGAGES DE PROGRAMMATION SYSTÈME ─────────────────────────
  // Langages bas niveau pour performance et contrôle système
  { 
    name: "C", 
    icon: "SiC", 
    level: 78, 
    category: "Systems" 
  },
  { 
    name: "C++", 
    icon: "SiCplusplus", 
    level: 80, 
    category: "Systems" 
  },
  { 
    name: "Rust", 
    icon: "SiRust", 
    level: 75, 
    category: "Systems" 
  },
  { 
    name: "Go", 
    icon: "SiGo", 
    level: 70, 
    category: "Systems" 
  },
];

/**
 * Configuration des catégories de compétences pour l'interface utilisateur
 * 
 * Définit les onglets affichés dans la section Skills avec leurs labels français.
 * L'ordre détermine l'affichage dans l'interface (Frontend en premier, etc.)
 */
export const skillCategories: { id: SkillCategory; label: string }[] = [
  { 
    id: "Frontend", 
    label: "Frontend" 
  },
  { 
    id: "Backend", 
    label: "Backend" 
  },
  { 
    id: "Mobile", 
    label: "Mobile" 
  },
  { 
    id: "Database", 
    label: "Bases de données" 
  },
  { 
    id: "DevOps", 
    label: "DevOps & Infra" 
  },
  { 
    id: "Systems", 
    label: "Langages systèmes" 
  },
];
