export type ExperienceType =
  | "Projet personnel"
  | "Laboratoire"
  | "Projet ingénierie"
  | "Système expérimental";

export interface Experience {
  id: number;
  title: string;
  type: ExperienceType;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Infrastructure DevOps & CI/CD Automatisé",
    type: "Projet ingénierie",
    period: "2024 – 2025",
    description: "Mise en place d'une infrastructure DevOps complète pour une application de gestion des étudiants. Conteneurisation avec Docker et Docker Compose, base de données PostgreSQL et reverse proxy Nginx. Automatisation du cycle CI/CD via Jenkins avec pipeline : build, tests, déploiement. Supervision avec Prometheus et visualisation sur Grafana avec dashboard métier : utilisateurs actifs, requêtes HTTP, emails envoyés. Gestion sécurisée des variables d'environnement et persistance des données. Livraison clé en main avec scripts d'installation sur CentOS/Rocky Linux.",
    technologies: [
      "Docker",
      "Docker Compose", 
      "Jenkins",
      "Prometheus",
      "Grafana",
      "Nginx",
      "PostgreSQL",
      "CentOS",
      "Rocky Linux",
    ],
  },
  {
    id: 2,
    title: "Infrastructure LDAP & Messagerie d'Entreprise",
    type: "Laboratoire",
    period: "2024",
    description: "Mise en place d'une infrastructure de messagerie et d'annuaire centralisé. Déploiement complet services réseau (CentOS Stream 10) et sécurisation pour le domaine DNS. OpenLDAP (LDAPS, ACLs, SSHA), BIND9, Samba. Messagerie sécurisée : Dovecot (IMAPS, auth LDAP), Postfix (SMTP + TLS, SASL), Roundcube (HTTPS, carnet LDAP). Interface d'administration web (CGI/JavaScript) : gestion temps réel des services (start/stop/restart), auto‑redémarrage en 10s, notifications email, whitelist IP.",
    technologies: [
      "OpenLDAP",
      "BIND9",
      "Samba",
      "Postfix",
      "Dovecot",
      "Roundcube",
      "CentOS Stream",
      "TLS/SSL",
      "JavaScript",
      "CGI",
    ],
  },
  {
    id: 3,
    title: "Plateforme Multi-Devises & Hub Financier",
    type: "Projet ingénierie",
    period: "2024",
    description: "Mise en place d'une plateforme multi-devises (Web et Mobile) et un hub d'interopérabilité financière permettant aux utilisateurs et marchands de recevoir, envoyer et convertir des fonds instantanément, tout en garantissant traçabilité et conformité. (NestJS, React et PostgreSQL)",
    technologies: [
      "NestJS",
      "React",
      "PostgreSQL",
      "TypeScript",
      "REST API",
    ],
  },
  {
    id: 4,
    title: "Plateforme de Gestion des Présences",
    type: "Projet personnel",
    period: "2023 – 2024",
    description: "Mise en place d'un plateforme complète (Web et Mobile) de gestion des présences et absences. L'objectif était de marquer la présence/absence fiable (manuellement ou via QR code), Validation des absences par les responsables, Détection des retards et anomalies, Corrélation avec le planning et les horaires et Reporting et statistiques fiables. (Django, React Native et PostgreSQL)",
    technologies: [
      "Django",
      "React Native",
      "PostgreSQL",
      "Python",
      "QR Code",
    ],
  },
  {
    id: 5,
    title: "Plateforme de Mobilité & Billetterie",
    type: "Projet ingénierie",
    period: "2023",
    description: "Mise en place d'une plateforme numérique unifié (Web et Mobile) de mobilité et de billetteries intégrer permettant aux usagers de payer facilement leurs trajets, leurs billets (loisirs et de voyages), aux transporteurs ainsi qu'aux agences de sécuriser leurs recettes et de donner autorités compétentes une visibilité fiable sur la mobilité et les billets réelle. (Django, React Native et PostgreSQL)",
    technologies: [
      "Django",
      "React Native",
      "PostgreSQL",
      "Python",
      "Payment API",
    ],
  },
  {
    id: 6,
    title: "IA Hybride Vision & Audio — R&D",
    type: "Système expérimental",
    period: "2023",
    description: "Conception d'une perception hybride par ordinateur (Yeux et oreilles) d'une IA pour l'optimisation, la reconnaissance, le traitement de fichiers et sons construit en C++ et en Rust. (IA en dev)",
    technologies: ["C++", "Rust", "IA", "Vision par ordinateur", "Traitement audio"],
  },
];
