// import { useEffect, useRef, useState } from "react";
// import { SectionWrapper } from "../hoc";
// import { educationData } from "../constants";

// /* ── Syntax token builder ── */
// function buildCodeLines(data) {
//   const lines = [];
//   const push = (raw, tokens) => lines.push({ raw, tokens });

//   push(`const education = [`, [
//     { t: "kw", v: "const " },
//     { t: "id", v: "education" },
//     { t: "pl", v: " = [" },
//   ]);

//   data.forEach((edu, i) => {
//     const shortDegree = edu.degree.length > 28 ? edu.degree.slice(0, 28) + "…" : edu.degree;
//     const shortSchool = edu.school.length > 28 ? edu.school.slice(0, 28) + "…" : edu.school;
//     push(`  {`, [{ t: "pl", v: "  {" }]);
//     push(`    period: "${edu.period}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "period" }, { t: "pl", v: ": " }, { t: "str", v: `"${edu.period}"` }, { t: "pl", v: "," }]);
//     push(`    degree: "${shortDegree}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "degree" }, { t: "pl", v: ": " }, { t: "str", v: `"${shortDegree}"` }, { t: "pl", v: "," }]);
//     push(`    school: "${shortSchool}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "school" }, { t: "pl", v: ": " }, { t: "str", v: `"${shortSchool}"` }, { t: "pl", v: "," }]);
//     push(`    score: "${edu.score}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "score" }, { t: "pl", v: ": " }, { t: "score", v: `"${edu.score}"` }, { t: "pl", v: "," }]);
//     push(`    status: "${edu.status}",`, [{ t: "pl", v: "    " }, { t: "prop", v: "status" }, { t: "pl", v: ": " }, { t: edu.status === "ongoing" ? "green" : "purple", v: `"${edu.status}"` }, { t: "pl", v: "," }]);
//     push(i < data.length - 1 ? `  },` : `  }`, [{ t: "pl", v: i < data.length - 1 ? "  }," : "  }" }]);
//   });

//   push(`];`, [{ t: "pl", v: "];" }]);
//   push(`export default Education;`, [{ t: "kw", v: "export default " }, { t: "score", v: "Education" }, { t: "pl", v: ";" }]);
//   return lines;
// }

// const TOKEN_COLORS = {
//   kw: "#cba6f7",
//   id: "#89b4fa",
//   prop: "#89dceb",
//   str: "#a6e3a1",
//   score: "#f9e2af",
//   pl: "#cdd6f4",
//   green: "#22c55e",
//   purple: "#a78bfa",
//   comment: "#6b7280",
// };

// const CODE_LINES = buildCodeLines(educationData);
// const FULL_CODE = CODE_LINES.map(l => l.raw).join("\n");

// /* ════════════════════════════════
//    Education Component
// ════════════════════════════════ */
// const Education = () => {
//   const cardRefs = useRef([]);
//   const sectionRef = useRef(null);

//   const [typedChars, setTypedChars] = useState(0);
//   const [started, setStarted] = useState(false);
//   const [showCursor, setShowCursor] = useState(true);
//   const [activeCard, setActiveCard] = useState(null);
//   const timerRef = useRef(null);

//   /* ── Intersection observers ── */
//   useEffect(() => {
//     const cardObs = new IntersectionObserver(
//       (entries) => entries.forEach(e => {
//         if (e.isIntersecting) {
//           e.target.style.opacity = "1";
//           e.target.style.transform = "translateX(0)";
//         }
//       }),
//       { threshold: 0.12 }
//     );
//     cardRefs.current.forEach(el => el && cardObs.observe(el));

//     const secObs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) secObs.observe(sectionRef.current);

//     return () => { cardObs.disconnect(); secObs.disconnect(); };
//   }, [started]);

//   /* ── Typing animation ── */
//   useEffect(() => {
//     if (!started) return;
//     let char = 0;
//     const type = () => {
//       char++;
//       setTypedChars(char);
//       if (char < FULL_CODE.length) timerRef.current = setTimeout(type, 16);
//     };
//     timerRef.current = setTimeout(type, 400);
//     return () => clearTimeout(timerRef.current);
//   }, [started]);

//   /* ── Blinking cursor ── */
//   useEffect(() => {
//     const id = setInterval(() => setShowCursor(v => !v), 520);
//     return () => clearInterval(id);
//   }, []);

//   /* ── Render syntax-highlighted typed code ── */
//   const renderCode = () => {
//     let charsLeft = typedChars;
//     return CODE_LINES.map((line, li) => {
//       if (charsLeft <= 0) return null;
//       const lineChars = Math.min(charsLeft, line.raw.length);
//       charsLeft -= line.raw.length + 1;

//       if (line.raw.length === 0) {
//         return <div key={li} style={{ height: "1.9em" }} />;
//       }

//       let cursor = 0;
//       const spans = line.tokens.map((tok, ti) => {
//         if (cursor >= lineChars) return null;
//         const visible = tok.v.slice(0, lineChars - cursor);
//         cursor += tok.v.length;
//         return (
//           <span key={ti} style={{ color: TOKEN_COLORS[tok.t] || "#cdd6f4" }}>
//             {visible}
//           </span>
//         );
//       });

//       const isCurrentLine = charsLeft >= -line.raw.length && charsLeft <= 0 && typedChars < FULL_CODE.length;

//       return (
//         <div
//           key={li}
//           style={{
//             display: "flex",
//             alignItems: "baseline",
//             fontSize: 12,
//             lineHeight: "1.9",
//             whiteSpace: "pre",
//             paddingLeft: 4,
//             borderRadius: 3,
//             background: isCurrentLine ? "rgba(139,92,246,0.07)" : "transparent",
//           }}
//         >
//           <span style={{
//             display: "inline-block",
//             width: 28,
//             textAlign: "right",
//             marginRight: 18,
//             color: isCurrentLine ? "#6d5fac" : "#313a45",
//             userSelect: "none",
//             flexShrink: 0,
//             fontSize: 11,
//             fontFamily: "'JetBrains Mono', 'Courier New', monospace",
//           }}>
//             {li + 1}
//           </span>
//           {spans}
//           {isCurrentLine && (
//             <span style={{
//               display: "inline-block",
//               width: 2,
//               height: "0.95em",
//               background: showCursor ? "#a78bfa" : "transparent",
//               marginLeft: 1,
//               verticalAlign: "text-bottom",
//               transition: "background 0.08s",
//               borderRadius: 1,
//             }} />
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <section
//       id="education"
//       ref={sectionRef}
//       style={{
//         background: "#0d0d1a",
//         minHeight: "100vh",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* ── Global styles ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

//         .edu-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 3rem;
//           align-items: start;
//         }
//         @media (max-width: 768px) {
//           .edu-grid { grid-template-columns: 1fr; }
//           .edu-code-panel { display: none !important; }
//         }

//         .edu-card {
//           opacity: 0;
//           transform: translateX(-24px);
//           transition-property: opacity, transform, background, border-color, box-shadow;
//           transition-duration: 0.55s, 0.55s, 0.22s, 0.22s, 0.22s;
//           transition-timing-function: cubic-bezier(.22,.68,0,1.2);
//         }
//         .edu-card:hover {
//           background: rgba(139,92,246,0.07) !important;
//           border-color: rgba(139,92,246,0.38) !important;
//           box-shadow: 0 8px 40px rgba(124,58,237,0.15), inset 0 0 0 1px rgba(139,92,246,0.12) !important;
//         }
//         .edu-card:hover .edu-card-dot {
//           transform: scale(1.35);
//           box-shadow: 0 0 0 6px rgba(139,92,246,0.12) !important;
//         }

//         .score-badge {
//           transition: transform 0.2s, background 0.2s;
//         }
//         .edu-card:hover .score-badge {
//           transform: translateY(-1px);
//         }

//         .code-line-hover:hover { background: rgba(139,92,246,0.06); }

//         .timeline-line {
//           position: absolute;
//           left: 0;
//           top: 24px;
//           bottom: 0;
//           width: 2px;
//           background: linear-gradient(to bottom, #7c3aed 0%, #4c1d95 60%, transparent 100%);
//         }
//         .timeline-fill {
//           width: 100%;
//           background: linear-gradient(to bottom, #a78bfa, #7c3aed);
//           animation: fillDown 1.4s ease forwards;
//           animation-delay: 0.3s;
//           height: 0;
//         }
//         @keyframes fillDown { to { height: 100%; } }
//       `}</style>

//       {/* ── Ambient blobs ── */}
//       <div style={{ position: "absolute", top: "8%", left: "-8%", width: 320, height: 320, background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: "12%", right: "-6%", width: 260, height: 260, background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", top: "55%", left: "50%", width: 200, height: 200, background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

//       <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

//         {/* ── Section heading ── */}
//         <div style={{ marginBottom: "3.5rem" }}>


//           <h2 style={{
//             fontFamily: "'Playfair Display', serif",
//             fontSize: "clamp(2rem, 5vw, 3.4rem)",
//             fontWeight: 700,
//             margin: 0,
//             lineHeight: 1.1,
//             letterSpacing: "-0.01em",
//             background: "linear-gradient(135deg, #f5f0ff 0%, #c4b5fd 50%, #a78bfa 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}>
//             Education
//           </h2>

//           {/* Gradient underline */}
//           <div style={{
//             marginTop: 14,
//             width: 56,
//             height: 2,
//             borderRadius: 2,
//             background: "linear-gradient(90deg, #7c3aed, #ec4899)",
//           }} />
//         </div>

//         <div className="edu-grid">

//           {/* ════════════════════
//               LEFT — Timeline cards
//           ════════════════════ */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
//             {educationData.map((edu, i) => {
//               const isOngoing = edu.status === "ongoing";
//               const accentColor = isOngoing ? "#22c55e" : "#fbbf24";
//               const accentLight = isOngoing ? "rgba(34,197,94,0.12)" : "rgba(139,92,246,0.10)";
//               const accentBorder = isOngoing ? "rgba(34,197,94,0.28)" : "rgba(139,92,246,0.22)";
//               const delay = `${i * 0.18}s`;

//               return (
//                 <div
//                   key={i}
//                   style={{ display: "flex", gap: 0, position: "relative" }}
//                 >
//                   {/* ── Vertical timeline strip ── */}
//                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 42, flexShrink: 0 }}>
//                     {/* Dot */}
//                     <div
//                       className="edu-card-dot"
//                       style={{
//                         width: 14,
//                         height: 14,
//                         borderRadius: "50%",
//                         background: accentColor,
//                         boxShadow: `0 0 0 3px rgba(13,13,26,1), 0 0 0 5px ${accentColor}55`,
//                         marginTop: 26,
//                         flexShrink: 0,
//                         zIndex: 2,
//                         transition: "transform 0.25s, box-shadow 0.25s",
//                       }}
//                     />
//                     {/* Connector line */}
//                     {i < educationData.length - 1 && (
//                       <div style={{
//                         flex: 1,
//                         width: 2,
//                         background: `linear-gradient(to bottom, ${accentColor}66, rgba(139,92,246,0.15))`,
//                         marginTop: 4,
//                         marginBottom: -4,
//                         borderRadius: 2,
//                         minHeight: 32,
//                       }} />
//                     )}
//                   </div>

//                   {/* ── Card ── */}
//                   <div
//                     ref={el => { cardRefs.current[i] = el; }}
//                     className="edu-card"
//                     style={{
//                       flex: 1,
//                       marginLeft: 16,
//                       marginBottom: i < educationData.length - 1 ? 20 : 0,
//                       background: "rgba(19,19,42,0.85)",
//                       border: "1px solid rgba(124,111,205,0.16)",
//                       borderRadius: 16,
//                       padding: "22px 24px",
//                       cursor: "default",
//                       transitionDelay: delay,
//                       backdropFilter: "blur(8px)",
//                     }}
//                   >
//                     {/* Top row: period pill + score badge */}
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>

//                       {/* Period pill */}
//                       <span style={{
//                         fontFamily: "'JetBrains Mono', monospace",
//                         fontSize: 10,
//                         fontWeight: 500,
//                         letterSpacing: "0.1em",
//                         textTransform: "uppercase",
//                         color: accentColor,
//                         background: accentLight,
//                         border: `1px solid ${accentBorder}`,
//                         padding: "3px 10px",
//                         borderRadius: 5,
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: 6,
//                       }}>
//                         {isOngoing && (
//                           <span style={{
//                             width: 5, height: 5, borderRadius: "50%",
//                             background: "#22c55e",
//                             boxShadow: "0 0 4px rgba(34,197,94,0.8)",
//                             animation: "pulse 1.5s infinite",
//                             display: "inline-block",
//                           }} />
//                         )}
//                         {edu.period}
//                       </span>

//                       {/* Score badge */}
//                       <div
//                         className="score-badge"
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           alignItems: "center",
//                           background: "rgba(251,191,36,0.08)",
//                           border: "1px solid rgba(251,191,36,0.22)",
//                           borderRadius: 8,
//                           padding: "6px 14px",
//                           minWidth: 72,
//                         }}
//                       >
//                         <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#9d8f50", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 1 }}>
//                           {edu.scoreLabel}
//                         </span>
//                         <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#fbbf24", lineHeight: 1 }}>
//                           {edu.score}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Degree */}
//                     <p style={{
//                       fontFamily: "'DM Sans', sans-serif",
//                       fontSize: 15,
//                       fontWeight: 700,
//                       color: "#f0ecff",
//                       lineHeight: 1.35,
//                       margin: "0 0 6px",
//                       letterSpacing: "0.01em",
//                     }}>
//                       {edu.degree}
//                     </p>

//                     {/* School */}
//                     <p style={{
//                       fontFamily: "'DM Sans', sans-serif",
//                       fontSize: 12.5,
//                       fontWeight: 400,
//                       color: "#7c7299",
//                       margin: "0 0 10px",
//                       lineHeight: 1.4,
//                     }}>
//                       {edu.school}
//                       <span style={{ color: "#4f4870", marginLeft: 6 }}>· {edu.location}</span>
//                     </p>

//                     {/* Detail / highlight */}
//                     <div style={{
//                       borderTop: "1px solid rgba(124,111,205,0.1)",
//                       paddingTop: 10,
//                       marginTop: 2,
//                     }}>
//                       <p style={{
//                         fontFamily: "'JetBrains Mono', monospace",
//                         fontSize: 10.5,
//                         color: "#6b6490",
//                         margin: 0,
//                         letterSpacing: "0.03em",
//                       }}>
//                         <span style={{ color: "#2e2a40", marginRight: 6 }}>→</span>
//                         {edu.detail}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* ════════════════════
//               RIGHT — Code editor
//           ════════════════════ */}
//           <div className="edu-code-panel" style={{ position: "sticky", top: "2rem" }}>

//             {/* Outer glow ring */}
//             <div style={{
//               borderRadius: 18,
//               padding: 1,
//               background: "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(236,72,153,0.18), rgba(139,92,246,0.05))",
//             }}>
//               <div style={{
//                 background: "#161b22",
//                 borderRadius: 17,
//                 overflow: "hidden",
//                 boxShadow: "0 0 80px rgba(124,58,237,0.1), 0 24px 48px rgba(0,0,0,0.4)",
//               }}>

//                 {/* Title bar */}
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 8,
//                   padding: "12px 18px",
//                   background: "#1c2128",
//                   borderBottom: "1px solid rgba(255,255,255,0.055)",
//                 }}>
//                   {/* Traffic lights */}
//                   <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
//                     <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block", boxShadow: "0 0 4px rgba(255,95,87,0.5)" }} />
//                     <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block", boxShadow: "0 0 4px rgba(254,188,46,0.4)" }} />
//                     <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block", boxShadow: "0 0 4px rgba(40,200,64,0.4)" }} />
//                   </div>

//                   <div style={{ marginLeft: 14, display: "flex", alignItems: "center", gap: 10 }}>
//                     <span style={{
//                       fontFamily: "'JetBrains Mono', monospace",
//                       fontSize: 12,
//                       color: "#8b9096",
//                     }}>
//                       Education.jsx
//                     </span>
//                     <span style={{
//                       fontFamily: "'JetBrains Mono', monospace",
//                       fontSize: 10,
//                       color: "#30363d",
//                       background: "#1c2128",
//                       border: "1px solid #30363d",
//                       borderRadius: 4,
//                       padding: "1px 7px",
//                     }}>
//                       react
//                     </span>
//                   </div>

//                   {/* Right — status indicator */}
//                   <div style={{ marginLeft: "auto" }}>
//                     {typedChars < FULL_CODE.length && typedChars > 0 && (
//                       <span style={{
//                         fontFamily: "'JetBrains Mono', monospace",
//                         fontSize: 10,
//                         color: "#22c55e",
//                         letterSpacing: "0.06em",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 5,
//                       }}>
//                         <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 4px rgba(34,197,94,0.7)", display: "inline-block", animation: "pulse 1.2s infinite" }} />
//                         typing…
//                       </span>
//                     )}
//                     {typedChars >= FULL_CODE.length && (
//                       <span style={{
//                         fontFamily: "'JetBrains Mono', monospace",
//                         fontSize: 10,
//                         color: "#a78bfa",
//                         letterSpacing: "0.05em",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 5,
//                       }}>
//                         <span style={{ color: "#22c55e" }}>✓</span> compiled
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Tab bar */}
//                 <div style={{
//                   display: "flex",
//                   background: "#161b22",
//                   borderBottom: "1px solid rgba(255,255,255,0.04)",
//                   paddingLeft: 12,
//                 }}>
//                   <div style={{
//                     fontFamily: "'JetBrains Mono', monospace",
//                     fontSize: 11,
//                     color: "#a78bfa",
//                     padding: "7px 16px",
//                     borderBottom: "2px solid #7c3aed",
//                     cursor: "default",
//                   }}>
//                     Education.jsx
//                   </div>
//                 </div>

//                 {/* Code body */}
//                 <div style={{
//                   padding: "18px 16px 20px",
//                   fontFamily: "'JetBrains Mono', 'Courier New', monospace",
//                   overflowX: "auto",
//                   minHeight: 520,
//                   background: "linear-gradient(180deg, #161b22 0%, #13182e 100%)",
//                 }}>
//                   {started ? (
//                     <div>{renderCode()}</div>
//                   ) : (
//                     <div style={{
//                       color: "#3d4451",
//                       fontSize: 12,
//                       fontFamily: "'JetBrains Mono', monospace",
//                       lineHeight: "1.9",
//                     }}>
//                       <span style={{ color: "#6d5fac" }}>// </span>scroll to load…
//                     </div>
//                   )}
//                 </div>

//                 {/* Status bar */}
//                 <div style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "6px 16px",
//                   background: "#7c3aed",
//                   fontSize: 10,
//                   fontFamily: "'JetBrains Mono', monospace",
//                 }}>
//                   <span style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.05em" }}>
//                     Ln {Math.min(CODE_LINES.length, Math.max(1, Math.ceil(typedChars / 28)))}, Col 1
//                   </span>
//                   <div style={{ display: "flex", gap: 16 }}>
//                     <span style={{ color: "rgba(255,255,255,0.65)" }}>JSX</span>
//                     <span style={{ color: "rgba(255,255,255,0.65)" }}>UTF-8</span>
//                     <span style={{ color: "rgba(255,255,255,0.65)" }}>React 18</span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50%       { opacity: 0.35; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SectionWrapper(Education, "education");

import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { educationData } from "../constants";

/* ════════════════════════════════
   Syntax tokens
════════════════════════════════ */
const TOKEN_COLORS = {
  kw: "#cba6f7",
  id: "#89b4fa",
  prop: "#89dceb",
  str: "#a6e3a1",
  score: "#f9e2af",
  pl: "#cdd6f4",
  green: "#22c55e",
  purple: "#a78bfa",
};

const truncate = (text, max = 28) => (text.length > max ? `${text.slice(0, max)}…` : text);

function buildCodeLines(data) {
  const lines = [];
  const push = (tokens) => lines.push({ tokens, raw: tokens.map((t) => t.v).join("") });
  const prop = (name, value, color = "str", comma = true) =>
    push([
      { t: "pl", v: "    " },
      { t: "prop", v: name },
      { t: "pl", v: ": " },
      { t: color, v: `"${value}"` },
      ...(comma ? [{ t: "pl", v: "," }] : []),
    ]);

  push([{ t: "kw", v: "const " }, { t: "id", v: "education" }, { t: "pl", v: " = [" }]);

  data.forEach((edu, i) => {
    push([{ t: "pl", v: "  {" }]);
    prop("period", edu.period);
    prop("degree", truncate(edu.degree));
    prop("school", truncate(edu.school));
    prop("score", edu.score, "score");
    prop("status", edu.status, edu.status === "ongoing" ? "green" : "purple", false);
    push([{ t: "pl", v: i < data.length - 1 ? "  }," : "  }" }]);
  });

  push([{ t: "pl", v: "];" }]);
  push([{ t: "kw", v: "export default " }, { t: "score", v: "education" }, { t: "pl", v: ";" }]);
  return lines;
}

const CODE_LINES = buildCodeLines(educationData);
const TOTAL_CHARS = CODE_LINES.reduce((sum, l) => sum + l.raw.length + 1, 0);
const TYPE_SPEED = 16;

/* ════════════════════════════════
   Code editor panel (isolated re-renders)
════════════════════════════════ */
const CodePanel = ({ started }) => {
  const [typedChars, setTypedChars] = useState(0);
  const done = typedChars >= TOTAL_CHARS;

  useEffect(() => {
    if (!started) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setTypedChars(TOTAL_CHARS);
      return;
    }

    let char = 0;
    let timer = setTimeout(function type() {
      char += 1;
      setTypedChars(char);
      if (char < TOTAL_CHARS) timer = setTimeout(type, TYPE_SPEED);
    }, 400);

    return () => clearTimeout(timer);
  }, [started]);

  /* figure out which line is being typed */
  let charsLeft = typedChars;
  let currentLineIndex = 0;
  const rendered = CODE_LINES.map((line, li) => {
    if (charsLeft <= 0) return null;

    const lineChars = Math.min(charsLeft, line.raw.length);
    const isCurrent = !done && charsLeft <= line.raw.length + 1;
    if (isCurrent) currentLineIndex = li;
    charsLeft -= line.raw.length + 1;

    let cursor = 0;
    const spans = line.tokens.map((tok, ti) => {
      if (cursor >= lineChars) return null;
      const visible = tok.v.slice(0, lineChars - cursor);
      cursor += tok.v.length;
      return (
        <span key={ti} style={{ color: TOKEN_COLORS[tok.t] || TOKEN_COLORS.pl }}>
          {visible}
        </span>
      );
    });

    return (
      <div key={li} className={`edu-code-line ${isCurrent ? "is-current" : ""}`}>
        <span className="edu-line-no">{li + 1}</span>
        {spans}
        {isCurrent && <span className="edu-cursor" aria-hidden="true" />}
      </div>
    );
  });

  const lineNumber = done ? CODE_LINES.length : currentLineIndex + 1;

  return (
    <div className="edu-code-panel" aria-hidden="true">
      <div className="edu-code-ring">
        <div className="edu-code-window">
          {/* Title bar */}
          <div className="edu-titlebar">
            <div style={{ display: "flex", gap: 7 }}>
              <span className="edu-light" style={{ background: "#ff5f57" }} />
              <span className="edu-light" style={{ background: "#febc2e" }} />
              <span className="edu-light" style={{ background: "#28c840" }} />
            </div>
            <span className="edu-filename">Education.jsx</span>
            <span className="edu-lang-pill">react</span>

            <div style={{ marginLeft: "auto" }}>
              {started && !done && typedChars > 0 && (
                <span className="edu-status" style={{ color: "#22c55e" }}>
                  <span className="edu-pulse-dot" /> typing…
                </span>
              )}
              {done && (
                <span className="edu-status" style={{ color: "#a78bfa" }}>
                  <span style={{ color: "#22c55e" }}>✓</span> compiled
                </span>
              )}
            </div>
          </div>

          {/* Tab bar */}
          <div className="edu-tabbar">
            <div className="edu-tab">Education.jsx</div>
          </div>

          {/* Code body */}
          <div className="edu-code-body">
            {started ? (
              rendered
            ) : (
              <div className="edu-code-line">
                <span style={{ color: "#6d5fac" }}>// </span>
                <span style={{ color: "#3d4451" }}>scroll to load…</span>
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="edu-statusbar">
            <span>Ln {lineNumber}, Col 1</span>
            <div style={{ display: "flex", gap: 16, opacity: 0.75 }}>
              <span>JSX</span>
              <span>UTF-8</span>
              <span>React 18</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════
   Timeline card
════════════════════════════════ */
const EduCard = ({ edu, index, isLast }) => {
  const isOngoing = edu.status === "ongoing";
  const accent = isOngoing ? "#22c55e" : "#fbbf24";
  const accentLight = isOngoing ? "rgba(34,197,94,0.12)" : "rgba(251,191,36,0.10)";
  const accentBorder = isOngoing ? "rgba(34,197,94,0.28)" : "rgba(251,191,36,0.25)";

  return (
    <li style={{ display: "flex", position: "relative", listStyle: "none" }}>
      {/* Timeline strip */}
      <div className="edu-strip" aria-hidden="true">
        <div
          className="edu-card-dot"
          style={{ background: accent, boxShadow: `0 0 0 3px #0d0d1a, 0 0 0 5px ${accent}55` }}
        />
        {!isLast && (
          <div
            className="edu-connector"
            style={{ background: `linear-gradient(to bottom, ${accent}66, rgba(139,92,246,0.15))` }}
          />
        )}
      </div>

      {/* Card */}
      <article
        className="edu-card"
        style={{ marginBottom: isLast ? 0 : 20, transitionDelay: `${index * 0.15}s` }}
      >
        <div className="edu-card-top">
          <span
            className="edu-period"
            style={{ color: accent, background: accentLight, border: `1px solid ${accentBorder}` }}
          >
            {isOngoing && <span className="edu-pulse-dot" />}
            {edu.period}
          </span>

          <div className="score-badge">
            <span className="score-label">{edu.scoreLabel}</span>
            <span className="score-value">{edu.score}</span>
          </div>
        </div>

        <h3 className="edu-degree">{edu.degree}</h3>
        <p className="edu-school">
          {edu.school}
          <span className="edu-location"> · {edu.location}</span>
        </p>

        {edu.detail && (
          <p className="edu-detail">
            <span aria-hidden="true">→ </span>
            {edu.detail}
          </p>
        )}
      </article>
    </li>
  );
};

/* ════════════════════════════════
   Education section
════════════════════════════════ */
const Education = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCardsVisible(true);
      setStarted(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`edu-section ${cardsVisible ? "cards-in" : ""}`}>
      <style>{`
        .edu-section {
          position: relative;
          overflow: hidden;
          padding: 1rem 0 2rem;
        }
        .edu-blob { position: absolute; border-radius: 50%; pointer-events: none; }

        .edu-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 700;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #f5f0ff 0%, #c4b5fd 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .edu-grid { grid-template-columns: 1fr; }
          .edu-code-panel { display: none; }
        }

        /* timeline */
        .edu-timeline { margin: 0; padding: 0; display: flex; flex-direction: column; }
        .edu-strip { display: flex; flex-direction: column; align-items: center; width: 42px; flex-shrink: 0; }
        .edu-card-dot {
          width: 14px; height: 14px; border-radius: 50%;
          margin-top: 26px; flex-shrink: 0; z-index: 2;
          transition: transform 0.25s;
        }
        .edu-connector { flex: 1; width: 2px; margin-top: 4px; margin-bottom: -4px; border-radius: 2px; min-height: 32px; }

        /* card */
        .edu-card {
          flex: 1;
          min-width: 0;
          margin-left: 16px;
          background: rgba(19,19,42,0.85);
          border: 1px solid rgba(124,111,205,0.16);
          border-radius: 16px;
          padding: 22px 24px;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateX(-24px);
          transition-property: opacity, transform, background, border-color, box-shadow;
          transition-duration: 0.55s, 0.55s, 0.22s, 0.22s, 0.22s;
          transition-timing-function: cubic-bezier(.22,.68,0,1.2);
        }
        .cards-in .edu-card { opacity: 1; transform: translateX(0); }
        .edu-card:hover {
          background: rgba(139,92,246,0.07);
          border-color: rgba(139,92,246,0.38);
          box-shadow: 0 8px 40px rgba(124,58,237,0.15);
        }
        li:hover .edu-card-dot { transform: scale(1.35); }

        .edu-card-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 8px; flex-wrap: wrap; margin-bottom: 14px;
        }
        .edu-period {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 5px;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .score-badge {
          display: flex; flex-direction: column; align-items: center;
          background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.22);
          border-radius: 8px; padding: 6px 14px; min-width: 72px;
          transition: transform 0.2s;
        }
        .edu-card:hover .score-badge { transform: translateY(-1px); }
        .score-label {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: #c9b96a; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1px;
        }
        .score-value {
          font-family: 'Playfair Display', Georgia, serif; font-size: 16px; font-weight: 700;
          color: #fbbf24; line-height: 1;
        }
        .edu-degree {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 15px; font-weight: 700; color: #f0ecff;
          line-height: 1.35; margin: 0 0 6px; letter-spacing: 0.01em;
        }
        .edu-school {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12.5px; color: #9a90bd; margin: 0 0 10px; line-height: 1.4;
        }
        .edu-location { color: #6f6795; }
        .edu-detail {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 10.5px; color: #8b84ad; margin: 0; letter-spacing: 0.03em; line-height: 1.6;
          border-top: 1px solid rgba(124,111,205,0.1); padding-top: 10px;
        }

        /* code panel */
        .edu-code-panel { position: sticky; top: 6rem; }
        .edu-code-ring {
          border-radius: 18px; padding: 1px;
          background: linear-gradient(135deg, rgba(139,92,246,0.35), rgba(236,72,153,0.18), rgba(139,92,246,0.05));
        }
        .edu-code-window {
          background: #161b22; border-radius: 17px; overflow: hidden;
          box-shadow: 0 0 80px rgba(124,58,237,0.1), 0 24px 48px rgba(0,0,0,0.4);
        }
        .edu-titlebar {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 18px; background: #1c2128;
          border-bottom: 1px solid rgba(255,255,255,0.055);
        }
        .edu-light { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
        .edu-filename { margin-left: 6px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #8b9096; }
        .edu-lang-pill {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #6e7681;
          border: 1px solid #30363d; border-radius: 4px; padding: 1px 7px;
        }
        .edu-status {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.06em;
          display: flex; align-items: center; gap: 5px;
        }
        .edu-tabbar { display: flex; background: #161b22; border-bottom: 1px solid rgba(255,255,255,0.04); padding-left: 12px; }
        .edu-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #a78bfa;
          padding: 7px 16px; border-bottom: 2px solid #7c3aed;
        }
        .edu-code-body {
          padding: 18px 16px 20px;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          overflow-x: auto; min-height: 480px;
          background: linear-gradient(180deg, #161b22 0%, #13182e 100%);
        }
        .edu-code-line {
          display: flex; align-items: baseline;
          font-size: 12px; line-height: 1.9; white-space: pre;
          padding-left: 4px; border-radius: 3px;
        }
        .edu-code-line.is-current { background: rgba(139,92,246,0.07); }
        .edu-line-no {
          display: inline-block; width: 28px; text-align: right; margin-right: 18px;
          color: #313a45; user-select: none; flex-shrink: 0; font-size: 11px;
        }
        .is-current .edu-line-no { color: #6d5fac; }
        .edu-cursor {
          display: inline-block; width: 2px; height: 0.95em; margin-left: 1px;
          background: #a78bfa; border-radius: 1px; vertical-align: text-bottom;
          animation: edu-blink 1s step-end infinite;
        }
        .edu-statusbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 16px; background: #7c3aed;
          font-size: 10px; font-family: 'JetBrains Mono', monospace;
          color: rgba(255,255,255,0.85); letter-spacing: 0.05em;
        }

        /* shared */
        .edu-pulse-dot {
          width: 5px; height: 5px; border-radius: 50%; display: inline-block;
          background: #22c55e; box-shadow: 0 0 4px rgba(34,197,94,0.8);
          animation: edu-pulse 1.4s infinite;
        }
        @keyframes edu-blink { 50% { opacity: 0; } }
        @keyframes edu-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        @media (prefers-reduced-motion: reduce) {
          .edu-card { transition: none; opacity: 1; transform: none; }
          .edu-cursor, .edu-pulse-dot { animation: none; }
        }
      `}</style>

      {/* Ambient blobs */}
      <div className="edu-blob" aria-hidden="true" style={{ top: "8%", left: "-8%", width: 320, height: 320, background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
      <div className="edu-blob" aria-hidden="true" style={{ bottom: "12%", right: "-6%", width: 260, height: 260, background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 className="edu-heading">Education</h2>
          <div style={{ marginTop: 14, width: 56, height: 2, borderRadius: 2, background: "linear-gradient(90deg, #7c3aed, #ec4899)" }} />
        </div>

        <div className="edu-grid">
          {/* Timeline */}
          <ol className="edu-timeline">
            {educationData.map((edu, i) => (
              <EduCard
                key={edu.degree}
                edu={edu}
                index={i}
                isLast={i === educationData.length - 1}
              />
            ))}
          </ol>

          {/* Code editor */}
          <CodePanel started={started} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");




