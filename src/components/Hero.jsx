// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import Typed from "typed.js";
// import workspaceImg from "../assets/aaa.png";
// import CodeBlock from "./CodeBlock";

// const Hero = () => {
//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "Crafting Elegant & Scalable Web Solutions",
//         "Full-Stack Developer Turning Ideas into Reality",
//         "Building Modern, High-Performance Web Experiences",
//         "Code-Driven Solutions with Impact & Purpose",
//       ],
//       typeSpeed: 60,
//       backSpeed: 35,
//       backDelay: 1200,
//       loop: true,
//       showCursor: false,
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen mx-auto overflow-hidden">

//       {/* ─────────────────────────────────────────────
//           MOBILE LAYOUT  (flex-col, visible only on < lg)
//       ───────────────────────────────────────────── */}
//       <div className="flex flex-col items-center px-4 pt-6 pb-24 lg:hidden">

//         {/* 1 ▸ Profile picture */}
//         <div className="relative mt-4 flex-shrink-0">
//           <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
//             <img
//               src={workspaceImg}
//               alt="Shubham"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//           {/* Online dot */}
//           <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
//         </div>

        
//         <div className="flex gap-3 items-start w-full justify-center mt-5">
//           {/* Accent line */}
//           <div className="flex flex-col items-center mt-2 flex-shrink-0">
//             <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
//             <div className="w-[2px] h-28 violet-gradient" />
//           </div>

//           {/* Text */}
//           <div className="text-left">
//             <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
//               Hi, I&apos;m{" "}
//               <span className="relative inline-block">
//                 <span className="text-yellow-400 uppercase italic">shubham</span>
//                 <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
//               </span>
//             </h1>

//             <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
//               Welcome to my digital space, where I craft meaningful web experiences.
//             </p>

//             {/* Typed text — mobile gets its own ref */}
//             <p
//               ref={el}
//               className="
//                 mt-2
//                 text-[10px] sm:text-[12px]
//                 tracking-widest uppercase
//                 text-violet-400 font-mono
//                 min-h-[20px] block
//               "
//             />
//           </div>
//         </div>

//         {/* 3 ▸ Code editor */}
//         <div className="w-full mt-8 flex justify-center">
//           <CodeBlock />
//         </div>
//       </div>


//       {/* ─────────────────────────────────────────────
//           DESKTOP LAYOUT  (side-by-side, visible only on lg+)
//       ───────────────────────────────────────────── */}
//       <div className="hidden lg:flex flex-row items-start justify-between">

//         {/* LEFT: text + photo */}
//         <div
//           className="
//             relative top-[100px]
//             ml-10 w-[55%]
//             px-6 z-10
//           "
//         >
//           <div className="flex gap-6 items-start justify-start">
//             {/* Left accent */}
//             <div className="flex flex-col items-center mt-2">
//               <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
//               <div className="w-[2px] h-80 violet-gradient" />
//             </div>

//             {/* Text content */}
//             <div className="max-w-2xl text-left">
//               {/* NAME ROW: photo + heading */}
//               <div className="flex items-center gap-4 mb-2">
//                 {/* Circular photo */}
//                 <div className="relative flex-shrink-0">
//                   <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
//                     <img
//                       src={workspaceImg}
//                       alt="Shubham"
//                       className="w-full h-full object-cover object-top"
//                     />
//                   </div>
//                   <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
//                 </div>

//                 {/* Name heading */}
//                 <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
//                   Hi, I&apos;m{" "}
//                   <span className="relative inline-block">
//                     <span className="text-yellow-400 uppercase italic">shubham</span>
//                     <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
//                   </span>
//                 </h1>
//               </div>

//               {/* Subtitle */}
//               <p className={`${styles.heroSubText} font-serif mt-3 text-white-100`}>
//                 Welcome to my digital space, where I craft meaningful web experiences.
//               </p>

//               {/* Typed text */}
//               <p
//                 ref={el}
//                 className="
//                   mt-3
//                   text-[14px] md:text-[18px]
//                   tracking-widest uppercase
//                   text-violet-400 font-mono
//                   min-h-[24px]
//                 "
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: code block */}
//         <div
//           className="
//             w-[42%]
//             flex justify-start items-start
//             mt-[110px] pr-10 pb-20
//             z-10
//           "
//         >
//           <CodeBlock />
//         </div>
//       </div>


//       {/* ─────────────────────────────────────────────
//           SCROLL INDICATOR  (shared)
//       ───────────────────────────────────────────── */}
//       <div className="absolute bottom-6 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>

//       {/* Cursor blink keyframe */}
//       <style>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//       `}</style>

//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

import { styles } from "../styles";
import workspaceImg from "../assets/aaa.png";
import CodeBlock from "./CodeBlock";

const RESUME_LINK =
  "https://drive.google.com/uc?export=download&id=1ARjCI2yuLoXTbyE2YKBpoayZz9fBzSjc";

const TYPED_STRINGS = [
  "Full-Stack Developer · MERN",
  "Building Secure, Scalable Web Apps",
  "LeetCode Knight · Top 6%",
  "Exploring ML & Deep Learning",
];

/* ── typed tagline (respects reduced motion) ── */
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
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return <p ref={ref} className={className} aria-live="off" />;
};

const Hero = () => (
  <section
    className="relative w-full min-h-screen mx-auto overflow-hidden"
    aria-label="Introduction"
  >
    <div
      className="
        relative z-10 max-w-7xl mx-auto
        flex flex-col lg:flex-row items-center lg:items-start justify-between
        gap-10 lg:gap-8
        px-4 sm:px-6 lg:px-10
        pt-28 lg:pt-36 pb-28
      "
    >
      {/* ── LEFT: intro ── */}
      <div className="w-full lg:w-[55%] flex gap-4 lg:gap-6">
        {/* Accent line */}
        <div className="hidden sm:flex flex-col items-center mt-2 flex-shrink-0" aria-hidden="true">
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#915EFF]" />
          <div className="w-[2px] h-40 lg:h-80 violet-gradient" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Photo + name */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 lg:gap-6 text-center sm:text-left">
            <div className="relative flex-shrink-0">
              <div
                className="
                  w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[190px] lg:h-[190px]
                  rounded-full overflow-hidden border-2 border-[#915EFF]
                  shadow-[0_0_18px_rgba(145,94,255,0.5)]
                "
              >
                <img
                  src={workspaceImg}
                  alt="Shubham Kumar"
                  fetchpriority="high"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span
                className="absolute bottom-1 right-1 lg:bottom-3 lg:right-3 w-3 h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full border-2 border-black"
                title="Open to work"
                aria-hidden="true"
              />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="text-yellow-400 uppercase italic">Shubham</span>
                  <span
                    className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10"
                    aria-hidden="true"
                  />
                </span>
              </h1>
              <p className="mt-1 font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-violet-300/80">
                Full Stack Developer · BIT Mesra &apos;27
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className={`${styles.heroSubText} font-serif mt-5 text-white-100 text-center sm:text-left`}
          >
            I build secure, high-performance web apps, and I&apos;ve shipped products used by
            300+ people.
          </p>

          {/* Typed tagline */}
          <TypedTagline
            className="
              mt-3 min-h-[24px]
              text-[11px] sm:text-[14px] lg:text-[17px]
              tracking-widest uppercase text-violet-400 font-mono
              text-center sm:text-left
            "
          />

          {/* Quick stats */}
          <ul className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2.5">
            {[
              { value: "Knight", label: "LeetCode · Top 6%" },
              { value: "980+", label: "DSA Problems" },
              { value: "2", label: "Internships" },
              { value: "300+", label: "Users Served" },
            ].map((stat) => (
              <li
                key={stat.label}
                className="px-3.5 py-2 rounded-[10px] border border-[rgba(145,94,255,0.25)] bg-[rgba(13,13,30,0.6)] backdrop-blur-sm"
              >
                <span className="block font-bold text-[15px] text-yellow-300 leading-tight">{stat.value}</span>
                <span className="block font-mono text-[9px] tracking-[0.12em] uppercase text-violet-300/70">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap justify-center sm:justify-start gap-3">
            <a
              href="#work"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] text-white
                bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#ec4899]
                shadow-[0_0_24px_rgba(192,38,211,0.45)]
                transition-transform duration-200 hover:scale-105 active:scale-95
              "
            >
              View Projects →
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
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ── RIGHT: code block ── */}
      <div className="w-full lg:w-[42%] flex justify-center lg:justify-start lg:mt-4">
        <CodeBlock />
      </div>
    </div>

    {/* ── Scroll indicator ── */}
    <div className="absolute bottom-6 w-full flex justify-center items-center z-10">
      <a href="#about" aria-label="Scroll to About section">
        <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
