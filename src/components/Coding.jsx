import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CodingProfile } from "../constants";

/* ── platform accent colours ── */
const platformAccent = {
  leetcode:      { color: "#f97316", glow: "rgba(249,115,22,0.22)",  border: "rgba(249,115,22,0.32)"  },
  codechef:      { color: "#d97706", glow: "rgba(217,119,6,0.22)",   border: "rgba(217,119,6,0.32)"   },
  codeforces:    { color: "#60a5fa", glow: "rgba(96,165,250,0.22)",  border: "rgba(96,165,250,0.32)"  },
  geeksforgeeks: { color: "#34d399", glow: "rgba(52,211,153,0.22)",  border: "rgba(52,211,153,0.32)"  },
  codolio:       { color: "#c084fc", glow: "rgba(192,132,252,0.22)", border: "rgba(192,132,252,0.32)" },
};

const defaultAccent = {
  color: "#c4b5fd",
  glow: "rgba(124,111,205,0.22)",
  border: "rgba(124,111,205,0.32)",
};

const getAccent = (name = "") => {
  const key = name.toLowerCase().replace(/\s+/g, "");
  for (const [platform, val] of Object.entries(platformAccent)) {
    if (key.includes(platform)) return val;
  }
  return defaultAccent;
};

const hexToRgb = (hex = "#ffffff") => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

/* ── small labelled stat row ── */
const StatRow = ({ label, value, labelColor, labelBg, labelBorder, valueColor }) => (
  <div className="flex items-start gap-2 min-w-0">
    <span
      className="font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-[2px] rounded-[3px] flex-shrink-0 mt-[2px]"
      style={{ color: labelColor, background: labelBg, border: `1px solid ${labelBorder}` }}
    >
      {label}
    </span>
    <span
      className="font-mono text-[12px] font-bold leading-snug break-words min-w-0"
      style={{ color: valueColor }}
    >
      {value}
    </span>
  </div>
);

/* ── profile card ── */
const ProfileCard = ({ index, name, username, link, image, achievements }) => {
  const accent = getAccent(name);
  const isAggregate = name.toLowerCase().includes("codolio");

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.55)}
      className="group relative flex flex-col rounded-[16px] overflow-hidden
                 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
      style={{
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

      {/* ── platform label strip ── */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{
          background: "rgba(0,0,0,0.35)",
          borderBottom: "1px solid rgba(124,111,205,0.1)",
        }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{ background: accent.color, boxShadow: `0 0 6px ${accent.color}` }}
          />
          <span
            className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase truncate"
            style={{ color: accent.color }}
          >
            {name}
          </span>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${name} profile`}
          className="font-mono text-[9px] font-medium tracking-[0.1em] uppercase flex-shrink-0
                     px-2 py-[3px] rounded-[5px] transition-all duration-200
                     hover:bg-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.55)]"
          style={{ color: "#22d3ee", border: "1px solid rgba(34,211,238,0.28)" }}
        >
          VISIT ↗
        </a>
      </div>

      {/* ── screenshot ── */}
      <div
        className="w-full overflow-hidden flex-shrink-0"
        style={{ background: "#0a0a18", borderBottom: "1px solid rgba(124,111,205,0.1)" }}
      >
        <img
          src={image}
          alt={`${name} profile of ${username}`}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ display: "block", height: "169px" }}
        />
      </div>

      {/* ── body ── */}
      <div className="flex flex-col gap-2 p-3 flex-1">
        {/* username */}
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="font-mono text-[9px] tracking-[0.1em]" style={{ color: "rgba(196,181,253,0.5)" }}>
            @
          </span>
          <span className="font-mono text-[12px] font-semibold truncate" style={{ color: "#e2d9f3" }}>
            {username}
          </span>
        </div>

        {/* stats */}
        {achievements?.length > 0 && (
          <div
            className="rounded-[8px] px-3 py-2 flex flex-col gap-1.5"
            style={{ background: "rgba(0,0,0,0.28)", border: `1px solid ${accent.border}` }}
          >
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                {item.Rank && (
                  <StatRow
                    label={isAggregate ? "STATS" : "RATING"}
                    value={item.Rank}
                    labelColor={accent.color}
                    labelBg={`rgba(${hexToRgb(accent.color)},0.1)`}
                    labelBorder={accent.border}
                    valueColor="#f5d87a"
                  />
                )}
                {item.problem && (
                  <StatRow
                    label="SOLVED"
                    value={item.problem}
                    labelColor="#34d399"
                    labelBg="rgba(52,211,153,0.09)"
                    labelBorder="rgba(52,211,153,0.22)"
                    valueColor="#e2d9f3"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* bottom bar */}
      <div
        className="h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accent.color}, #ec4899, #7c3aed)` }}
      />
    </motion.div>
  );
};

/* ═══════════════════════════════
   Coding Section
═══════════════════════════════ */
const Coding = () => (
  <>
    {/* ── Section header ── */}
    <div className="mt-2 mb-5 text-center">
      <motion.div variants={textVariant()}>
        <p
          className="text-[10px] tracking-[0.35em] uppercase italic font-serif"
          style={{ color: "#7c6fcd" }}
        >
          Where I compete,
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
          Coding Platforms
        </h1>

        <div
          className="mx-auto mt-2 h-[2px] w-24 rounded-full"
          style={{ background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)" }}
        />

        <p
          className="mt-2 font-mono text-[9px] tracking-[0.3em] uppercase font-light"
          style={{ color: "rgba(196,181,253,0.45)" }}
        >
          980+ problems · 45 contests · 5 platforms
        </p>
      </motion.div>
    </div>

    {/* ── centred, wrapping card row ── */}
    <div className="flex flex-wrap justify-center gap-4">
      {CodingProfile.map((profile, index) => (
        <ProfileCard key={profile.name} index={index} {...profile} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Coding, "coding");
