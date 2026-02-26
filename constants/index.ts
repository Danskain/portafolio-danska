import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/_sanidhyy",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Portafolio moderno con Next.js 14",
    description:
      "Explora mi evolución profesional a través de un portafolio moderno desarrollado con Next.js, donde presento mis habilidades, experiencias y pasión por el desarrollo web con tecnologías de última generación.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Portafolio con tarjetas interactivas",
    description:
      "Un portafolio innovador que utiliza tarjetas interactivas para mostrar mis proyectos, habilidades y personalidad de una forma visualmente atractiva y dinámica.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Sitio web con temática espacial",
    description:
      "Un sitio web con temática espacial que combina un diseño moderno con una experiencia inmersiva para explorar el universo a través de la web.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Comunidad",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@danskain",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Danskain",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/channels/@me",
      },
    ],
  },
  {
    title: "Redes sociales",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/_sanidhyy",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "Acerca de",
    data: [
      {
        name: "Hazte patrocinador",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Conoce más sobre mí",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contáctame",
        icon: null,
        link: "mailto:david_08k@hotmail.com",
      },
    ],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: "Dsesarrollador Señior Backend",
    company: "Montechelo GrupoCos",
    date: "03/02/2025 - 05/12/2025",
    description: [
      "Desarrollar diferentes aplicativos de la empresa.",
      "Desarrollo backend con Laravel, Node.js, Python (FastAPI) y algo de Spring Boot.",
      "Desarrollo frontend con Angular y React y manejo de websockets.",
      "Investigación para integración de los desarrollos con Docker.",
      "Manejo de bases de datos MySQL, PostgreSQL y MongoDB.",
      "Manejo en la nube AWS y Azure.",
    ],
    achievements: [
      "aprender Docker y saber todos sus beneficion y caracteristicas",
      "aptender a manejor azure",
      "diseñar y estructurar una bases de datos funcional y duradera.",
      "tener la confianza de afrontar cualquier desafio que se me presente en cualquier lenguage.",
    ],
    boss: ["Edwin Sanches", "+51 3208803093"],
    certificate: "/certificados/certificado-montechelo-grupocos.pdf",
  },
  {
    title: "Desarrollador IT señior",
    company: "APD Printing",
    date: "10/03/2023 - 18/10/2024",
    description: [
      "Desarrollar aplicativo de CRM de la empresa",
      "Desarrollo de tiendas virtuales de la empresa.",
      "Desarrollado dicho aplicativo en PHP y laravel en la parte del backend y con java con spring boot y REACT y NEXT en la parte del frondent  con  las mejores prácticas de programación posibles, utilizando principios SOLID",
      "Guardar archivos en el S3 de amazon y desarrollo de apigateway con landas en AWS",
      "Mantenimiento de servidores LINUX donde gardamos paginas web echas con magento y conexiones 	sftp",
      "Soporte técnico del equipo de computo de la compañía"
    ],
    achievements: [
      "Desarrollar un aplicativo muy robusto asi como escalable y desarrollarlo con las mejores practivas posibles",
      "tener la capacidad de trabajar bajo presion",
      "tener la capacidad de resolver problemas de manera eficiente dando soporte tecnico y demas",
    ],
    boss: ["Harold", "+57 3003556946"],
    certificate: "/certificados/certificado-apdprinting.pdf",
  },
  {
    title: "Desarrollador FULL- STACK semi-señor",
    company: "Bodytech",
    date: "01/07/2022 - 15/01/2023",
    description: [
      "Desarrollar aplicativo de débito automático de la empresa y apoyo a otros aplicativos",
      "Desarrollado dicho aplicativo en LARAVEL en la parte del backend y REACT en la parte del fronent con  las mejores prácticas de programación posibles utilizando la diseño SOLID y patron repositorio, tambien 	desarrollo con spring boot para algunos servicios y angular para unas paginas web corporativas.",
      "Desarrollar consultas en tipo colas utilizando RABBITMQ ya que las consultas son muy pesadas",
      "guardar archivos en el S3 de amazon"
    ],
    achievements: [
      "Desarrollar un aplicativo muy importante y tener la responsabilidad de solventar y poner en marcha dicho desarrollo",
      "Brindar ayuda y apoyo a desarrolladores para la tomar la mejor decisión",
    ],
    boss: ["RAFAEL SOCARRAS  ", ""],
    certificate: "/certificados/certificado-bodytech.pdf",
  },
  {
    title: "Analista de desarrollo I",
    company: "ATH S.A.",
    date: "21/04/2022 - 30/06/2022",
    description: [
      "Encargado de gestionar y dirigir el mantenimiento, desarrollo, funcionalidad en general de un programa llamado PQR_CODE",
      "Administrador de la plataforma de AWS donde estaba alojado el programa mencionado, donde desarrolle APIWETGAY para la conexión a las APIrest, los secret para las claves y las funciones lambda para el funcionamiento de la API.",
      "conexiones a la base de datos, gestionar el S3 y el S2 del aplicativo",
      "Desarrollar una nuevo módulo del aplicativo en el lenguaje de programación JAVA con spring boot"
    ],
    achievements: [
      "aumentar mis conocimientos en base de datos y en plataformas en la NUBE como AWS",
      "trabajar en la casa y ser responsable en mis actividades",
    ],
    boss: ["Zoraida valencia Ocampo", "+51 3158992692"],
    certificate: "",
  },
  {
    title: "Desarrollador semi-señor",
    company: "ARTEMISA TECH S.A.S.",
    date: "26/05/2021 - 17/04/2022",
    description: [
      "Encargado de dar soluciones de sofware escalables implementadas en nube, participando en varios proyectos desarrollados con lenguaje para el frontend javascript usando el frameworck REACT.js y para el bakend aplicaba dos lenguajes como javascript usando node.js en AWS (lambda, api gateway) con bases de datos no relacionadas, y java con sprint boot con bases de datos relacionadas trabajdas con SQL y haciendo todas las relaciones de las tablas desde cero",
      "también participe en un proyecto del banco Colpatria como desarrollador fronend usando react.js y next.js",
    ],
    achievements: [
      "aumentar mis conocimientos y sentir que todo lo que me ponian lo podia desarrollar ",
      "manejar y aprender AWS",
    ],
    boss: ["Mauricio Coral", "+57 3102520513"],
    certificate: "/certificados/certificaciónLaboral_Artemisa.pdf",
  },
  {
    title: "Desarrollador Fullstack junior",
    company: "Grupo OET",
    date: "01/08/2020 - 10/04/2021",
    description: [
      "Encargado de implementar los requerimientos dados para desarrollar nuevas funcionalidades y módulos del aplicativo PAD",
      "Realizaba las consultas de la base de datos sql por medio de la api de laravel y su respectivo solución lógica por medio de los controladores par que los servicios llegaran por medio de APIREST ya sea get o post",
      "Desarrollo Fronend en angular consumiendo los servicios para  dar soluciones nuevas según los requerimientos a la experiencia de usuario del aplicativo",
      "Realizaba el control de versiones de código por medio de git",
      "Participar en la metodología SCRUM",
    ],
    achievements: [
      "Desarrollar servicios web (apirest), consumir servicios rest  ",
      "Seguir con un ritmo para el bun funcionamieto diario de todos los requerimientos dados",
    ],
    boss: ["Andres torres", "+57 3194436681"],
    certificate: "/certificados/Certificado laboral - Grupo OET.pdf",
  },
  {
    title: "Desarrollador Junior",
    company: "PRISMA WEB",
    date: "04/02/2019 - 28/07/2020",
    description: [
      "encargado de la implementación de sistemas de información de software libre (Open Source) ",
      "Desarrollar aplicativos en PHP con el Framework Laravel en la parte del backned y javascri puro y angular en la parte del frontend. por medio de programación orientada objetos, maquetación y diseño de interfaces",
      "Realizar versionamientos de código de los aplicativos con Git",
      "Realizar tablas en las bases de datos y relacionarlas según la necesidad requerida"
    ],
    achievements: [
      "Aprender y estar en un grupo de desarrolladores y entender todo el proceso de desarrollo de software",
      "desarrollar mis abilidades blandas y comunicacion con las demas personas",
    ],
    boss: ["Nely silva ", "+57 3223119108"],
    certificate: "/certificados/CertificadoLaboral_PrismaWeb.pdf",
  },
  {
    title: "Desarrollador junior",
    company: "GERENCIA DE NEGOCIOS",
    date: "10/01/2018 - 31/12/2018",
    description: [
      "Realizar maquetación web con HTML, CSS y PHP  dependiendo de los  requerimientos establecidos en la empresa",
      "Ayudar con desarrollos y mantenimientos con DRUPAL, ya sean realizando encuesta, registros de usuarios o diseñando páginas web",
      "Desarrollo de Landing page"
    ],
    achievements: [
      "aprender el lenguaje de programación PHP, javascript  y CSS y HTML",
      "afrontar nuevos retos y entender este todo lo que conyeba ser desarrollador",
    ],
    boss: ["oscar  medina", "+57 3215109524"],
    certificate: "",
  },
  {
    title: "PRACTICANTE en el gerencia de aseguramiento y protección de ingresos",
    company: "CLARO S.A.S",
    date: "04/07/2017 - 03/01/2018",
    description: [
      "Realizar consultas en las bases de datos para modificar, eliminar, actualizar y crear registros y tablas así como realizar quieres para dar solución a los requerimientos requeridos a través de Oracle y SQL para la liberación, bloqueo o registro de IMEI en la base de datos positiva y negativa de la compañía y realizar soporte a cuarto grado",
      "Desarrollo de una aplicación web en lenguaje  php, javascript  por medio de scripts, macros, frames y shells en LINUX  para automatizar procedimientos de actualizacin diaria de las bases de datos, exportar archivos internos a servidores externos diariamente, exportar resultado de cruces de datos en oracle y generar informes ",
      "También crear informes, tableros inteligentes y mapas de datos en tableau y powerBi realizando minería de datos",
      "Documentación de procedimientos y generación de interfaz en UML y BPMN para desarrollos agiles y automatización",
    ],
    achievements: [
      "realizar consultas en una base de datos grande, tambien entender y desarrollar una aplicativo web en php",
      "entender como es una empresa grande y todos sus pormenores",
    ],
    boss: ["Adriana sarmiento", "+57 3102342140"],
    certificate: "/certificados/Certificacion_laboral_claro.pdf",
  },
  {
    title: "Auxiliar de sistemas",
    company: "AGENCIA DE VIAJES SANTA FE S.A.S",
    date: "16/04/2014 - 28/05/2017",
    description: [
      "tener la capacidad de modificar cualquier aspecto relacionado con la pagina web como tal, ya sea modificar un panal, un fotograma cambiar imágenes o texto para los requerimientos de la agencia",
      "manejar el código HTML y PHP para hacer modificaciones desde hay. Tener acceso a cpanel para el alojamiento web, para tener claro cuánta gente nos visita.",
      "Manejar la base de datos, correos electrónicos y administrar los landing page",
      "4.	administrar todo lo relacionado con redes sociales, así como instalación de programas, mantenimiento de equipo de cómputo e impresoras, Funciones específicas brindar soporte técnico a hardware, software y redes de cableado estructurado; mantenimiento preventivo y correctivo, configuración de perfiles de usuarios e impresoras y transferencia de datos, dentro del servidor, manejo de escalamiento mediante Help Desk de un punto central de llamadas"
    ],
    achievements: [
      "Tener la responsabilidad de mantener todo el equipo de computo funcionando con todos los estándares de red requeridos ",
      "Empezar en el mundo de la programación",
    ],
    boss: ["Ivan Garcia", "+57 3212358073"],
    certificate: "/certificados/certificado-agenciadeviajessantafe.pdf",
  },
] as const;

export const PERSONAL_INFO = [
  {
    label: "Teléfono",
    value: "3138609628",
  },
  {
    label: "Email",
    value: "david_08k@hotmail.com",
  },
  {
    label: "Dirección",
    value: "Transversal 16ª # 46a – 63",
  },
  {
    label: "Edad",
    value: "34",
  },
  {
    label: "Estado civil",
    value: "Soltero",
  },
  {
    label: "Fecha de nacimiento",
    value: "15-11-1991",
  },
  {
    label: "Profesión",
    value: "Ingeniero de sistemas",
  },
] as const;

export const ACADEMIC_INFO = [
  {
    title: "Ingeniería de sistemas",
    date: "Mar. 2019",
    institution: "Universidad Cooperativa de Colombia",
    city: "Bogotá D.C.",
  },
  {
    title: "Bachiller",
    date: "Mar. 2008",
    institution: "I.E.D Rafael Bernal Jimenes",
    city: "Bogotá D.C.",
  },
] as const;

export const KNOWLEDGE_INFO = [
  {
    name: "Herramientas ofimáticas (Microsoft Office)",
  },
  {
    name: "Programación Orientada a Objetos (POO)",
  },
  {
    name: "Metodologías ágiles (Scrum)",
  },
  {
    name: "Trabajo en equipo",
  },
  {
    name: "Orientación a resultados",
  },
  {
    name: "Liderazgo",
  },
  {
    name: "Inglés básico",
  },
  {
    name: "Servicios en la nube (AWS)",
  },
  {
    name: "Diseño y consumo de APIs REST",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Sobre mí",
    link: "#about-me",
  },
  {
    title: "Habilidades",
    link: "#skills",
  },
  {
    title: "Experiencia",
    link: "#experience",
  },
  {
    title: "Proyectos",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
