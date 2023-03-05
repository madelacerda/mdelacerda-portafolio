import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  merken,
  cleoatelierreact,
  cleoangular,
  rest,
  dashboard,
  crud,
  ecomsur,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ecommerce Developer",
    icon: creator,
  },
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Ecomsur",
    icon: ecomsur,
    iconBg: "#383E56",
    date: "Oct 2021 - Actualidad",
    points: [
      "Encargado de la mantencion y requerimientos de los clientes.",
      "Trabajo con un equipo multidisciplinario en distintas areas.",
      "Implementar solucion que cumplan con el diseño y la usabilidad del cliente.",
    ],
  },
  {
    title: "Desarrollador Full Stack",
    company_name: "Agencia Merkén SPA",
    icon: merken,
    iconBg: "#E6DEDD",
    date: "ago 2020 - dic 2020",
    points: [
      "Participación en el desarrollo de sitio web para clientes, llevando a cabo el diseño y generando los diferentes componentes del sitio a través de React JS.",
      "Desarrollo de aplicación para Android a través de React Native, utilizando bases de datos como Firebase. ",
    ],
  },
];

const projects = [
  {
    name: "Cleo Atelier (REACTJS) | Aplicacion de comercio Electrónico",
    description:
      "Plataforma Ecomerce desarrollada usando REACTJS como front end y NodeJS Express para el backend, esto conectado a una base de datos en MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: cleoatelierreact,
    source_code_link:
      "https://github.com/madelacerda/front-end-proyecto-5-udd?classId=6e51dfd7-9e2c-4cba-9f97-1ee4da6280f4&assignmentId=2462bc01-4b7e-41f0-9b21-39bb51b21d15&submissionId=cd160eb1-e3db-538a-4a19-a052a02566fa",
  },
  {
    name: "Cleo Atelier (ANGULARJS) | Aplicacion de comercio Electrónico",
    description:
      "Plataforma Ecomerce desarrollada usando AnuglarJS como front end y NodeJS Express para el backend, esto conectado a una base de datos en MongoDB.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cleoangular,
    source_code_link:
      "https://github.com/madelacerda/angular-eccomerce-front-end",
  },
  {
    name: "Restaurant App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: rest,
    source_code_link: "https://github.com/madelacerda/proyecto-4-udd",
  },
  {
    name: "Tablero Dashboard",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Aplicacion CRUD",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
