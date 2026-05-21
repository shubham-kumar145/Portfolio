import {
  frontend,
  backend,
  creator,
  web,
  al,
  dl,


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

  firstphoto

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Project",
  },
  // {
  //   id: "certifications",
  //   title: "Certifications",
  // },
  {
    id: "coding",
    title: "Coding ",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    badge: "React, Tailwind, Three.js",
  },
  {
    title: "Backend Developer",
    icon: backend,
    badge: "Node.js, Express, MongoDB",
  },
  {
    title: "AI / ML Engineer",
    icon: al,
    badge: "Python, Tensor, PyTorch",
  },
  {
    title: "Deep Learning Developer",
    icon: dl,
    badge: "Python, Keras, OpenCV",
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
    title: "looking forward to my first industry internship ",
    company_name: "",
    icon: logo_sk,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Although I haven't had a formal internship yet, I have been actively working on real-world projects to strengthen my development skills. From building responsive user interfaces to developing full-stack applications using React, Node.js, and MongoDB, I am continuously preparing myself to contribute effectively to a team. I am eager and open to internship opportunities where I can learn, grow, and build impactful solutions."],
  },
];

const CodingProfile = [
  {
    name: "Codolio",
    username: "shubham_kumar",
    link: "https://codolio.com/profile/shubham_kumar",
    image: colelio,
    achievements: [
      {
        problem: "800+ DSA Problems",
      },
    ],
  },
  {
    name: "GeeksForGeeks",
    username: "shubhamkr145",
    link: "https://www.geeksforgeeks.org/profile/shubhamkr145",
    image: geeksforgeeks,
    achievements: [
      {
        Rank: "173(Institute Rank)",
        problem: "300+",
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
        problem: "400+",
      },
    ],
  },
];

const MyclickPhoto = [
  {
    date: "12/05/2023",
    place: "balachadi",
    image: "https://res.cloudinary.com/dejblby8o/image/upload/v1753784466/IMG_20230208_080628_yssife.jpg",
  },
];

const Achievements = [
  {
    name: "GSSoC 25",
    description: " Technical Contributor – GSSoC'25:Selected as a Technical Contributor for a nationally recognized open-source program, actively onboarding to large-scale projects, understanding codebases, workflows, and contribution guidelines while preparing to contribute using Git/GitHub and industry-standard development practices.",
    date: "29/01/2025",
    items: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767102764/gssoc_xjzkgj.png",
      },
    ],
  },
  {
    name: "President, NCC BIT Mesra",
    description:
      "Leading NCC activities and cadet coordination at BIT Mesra as President, managing discipline, event execution, team collaboration, and leadership initiatives. Actively involved in organizing training sessions, social outreach programs, and representing the unit in institutional activities while strengthening communication, leadership, and management skills.",
    date: "2024-2025",
    items: [
      {
        id: 1,
        img: "YOUR_IMAGE_URL",
      },
    ],
  },
  {
    name: "NCC 'C' Certificate (Alpha Grade)",
    description:
      "Awarded the prestigious NCC 'C' Certificate with Alpha Grade after successfully completing advanced National Cadet Corps training focused on leadership, discipline, teamwork, drill, weapon training, and national service activities. Demonstrated strong commitment, responsibility, and performance throughout multiple NCC camps and organizational activities.",
    date: "2024",
    items: [
      {
        id: 1,
        img: "https://drive.google.com/file/d/1rG5s2HDQE4hU-Cd_EF2aFDg6LbiVnyZv/preview",
      },
    ],
  },

];

const projects = [

  // ── Web Dev Projects ──────────────────────────────────────

  // 1
  {
    name: "PORTFOLIO WEBSITE",
    type: "web",
    category: "PORTFOLIO",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS, featuring reusable component architecture, optimised performance, and cross-browser compatibility. Integrates interactive 3D visuals via Three.js to demonstrate advanced frontend capability.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "TAILWIND", color: "green-text-gradient" },
      { name: "THREE JS", color: "pink-text-gradient" },
      { name: "REACT", color: "orange-text-gradient" },
    ],
    link: "https://shubhamkumar.me/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783511/profile2_kqkxil.png" },
      { id: 2, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783509/profile3_ne54gu.png" },
      { id: 3, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783509/profile1_bvsebo.png" },
      { id: 4, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783821/profile4_nrhyx3.png" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Portfolio",
  },
  {
    name: "LogixAI",
    type: "web",
    category: "AI PLATFORM",
    description:
      "AI-powered web platform with a ChatGPT-style conversational assistant, a drag-and-drop website builder that outputs production-ready HTML/CSS/JS, and intelligent image tools for format conversion and background removal — all backed by secure API integration and optimised data pipelines.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    link: "https://projectcomingsoon-sigma.vercel.app/",
    status: "",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/4_y94uvw.jpg" },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/2_mlobjj.jpg" },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107154/5_nqlq1z.jpg" },
      { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/1_phzeiq.jpg" },
      { id: 5, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107155/3_lis0w9.jpg" },
      { id: 6, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767107154/6_v7qnsm.jpg" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Logic-AI",
  },

  // 2
  {
    name: "Algo-league",
    type: "web",
    category: "COMPETITIVE CODING",
    description:
      "Full-stack competitive coding platform with JWT-based auth and RBAC for admin/user roles. Admins manage problems end-to-end; users write, execute, and submit code via Judge0 API. Features an AI support chatbot, Stripe-powered premium gating, and real-time submission evaluation.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "TAILWIND", color: "green-text-gradient" },
      { name: "REACT", color: "yellow-text-gradient" },
      { name: "Node js", color: "pink-text-gradient", },
    ],
    link: "https://algoleague.vercel.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117423/Screenshot_2025-12-30_232450_wwyky9.png", },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232505_zfqczi.png", },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232603_irmtqp.png", },
      { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232624_xgd7rz.png", },
      { id: 5, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117423/Screenshot_2025-12-30_232521_ktguvb.png", },
      { id: 6, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767117424/Screenshot_2025-12-30_232534_kcruys.png", },
    ],
    source_code_link: "https://github.com/shubham-kumar145/AlgoLeague",
  },

  // 3
  {
    name: "Stylish-Wear-Aesthetics",
    type: "web",
    category: "E-COMMERCE",
    description:
      "Production-grade e-commerce platform with JWT + cookie-based auth and RBAC. Separate admin and user dashboards support live product creation, updates, and inventory management — wrapped in a fully responsive, performance-optimised UI with protected routes throughout.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "TAILWIND", color: "green-text-gradient" },
      { name: "REACT", color: "yellow-text-gradient" },
      { name: "Node js", color: "pink-text-gradient", },
    ],
    link: "https://swa-shopping.vercel.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788080/Screenshot_2025-07-29_164512_ktl9ej.png" },
      { id: 2, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788079/Screenshot_2025-07-29_164538_ekcpdu.png" },
      { id: 3, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164600_h3v6uk.png" },
      { id: 4, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164617_vm3boi.png" },
      { id: 5, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164854_uggkge.png" },
      { id: 6, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753788078/Screenshot_2025-07-29_164812_og8ves.png" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Stylish_Wear_Aesthetics",
  },
  // 5

  {
    name: "To do list",
    type: "web",
    category: "PRODUCTIVITY",
    description:
      "Developed a modern task management web application using React and Tailwind CSS. Implemented features such as task creation, completion tracking, importance marking, calendar-based organization, and daily reminders. Integrated focus tools and UI customization with persistent data storage using browser local storage for a fast and seamless user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient", },
      { name: "TAILWIND", color: "green-text-gradient", },
      { name: "REACT", color: "yellow-text-gradient", },
    ],
    link: "https://to-do-list-sk.vercel.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634495/home2_iq1kzu.png", },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634511/tastadd1_k2ltfb.png", },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634491/calendar1_ejee01.png", },
      { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634477/taskadd3_cqsd7t.png", },
      { id: 5, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634493/Focus2_d0ve7x.png", },
      { id: 6, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634495/calendar4_dokezm.png", },
      { id: 7, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634537/setting1_eocvvm.png", },
      { id: 8, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634477/alltask3_mvr2wv.png", },
      { id: 9, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1766634507/Focus5_qidrqo.png", },
    ],
    source_code_link: "https://github.com/shubham-kumar145/To-Do-List",
  },
  {
    name: "Weather Website",
    type: "web",
    category: "WEATHER APP",
    description:
      "Real-time weather app powered by the OpenWeatherMap API, displaying live temperature, humidity, and wind data with city-based search. Uses React state-driven rendering, conditional weather icons, and Tailwind CSS for a responsive, device-agnostic layout.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JAVASCRIPT", color: "pink-text-gradient" },
    ],
    link: "https://weather-web-sk.vercel.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783810/weather1_f5znfg.png" },
      { id: 2, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753783809/weather2_tdszgv.png" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Weather-sk",
  },

  // ── AI / ML / DL Projects ─────────────────────────────────

  // ML 1
  {
    name: "SPAM EMAIL DETECTOR",
    type: "ml",
    category: "AI / NLP",
    description:
      "AI-powered spam email detection web application built using Machine Learning and NLP techniques. Implemented TF-IDF vectorization with a K-Nearest Neighbors (KNN) classifier to analyze and classify email content in real time. Features confidence score prediction, text preprocessing, tokenization, and lightweight Streamlit deployment for fast and interactive usage.",
    tags: [
      { name: "PYTHON", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
    ],
    link: "https://spams-detector.streamlit.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779180356/1_i19qbe.png", },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779180356/3_rrqobx.png", },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779180356/2_vkviz7.png", },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Spam-Detector",
  },

  {
    name: "STROKE RISK PREDICTOR",
    type: "ml",
    category: "HEALTHCARE AI",
    description:
      "Machine Learning-based healthcare prediction system that analyzes patient health parameters to estimate stroke and heart disease risk in real time. Built using a K-Nearest Neighbors (KNN) model with feature scaling, interactive Streamlit UI, probability-based prediction scoring, and instant risk analysis visualization.",
    tags: [
      { name: "PYTHON", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" },
      { name: "STREAMLIT", color: "pink-text-gradient" },
    ],
    link: "https://stroke-risk--predictor.streamlit.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779179840/2_jk3oqq.png", },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779179840/1_zmtse5.png", },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779179841/3_dvthuo.png", },
    ],
    source_code_link: "https://github.com/shubham-kumar145/stroke-risk-predictor",
  },

  // {
  //   name: "CINEMATCH",
  //   type: "ml",
  //   category: "MOVIE RECOMMENDATION AI",
  //   description:
  //     "AI-powered movie recommendation system that suggests similar movies using content-based filtering and cosine similarity. Built with Python, Streamlit, and Machine Learning, featuring a premium cinematic UI, dynamic TMDB poster integration, responsive interactive design, and real-time personalized movie recommendations.",
  //   tags: [
  //     { name: "PYTHON", color: "blue-text-gradient" },
  //     { name: "ML", color: "green-text-gradient" },
  //     { name: "cosine-similarity", color: "pink-text-gradient" },
  //   ],
  //   link: "https://movie-recommendation-145.streamlit.app/",
  //   status: "complete",
  //   item: [
  //     { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/1_yarvx3.png", },
  //     { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357541/2_lnjqxg.png", },
  //     { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357541/3_jiqa3v.png", },
  //     { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/4_o0sgls.png", },
  //     { id: 5, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/5_fxrwje.png", },
  //     { id: 6, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/6_uarroh.png", },
  //   ],
  //   source_code_link: "https://github.com/shubham-kumar145/movie-recommendation",
  // },

  // {
  //   name: "ALGOARENA",
  //   type: "ml",
  //   category: "AI PLATFORM",
  //   description:
  //     "Full-stack competitive coding platform with JWT-based auth and RBAC for admin/user roles. Admins manage problems end-to-end; users write, execute, and submit code via Judge0 API. Features an AI support chatbot, Stripe-powered premium gating, and real-time submission evaluation.",
  //   tags: [
  //     { name: "HTML", color: "blue-text-gradient" },
  //     { name: "TAILWIND", color: "green-text-gradient" },
  //     { name: "REACT", color: "yellow-text-gradient" },
  //   ],
  //   link: "https://algoleague.vercel.app/",
  //   status: "complete",
  //   item: [
  //     { id: 1, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753786384/Screenshot_2025-07-29_161554_enr9uk.png" },
  //     { id: 2, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753786383/Screenshot_2025-07-29_161517_ezzkzu.png" },
  //     { id: 3, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1753786384/Screenshot_2025-07-29_161622_hou4bo.png" },
  //   ],
  //   source_code_link: "https://github.com/shubham-kumar145/CodeBeast-sk",
  // },
];

const certificationsData = [

  {
    id: 1,
    platform: "ALGOUNIVERSITY",
    issuer: "MANAS KUMAR VERMA",
    title: "Graph Theory Programming Camp",
    topics: ["Graph Theory", "Advanced Graph Problems", "DSA"],
    date: "2026",
    file: "https://drive.google.com/file/d/1Pn46KmLOPgRuIccpqLszenA05bzmUstE/preview",
    // fileName: "Graph_Theory_Certificate.pdf",
    icon: "🥇",
  },
  {
    id: 2,
    platform: "FORAGE",
    issuer: "SKYSCANNER",
    title: "Front-End Software Engineering Job Simulation",
    topics: ["React Web App", "Frontend Engineering", "Job Simulation"],
    date: "2026",
    file: "https://drive.google.com/file/d/1aP3VT5QqpW_-iAWdXQvqnAMUxAup1FJM/preview", // cert1,
    // fileName: "Skyscanner_FrontEnd_Certificate.png",
    icon: "🏆",
  },
  {
    id: 3,
    platform: "NATIONAL CADET CORPS",
    issuer: "MINISTRY OF DEFENCE, GOVERNMENT OF INDIA",
    title: "NCC Certificate 'C'",
    topics: ["Leadership", "Discipline", "Military Training"],
    date: "2024",
    file: "https://drive.google.com/file/d/1rG5s2HDQE4hU-Cd_EF2aFDg6LbiVnyZv/preview",
    // fileName: "Shubham_NCC_C_Certificate.pdf",
    icon: "🎖️",
  },
];

const educationData = [
  {
    period: "2023 — Present",
    degree: "B.Tech — Electronics & Communication Engineering",
    school: "Birla Institute of Technology, Mesra",
    location: "Ranchi, Jharkhand",
    score: "7.69 / 10",
    scoreLabel: "CGPA",
    status: "ongoing",
    detail: "Core focus on Signal Processing, Embedded Systems & Software Engineering",
  },
  {
    period: "2022-2023",
    degree: "Intermediate (Class XII) — CBSE",
    school: "Sainik School Balachadi",
    location: "Jamnagar, Gujarat",
    score: "78.4%",
    scoreLabel: "Percentage",
    status: "completed",
    detail: "Physics, Chemistry, Mathematics",
  },
  {
    period: "2020-2021",
    degree: "Matriculation (Class X) — CBSE",
    school: "Sainik School Balachadi",
    location: "Jamnagar, Gujarat",
    score: "87.2%",
    scoreLabel: "Percentage",
    status: "completed",
    detail: "General Subjects",
  },
];

const lines = [
  { ln: 1, tokens: [{ c: "#546e7a", s: true, t: "// Shubham.jsx" }] },
  { ln: 2, tokens: [] },
  {
    ln: 3, tokens: [
      { c: "#c792ea", t: "const " },
      { c: "#FFD700", t: "Shubham" },
      { c: "#89ddff", t: " = () => ({" },
    ]
  },
  {
    ln: 4, tokens: [
      { c: "#f07178", t: "  Name" },
      { c: "#fff", t: ":    " },
      { c: "#c3e88d", t: '"Shubham Kumar"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 5, tokens: [
      { c: "#f07178", t: "  Role" },
      { c: "#fff", t: ":    " },
      { c: "#c3e88d", t: '"MERN Stack Developer"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 6, tokens: [
      { c: "#f07178", t: "  College" },
      { c: "#fff", t: ": " },
      { c: "#c3e88d", t: '"BIT Mesra"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 7, tokens: [
      { c: "#f07178", t: "  Degree" },
      { c: "#fff", t: ":  " },
      { c: "#c3e88d", t: '"B.Tech ECE"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 8, tokens: [
      { c: "#f07178", t: "  CGPA" },
      { c: "#fff", t: ":    " },
      { c: "#f78c6c", t: "7.69" },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 9, tokens: [
      { c: "#f07178", t: "  Graduation" },
      { c: "#fff", t: ": " },
      { c: "#f78c6c", t: "2027" },
      { c: "#89ddff", t: "," },
    ]
  },
  { ln: 10, tokens: [] },
  {
    ln: 11, tokens: [
      { c: "#f07178", t: "  Skills" },
      { c: "#fff", t: ": " },
      { c: "#89ddff", t: "[" },
    ]
  },
  {
    ln: 12, tokens: [
      { c: "#c3e88d", t: '    "React"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"Node.js"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"MongoDB"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 13, tokens: [
      { c: "#c3e88d", t: '    "Express"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"Redis"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"Three.js"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 14, tokens: [
      { c: "#c3e88d", t: '    "Tailwind"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"REST APIs"' },
    ]
  },
  { ln: 15, tokens: [{ c: "#89ddff", t: "  ]," }] },
  { ln: 16, tokens: [] },
  {
    ln: 17, tokens: [
      { c: "#f07178", t: "  Projects" },
      { c: "#fff", t: ": " },
      { c: "#89ddff", t: "[" },
      { c: "#c3e88d", t: '"AlgoLeague"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '" SWA "' },
      { c: "#89ddff", t: "," },
      { c: "#c3e88d", t: '"LogixAI"' },
      { c: "#89ddff", t: "]," },
    ]
  },
  { ln: 18, tokens: [] },
  {
    ln: 19, tokens: [
      { c: "#f07178", t: "  Achievements" },
      { c: "#fff", t: ": " },
      { c: "#89ddff", t: "[" },
    ]
  },
  {
    ln: 20, tokens: [
      { c: "#c3e88d", t: '    "800+ DSA Problems"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"GSSoC Contributor"' },
      { c: "#89ddff", t: "," },
    ]
  },
  {
    ln: 21, tokens: [
      { c: "#c3e88d", t: '    "GFG Rank 160"' },
      { c: "#fff", t: ", " },
      { c: "#c3e88d", t: '"JEE Advanced Qualified"' },
    ]
  },
  { ln: 22, tokens: [{ c: "#89ddff", t: "  ]," }] },
  { ln: 23, tokens: [] },
  {
    ln: 24, tokens: [
      { c: "#f07178", t: "  Status" },
      { c: "#fff", t: ":  " },
      { c: "#c3e88d", t: '"Open to Internships"' },
      { c: "#89ddff", t: "," },
    ]
  },
  { ln: 25, tokens: [{ c: "#89ddff", t: "})" }] },
  {
    ln: 26, tokens: [
      { c: "#c792ea", t: "export default " },
      { c: "#FFD700", t: "Shubham" },
    ]
  },
];



export { services, technologies, experiences, CodingProfile, MyclickPhoto, projects, Achievements, cloud, educationData, certificationsData, lines };
