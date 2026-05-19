import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "./Carousel";


/* ══════════════════════════════
   Project Card — h-full added so it stretches
   to match the tallest card in each grid row.
═══════════════════════════════ */
const ProjectCard = ({
  link,
  status,
  items,
  cardIndex,
  name,
  description,
  tags,
  source_code_link,
  category,
}) => {
  const num = String(cardIndex + 1).padStart(2, "0");

  return (
    <div
      className="group relative flex flex-col h-full rounded-[20px] overflow-hidden
                 border border-[rgba(124,111,205,0.18)]
                 bg-[#13132a]
                 transition-all duration-300
                 hover:-translate-y-[6px]
                 hover:border-[rgba(124,111,205,0.42)]
                 hover:shadow-[0_20px_60px_rgba(124,58,237,0.22),0_0_0_1px_rgba(124,111,205,0.35)]"
      style={{ cursor: "default" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)" }}
      />

      {/* Carousel */}
      <div className="relative w-full h-[186px] bg-[#0a0a18] overflow-hidden">
        <div className="w-full h-full transition-transform duration-400 group-hover:scale-[1.03]">
          <Carousel
            items={items}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>

        {/* Badge */}
        <div
          className="absolute top-3 left-3 z-10 flex items-center gap-1.5
                     px-2.5 py-1 rounded-md backdrop-blur-sm
                     border border-[rgba(124,111,205,0.28)]
                     bg-[rgba(13,13,26,0.82)]"
        >
          <span className="font-mono text-[9px] font-medium tracking-[0.12em] uppercase" style={{ color: "#c4b5fd" }}>
            {num}
          </span>
          <span style={{ color: "rgba(124,111,205,0.45)", fontSize: 9 }}>│</span>
          <span className="font-mono text-[9px] font-medium tracking-[0.12em] uppercase" style={{ color: "#9d8fd4" }}>
            {category}
          </span>
        </div>

        {/* GitHub */}
        <button
          onClick={() => window.open(source_code_link, "_blank")}
          className="absolute top-3 right-3 z-10
                     w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                     backdrop-blur-sm border border-[rgba(124,111,205,0.28)]
                     bg-[rgba(13,13,26,0.82)]
                     hover:bg-[rgba(124,58,237,0.35)]
                     hover:border-[rgba(124,111,205,0.65)]
                     transition-all duration-200"
          aria-label="GitHub source"
        >
          <img src={github} alt="GitHub" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] object-contain" />
        </button>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[rgba(0,0,0,0.28)] border-b border-[rgba(124,111,205,0.1)]">
        {status ? (
          <div className="flex items-center gap-1.5">
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "#34d399", boxShadow: "0 0 6px rgba(52,211,153,0.65)" }} />
            <span className="font-mono text-[9.5px] font-medium tracking-[0.1em] uppercase" style={{ color: "#34d399" }}>Completed</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <span className="w-[6px] h-[6px] rounded-full animate-pulse" style={{ background: "#fbbf24", boxShadow: "0 0 6px rgba(251,191,36,0.65)" }} />
            <span className="font-mono text-[9.5px] font-medium tracking-[0.1em] uppercase" style={{ color: "#fbbf24" }}>Ongoing</span>
          </div>
        )}
        <button
          onClick={() => window.open(link, "_blank")}
          className="font-mono text-[9.5px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-[5px]
                     border border-[rgba(34,211,238,0.28)] transition-all duration-200
                     hover:bg-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.55)]"
          style={{ color: "#22d3ee" }}
        >
          LIVE ↗
        </button>
      </div>

      {/* Body — flex-1 makes this grow to fill remaining card height */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <h3
          className="font-serif font-bold text-[17px] uppercase tracking-[0.06em] leading-tight"
          style={{ color: "#f5d87a", textShadow: "0 0 14px rgba(245,216,122,0.3)" }}
        >
          {name}
        </h3>
        <p className="text-[12.5px] leading-[1.75] flex-1 text-justify font-light" style={{ color: "#a29ec0" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-[6px] pt-1">
          {tags.map((tag) => {
            const colorMap = {
              "blue-text-gradient": { color: "#60a5fa", bg: "rgba(96,165,250,0.09)", border: "rgba(96,165,250,0.22)" },
              "green-text-gradient": { color: "#34d399", bg: "rgba(52,211,153,0.09)", border: "rgba(52,211,153,0.22)" },
              "pink-text-gradient": { color: "#f472b6", bg: "rgba(244,114,182,0.09)", border: "rgba(244,114,182,0.22)" },
              "yellow-text-gradient": { color: "#fbbf24", bg: "rgba(251,191,36,0.09)", border: "rgba(251,191,36,0.22)" },
              "orange-text-gradient": { color: "#fb923c", bg: "rgba(249,115,22,0.09)", border: "rgba(249,115,22,0.22)" },
            };
            const c = colorMap[tag.color] ?? colorMap["blue-text-gradient"];
            return (
              <span
                key={`${name}-${tag.name}`}
                className="font-mono text-[9px] font-medium tracking-[0.1em] uppercase px-2.5 py-[3px] rounded-[5px]"
                style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
              >
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #7c3aed 0%, #ec4899 50%, #f97316 100%)" }}
      />
    </div>
  );
};

/* ─── Section Heading ─── */
const SectionHeading = ({ title, subtitle, gradient, compact }) => (
  <div className={`${compact ? "mt-6" : "mt-16"} mb-10 text-center`}>
    <h1
      className="font-black md:text-[58px] sm:text-[48px] xs:text-[38px] text-[28px] italic font-serif uppercase"
      style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
    >
      {title}
    </h1>
    <div className="mx-auto mt-3 h-[2px] w-28 rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)" }} />
    <p className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase font-light" style={{ color: "rgba(196,181,253,0.45)" }}>
      {subtitle}
    </p>
  </div>
);

/* ─── Animated grid wrapper ───
   motion.div wrappers get h-full so they stretch
   to the full grid cell height, allowing ProjectCard
   to also stretch with h-full and equalise all rows.
─────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

const ProjectGrid = ({ list }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.05 }}
    className={[
      "grid gap-5 grid-cols-1 sm:grid-cols-2",
      list.length >= 10 ? "lg:grid-cols-4" : "lg:grid-cols-3",
    ].join(" ")}
  >
    {list.map((project, i) => (
      /* ↓ h-full here propagates grid cell height into the card */
      <motion.div key={`card-${i}`} variants={itemVariants} className="h-full">
        <ProjectCard
          cardIndex={i}
          items={project.item}
          category={project.category || "PROJECT"}
          {...project}
        />
      </motion.div>
    ))}
  </motion.div>
);

/* ═══════════════════════════════
   Works Section
═══════════════════════════════ */
const Works = () => {
  const webProjects = projects.filter((p) => !p.type || p.type === "web");
  const mlProjects = projects.filter((p) => p.type === "ml");

  return (
    <>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <p className={`${styles.sectionSubText} italic font-serif`}>My work,</p>
        <h2 className={`${styles.sectionHeadText} italic font-serif`}>From Logic to Life</h2>
      </motion.div>

      {/* Bio */}
      <div className="w-full flex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p className="text-lg leading-8 text-justify font-serif">
            My journey into coding began in{" "}
            <span className="font-semibold text-yellow-300">Class 12</span>, when I was
            introduced to{" "}
            <span className="font-semibold text-pink-300">computer science</span> and
            discovered the power of{" "}
            <span className="font-semibold text-violet-300">logic</span> to create{" "}
            <span className="font-semibold text-green-300">
              meaningful solutions
            </span>
            . What started as curiosity soon became a passion — a desire to understand{" "}
            <span className="font-semibold text-blue-300">
              how things work and how they can work better
            </span>
            . Since then, coding has become a way to{" "}
            <span className="font-semibold text-red-300">
              think, explore, and solve problems
            </span>
            .
          </p>
          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            Driven by this passion, I immersed myself in{" "}
            <span className="font-semibold text-pink-300">learning and building</span>.
            From simple webpages to{" "}
            <span className="font-semibold text-violet-300">
              full-stack applications
            </span>
            , I worked with{" "}
            <span className="font-semibold text-blue-300">
              HTML, CSS, Tailwind CSS, JavaScript, React
            </span>{" "}
            and{" "}
            <span className="font-semibold text-green-300">
              Node.js, Express.js, MongoDB
            </span>
            , while exploring{" "}
            <span className="font-semibold text-indigo-300">Three.js</span> to add
            creativity. Each project strengthened my understanding of{" "}
            <span className="font-semibold text-yellow-300">
              structure, performance, and user experience
            </span>
            .
          </p>
          <p className="text-lg leading-8 mt-4 text-justify font-serif">
            Alongside development, I consistently practiced{" "}
            <span className="font-semibold text-red-300">
              Data Structures and Algorithms
            </span>{" "}
            on{" "}
            <span className="font-semibold text-blue-300">
              LeetCode and GeeksforGeeks
            </span>
            , and participated in{" "}
            <span className="font-semibold text-violet-300">
              competitive programming contests
            </span>
            . These experiences sharpened my{" "}
            <span className="font-semibold text-green-300">
              problem-solving mindset
            </span>{" "}
            and understanding of{" "}
            <span className="font-semibold text-yellow-300">
              time and space complexity
            </span>
            . Today, I continue to{" "}
            <span className="font-semibold text-indigo-300">
              learn, build, and experiment
            </span>{" "}
            to create{" "}
            <span className="font-semibold text-green-300">
              impactful, real-world solutions
            </span>
            .
          </p>

        </motion.div>
      </div>

      {/* ════════ SECTION 1 — WEB DEV ════════ */}
      <SectionHeading
        title="My Projects"
        subtitle="Things I've built along the way"
        gradient="linear-gradient(135deg, #e2d9f3 0%, #c084fc 40%, #f472b6 75%, #fb923c 100%)"
        compact
      />
      <ProjectGrid list={webProjects} />

      {/* ════════ SECTION 2 — AI / DL ════════ */}
      {mlProjects.length > 0 && (
        <>
          {/* Divider */}
          <div className="mt-10 mb-2 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,111,205,0.35), transparent)" }} />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(196,181,253,0.3)" }}>✦</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,111,205,0.35), transparent)" }} />
          </div>

          <SectionHeading
            title="AI / DL Projects"
            subtitle="Experiments in intelligence"
            gradient="linear-gradient(135deg, #e0f2fe 0%, #38bdf8 35%, #818cf8 70%, #c084fc 100%)"
          />
          <ProjectGrid list={mlProjects} />
        </>
      )}
    </>
  );
};

export default SectionWrapper(Works, "work");
