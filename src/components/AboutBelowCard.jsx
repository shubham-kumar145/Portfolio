import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// ── Fade-in variant helper (drop-in replacement for your existing fadeIn) ──
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

// ── Inline styles (no Tailwind needed for the new effects) ──
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Exo+2:wght@400;600&display=swap');

  .sc-card-outer {
    position: relative;
    border-radius: 20px;
    padding: 1.5px;
    background: linear-gradient(135deg, #00e5ff55, #bf5af255, #00e5ff33);
    box-shadow:
      0 0 18px #00e5ff33,
      0 0 40px #bf5af222,
      inset 0 0 12px #00e5ff11;
    overflow: hidden;
    cursor: pointer;
    width: 250px;
  }

  /* Neon scan line */
  .sc-card-outer::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 229, 255, 0.08) 40%,
      rgba(0, 229, 255, 0.18) 50%,
      rgba(0, 229, 255, 0.08) 60%,
      transparent 100%
    );
    animation: scanline 3s linear infinite;
    pointer-events: none;
    z-index: 10;
    border-radius: 20px;
  }

  @keyframes scanline {
    0%   { top: -60%; }
    100% { top: 110%; }
  }

  /* Corner accents */
  .sc-card-outer::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background:
      linear-gradient(#00e5ff, #00e5ff) top left / 16px 2px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) top left / 2px 16px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) top right / 16px 2px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) top right / 2px 16px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) bottom left / 16px 2px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) bottom left / 2px 16px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) bottom right / 16px 2px no-repeat,
      linear-gradient(#00e5ff, #00e5ff) bottom right / 2px 16px no-repeat;
    pointer-events: none;
    z-index: 11;
    opacity: 0.7;
  }

  /* Glassmorphism inner */
  .sc-card-inner {
    position: relative;
    border-radius: 19px;
    background: rgba(10, 16, 35, 0.72);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    border: 1px solid rgba(0, 229, 255, 0.12);
    min-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5rem 2rem;
    overflow: hidden;
  }

  /* Ambient glow blob inside card */
  .sc-card-inner::before {
    content: '';
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,229,255,0.10) 0%, transparent 70%);
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  /* Image wrapper with ring glow */
  .sc-img-wrap {
    position: relative;
    border-radius: 14px;
    padding: 4px;
    background: linear-gradient(135deg, rgba(0,229,255,0.3), rgba(191,90,242,0.3));
    box-shadow: 0 0 20px rgba(0,229,255,0.25), 0 0 40px rgba(191,90,242,0.15);
    transition: box-shadow 0.4s ease;
  }

  .sc-card-outer:hover .sc-img-wrap {
    box-shadow: 0 0 30px rgba(0,229,255,0.5), 0 0 60px rgba(191,90,242,0.3);
  }

  .sc-img-wrap img {
    width: 150px;
    height: 110px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  /* Title */
  .sc-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.04em;
    text-shadow: 0 0 12px rgba(0,229,255,0.6), 0 0 24px rgba(0,229,255,0.3);
    line-height: 1.4;
  }

  /* Decorative divider */
  .sc-divider {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00e5ff, transparent);
    margin: 0 auto;
  }

  /* Subtle badge */
  .sc-badge {
    font-family: 'Exo 2', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #00e5ff;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;

// ── Component ──────────────────────────────────────────────────────────────
const ServiceCard = ({ index, title, icon, badge = "Available for hire" }) => (
  <>
    <style>{styles}</style>
    <Tilt
      tiltMaxAngleX={18}
      tiltMaxAngleY={18}
      scale={1.04}
      transitionSpeed={700}
      glareEnable={true}
      glareMaxOpacity={0.12}
      glareColor="#00e5ff"
      glarePosition="all"
      style={{ width: 250 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.9)}
        initial="hidden"
        animate="show"
        className="sc-card-outer"
      >
        <div className="sc-card-inner">
          {/* Image with glow ring */}
          <div className="sc-img-wrap">
            <img src={icon} alt={title} />
          </div>

          {/* Divider */}
          <div className="sc-divider" />

          {/* Title */}
          <h3 className="sc-title">{title}</h3>

          {/* Badge */}
          <span className="sc-badge">{badge}</span>
        </div>
      </motion.div>
    </Tilt>
  </>
);

// ── Demo (remove in your project, just pass real icon paths) ───────────────
const PLACEHOLDER =
  "https://placehold.co/150x110/0a1023/00e5ff?text=DEV&font=raleway";

const services = [
  { title: "MERN Stack Developer", icon: PLACEHOLDER, badge: "Full-Stack" },
  { title: "Frontend Developer",   icon: PLACEHOLDER, badge: "React · Next.js" },
  { title: "Backend Developer",    icon: PLACEHOLDER, badge: "Node · Express" },
];

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060b18",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
        padding: "3rem 1.5rem",
      }}
    >
      {services.map((s, i) => (
        <ServiceCard key={s.title} index={i} {...s} />
      ))}
    </div>
  );
}
