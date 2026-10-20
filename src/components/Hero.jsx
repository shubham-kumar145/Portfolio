// // import React from "react";
// // import { motion } from "framer-motion";
// // import { styles } from "../styles";
// // import Typed from "typed.js";
// // import workspaceImg from "../assets/aaa.png";
// // import CodeBlock from "./CodeBlock";

// // const Hero = () => {
// //   const el = React.useRef(null);

// //   React.useEffect(() => {
// //     const typed = new Typed(el.current, {
// //       strings: [
// //         "Crafting Elegant & Scalable Web Solutions",
// //         "Full-Stack Developer Turning Ideas into Reality",
// //         "Building Modern, High-Performance Web Experiences",
// //         "Code-Driven Solutions with Impact & Purpose",
// //       ],
// //       typeSpeed: 60,
// //       backSpeed: 35,
// //       backDelay: 1200,
// //       loop: true,
// //       showCursor: false,
// //     });

// //     return () => typed.destroy();
// //   }, []);

// //   return (
// //     <section className="relative w-full min-h-screen mx-auto overflow-hidden">

// //       {/* ─────────────────────────────────────────────
// //           MOBILE LAYOUT  (flex-col, visible only on < lg)
// //       ───────────────────────────────────────────── */}
// //       <div className="flex flex-col items-center px-4 pt-6 pb-24 lg:hidden">

// //         {/* 1 ▸ Profile picture */}
// //         <div className="relative mt-4 flex-shrink-0">
// //           <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
// //             <img
// //               src={workspaceImg}
// //               alt="Shubham"
// //               className="w-full h-full object-cover object-top"
// //             />
// //           </div>
// //           {/* Online dot */}
// //           <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
// //         </div>

        
// //         <div className="flex gap-3 items-start w-full justify-center mt-5">
// //           {/* Accent line */}
// //           <div className="flex flex-col items-center mt-2 flex-shrink-0">
// //             <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
// //             <div className="w-[2px] h-28 violet-gradient" />
// //           </div>

// //           {/* Text */}
// //           <div className="text-left">
// //             <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
// //               Hi, I&apos;m{" "}
// //               <span className="relative inline-block">
// //                 <span className="text-yellow-400 uppercase italic">shubham</span>
// //                 <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
// //               </span>
// //             </h1>

// //             <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
// //               Welcome to my digital space, where I craft meaningful web experiences.
// //             </p>

// //             {/* Typed text — mobile gets its own ref */}
// //             <p
// //               ref={el}
// //               className="
// //                 mt-2
// //                 text-[10px] sm:text-[12px]
// //                 tracking-widest uppercase
// //                 text-violet-400 font-mono
// //                 min-h-[20px] block
// //               "
// //             />
// //           </div>
// //         </div>

// //         {/* 3 ▸ Code editor */}
// //         <div className="w-full mt-8 flex justify-center">
// //           <CodeBlock />
// //         </div>
// //       </div>


// //       {/* ─────────────────────────────────────────────
// //           DESKTOP LAYOUT  (side-by-side, visible only on lg+)
// //       ───────────────────────────────────────────── */}
// //       <div className="hidden lg:flex flex-row items-start justify-between">

// //         {/* LEFT: text + photo */}
// //         <div
// //           className="
// //             relative top-[100px]
// //             ml-10 w-[55%]
// //             px-6 z-10
// //           "
// //         >
// //           <div className="flex gap-6 items-start justify-start">
// //             {/* Left accent */}
// //             <div className="flex flex-col items-center mt-2">
// //               <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
// //               <div className="w-[2px] h-80 violet-gradient" />
// //             </div>

// //             {/* Text content */}
// //             <div className="max-w-2xl text-left">
// //               {/* NAME ROW: photo + heading */}
// //               <div className="flex items-center gap-4 mb-2">
// //                 {/* Circular photo */}
// //                 <div className="relative flex-shrink-0">
// //                   <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
// //                     <img
// //                       src={workspaceImg}
// //                       alt="Shubham"
// //                       className="w-full h-full object-cover object-top"
// //                     />
// //                   </div>
// //                   <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
// //                 </div>

// //                 {/* Name heading */}
// //                 <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
// //                   Hi, I&apos;m{" "}
// //                   <span className="relative inline-block">
// //                     <span className="text-yellow-400 uppercase italic">shubham</span>
// //                     <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
// //                   </span>
// //                 </h1>
// //               </div>

// //               {/* Subtitle */}
// //               <p className={`${styles.heroSubText} font-serif mt-3 text-white-100`}>
// //                 Welcome to my digital space, where I craft meaningful web experiences.
// //               </p>

// //               {/* Typed text */}
// //               <p
// //                 ref={el}
// //                 className="
// //                   mt-3
// //                   text-[14px] md:text-[18px]
// //                   tracking-widest uppercase
// //                   text-violet-400 font-mono
// //                   min-h-[24px]
// //                 "
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT: code block */}
// //         <div
// //           className="
// //             w-[42%]
// //             flex justify-start items-start
// //             mt-[110px] pr-10 pb-20
// //             z-10
// //           "
// //         >
// //           <CodeBlock />
// //         </div>
// //       </div>


// //       {/* ─────────────────────────────────────────────
// //           SCROLL INDICATOR  (shared)
// //       ───────────────────────────────────────────── */}
// //       <div className="absolute bottom-6 w-full flex justify-center items-center">
// //         <a href="#about">
// //           <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
// //             <motion.div
// //               animate={{ y: [0, 24, 0] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //               className="w-3 h-3 rounded-full bg-secondary mb-1"
// //             />
// //           </div>
// //         </a>
// //       </div>

// //       {/* Cursor blink keyframe */}
// //       <style>{`
// //         @keyframes blink {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0; }
// //         }
// //       `}</style>

// //     </section>
// //   );
// // };

// // export default Hero;


// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Typed from "typed.js";

// import { styles } from "../styles";
// import workspaceImg from "../assets/aaa.png";
// import CodeBlock from "./CodeBlock";

// const RESUME_LINK =
//   "https://drive.google.com/uc?export=download&id=1ARjCI2yuLoXTbyE2YKBpoayZz9fBzSjc";

// const TYPED_STRINGS = [
//   "Full-Stack Developer · MERN",
//   "Building Secure, Scalable Web Apps",
//   "LeetCode Knight · Top 6%",
//   "Exploring ML & Deep Learning",
// ];

// /* ── typed tagline (respects reduced motion) ── */
// const TypedTagline = ({ className }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (!ref.current) return;

//     const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) {
//       ref.current.textContent = TYPED_STRINGS[0];
//       return;
//     }

//     const typed = new Typed(ref.current, {
//       strings: TYPED_STRINGS,
//       typeSpeed: 55,
//       backSpeed: 30,
//       backDelay: 1400,
//       loop: true,
//       showCursor: false,
//     });
//     return () => typed.destroy();
//   }, []);

//   return <p ref={ref} className={className} aria-live="off" />;
// };

// const Hero = () => (
//   <section
//     className="relative w-full min-h-screen mx-auto overflow-hidden"
//     aria-label="Introduction"
//   >
//     <div
//       className="
//         relative z-10 max-w-7xl mx-auto
//         flex flex-col lg:flex-row items-center lg:items-start justify-between
//         gap-10 lg:gap-8
//         px-4 sm:px-6 lg:px-10
//         pt-28 lg:pt-36 pb-28
//       "
//     >
//       {/* ── LEFT: intro ── */}
//       <div className="w-full lg:w-[55%] flex gap-4 lg:gap-6">
//         {/* Accent line */}
//         <div className="hidden sm:flex flex-col items-center mt-2 flex-shrink-0" aria-hidden="true">
//           <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#915EFF]" />
//           <div className="w-[2px] h-40 lg:h-80 violet-gradient" />
//         </div>

//         <div className="flex-1 min-w-0">
//           {/* Photo + name */}
//           <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 lg:gap-6 text-center sm:text-left">
//             <div className="relative flex-shrink-0">
//               <div
//                 className="
//                   w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[190px] lg:h-[190px]
//                   rounded-full overflow-hidden border-2 border-[#915EFF]
//                   shadow-[0_0_18px_rgba(145,94,255,0.5)]
//                 "
//               >
//                 <img
//                   src={workspaceImg}
//                   alt="Shubham Kumar"
//                   fetchpriority="high"
//                   className="w-full h-full object-cover object-top"
//                 />
//               </div>
//               <span
//                 className="absolute bottom-1 right-1 lg:bottom-3 lg:right-3 w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full border-2 border-black"
//                 title="Open to work"
//                 aria-hidden="true"
//               />
//             </div>

//             <div>
//               <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
//                 Hi, I&apos;m{" "}
//                 <span className="relative inline-block">
//                   <span className="text-yellow-400 uppercase italic">Shubham</span>
//                   <span
//                     className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10"
//                     aria-hidden="true"
//                   />
//                 </span>
//               </h1>
//               <p className="mt-1 font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-violet-300/80">
//                 Full Stack Developer · BIT Mesra &apos;27
//               </p>
//             </div>
//           </div>

//           {/* Subtitle */}
//           <p
//             className={`${styles.heroSubText} font-serif mt-5 text-white-100 text-center sm:text-left`}
//           >
//             I build secure, high-performance web apps, and I&apos;ve shipped products used by
//             300+ people.
//           </p>

//           {/* Typed tagline */}
//           <TypedTagline
//             className="
//               mt-3 min-h-[24px]
//               text-[11px] sm:text-[14px] lg:text-[17px]
//               tracking-widest uppercase text-violet-400 font-mono
//               text-center sm:text-left
//             "
//           />

//           {/* Quick stats */}
//           <ul className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2.5">
//             {[
//               { value: "Knight", label: "LeetCode · Top 6%" },
//               { value: "980+", label: "DSA Problems" },
//               { value: "2", label: "Internships" },
//               { value: "300+", label: "Users Served" },
//             ].map((stat) => (
//               <li
//                 key={stat.label}
//                 className="px-3.5 py-2 rounded-[10px] border border-[rgba(145,94,255,0.25)] bg-[rgba(13,13,30,0.6)] backdrop-blur-sm"
//               >
//                 <span className="block font-bold text-[15px] text-yellow-300 leading-tight">{stat.value}</span>
//                 <span className="block font-mono text-[9px] tracking-[0.12em] uppercase text-violet-300/70">
//                   {stat.label}
//                 </span>
//               </li>
//             ))}
//           </ul>

//           {/* CTAs */}
//           <div className="mt-7 flex flex-wrap justify-center sm:justify-start gap-3">
//             <a
//               href="#work"
//               className="
//                 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] text-white
//                 bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#ec4899]
//                 shadow-[0_0_24px_rgba(192,38,211,0.45)]
//                 transition-transform duration-200 hover:scale-105 active:scale-95
//               "
//             >
//               View Projects →
//             </a>
//             <a
//               href={RESUME_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px]
//                 text-cyan-300 border-2 border-cyan-400/70
//                 shadow-[0_0_16px_rgba(34,211,238,0.35)]
//                 transition-all duration-200 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95
//               "
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── RIGHT: code block ── */}
//       <div className="w-full lg:w-[42%] flex justify-center lg:justify-start lg:mt-4">
//         <CodeBlock />
//       </div>
//     </div>

//     {/* ── Scroll indicator ── */}
//     <div className="absolute bottom-6 w-full flex justify-center items-center z-10">
//       <a href="#about" aria-label="Scroll to About section">
//         <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
//           <motion.div
//             animate={{ y: [0, 24, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-3 h-3 rounded-full bg-secondary mb-1"
//           />
//         </div>
//       </a>
//     </div>
//   </section>
// );

// export default Hero;


import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Typed from "typed.js";
import { Github, Linkedin, Mail, Code2, ArrowRight, Download } from "lucide-react";

import { styles } from "../styles";
import workspaceImg from "../assets/aaa.png";
import CodeBlock from "./CodeBlock";

/* ════════════════════════════════
   Content (edit here)
════════════════════════════════ */
const RESUME_LINK =
  "https://drive.google.com/uc?export=download&id=1ARjCI2yuLoXTbyE2YKBpoayZz9fBzSjc";

const TYPED_STRINGS = [
  "Full-Stack Developer · MERN",
  "Building Secure, Scalable Web Apps",
  "LeetCode Knight · Top 6%",
  "Exploring ML & Deep Learning",
];

const STATS = [
  { value: "Knight", label: "LeetCode · Top 6%", href: "https://leetcode.com/u/Shubham_k_r/" },
  { value: "980+", label: "DSA Problems", href: "https://codolio.com/profile/shubham_kumar" },
  { value: "2", label: "Internships", href: "#experience" },
  { value: "300+", label: "Users Served", href: "#work" },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/shubham-kumar145" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-kumar145/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Shubham_k_r/" },
  { icon: Mail, label: "Email", href: "mailto:shubhamkr5923@gmail.com" },
];

/* ════════════════════════════════
   Animation variants
════════════════════════════════ */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

/* ════════════════════════════════
   Typed tagline
════════════════════════════════ */
const TypedTagline = ({ className }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      ref.current.textContent = TYPED_STRINGS[0];
      return;
    }

    const typed = new Typed(ref.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: "▍",
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      {/* screen readers get a static version instead of the animation */}
      <span className="sr-only">{TYPED_STRINGS.join(". ")}</span>
      <p className={className} aria-hidden="true">
        <span ref={ref} />
      </p>
    </>
  );
};

/* ════════════════════════════════
   Photo with rotating gradient ring
════════════════════════════════ */
const ProfilePhoto = () => (
  <div className="relative flex-shrink-0">
    <div className="hero-ring relative rounded-full p-[3px] w-[118px] h-[118px] sm:w-[148px] sm:h-[148px] lg:w-[196px] lg:h-[196px]">
      <div className="w-full h-full rounded-full overflow-hidden bg-[#0d0d1a] p-[3px]">
        <img
          src={workspaceImg}
          alt="Shubham Kumar"
          fetchpriority="high"
          className="w-full h-full rounded-full object-cover object-top"
        />
      </div>
    </div>

    {/* Status dot */}
    <span
      className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 flex h-4 w-4"
      title="Open to work"
      aria-hidden="true"
    >
      <span className="hero-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
      <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400 border-2 border-[#0d0d1a]" />
    </span>
  </div>
);

/* ════════════════════════════════
   Hero
════════════════════════════════ */
const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden" aria-label="Introduction">
      <style>{`
        .hero-ring {
          background: conic-gradient(from 0deg, #7c3aed, #ec4899, #f97316, #22d3ee, #7c3aed);
          box-shadow: 0 0 28px rgba(145,94,255,0.45);
          animation: hero-spin 6s linear infinite;
        }
        .hero-ring > div { animation: hero-spin 6s linear infinite reverse; }
        .hero-ping { animation: hero-ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        .hero-grid {
          background-image:
            linear-gradient(rgba(145,94,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(145,94,255,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at 40% 40%, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 40% 40%, black 20%, transparent 70%);
        }
        .hero-name-gradient {
          background: linear-gradient(90deg, #fde68a, #facc15, #fb923c, #facc15, #fde68a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hero-shine 5s linear infinite;
        }
        @keyframes hero-spin  { to { transform: rotate(360deg); } }
        @keyframes hero-ping  { 75%, 100% { transform: scale(2.2); opacity: 0; } }
        @keyframes hero-shine { to { background-position: 200% center; } }
        @media (prefers-reduced-motion: reduce) {
          .hero-ring, .hero-ring > div, .hero-ping, .hero-name-gradient { animation: none; }
        }
      `}</style>

      {/* ── Background ── */}
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-[10%] left-[-10%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[5%] right-[-8%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div
        className="
          relative z-10 max-w-7xl mx-auto
          flex flex-col lg:flex-row items-center lg:items-start justify-between
          gap-12 lg:gap-8
          px-4 sm:px-6 lg:px-10
          pt-28 lg:pt-36 pb-32
        "
      >
        {/* ════════ LEFT: intro ════════ */}
        <motion.div
          className="w-full lg:w-[56%] flex gap-4 lg:gap-6"
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
        >
          {/* Accent line */}
          <div className="hidden sm:flex flex-col items-center mt-2 flex-shrink-0" aria-hidden="true">
            <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#915EFF] shadow-[0_0_12px_rgba(145,94,255,0.8)]" />
            <div className="w-[2px] h-48 lg:h-96 violet-gradient" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Availability badge */}
            <motion.div variants={fadeUp} className="flex justify-center sm:justify-start">
              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                  font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase
                  text-green-300 border border-green-400/30 bg-green-400/[0.06]
                  transition-colors duration-200 hover:bg-green-400/[0.12] hover:border-green-400/60
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
                Open to SDE Internships &amp; 2027 Roles
              </a>
            </motion.div>

            {/* Photo + name */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col sm:flex-row items-center gap-5 lg:gap-7 text-center sm:text-left"
            >
              <ProfilePhoto />

              <div>
                <p className="font-mono text-[11px] sm:text-[13px] tracking-[0.3em] uppercase text-violet-300/70">
                  Hi, I&apos;m
                </p>
                <h1 className={`${styles.heroHeadText} font-serif leading-[1.05] mt-1`}>
                  <span className="hero-name-gradient uppercase italic">Shubham</span>
                  <br />
                  <span className="text-yellow-100/90 uppercase italic font-light">Kumar</span>
                </h1>
                <p className="mt-2 font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-violet-300/80">
                  Full Stack Developer · BIT Mesra &apos;27
                </p>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className={`${styles.heroSubText} font-serif mt-6 text-white-100 text-center sm:text-left max-w-xl`}
            >
              I build <span className="text-violet-300 font-semibold">secure, high-performance</span> web apps,
              and I&apos;ve shipped products used by{" "}
              <span className="text-yellow-300 font-semibold">300+ people</span>.
            </motion.p>

            {/* Typed tagline */}
            <motion.div variants={fadeUp}>
              <TypedTagline
                className="
                  mt-3 min-h-[26px]
                  text-[11px] sm:text-[14px] lg:text-[16px]
                  tracking-widest uppercase text-violet-400 font-mono
                  text-center sm:text-left
                "
              />
            </motion.div>

            {/* Stats (each links to proof) */}
            <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2.5">
              {STATS.map((stat) => {
                const external = stat.href.startsWith("http");
                return (
                  <li key={stat.label}>
                    <a
                      href={stat.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="
                        block px-3.5 py-2 rounded-[10px]
                        border border-[rgba(145,94,255,0.25)] bg-[rgba(13,13,30,0.6)] backdrop-blur-sm
                        transition-all duration-200
                        hover:-translate-y-0.5 hover:border-[rgba(145,94,255,0.6)]
                        hover:shadow-[0_0_18px_rgba(145,94,255,0.3)]
                      "
                    >
                      <span className="block font-bold text-[15px] text-yellow-300 leading-tight">{stat.value}</span>
                      <span className="block font-mono text-[9px] tracking-[0.12em] uppercase text-violet-300/70">
                        {stat.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href="#work"
                className="
                  group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] text-white
                  bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#ec4899]
                  shadow-[0_0_24px_rgba(192,38,211,0.45)]
                  transition-all duration-200 hover:scale-105 hover:shadow-[0_0_36px_rgba(192,38,211,0.65)] active:scale-95
                "
              >
                View Projects
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px]
                  text-cyan-300 border-2 border-cyan-400/70
                  shadow-[0_0_16px_rgba(34,211,238,0.35)]
                  transition-all duration-200 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95
                "
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="mt-7 flex items-center justify-center sm:justify-start gap-3">
              <span className="hidden sm:inline font-mono text-[10px] tracking-[0.25em] uppercase text-violet-300/50 mr-1">
                Find me
              </span>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="
                    w-10 h-10 rounded-full flex items-center justify-center
                    text-violet-300 border border-[rgba(145,94,255,0.3)] bg-[rgba(13,13,30,0.6)]
                    transition-all duration-200
                    hover:text-white hover:border-[rgba(145,94,255,0.8)] hover:-translate-y-1
                    hover:shadow-[0_0_16px_rgba(145,94,255,0.5)]
                  "
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ════════ RIGHT: code block ════════ */}
        <motion.div
          className="w-full lg:w-[42%] flex justify-center lg:justify-start lg:mt-6"
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.5 }}
        >
          <CodeBlock />
        </motion.div>
      </div>

      {/* ── Scroll indicator (hidden on short screens) ── */}
      <div className="absolute bottom-6 w-full hidden [@media(min-height:700px)]:flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
