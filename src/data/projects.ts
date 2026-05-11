export type ProjectCategory = "web" | "mobile" | "infra" | "ai";

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  architecture: string;
  results: string[];
  image: string;
  github: string | null;
  demo: string | null;
  featured: boolean;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Plateforme Multi-Devises & Hub d'Interopérabilité Financière",
    description:
      "Architecture fintech complète avec traitement de transactions en temps réel, conversion multi-devises instantanée et conformité réglementaire. Système distribué haute performance gérant des milliers de transactions simultanées avec sécurité bancaire et traçabilité complète.",
    stack: ["NestJS", "React", "PostgreSQL", "TypeScript", "JWT", "REST API", "Redis", "Docker"],
    features: [
      "Portefeuille numérique multi-devises temps réel",
      "Conversion instantanée avec taux de change live",
      "Transactions P2P sécurisées avec chiffrement E2E",
      "Dashboard analytique avec métriques financières",
      "Audit trail complet et conformité RGPD",
      "API Gateway avec rate limiting et monitoring",
      "Système de notifications push intelligent",
      "Architecture microservices scalable horizontalement",
    ],
    architecture:
      "Microservices NestJS avec Event Sourcing et CQRS. PostgreSQL avec partitioning pour les transactions. Redis pour le cache et les sessions. API Gateway avec authentification JWT + RBAC. Message queues pour le traitement asynchrone.",
    results: [
      "Traitement de 10,000+ transactions/heure avec latence < 200ms",
      "Architecture scalable supportant 100,000+ utilisateurs",
      "Uptime 99.99% avec monitoring proactif Prometheus",
      "Conformité PCI DSS et audit de sécurité validé",
      "Réduction des coûts opérationnels de 40%",
    ],
    image: "/projects/fintech-platform.png",
    github: null,
    demo: null,
    featured: false,
    category: "web",
  },
  {
    id: 2,
    title: "Plateforme de Gestion des Présences Intelligente",
    description:
      "Système IoT de gestion des présences avec reconnaissance QR Code dynamique, ML pour la détection d'anomalies et analytics prédictifs. Solution complète mobile-first avec synchronisation temps réel et reporting automatisé pour établissements éducatifs et entreprises.",
    stack: ["Django", "React Native", "PostgreSQL", "Python", "QR Code", "ML", "WebSocket", "Redis"],
    features: [
      "QR Code dynamique avec rotation sécurisée toutes les 30s",
      "Détection ML des patterns d'absence suspects",
      "Géolocalisation intelligente avec zones autorisées",
      "Synchronisation temps réel multi-dispositifs",
      "Analytics prédictifs pour l'absentéisme",
      "Notifications push contextuelles automatiques",
      "Dashboard administrateur avec KPIs temps réel",
      "Export automatisé vers systèmes RH/académiques",
    ],
    architecture:
      "Backend Django REST avec Celery pour les tâches asynchrones. React Native avec offline-first architecture. PostgreSQL avec indexation optimisée. WebSocket pour les mises à jour temps réel. ML pipeline avec scikit-learn pour l'analyse prédictive.",
    results: [
      "Réduction de 95% du temps de pointage (30s → 1.5s)",
      "Détection automatique de 87% des fraudes potentielles",
      "Application mobile déployée sur iOS & Android",
      "Amélioration de 60% de la précision des rapports",
      "ROI de 300% en 6 mois d'utilisation",
    ],
    image: "/projects/attendance-platform.png",
    github: null,
    demo: null,
    featured: false,
    category: "mobile",
  },
  {
    id: 3,
    title: "Infrastructure DevOps Cloud-Native Complète",
    description:
      "Écosystème DevOps de production avec CI/CD GitOps, monitoring observabilité complète, auto-scaling Kubernetes et sécurité DevSecOps. Infrastructure as Code avec Terraform, pipelines multi-environnements et déploiements blue-green zero-downtime.",
    stack: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Nginx",
      "Vault",
    ],
    features: [
      "Pipeline CI/CD GitOps avec tests automatisés multi-niveaux",
      "Monitoring 360° : métriques, logs, traces distribuées",
      "Auto-scaling horizontal basé sur métriques custom",
      "Sécurité DevSecOps avec scan vulnérabilités intégré",
      "Infrastructure as Code avec Terraform multi-cloud",
      "Service mesh avec Istio pour la communication sécurisée",
      "Disaster recovery automatisé avec RTO < 15min",
      "Observabilité complète avec alerting intelligent",
    ],
    architecture:
      "Cluster Kubernetes multi-master avec Istio service mesh. Pipeline Jenkins avec stages parallélisés : build → security scan → test → deploy. Stack ELK pour les logs centralisés. Prometheus + Grafana pour les métriques. Vault pour la gestion des secrets.",
    results: [
      "Déploiements automatisés 50x plus rapides (2h → 2.4min)",
      "Uptime 99.97% avec MTTR réduit de 80% (4h → 48min)",
      "Détection proactive d'incidents en < 15 secondes",
      "Réduction de 70% des erreurs de déploiement",
      "Infrastructure reproductible sur 3 environnements",
      "Économies cloud de 45% grâce à l'auto-scaling",
    ],
    image: "/projects/devops-infra.png",
    github: null,
    demo: null,
    featured: true,
    category: "infra",
  },
  {
    id: 4,
    title: "Infrastructure d'Entreprise Sécurisée Zero-Trust",
    description:
      "Architecture d'entreprise complète avec authentification centralisée LDAP, PKI interne, messagerie sécurisée et partage de fichiers chiffrés. Implémentation Zero-Trust avec MFA, audit complet et haute disponibilité pour environnement corporate critique.",
    stack: [
      "OpenLDAP",
      "BIND9",
      "Samba",
      "Postfix",
      "Dovecot",
      "Roundcube",
      "PKI/TLS",
      "HAProxy",
      "Ansible",
    ],
    features: [
      "SSO centralisé avec authentification multi-facteurs",
      "PKI interne avec certificats auto-renouvelés",
      "Messagerie sécurisée avec chiffrement S/MIME",
      "Partage de fichiers avec versioning et audit trail",
      "DNS interne sécurisé avec filtrage malware",
      "Haute disponibilité avec failover automatique",
      "Monitoring sécurité avec SIEM intégré",
      "Backup automatisé avec chiffrement AES-256",
    ],
    architecture:
      "OpenLDAP en cluster avec réplication multi-master. HAProxy pour la haute disponibilité. Postfix + Dovecot avec chiffrement TLS 1.3. Samba avec ACLs granulaires. BIND9 avec DNS-over-HTTPS. Ansible pour l'automatisation des déploiements.",
    results: [
      "Authentification unifiée pour 500+ utilisateurs corporate",
      "Zéro incident de sécurité en 18 mois d'exploitation",
      "Réduction de 85% des tickets support authentification",
      "Conformité ISO 27001 et audit sécurité validé",
      "RTO < 5min avec basculement automatique",
      "Économies IT de 60% vs solutions propriétaires",
    ],
    image: "/projects/ldap-infra.png",
    github: null,
    demo: null,
    featured: false,
    category: "infra",
  },
  {
    id: 5,
    title: "Écosystème de Mobilité Urbaine Intelligente",
    description:
      "Plateforme IoT de mobilité connectée avec billetterie blockchain, optimisation de trajets par IA et analytics prédictifs. Système distribué gérant flottes de transport, paiements multi-modaux et supervision temps réel pour smart cities.",
    stack: ["Django", "React Native", "PostgreSQL", "Python", "Blockchain", "IoT", "ML", "Redis"],
    features: [
      "Billetterie blockchain avec smart contracts",
      "Optimisation de trajets par algorithmes ML",
      "Paiement contactless multi-modal (NFC, QR, biométrie)",
      "Tracking GPS temps réel des véhicules IoT",
      "Prédiction de la demande avec deep learning",
      "API ouverte pour intégration tiers (MaaS)",
      "Carbon footprint tracking et gamification",
      "Dashboard opérateur avec BI temps réel",
    ],
    architecture:
      "Backend Django avec microservices spécialisés. Blockchain Ethereum pour les transactions. React Native avec offline-first sync. PostgreSQL + TimescaleDB pour les données IoT. ML pipeline avec TensorFlow pour les prédictions.",
    results: [
      "Réduction de 75% de la fraude grâce à la blockchain",
      "Optimisation de 35% des temps de trajet par IA",
      "Adoption mobile de 89% en 3 mois de déploiement",
      "Augmentation de 45% de la satisfaction usagers",
      "ROI de 250% pour les opérateurs de transport",
      "Réduction de 20% des émissions CO2 urbaines",
    ],
    image: "/projects/mobility-platform.png",
    github: null,
    demo: null,
    featured: false,
    category: "mobile",
  },
  {
    id: 6,
    title: "IA Hybride Vision-Audio Temps Réel",
    description:
      "Système d'intelligence artificielle edge computing combinant vision par ordinateur et traitement audio avec latence ultra-faible. Architecture haute performance en C++/Rust avec optimisations SIMD, pipeline parallèle et inférence GPU pour applications critiques temps réel.",
    stack: ["C++", "Rust", "CUDA", "OpenCV", "FFmpeg", "TensorRT", "ONNX", "WebRTC"],
    features: [
      "Pipeline vision temps réel 4K@60fps avec détection objets",
      "Traitement audio spatial 3D avec suppression de bruit",
      "Fusion multimodale vision-audio par deep learning",
      "Optimisations SIMD/AVX pour performances natives",
      "Inférence GPU avec TensorRT et quantization INT8",
      "Streaming WebRTC ultra-low latency (<50ms)",
      "Architecture modulaire avec plugins dynamiques",
      "Cross-compilation ARM64 pour edge devices",
    ],
    architecture:
      "Core C++ avec optimisations vectorielles SIMD. Module Rust pour le traitement audio lock-free. Pipeline GPU CUDA pour l'inférence ML. Memory pools custom pour zero-allocation. Inter-process communication via shared memory.",
    results: [
      "Latence end-to-end < 35ms (vs 200ms solutions Python)",
      "Performances 8x supérieures avec 60% moins de CPU",
      "Déploiement edge sur Jetson Nano avec 15W",
      "Précision de détection 94.7% (SOTA sur dataset custom)",
      "Architecture brevetable avec 3 innovations techniques",
      "Proof-of-concept validé par industriels du secteur",
    ],
    image: "/projects/ai-hybrid.png",
    github: null,
    demo: null,
    featured: false,
    category: "ai",
  },
];