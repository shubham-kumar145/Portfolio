import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CodingProfile } from "../constants";

/* ── platform accent colours ── */
const platformAccent = {
  LeetCode:      { color: "#f97316", glow: "rgba(249,115,22,0.22)",   border: "rgba(249,115,22,0.32)"   },
  Codeforces:    { color: "#60a5fa", glow: "rgba(96,165,250,0.22)",   border: "rgba(96,165,250,0.32)"   },
  GeeksforGeeks: { color: "#34d399", glow: "rgba(52,211,153,0.22)",   border: "rgba(52,211,153,0.32)"   },
  Codolio:       { color: "#c084fc", glow: "rgba(192,132,252,0.22)",  border: "rgba(192,132,252,0.32)"  },
};

const getAccent = (name = "") => {
  for (const [key, val] of Object.entries(platformAccent)) {
    if (name.toLowerCase().includes(key.toLowerCase())) return val;
  }
  return { color: "#c4b5fd", glow: "rgba(124,111,205,0.22)", border: "rgba(124,111,205,0.32)" };
};

function hexToRgb(hex = "#ffffff") {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

const ProfileCard = ({ index, name, username, link, image, achievements }) => {
  const accent = getAccent(name);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.55)}
      className="group relative flex flex-col rounded-[16px] overflow-hidden flex-1 min-w-0"
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

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] font-medium tracking-[0.1em] uppercase
                     px-2 py-[3px] rounded-[5px] transition-all duration-200"
          style={{ color: "#22d3ee", border: "1px solid rgba(34,211,238,0.28)" }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(34,211,238,0.1)";
            e.currentTarget.style.borderColor = "rgba(34,211,238,0.55)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(34,211,238,0.28)";
          }}
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
          alt={name}
          className="w-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
          style={{ display: "block", height: "169px", objectFit: "cover" }}
        />
      </div>

      {/* ── body ── */}
      <div className="flex flex-col gap-2 p-3 flex-1">

        {/* username */}
        <div className="flex items-center gap-1.5">
          <span
            className="font-mono text-[9px] tracking-[0.1em]"
            style={{ color: "rgba(196,181,253,0.5)" }}
          >
            @
          </span>
          <span
            className="font-mono text-[12px] font-semibold"
            style={{ color: "#e2d9f3" }}
          >
            {username}
          </span>
        </div>

        {/* achievements */}
        {achievements && achievements.length > 0 && (
          <div
            className="rounded-[8px] px-3 py-2 flex flex-col gap-1.5"
            style={{
              background: "rgba(0,0,0,0.28)",
              border: `1px solid ${accent.border}`,
            }}
          >
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                {item.Rank && (
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-[2px] rounded-[3px]"
                      style={{
                        color: accent.color,
                        background: `rgba(${hexToRgb(accent.color)},0.1)`,
                        border: `1px solid ${accent.border}`,
                      }}
                    >
                      RANK
                    </span>
                    <span
                      className="font-mono text-[12px] font-bold"
                      style={{ color: "#f5d87a" }}
                    >
                      {item.Rank}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-[2px] rounded-[3px]"
                    style={{
                      color: "#34d399",
                      background: "rgba(52,211,153,0.09)",
                      border: "1px solid rgba(52,211,153,0.22)",
                    }}
                  >
                    SOLVED
                  </span>
                  <span
                    className="font-mono text-[12px] font-bold"
                    style={{ color: "#e2d9f3" }}
                  >
                    {item.problem}
                  </span>
                </div>
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
const Coding = () => {
  return (
    <>
      {/* ── Section header ── */}
      <div className="mt-2 mb-5 text-center">
        <motion.div variants={textVariant()}>
          <p
            className="font-mono text-[10px] tracking-[0.35em] uppercase italic font-serif"
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
            My achievements across platforms
          </p>
        </motion.div>
      </div>

      {/* ── 3-column grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CodingProfile.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Coding, "coding");
