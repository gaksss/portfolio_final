import { color } from "framer-motion";
import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  celinefougerouse,
  mountain,
  drumpad,
  combat,
  luxury,
  maclerion,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: 'work',
    title: 'Experience',
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Developpeur web",
    company_name: "Freelance",
    icon: dcc,
    iconBg: "#333333",
    date: "Juin 2024 - Septembre 2024",
  },
  {
    title: "Vendeur prêt à porter",
    company_name: "Chaussea",
    icon: dcc,
    iconBg: "#333333",
    date: "Juillet 2024 - Aout 2024",
  },
  {
    title: "Vendeur prêt à porter",
    company_name: "Uniqlo",
    icon: kelhel,
    iconBg: "#333333",
    date: "Septembre 2022 - Decembre 2022",
  },
  {
    title: "Job étudiant grande surface",
    company_name: "Leclerc",
    icon: microverse,
    iconBg: "#333333",
    date: "Aout 2021 - Septembre 2021",
  },
  {
    title: "Missions d'intérim",
    company_name: "Compagnies differentes",
    icon: coverhunt,
    iconBg: "#333333",
    date: "2022 - Feb 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "CelineDiet",
    description: "Un site pour une diététicienne.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: celinefougerouse,
    repo: "https://github.com/gaksss/CelineDiet",
    demo: "https://celinefougerouse.fr/",
  },
  {
    id: "project-2",
    name: "The mountain",
    description: "Un site qui m'a appris le responsive.",
    tags: [],
    image: mountain,
    repo: "https://github.com/gaksss/TP_COMBAT",
    demo: 'https://clement-the-mountain.pro4.garage404.com/',
  },
  {
    id: "project-3",
    name: "Drumpad",
    description: "Un drumpad pour faire des beats",
    tags: [
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: drumpad,
    repo: "https://github.com/gaksss/Vanilla-Front-Drumpad",
    demo: "https://clement-drumpad.pro4.garage404.com/",
  },
  {
    id: "project-4",
    name: "Tp-combat",
    description: `Un site de jeu de combat au tour par tour pour maitriser la POO.`,
    tags: [
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: combat,
    repo: "https://github.com/gaksss/TP_COMBAT",
    demo: "https://clement-tp-combat.pro4.garage404.com/public/create-hero.php",
  },
  {
    id: "project-5",
    name: "Luxury",
    description:
      "Un site d'offres d'emploi dans le domaine du luxe fait avec symfony.",
    tags: [
      {
        name: "symfony",
        color: "pink-text-gradient",
      },
    ],
    image: luxury,
    repo: "https://github.com/gaksss/luxury2",
    demo: "#",
  },
  {
    id: "project-6",
    name: "Cine-Court",
    description:
      "Un site de festival de court métrage fictif.",
    tags: [
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: maclerion,
    repo: "",
    demo: "https://maclerion-wordpress1.pro4.garage404.com/",
  },
];

export { services, technologies, experiences, projects };
