export interface Domain {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: "violet" | "cyan" | "blue" | "indigo";
}

export const domains: Domain[] = [
  {
    id: 1,
    title: "DevOps",
    description:
      "CI/CD, automatisation des déploiements, pipelines Jenkins, intégration continue",
    icon: "GitBranch",
    color: "violet",
  },
  {
    id: 2,
    title: "Architecture Backend",
    description:
      "Microservices, APIs REST, NestJS, Django, conception de systèmes scalables",
    icon: "Server",
    color: "cyan",
  },
  {
    id: 3,
    title: "Administration Linux",
    description:
      "Administration système, scripting Bash, gestion des services, sécurisation",
    icon: "Terminal",
    color: "blue",
  },
  {
    id: 4,
    title: "Systèmes Distribués",
    description:
      "Architecture distribuée, haute disponibilité, tolérance aux pannes, scalabilité",
    icon: "Network",
    color: "indigo",
  },
  {
    id: 5,
    title: "Infrastructure Réseau",
    description:
      "DNS, LDAP, Samba, configuration réseau, protocoles TCP/IP, VPN",
    icon: "Globe",
    color: "violet",
  },
  {
    id: 6,
    title: "Observabilité",
    description:
      "Monitoring Prometheus, dashboards Grafana, alerting, métriques applicatives",
    icon: "BarChart3",
    color: "cyan",
  },
  {
    id: 7,
    title: "CI/CD",
    description:
      "Pipelines automatisés, tests continus, déploiement zero-downtime, Docker",
    icon: "Workflow",
    color: "blue",
  },
  {
    id: 8,
    title: "APIs Sécurisées",
    description:
      "JWT, OAuth2, RBAC, chiffrement TLS, authentification centralisée LDAP",
    icon: "Shield",
    color: "indigo",
  },
];
