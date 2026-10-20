// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies, cloud } from "../constants";
// import { styles } from "../styles";

// const Tech = () => {
//   return (
//     <div className="flex flex-col gap-24 w-full">

//       {/* ===== TITLE ===== */}
//       <div className="flex justify-center items-center text-center">
//        {/* ===== TITLE ===== */}
// <div className="flex flex-col justify-center items-center text-center">
//   <h1
//     className={`${styles.sectionHeadText} font-serif flex items-center gap-3`}
//   >
//     <svg
//       viewBox="0 0 24 24"
//       className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//     >
//       <polygon points="12 2 2 7 12 12 22 7 12 2" />
//       <polyline points="2 12 12 17 22 12" />
//       <polyline points="2 17 12 22 22 17" />
//     </svg>
//     Technology Stack
//   </h1>

//   {/* Gradient underline */}
//   <div className="mt-2 h-[2px] w-64 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full" />

 
// </div>
//       </div>

//       {/* ===== LANGUAGES & FRAMEWORKS ===== */}
//       <section className="w-full">
//         <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400 mb-12">
//           LANGUAGES & FRAMEWORKS
//         </h2>

//         <div
//           className="flex flex-row flex-wrap justify-center gap-10"
//         >
//           {technologies.map((technology) => (
//             <div
//               key={technology.name}
//               className="
//                 flex flex-col items-center gap-3
//                 p-5
//                 rounded-2xl
//                 bg-white/5
//                 border border-emerald-400/25
//                 backdrop-blur-md
//                 shadow-[0_0_18px_rgba(16,185,129,0.18)]
//                 transition-all duration-300
//                 hover:shadow-[0_0_28px_rgba(16,185,129,0.55)]
//               "
//             >
//               <div className="w-20 h-20 flex items-center justify-center">
//                 <BallCanvas
//                   icon={technology.icon}
//                   mobileIcon={technology.mobileIcon}
//                 />
//               </div>

//               <p className="text-sm text-gray-200 font-medium text-center">
//                 {technology.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== DATABASES / TOOLS ===== */}
//       <section className="w-full">
//         <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400 mb-12">
//           DATABASES / TOOLS
//         </h2>

//         <div
//           className="flex flex-row flex-wrap justify-center gap-10"
//         >
//           {cloud.map((technology) => (
//             <div
//               key={technology.name}
//               className="
//                 flex flex-col items-center gap-3
//                 p-5
//                 rounded-2xl
//                 bg-white/5
//                 border border-emerald-400/25
//                 backdrop-blur-md
//                 shadow-[0_0_18px_rgba(16,185,129,0.18)]
//                 transition-all duration-300
//                 hover:shadow-[0_0_28px_rgba(16,185,129,0.35)]
//               "
//             >
//               <div className="w-20 h-20 flex items-center justify-center">
//                 <BallCanvas
//                   icon={technology.icon}
//                   mobileIcon={technology.mobileIcon}
//                 />
//               </div>

//               <p className="text-sm text-gray-200 font-medium text-center">
//                 {technology.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// export default SectionWrapper(Tech, "tech");



import React, { useEffect, useRef, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, cloud } from "../constants";
import { styles } from "../styles";

/* ── Add more groups here (e.g. an ML / AI list) without copying markup ── */
const techGroups = [
  { title: "Languages & Frameworks", items: technologies },
  { title: "Databases / Tools", items: cloud },
];

/* ── true on small screens or when the user prefers reduced motion ── */
const useLiteMode = () => {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    const update = () => setLite(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return lite;
};

/* ── mounts the 3D canvas only while the card is on screen ── */
const useInView = (rootMargin = "150px") => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
};

/* ── single tech card ── */
const TechCard = ({ technology, lite }) => {
  const [ref, inView] = useInView();
  const staticIcon = technology.mobileIcon || technology.icon;

  return (
    <div
      ref={ref}
      className="
        flex flex-col items-center gap-3 p-5 w-[120px]
        rounded-2xl bg-white/5 border border-emerald-400/25 backdrop-blur-md
        shadow-[0_0_18px_rgba(16,185,129,0.18)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-emerald-400/50
        hover:shadow-[0_0_28px_rgba(16,185,129,0.45)]
      "
    >
      <div className="w-20 h-20 flex items-center justify-center">
        {lite || !inView ? (
          <img
            src={staticIcon}
            alt=""
            loading="lazy"
            className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(16,185,129,0.35)]"
          />
        ) : (
          <BallCanvas icon={technology.icon} mobileIcon={technology.mobileIcon} />
        )}
      </div>

      <p className="text-sm text-gray-200 font-medium text-center leading-tight">
        {technology.name}
      </p>
    </div>
  );
};

/* ── category block ── */
const TechGroup = ({ title, items, lite }) => {
  if (!items?.length) return null;

  return (
    <section className="w-full" aria-labelledby={`tech-${title}`}>
      <h3
        id={`tech-${title}`}
        className="text-center text-lg md:text-xl font-semibold tracking-widest uppercase text-emerald-400 mb-10"
      >
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {items.map((technology) => (
          <TechCard key={technology.name} technology={technology} lite={lite} />
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   Tech Section
═══════════════════════════════ */
const Tech = () => {
  const lite = useLiteMode();

  return (
    <div className="flex flex-col gap-20 w-full">
      {/* ===== TITLE ===== */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className={`${styles.sectionHeadText} font-serif flex items-center gap-3`}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" />
            <polyline points="2 17 12 22 22 17" />
          </svg>
          Technology Stack
        </h2>

        <div className="mt-2 h-[2px] w-64 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full" />

        <p className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-300/50">
          Tools I build with every day
        </p>
      </div>

      {/* ===== GROUPS ===== */}
      {techGroups.map((group) => (
        <TechGroup key={group.title} title={group.title} items={group.items} lite={lite} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
