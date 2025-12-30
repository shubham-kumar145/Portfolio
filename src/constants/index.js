import {
  mobile,
  backend,
  creator,
  web,

  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  c,
  cpp,
  python,
  threejs,
  threejsmobile,
  aws,
  logo_sk,

  codeforce,
  codechef,
  geeksforgeeks,
  leetcode,
  colelio,

  firstphoto,
  flip,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " MERN Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Photographer",
    icon: creator,
  },
];





const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
    mobileIcon: threejsmobile,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
];

const database = [

  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const cloud = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Git /GitHub",
    icon: git,
  },
];




const experiences = [
  {
    title: "Looking Forward to My First Industry Internship",
    company_name: "",
    icon: logo_sk,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Although I haven’t had a formal internship yet, I have been actively building real-world projects to strengthen my development skills. From creating responsive user interfaces to developing full-stack applications using React, Node.js, and MongoDB, I am continuously preparing myself to contribute effectively in a professional environment.",

      "I am eager to explore internship opportunities where I can learn, grow, collaborate with a team, and build impactful, real-world solutions."],
  },
  // {
  //   title: "r",
  //   company_name: "shubham company",
  //   icon: logo_sk,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [ "hwfh w4f g3  fg34 g 4thg 4h5t g45 g45g4 5g4 5g 45g4t5  h544 5h 56h 53h 45 h5 h 5yh "],
  // },
];










const CodingProfile = [
  {
    name: "GeeksForGeeks",
    username: "shubhamkr145",
    link: "https://www.geeksforgeeks.org/user/shubhamkr145/",
    image: geeksforgeeks,
    achievements: [
      {
        Rank: "214(Institute Rank)",
        problem: "275",
      },
    ],
  },
  {
    name: "LeetCode",
    username: "shubham-kumar145",
    link: "https://leetcode.com/u/shubham-kumar145/",
    image: leetcode,
    achievements: [
      {
        Rank: "1578(contest rating)",
        problem: "200",
      },

    ],
  },

  {
    name: "CodeForce",
    username: "shubham-kumar145",
    link: "https://codeforces.com/profile/shubham-kumar145",
    image: codeforce,
    achievements: [
      {
        Rank: "max. newbie, 1154",
        problem: "100",
      },
    ],
  },
  {
    name: "codolio",
    username: "shubham_kumar",
    link: "https://codolio.com/profile/shubham_kumar",
    image: colelio,
    achievements: [
      {
        // Rank: "214(Institute Rank)",
        // about:"My Coding Jounary",
        problem: "700",
      },
    ],
  },
  {
    name: "CodeChef",
    username: "shubham_kr145",
    link: "https://www.codechef.com/users/shubham_kr145",
    image: codechef,
    achievements: [
      {
        Rank: "1457",
        problem: "50",
      },

    ],
  },
]


const MyclickPhoto = [
  {
    date: "12/05/2023",
    place: "balachadi",
    image: firstphoto,
  },
  {
    date: "19/09/2023",
    place: "bangalore",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784646/IMG_20231002_175757_wp6xmv.jpg",
  },
  {
    date: "12/05/2023",
    place: "bit mesra",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784624/IMG_20230921_212134_skf2pr.jpg",

  },
  {
    date: "25/05/2022",
    place: "bit mesra",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784586/IMG_20230905_214140_o6zrer.jpg",
  },
  {
    date: "12/01/2023",
    place: "balachadi",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784505/IMG_20230226_083423_snustn.jpg",
  },
  {
    date: "12/05/2023",
    place: "balachadi",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784466/IMG_20230208_080628_yssife.jpg",
  },
]





const Achievements = [
  //1
  {
    name: "GirlScript Summer Of Code",
    description: " i won the best thing in the world",
    date: "29/01/2025",
    items: [
      {
        id: 1,
        img: flip,
      },
      // {
      //   id: 2,
      //   img: "",
      // },
      // {
      //   id: 3,
      //   img: "",
      // },
      // {
      //   id: 4,
      //   img: "",
      // },
    ],
  },
];









const projects = [
  //  1
  {
    name: "Portfolio Website",
    description:
      "Designed and developed a fully responsive personal portfolio website using React and Tailwind CSS. Showcased projects, skills, and experience with a clean UI, smooth transitions, and interactive elements. Integrated 3D visuals using Three.js to enhance user engagement and demonstrate modern frontend development practices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "THREE JS",
        color: "pink-text-gradient",
      },
      {
        name: "REACT",
        color: "orange-text-gradient",
      },
    ],
    link: "https://shubham-portfolio-145.vercel.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767121996/Screenshot_2025-12-31_003947_nqndvj.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767122064/Screenshot_2025-12-31_004006_enndhu.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767121996/Screenshot_2025-12-31_004038_msz7zv.png",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767122060/Screenshot_2025-12-31_004024_defcfw.png",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767121998/Screenshot_2025-12-31_004057_z3f0u7.png",
      },
      {
        id: 6,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767122062/Screenshot_2025-12-31_004122_zs4ltd.png",
      },
      
    ],
    source_code_link: "https://github.com/shubham-kumar145/Portfolio",
  },
  // 2
  {
    name: "LogixAI",
    description:
      "LogixAI is an AI-powered web platform featuring a ChatGPT-like conversational assistant, an AI website builder that generates responsive HTML, CSS, and JavaScript code, and intelligent image tools including format conversion and background removal. The platform leverages modern AI models, secure API integration, and optimized data pipelines to deliver high performance, scalability, and maintainability in production environments.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },

    ],
    link: "",
    status: "",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/4_y94uvw.jpg",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/2_mlobjj.jpg",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107154/5_nqlq1z.jpg",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/1_phzeiq.jpg",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/3_lis0w9.jpg",
      },
      {
        id: 6,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107154/6_v7qnsm.jpg",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145",
  },
  //3
  {
    name: "Algo-league",
    description:
      "Developed a full-stack coding platform with JWT-based authentication and role-based access control for admin and users. Built admin workflows for problem creation and management, enabled real-time code execution and submission using Judge0 API, integrated an AI-powered support chatbot, and implemented premium content access with secure subscription-based payments.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "REACT",
        color: "yellow-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
    ],
    link: "https://algoleague.vercel.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117423/Screenshot_2025-12-30_232450_wwyky9.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232505_zfqczi.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232603_irmtqp.png",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232624_xgd7rz.png",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117423/Screenshot_2025-12-30_232521_ktguvb.png",
      },
      {
        id: 6,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232534_kcruys.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/AlgoLeague",
  },
  //4
  {
    name: "Stylish-Wear-Aesthetics",
    description:
      "Developed a full-stack E-Commerce platform with JWT and cookie-based authentication, featuring separate admin and user panels. Admins can add, update, and manage products in real-time. Integrated a secure login system, role-based access, and a responsive UI for seamless inventory and user management.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "REACT",
        color: "yellow-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },

    ],
    link: "https://swa-shopping.vercel.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "",
      },
      {
        id: 1,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767119438/Screenshot_2025-12-30_235941_ujwpin.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767119465/Screenshot_2025-12-30_235904_rvnocw.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767119463/Screenshot_2025-12-30_235955_fadpie.png",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767119465/Screenshot_2025-12-31_000007_tzq3nb.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Stylish-Wear-Aesthetics",
  },
  //5
  {
    name: "To do list",
    description:
      "Developed a modern task management web application using React and Tailwind CSS. Implemented features such as task creation, completion tracking, importance marking, calendar-based organization, and daily reminders. Integrated focus tools and UI customization with persistent data storage using browser local storage for a fast and seamless user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "REACT",
        color: "yellow-text-gradient",
      },
    ],
    link: "https://to-do-list-sk.vercel.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634495/home2_iq1kzu.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634511/tastadd1_k2ltfb.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634491/calendar1_ejee01.png",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634477/taskadd3_cqsd7t.png",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634493/Focus2_d0ve7x.png",
      },
      {
        id: 6,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634495/calendar4_dokezm.png",
      },
      {
        id: 7,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634537/setting1_eocvvm.png",
      },
      {
        id: 8,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634477/alltask3_mvr2wv.png",
      },
      {
        id: 9,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634507/Focus5_qidrqo.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/To-Do-List",
  },
  //6
  {
    name: "weather webside",
    description:
      "Built a real-time weather application using OpenWeatherMap API that displays current weather conditions, temperature, and location-based data. Integrated dynamic UI updates and responsive design with React and Tailwind CSS. Enables users to search cities worldwide and view live forecasts with icons, humidity, and wind speed indicators.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    link: "https://weather-web-sk.vercel.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783810/weather1_f5znfg.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783809/weather2_tdszgv.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Weather-sk",
  },
  //7
  {
    name: "Astrolgy",
    description:
      "Astrology web app where users enter their name and birthdate to discover their zodiac sign and receive personalized predictions. Features real-time zodiac calculation, a responsive interface, and a cosmic-themed design. Strengthened core frontend skills through dynamic content updates, and intuitive user experience.",

    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    link: "https://astrology-sk.netlify.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783760/astrology1_ifdqps.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783764/astrology2_gbqzub.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/astrology",
  },
  // 8
  {
    name: "Tic Tac toe",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Features real-time gameplay, turn-based logic, win/tie detection, and a reset option. Designed with a clean and responsive UI for smooth user interaction. Strengthened logical thinking and DOM manipulation through hands-on game development.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    link: "https://tic-tac-toe-s-k.netlify.app/",
    status: "complete",
    item: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784217/tic3_kmgyju.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784218/tic1_drzrm0.png",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784217/tic2_qzwdih.png",
      },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Tic-Tak-Toe-sk",
  },

];

export { services, technologies, experiences, CodingProfile, MyclickPhoto, projects, Achievements, database, cloud };
