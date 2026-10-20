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
  // {
  //   title: "looking forward to my first industry internship ",
  //   company_name: "",
  //   icon: logo_sk,
  //   iconBg: "#383E56",
  //   date: "Present",
  //   points: [
  //     "Although I haven't had a formal internship yet, I have been actively working on real-world projects to strengthen my development skills. From building responsive user interfaces to developing full-stack applications using React, Node.js, and MongoDB, I am continuously preparing myself to contribute effectively to a team. I am eager and open to internship opportunities where I can learn, grow, and build impactful solutions."],
  // },
{
  title: "Full Stack Developer Intern (MERN)",
  company_name: "Ardent Computech Pvt. Ltd.",
  icon: "https://res.cloudinary.com/dejblby8o/image/upload/v1786897873/download_1_n6jnjl.jpg",
  iconBg: "#383E56",
  date: "May 2026 – Jul 2026",
  points: [
    "Built a multi-vendor e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), developing 20+ REST APIs and database schemas for products, inventory, carts, and order tracking.",
    "Implemented role-based access control across 4 user roles (Admin, Staff, Seller, User), JWT authentication over HTTP-only cookies, and Redis-backed session validation for secure logout.",
    "Built responsive, reusable React.js components for role-specific dashboards and sales analytics, connected to the backend through REST APIs.",
    "Worked in a 5-member Agile team on feature development, debugging, testing, and end-to-end integration, using Git workflows and code reviews.",
  ],
},
  {
  title: "Research Intern (Deep Learning)",
  company_name: "BIT Mesra (BIT-SIPAR 2026), Dept. of ECE",
   icon: "https://res.cloudinary.com/dejblby8o/image/upload/v1786896361/download_rebyje.jpg",
  iconBg: "#E6DEDD",
  date: "Jun 2026 – Jul 2026",
  points: [
    "Built a deep learning neural receiver for OFDM wireless systems in Python using TensorFlow, Keras, and Sionna.",
    "Replaced three classical signal-processing stages (channel estimation, equalization, and detection) with a single trained model.",
    "Generated simulation data, then trained and evaluated the model across SNR ranges, achieving about a 3 dB gain over the LS baseline and a BER of 2.4 × 10⁻⁴ at 0 dB.",
  ],
},

];

// const CodingProfile = [
//   {
//     name: "Codolio",
//     username: "shubham_kumar",
//     link: "https://codolio.com/profile/shubham_kumar",
//     image: colelio,
//     achievements: [
//       {
//         problem: "1000+ DSA Problems",
//       },
//     ],
//   },
//   {
//     name: "GeeksForGeeks",
//     username: "shubhamkr145",
//     link: "https://www.geeksforgeeks.org/profile/shubhamkr145",
//     image: geeksforgeeks,
//     achievements: [
//       {
//         Rank: "88(Institute Rank)",
//         problem: "400+",
//       },
//     ],
//   },
//   {
//   name: "LeetCode",
//   username: "Shubham_k_r",
//   link: "https://leetcode.com/u/Shubham_k_r/",
//   image: leetcode,
//   achievements: [
//     {
//       Rank: "Knight | 1864 (Top 5.96%)",
//       problem: "400+",
//     },
//   ],
// },
//   {
//   name: "Codeforces",
//   username: "shubham-kumar-145",
//   link: "https://codeforces.com/profile/shubham-kumar-145",
//   image: codeforce,
//   achievements: [
//     {
//       Rank: "Pupil | 1207 (Codeforces Rating)",
//       problem: "400+",
//     },
//   ],
// },
// ];
  // codeforce,
  // codechef,
  // geeksforgeeks,
  // leetcode,
  // colelio,

const CodingProfile = [
  {
    name: "LeetCode",
    username: "Shubham_k_r",
    link: "https://leetcode.com/u/Shubham_k_r/",
    image: leetcode,
    achievements: [
      {
        Rank: "Knight | 1864 (Top 5.96%)",
        problem: "400+",
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
        Rank: "2-Star | 1502 | DSA 1941 | Global Ranks 99 & 209",
        problem: "300+",
      },
    ],
  },
  {
    name: "Codeforces",
    username: "shubham-kumar-145",
    link: "https://codeforces.com/profile/shubham-kumar-145",
    image: codeforce,
    achievements: [
      {
        Rank: "Pupil | 1278 (Max 1278)",
        problem: "200+",
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
        Rank: "Institute Rank 88",
        problem: "500+",
      },
    ],
  },
  {
    name: "Codolio",
    username: "shubham_kumar",
    link: "https://codolio.com/profile/shubham_kumar",
    image: colelio,
    achievements: [
      {
        Rank: "45 Contests | All Platforms",
        problem: "1000+ DSA Problems",
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

// const Achievements = [
//   {
//     name: "GSSoC 25",
//     description: " Technical Contributor – GSSoC'25:Selected as a Technical Contributor for a nationally recognized open-source program, actively onboarding to large-scale projects, understanding codebases, workflows, and contribution guidelines while preparing to contribute using Git/GitHub and industry-standard development practices.",
//     date: "29/01/2025",
//     items: [
//       {
//         id: 1,
//         img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767102764/gssoc_xjzkgj.png",
//       },
//     ],
//   },
//   {
//     name: "President, NCC BIT Mesra",
//     description:
//       "Leading NCC activities and cadet coordination at BIT Mesra as President, managing discipline, event execution, team collaboration, and leadership initiatives. Actively involved in organizing training sessions, social outreach programs, and representing the unit in institutional activities while strengthening communication, leadership, and management skills.",
//     date: "2024-2025",
//     items: [
//       {
//         id: 1,
//         img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786895329/ncc_mine_kmuzj7.jpg",
//       },
//       {
//         id: 2,
//         img: "https://res.cloudinary.com/dejblby8o/image/upload/v1787332834/copy_of_whatsapp_image_2026-08-21_at_134410_lwntig.jpg",
//         // img: "https://res.cloudinary.com/dejblby8o/image/upload/v1787332417/WhatsApp_Image_2026-08-21_at_13.44.10_lwntig.jpg",
//       },
//     ],
//   },
//   {
//     name: "NCC 'C' Certificate (Alpha Grade)",
//     description:
//       "Awarded the prestigious NCC 'C' Certificate with Alpha Grade after successfully completing advanced National Cadet Corps training focused on leadership, discipline, teamwork, drill, weapon training, and national service activities. Demonstrated strong commitment, responsibility, and performance throughout multiple NCC camps and organizational activities.",
//     date: "2024",
//     items: [
//       {
//         id: 1,
//         img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786895581/1768712926617_vz7bsx.jpg",
//       },
//     ],
//   },

// ];

const Achievements = [
  {
    name: "NCC 'C' Certificate (Alpha Grade)",
    description:
      "Awarded the NCC 'C' Certificate with Alpha Grade, the highest grade, after completing advanced National Cadet Corps training in leadership, discipline, teamwork, drill, weapon training, and national service. Demonstrated consistent commitment and performance across multiple NCC camps and organizational activities.",
    date: "2024",
    items: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786895581/1768712926617_vz7bsx.jpg",
      },
    ],
  },
  {
    name: "President, NCC BIT Mesra",
    description:
      "Led the National Cadet Corps unit at BIT Mesra as President, coordinating 300+ cadets across training sessions, large-scale events, and social outreach programs. Managed discipline, event execution, and team coordination, and represented the unit in institutional activities, strengthening my leadership, communication, and management skills.",
    date: "Jan 2025 – Aug 2026",
    items: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786895329/ncc_mine_kmuzj7.jpg",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dejblby8o/image/upload/v1787332834/copy_of_whatsapp_image_2026-08-21_at_134410_lwntig.jpg",
      },
    ],
  },
  {
    name: "Smart India Hackathon – Top 5",
    description:
      "Ranked in the Top 5 among 50+ teams in the Smart India Hackathon internal round at BIT Mesra, designing and presenting a technical solution to a real-world problem statement under strict time constraints.",
    date: "2024", 
    items: [
      {
        id: 1,
        img: "https://drive.google.com/thumbnail?id=1hRxzii9VKdVf4qzSU_j1hXPEWfkyNpKX&sz=w1000",
      },
    ],
  },
  {
    name: "GSSoC '25 & '26 Open Source Contributor",
    description:
      "Selected as a Technical Contributor for GirlScript Summer of Code (GSSoC), a nationally recognized open-source program, in both 2025 and 2026. Contributed features and bug fixes to open-source projects by understanding large codebases, following contribution guidelines, and collaborating with maintainers through GitHub issues, pull requests, and code reviews.",
    date: "2025 – 2026",
    items: [
      {
        id: 1,
        img: "https://drive.google.com/thumbnail?id=1K6Q_VhdQA3-4SwgglMPQrS4rjnq6kBzW&sz=w1000",
      },
      {
        id: 2,
        img: "https://drive.google.com/thumbnail?id=1WfygGp25sQKiikLJYRCcjuiBKFUicom6&sz=w1000",
      },
      // {
      //   id: 3,
      //   img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1767102764/gssoc_xjzkgj.png",
      // },
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
    // description:
    //   "Responsive personal portfolio built with React and Tailwind CSS, featuring reusable component architecture, optimised performance, and cross-browser compatibility. Integrates interactive 3D visuals via Three.js to demonstrate advanced frontend capability.",
    description:
  "Personal portfolio built with React and Tailwind CSS to showcase my projects, experience, coding profiles, and certifications. Uses a reusable component architecture with data-driven sections, so new projects or achievements can be added by editing a single config file. Features interactive 3D visuals with Three.js, smooth animations, and a fully responsive layout across devices.",

    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "TAILWIND", color: "green-text-gradient" },
      { name: "THREE JS", color: "pink-text-gradient" },
      { name: "REACT", color: "orange-text-gradient" },
    ],
    link: "https://shubhamkumar.me/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652083/Screenshot_2026-06-05_142737_qb7yfx.png" },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652083/Screenshot_2026-06-05_142823_zpr7cc.png" },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652082/Screenshot_2026-06-05_143610_fsvs3b.png" },
      { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652082/Screenshot_2026-06-05_143636_ortvzi.png" },
      { id: 5, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652083/Screenshot_2026-06-05_145816_ibyoon.png" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Portfolio",
  },
  {
    name: "LogixAI",
    type: "web",
    category: "AI PLATFORM",
    // description:
    //   "AI-powered web platform with a ChatGPT-style conversational assistant, a drag-and-drop website builder that outputs production-ready HTML/CSS/JS, and intelligent image tools for format conversion and background removal — all backed by secure API integration and optimised data pipelines.",
    description:
  "AI-powered web platform combining three tools in one place: a ChatGPT-style conversational assistant, a drag-and-drop website builder that exports clean HTML/CSS/JS, and image utilities for format conversion and background removal. Built with React and Tailwind CSS, integrating third-party AI APIs securely so users can chat, build, and edit without switching apps.",

    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    link: "https://logic-ai-five.vercel.app/",
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
    // description:
    
    //   "Full-stack competitive coding platform with JWT-based auth and RBAC for admin/user roles. Admins manage problems end-to-end; users write, execute, and submit code via Judge0 API. Features an AI support chatbot, Stripe-powered premium gating, and real-time submission evaluation.",
    description:
  "Full-stack competitive coding platform used by 300+ users across 200+ problems. Users write code in C++, Java, or JavaScript in a Monaco editor and get real-time verdicts as submissions run in isolated sandboxes against hidden test cases via the Judge0 API. Includes JWT authentication with role-based access (admins manage problems end to end), an AI support chatbot, and Stripe-powered premium access. Redis caching cut API response time from 60 ms to 5 ms (92%), with Redis-based rate limiting protecting code execution.",

    
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
    // description:
    //   "Production-grade e-commerce platform with JWT + cookie-based auth and RBAC. Separate admin and user dashboards support live product creation, updates, and inventory management — wrapped in a fully responsive, performance-optimised UI with protected routes throughout.",
    description:
  "Full-stack e-commerce platform serving 300+ users with 200+ products, built on React, Node.js, Express, and MongoDB. Exposes 21 REST APIs covering products, inventory, cart, orders, and reviews, with JWT + HTTP-only cookie authentication and role-based authorization securing 8 admin routes. Separate admin and customer dashboards support live product management, filtered keyword search, order tracking, PayPal payments, and Cloudinary image uploads.",

    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "TAILWIND", color: "green-text-gradient" },
      { name: "REACT", color: "yellow-text-gradient" },
      { name: "Node js", color: "pink-text-gradient", },
    ],
    link: "https://stylish-wear-aesthetics-ctjc.vercel.app/",
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
  {
  name: "RentalHub",
  type: "web",
  category: "VEHICLE RENTAL",
  // description:
  //   "Full-stack multi-vendor vehicle rental platform with JWT + cookie-based authentication, role-based access control, vehicle and shop management, booking workflows, Stripe payments, Cloudinary image uploads, reviews, and secure REST APIs.",
 description:
  "Full-stack multi-vendor vehicle rental platform where shop owners list vehicles and customers browse, book, and pay online. Built with React, Node.js, Express, and MongoDB, featuring JWT + cookie-based authentication, role-based access for customers, vendors, and admins, and end-to-end booking workflows. Integrates Stripe for secure payments, Cloudinary for vehicle image uploads, and a review system, all served through secure REST APIs.",

   
   tags: [
    { name: "REACT", color: "blue-text-gradient" },
    { name: "TAILWIND", color: "green-text-gradient" },
    { name: "NODE JS", color: "yellow-text-gradient" },
    { name: "EXPRESS JS", color: "pink-text-gradient" },
    { name: "MONGODB", color: "blue-text-gradient" },
    { name: "STRIPE", color: "green-text-gradient" },
  ],
  link: "https://rental-hub-gilt.vercel.app/",
  status: "complete",
  item: [
    // Add your RentalHub screenshots here
    { id: 1, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786902264/Screenshot_2026-08-16_230926_ennqwo.png" },
    { id: 2, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786902264/Screenshot_2026-08-16_230926_ennqwo.png" },
    { id: 3, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786902264/Screenshot_2026-08-16_230926_ennqwo.png" },
    { id: 4, img: "https://res.cloudinary.com/dejblby8o/image/upload/v1786902264/Screenshot_2026-08-16_230926_ennqwo.png" },
  ],
  source_code_link: "https://github.com/shubham-kumar145/Rental-Hub",
},
  // 5

  {
    name: "Chatting",
    type: "web",
    category: "REAL-TIME CHAT APPLICATION",
    // description:
    //   "A full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. Features secure JWT authentication, instant messaging, online/offline user presence tracking, protected APIs, and a modern responsive interface for seamless communication across devices.",
   description:
  "Real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. Messages are delivered instantly over WebSockets, with live online/offline presence so users can see who is available. Secured with JWT authentication and protected APIs, and wrapped in a clean, responsive interface that works across desktop and mobile.",

    
    tags: [
      { name: "REACT", color: "blue-text-gradient" },
      { name: "NODE JS", color: "green-text-gradient" },
      { name: "MONGODB", color: "pink-text-gradient" },
    ],
    link: "https://chatting-frontend-wine.vercel.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652267/Screenshot_2026-06-05_150024_cvbhgx.png" },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652268/Screenshot_2026-06-05_150100_ctvvwa.png" },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652267/Screenshot_2026-06-05_145952_z1whtm.png" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/Chatting",
  },
  {
    name: "To do list",
    type: "web",
    category: "PRODUCTIVITY",
    // description:
    //   "Developed a modern task management web application using React and Tailwind CSS. Implemented features such as task creation, completion tracking, importance marking, calendar-based organization, and daily reminders. Integrated focus tools and UI customization with persistent data storage using browser local storage for a fast and seamless user experience.",
    description:
  "Task management app built with React and Tailwind CSS for organizing daily work. Users can create tasks, mark them important or complete, plan them on a calendar view, and set daily reminders. Includes a built-in focus timer and theme customization, with all data saved in browser local storage so tasks persist instantly without sign-up.",

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
  //7
  {
    name: "Weather Website",
    type: "web",
    category: "WEATHER APP",
    // description:
    //   "Real-time weather app powered by the OpenWeatherMap API, displaying live temperature, humidity, and wind data with city-based search. Uses React state-driven rendering, conditional weather icons, and Tailwind CSS for a responsive, device-agnostic layout.",
   description:
  "Real-time weather app powered by the OpenWeatherMap API, showing live temperature, humidity, and wind speed for any city. Users search by city name and get instant results with weather-specific icons that change with conditions. Built with a responsive layout that adapts cleanly from mobile to desktop.",

    
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
    name: "CINEMATCH",
    type: "ml",
    category: "MOVIE RECOMMENDATION AI",
    // description:
    //   "AI-powered movie recommendation system that suggests similar movies using content-based filtering and cosine similarity. Built with Python, Streamlit, and Machine Learning, featuring a premium cinematic UI, dynamic TMDB poster integration, responsive interactive design, and real-time personalized movie recommendations.",
    
    description:
  "Movie recommendation system that suggests similar films using content-based filtering. Movie metadata (genres, keywords, cast, and crew) is converted into feature vectors, and cosine similarity ranks the closest matches in real time. Deployed with Streamlit behind a cinematic, responsive UI that fetches live movie posters from the TMDB API.",

    tags: [
      { name: "PYTHON", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" },
      { name: "cosine-similarity", color: "pink-text-gradient" },
    ],
    link: "https://movie-recommendation-145.streamlit.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/1_yarvx3.png", },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357541/2_lnjqxg.png", },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357541/3_jiqa3v.png", },
      { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/4_o0sgls.png", },
      { id: 5, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/5_fxrwje.png", },
      { id: 6, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1779357540/6_uarroh.png", },
    ],
    source_code_link: "https://github.com/shubham-kumar145/movie-recommendation",
  },
  //ML 2
  {
    name: "SPAM EMAIL DETECTOR",
    type: "ml",
    category: "AI / NLP",
    // description:
    //   "AI-powered spam email detection web application built using Machine Learning and NLP techniques. Implemented TF-IDF vectorization with a K-Nearest Neighbors (KNN) classifier to analyze and classify email content in real time. Features confidence score prediction, text preprocessing, tokenization, and lightweight Streamlit deployment for fast and interactive usage.",
  
    description:
  "NLP-based spam detection app that classifies email text as spam or legitimate in real time. The text pipeline covers cleaning, tokenization, and TF-IDF vectorization, feeding a K-Nearest Neighbors (KNN) classifier that returns a prediction with a confidence score. Deployed as a lightweight Streamlit web app for instant, interactive testing.",

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
  //ML 3
  {
    name: "STROKE RISK PREDICTOR",
    type: "ml",
    category: "HEALTHCARE AI",
    // description:
    //   "Machine Learning-based healthcare prediction system that analyzes patient health parameters to estimate stroke and heart disease risk in real time. Built using a K-Nearest Neighbors (KNN) model with feature scaling, interactive Streamlit UI, probability-based prediction scoring, and instant risk analysis visualization.",
    description:
  "Healthcare ML app that estimates a patient's stroke and heart disease risk from health parameters such as age, blood pressure, glucose level, and BMI. Preprocesses data with feature scaling and uses a K-Nearest Neighbors (KNN) model to output a probability-based risk score. Deployed on Streamlit with an interactive form and instant risk visualization.",

    
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
  // 4
  {
    name: "IPL Score Predictor",
    type: "ml",
    category: "MACHINE LEARNING",
    // description:
    //   "AI-powered IPL First Innings Score Prediction system built using Machine Learning and CatBoost Regression. Trained on 76,000+ historical IPL records to predict final innings totals based on live match conditions, venue, team combinations, wickets, and recent momentum. Features score range estimation, run-rate projection, confidence indicators, intelligent input validation, and an interactive IPL-themed Streamlit dashboard.",
    
    description:
  "Machine learning system that predicts an IPL team's final first-innings score from live match conditions. Trained a CatBoost regression model on 76,000+ historical ball-by-ball records, using venue, batting and bowling teams, current score, wickets, and recent-over momentum as features. The Streamlit dashboard shows a predicted score range, projected run rate, and confidence indicators, with input validation to block impossible match states.",
    tags: [
      { name: "PYTHON", color: "blue-text-gradient" },
      { name: "CATBOOST", color: "green-text-gradient" },
      { name: "STREAMLIT", color: "pink-text-gradient" },
    ],
    link: "https://ipl-predictor-145.streamlit.app/",
    status: "complete",
    item: [
      { id: 1, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652611/Screenshot_2026-06-05_151202_qtnedt.png" },
      { id: 2, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652611/Screenshot_2026-06-05_151217_mnfyxl.png" },
      { id: 3, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652612/Screenshot_2026-06-05_151254_wnp9pt.png" },
      { id: 4, img: "https://res.cloudinary.com/dkbowuecy/image/upload/v1780652612/Screenshot_2026-06-05_151305_lv4gra.png" },
    ],
    source_code_link: "https://github.com/shubham-kumar145/IPL-PREDICTOR",
  },


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

// const certificationsData = [

//   {
//     id: 1,
//     platform: "ALGOUNIVERSITY",
//     issuer: "MANAS KUMAR VERMA",
//     title: "Graph Theory Programming Camp",
//     topics: ["Graph Theory", "Advanced Graph Problems", "DSA"],
//     date: "2026",
//     file: "https://drive.google.com/file/d/1Pn46KmLOPgRuIccpqLszenA05bzmUstE/preview",
//     // fileName: "Graph_Theory_Certificate.pdf",
//     icon: "🥇",
//   },
//   {
//     id: 2,
//     platform: "FORAGE",
//     issuer: "SKYSCANNER",
//     title: "Front-End Software Engineering Job Simulation",
//     topics: ["React Web App", "Frontend Engineering", "Job Simulation"],
//     date: "2026",
//     file: "https://drive.google.com/file/d/1aP3VT5QqpW_-iAWdXQvqnAMUxAup1FJM/preview", // cert1,
//     // fileName: "Skyscanner_FrontEnd_Certificate.png",
//     icon: "🏆",
//   },
//   {
//     id: 3,
//     platform: "NATIONAL CADET CORPS",
//     issuer: "MINISTRY OF DEFENCE, GOVERNMENT OF INDIA",
//     title: "NCC Certificate 'C'",
//     topics: ["Leadership", "Discipline", "Military Training"],
//     date: "2024",
//     file: "https://drive.google.com/file/d/1rG5s2HDQE4hU-Cd_EF2aFDg6LbiVnyZv/preview",
//     // fileName: "Shubham_NCC_C_Certificate.pdf",
//     icon: "🎖️",
//   },
// ];

const certificationsData = [
  {
    id: 1,
    platform: "ARDENT COMPUTECH PVT. LTD.",
    issuer: "ARDENT COMPUTECH PVT. LTD.",
    title: "Full Stack Developer Internship (MERN)",
    topics: ["MERN Stack", "REST APIs", "JWT Authentication", "Redis"],
    date: "May 2026 – Jul 2026",
    file: "https://drive.google.com/file/d/1m4pACU4Jch5BkkJCOsXz7qO1fkgZ410n/preview",
    icon: "💼",
  },
  {
    id: 2,
    platform: "BIT MESRA (BIT-SIPAR 2026)",
    issuer: "DEPARTMENT OF ECE, BIT MESRA",
    title: "Research Internship – Deep Learning for Wireless Systems",
    topics: ["Deep Learning", "TensorFlow", "OFDM", "Sionna"],
    date: "Jun 2026 – Jul 2026",
    file: "https://drive.google.com/file/d/19EySUZLGGdqVG5Wm9AYvKawkIAHMmk96/view?usp=sharing",
    icon: "🔬",
  },
  {
    id: 3,
    platform: "ALGOUNIVERSITY",
    issuer: "ALGOUNIVERSITY (Instructor: Manas Kumar Verma)",
    title: "Graph Theory Programming Camp",
    topics: ["Graph Theory", "Advanced Graph Problems", "DSA"],
    date: "2026",
    file: "https://drive.google.com/file/d/1Pn46KmLOPgRuIccpqLszenA05bzmUstE/preview",
    icon: "🥇",
  },
  {
    id: 4,
    platform: "FORAGE",
    issuer: "SKYSCANNER",
    title: "Front-End Software Engineering Job Simulation",
    topics: ["React.js", "Frontend Engineering", "Job Simulation"],
    date: "2026",
    file: "https://drive.google.com/file/d/1aP3VT5QqpW_-iAWdXQvqnAMUxAup1FJM/preview",
    icon: "🏆",
  },
  {
    id: 5,
    platform: "NATIONAL CADET CORPS",
    issuer: "MINISTRY OF DEFENCE, GOVERNMENT OF INDIA",
    title: "NCC 'C' Certificate (Alpha Grade)",
    topics: ["Leadership", "Discipline", "Military Training"],
    date: "2024",
    file: "https://drive.google.com/file/d/1rG5s2HDQE4hU-Cd_EF2aFDg6LbiVnyZv/preview",
    icon: "🎖️",
  },
];

const educationData = [
  {
    period: "2023 — Present",
    degree: "B.Tech — Electronics & Communication Engineering",
    school: "Birla Institute of Technology, Mesra",
    location: "Ranchi, Jharkhand",
    score: "7.86 / 10",
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
      { c: "#f78c6c", t: "7.84" },
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
