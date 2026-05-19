import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { Achievements } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import Carousel from "./Carousel";

/* ── accent palette (cycles per card index) ── */
const accentPalette = [
  { color: "#c084fc", glow: "rgba(192,132,252,0.22)", border: "rgba(192,132,252,0.32)" },
  { color: "#f472b6", glow: "rgba(244,114,182,0.22)", border: "rgba(244,114,182,0.32)" },
  { color: "#fb923c", glow: "rgba(251,146,60,0.22)",  border: "rgba(251,146,60,0.32)"  },
  { color: "#34d399", glow: "rgba(52,211,153,0.22)",  border: "rgba(52,211,153,0.32)"  },
  { color: "#60a5fa", glow: "rgba(96,165,250,0.22)",  border: "rgba(96,165,250,0.32)"  },
  { color: "#f5d87a", glow: "rgba(245,216,122,0.22)", border: "rgba(245,216,122,0.32)" },
];

/* ─────────────────────────────────────────
   CARD  — fixed 520 px tall, image 280 px
───────────────────────────────────────── */
const ProjectCard = ({ items, name, description, date, index }) => {
  const accent = accentPalette[index % accentPalette.length];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      className="group relative flex flex-col rounded-[16px] overflow-hidden flex-shrink-0"
      style={{
        width: "320px",
        height: "520px",          /* ← every card identical height */
        background: "#13132a",
        border: "1px solid rgba(124,111,205,0.18)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      whileHover={{
        y: -4,
        borderColor: accent.border,
        boxShadow: `0 16px 48px ${accent.glow}, 0 0 0 1px ${accent.border}`,
      }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accent.color}, #ec4899, #7c3aed)` }}
      />

      {/* ── header strip ── */}
      <div
        className="flex items-center justify-between px-3 py-2 flex-shrink-0"
        style={{
          background: "rgba(0,0,0,0.35)",
          borderBottom: "1px solid rgba(124,111,205,0.1)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{ background: accent.color, boxShadow: `0 0 6px ${accent.color}` }}
          />
          <span
            className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase"
            style={{ color: accent.color }}
          >
            {name}
          </span>
        </div>
        {date && (
          <span
            className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-[2px] rounded-[4px]"
            style={{
              color: "rgba(196,181,253,0.6)",
              border: "1px solid rgba(124,111,205,0.2)",
              background: "rgba(124,111,205,0.07)",
            }}
          >
            {date}
          </span>
        )}
      </div>

      {/* ── image / carousel — fixed 280 px ── */}
      <div
        className="flex-shrink-0 w-full overflow-hidden"
        style={{
          height: "280px",
          background: "#0a0a18",
          borderBottom: "1px solid rgba(124,111,205,0.1)",
        }}
      >
        <div
          className="w-full h-full transition-transform duration-400 group-hover:scale-[1.03]"
          style={{ overflow: "hidden" }}
        >
          <Carousel
            items={items}
            baseWidth={320}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
            round={false}
          />
        </div>
      </div>

      {/* ── description — takes remaining space, scrolls if overflow ── */}
      <div
        className="flex-1 min-h-0 overflow-y-auto p-3"
        style={{
          /* hide scrollbar visually but keep scroll functional */
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <p
          className="text-[12px] leading-[1.75] font-serif text-justify"
          style={{ color: "#a29ec0" }}
        >
          {description}
        </p>
      </div>

      {/* bottom bar */}
      <div
        className="flex-shrink-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accent.color}, #ec4899, #7c3aed)` }}
      />
    </motion.div>
  );
};

/* ═══════════════════════════════
   Achievements Section
═══════════════════════════════ */
const Works = () => {
  const scrollRef = useRef(null);

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  340, behavior: "smooth" });

  return (
    <>
      {/* ── Section header ── */}
      <div className="mt-2 mb-5 text-center">
        <motion.div variants={textVariant()}>
          <p
            className="font-mono text-[10px] tracking-[0.35em] uppercase italic font-serif"
            style={{ color: "#7c6fcd" }}
          >
            Things I've earned,
          </p>

          <h1
            className="font-black md:text-[52px] sm:text-[42px] xs:text-[34px] text-[26px]
                       italic font-serif uppercase leading-tight"
            style={{
              background: "linear-gradient(135deg, #e2d9f3 0%, #c084fc 40%, #f472b6 75%, #fb923c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Achievements
          </h1>

          <div
            className="mx-auto mt-2 h-[2px] w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)" }}
          />

          <p
            className="mt-2 font-mono text-[9px] tracking-[0.3em] uppercase font-light"
            style={{ color: "rgba(196,181,253,0.45)" }}
          >
            Certifications &amp; milestones
          </p>
        </motion.div>
      </div>

      {/* ── Scroll area ── */}
      <div className="relative flex items-center">

        {/* LEFT arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 w-9 h-9 flex items-center justify-center
                     rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(13,13,26,0.82)",
            border: "1px solid rgba(124,111,205,0.28)",
            color: "#c4b5fd",
            fontSize: "20px",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,111,205,0.6)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(124,111,205,0.28)"}
        >
          &#8249;
        </button>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-none px-12 py-3"
        >
          {Achievements.map((project, index) => (
            <ProjectCard
              key={`achievement-${index}`}
              index={index}
              items={project.item}
              {...project}
            />
          ))}
        </div>

        {/* RIGHT arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 w-9 h-9 flex items-center justify-center
                     rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(13,13,26,0.82)",
            border: "1px solid rgba(124,111,205,0.28)",
            color: "#c4b5fd",
            fontSize: "20px",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,111,205,0.6)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(124,111,205,0.28)"}
        >
          &#8250;
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
