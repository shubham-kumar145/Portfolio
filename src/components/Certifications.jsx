import { useRef, useState } from "react";
import { certificationsData} from "../constants";

const NeonButton = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <span style={{
        position: "absolute", inset: -4,
        borderRadius: 50,
        boxShadow: hovered
          ? "0 0 20px 5px rgba(145,94,255,0.75), 0 0 50px 10px rgba(145,94,255,0.3)"
          : "0 0 12px 3px rgba(145,94,255,0.5), 0 0 28px 5px rgba(145,94,255,0.2)",
        transition: "box-shadow 0.3s",
        pointerEvents: "none",
      }} />
      <span style={{
        display: "flex", alignItems: "center", gap: 4,
        padding: "5px 12px",
        borderRadius: 50,
        border: `1.5px solid ${hovered ? "rgba(145,94,255,1)" : "rgba(145,94,255,0.65)"}`,
        background: hovered ? "rgba(145,94,255,0.12)" : "rgba(10,10,15,0.9)",
        color: hovered ? "#ddd6fe" : "#a78bfa",
        fontSize: 10,
        fontFamily: "'Courier New', monospace",
        letterSpacing: "0.06em",
        transition: "all 0.25s",
        whiteSpace: "nowrap",
      }}>
        {/* <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg> */}
        👁️
        Preview
      </span>
    </button>
  );
};

const CertCard = ({ cert, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = cert.file;
  //   link.download = cert.fileName;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const handleDownload = () => {
  window.open(cert.file, "_blank");
};

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? "rgba(145,94,255,0.04)" : "transparent",
        border: `1px solid ${hovered ? "rgba(145,94,255,0.45)" : "rgba(145,94,255,0.15)"}`,
        borderLeft: "3px solid #915EFF",
        borderRadius: "0 14px 14px 0",
        padding: "1.5rem 1.8rem",
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.25s, box-shadow 0.3s, background 0.3s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(145,94,255,0.12)" : "none",
        opacity: 0,
        animation: "fadeUp 0.5s ease forwards",
        animationDelay: `${index * 0.18}s`,
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(145,94,255,0.07), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="cert-desktop-row" style={{
        display: "flex",
        alignItems: "center",
        gap: "1.4rem",
        position: "relative",
        zIndex: 1,
        flexWrap: "wrap",
      }}>
        {/* Emoji icon */}
        <div style={{
          width: 50, height: 50, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 34,
        }}>
          {cert.icon}
        </div>

        {/* Text content */}
        <div style={{ flex: 1, minWidth: 160 }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.1em",
            color: "#6b7280", marginBottom: 5,
            fontFamily: "'Courier New', monospace",
          }}>
            <span style={{ color: "#8b5cf6" }}>{cert.platform}</span>
            {cert.issuer && <>&nbsp;·&nbsp;{cert.issuer}</>}
            {cert.date && (
              <span style={{ color: "#4b5563", marginLeft: 10 }}>— {cert.date}</span>
            )}
          </p>

          <p style={{
            fontSize: "1rem", fontWeight: 700,
            color: "#f9fafb", marginBottom: 9,
            fontFamily: "'Courier New', monospace", lineHeight: 1.35,
          }}>
            {cert.title}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {cert.topics.map((topic, i) => (
              <span key={i} style={{
                fontSize: 11, color: "#9ca3af",
                background: "rgba(145,94,255,0.07)",
                border: "1px solid rgba(145,94,255,0.15)",
                borderRadius: 5, padding: "2px 9px",
                fontFamily: "'Courier New', monospace",
              }}>
                {topic}
              </span>
            ))}
          </div>
        </div>

        <NeonButton onClick={handleDownload} />
      </div>
    </div>
  );
};

const Certifications = () => (
  <section
    id="certifications"
    style={{ background: "transparent", minHeight: "60vh", position: "relative", overflow: "hidden" }}
  >
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 600px) {
        .cert-desktop-row {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 0.9rem !important;
        }

        /* ✅ Smaller emoji on mobile */
        .cert-desktop-row > div:first-child {
          font-size: 18px !important;
          width: 28px !important;
          height: 28px !important;
        }

        /* ✅ Center the download button on mobile */
        .cert-desktop-row > button,
        .cert-desktop-row > *:last-child {
          align-self: center !important;
          margin-top: 0.3rem;
        }
      }
    `}</style>

    {/* Blobs */}
    <div style={{ position: "absolute", top: "5%", right: "4%", width: 280, height: 280, background: "radial-gradient(circle, rgba(145,94,255,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: "8%", left: "-4%", width: 210, height: 210, background: "radial-gradient(circle, rgba(145,94,255,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

    {/* Ghost "05" */}
    <div style={{
      position: "absolute", top: "0%", right: "-1%",
      fontSize: "clamp(8rem, 18vw, 16rem)",
      fontWeight: 900, color: "rgba(255,255,255,0.025)",
      lineHeight: 1, userSelect: "none", pointerEvents: "none",
      fontFamily: "'Courier New', monospace",
    }}>05</div>

    <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: "2.8rem" }}>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3.4rem)",
          fontWeight: 800, color: "#f9fafb",
          letterSpacing: "-0.02em",
          fontFamily: "'Courier New', monospace",
          margin: 0,
        }}>
          Certifications
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
        {certificationsData.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
// export default SectionWrapper(Certifications, "certifications");
