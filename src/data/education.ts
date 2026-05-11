export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  current: boolean;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "INPTIC (Carrefour derrière la prison)",
    degree: "Licence Professionnelle",
    period: "2025 – 2026",
    description: "Institut national de la poste, des technologies de l'information et de la communication (INPTIC). Formation avancée en ingénierie logicielle, systèmes distribués et développement fullstack. (En cours)",
    current: true,
  },
  {
    id: 2,
    institution: "INPTIC (Carrefour derrière la prison)",
    degree: "Diplôme de Technicien Supérieur",
    period: "2024 – 2025",
    description: "Institut national de la poste, des technologies de l'information et de la communication (INPTIC). Spécialisation en développement d'applications, administration systèmes et réseaux, bases de données.",
    current: false,
  },
  {
    id: 3,
    institution: "Lycée Public de Bikélé",
    degree: "Baccalauréat Scientifique",
    period: "2021 – 2022",
    description: "Série scientifique. Formation en mathématiques, physique et sciences de l'ingénieur.",
    current: false,
  },
  {
    id: 4,
    institution: "Lycée Public de Bikélé",
    degree: "BEPC",
    period: "2018 – 2019",
    description: "Brevet d'Études du Premier Cycle.",
    current: false,
  },
];
