import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github, link: "https://github.com/shubham-kumar145", },
  { icon: Linkedin, link: "https://www.linkedin.com/in/shubham-kumar145/", },
  { icon: Instagram, link: "https://www.instagram.com/shubham._.ku.m.ar", },
  { icon: Mail, link: "https://mail.google.com/mail/?view=cm&to=contact@shubhamkumar.me", },
];

/* ─── Card styles injected once ─────────────────────────────────────────── */
const cardCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&display=swap');

  .sc-outer {
    position: relative;
    border-radius: 20px;
    padding: 1.5px;
    background: linear-gradient(135deg, #00e5ff66, #bf5af244, #00e5ff33);
    box-shadow:
      0 0 18px #00e5ff28,
      0 0 40px #bf5af218,
      inset 0 0 10px #00e5ff0d;
    overflow: hidden;
    width: 250px;
    cursor: pointer;
  }

  /* Neon scan line */
  .sc-outer::before {
    content: '';
    position: absolute;
    top: -60%;
    left: 0;
    width: 100%;
    height: 55%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0,229,255,0.06) 40%,
      rgba(0,229,255,0.15) 50%,
      rgba(0,229,255,0.06) 60%,
      transparent 100%
    );
    animation: sc-scan 3.2s linear infinite;
    pointer-events: none;
    z-index: 10;
  }

  @keyframes sc-scan {
    0%   { top: -60%; }
    100% { top: 110%; }
  }

  /* Corner bracket accents */
  .sc-outer::after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 18px;
    background:
      linear-gradient(#00e5ff,#00e5ff) top left    / 14px 1.5px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) top left    / 1.5px 14px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) top right   / 14px 1.5px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) top right   / 1.5px 14px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) bottom left / 14px 1.5px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) bottom left / 1.5px 14px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) bottom right/ 14px 1.5px no-repeat,
      linear-gradient(#00e5ff,#00e5ff) bottom right/ 1.5px 14px no-repeat;
    pointer-events: none;
    z-index: 11;
    opacity: 0.55;
  }

  /* Glassmorphism body */
  .sc-inner {
    position: relative;
    border-radius: 19px;
    background: rgba(10, 14, 30, 0.75);
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    border: 1px solid rgba(0,229,255,0.10);
    min-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5rem 2rem;
    overflow: hidden;
    gap: 10px;
  }

  /* Ambient glow blob */
  .sc-inner::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%);
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  /* Image glow ring */
  .sc-img-wrap {
    border-radius: 13px;
    padding: 3px;
    background: linear-gradient(135deg, rgba(0,229,255,0.35), rgba(191,90,242,0.30));
    box-shadow: 0 0 18px rgba(0,229,255,0.22), 0 0 36px rgba(191,90,242,0.12);
    transition: box-shadow 0.4s ease;
  }

  .sc-outer:hover .sc-img-wrap {
    box-shadow: 0 0 28px rgba(0,229,255,0.48), 0 0 56px rgba(191,90,242,0.28);
  }

  .sc-img-wrap img {
    width: 160px;
    height: 115px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  .sc-divider {
    width: 56px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  }

  .sc-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.04em;
    text-shadow: 0 0 10px rgba(0,229,255,0.55), 0 0 22px rgba(0,229,255,0.25);
    line-height: 1.45;
  }

  .sc-badge {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.13em;
    color: #00e5ff;
    text-transform: uppercase;
    opacity: 0.65;
    font-family: monospace;
  }
`;

/* ─── ServiceCard ────────────────────────────────────────────────────────── */
const ServiceCard = ({ index, title, icon, badge }) => (
  <>
    {index === 0 && <style>{cardCSS}</style>}
    <Tilt
      tiltMaxAngleX={18}
      tiltMaxAngleY={18}
      scale={1.04}
      transitionSpeed={700}
      glareEnable={true}
      glareMaxOpacity={0.10}
      glareColor="#00e5ff"
      glarePosition="all"
      style={{ width: 250 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.9)}
        initial="hidden"
        animate="show"
        className="sc-outer"
      >
        <div className="sc-inner">
          <div className="sc-img-wrap">
            <img src={icon} alt={title} />
          </div>
          <div className="sc-divider" />
          <h3 className="sc-title">{title}</h3>
          {badge && <span className="sc-badge">{badge}</span>}
        </div>
      </motion.div>
    </Tilt>
  </>
);

/* ─── About ──────────────────────────────────────────────────────────────── */
const About = () => {
  const drivelink =
    "https://drive.google.com/uc?export=download&id=1iJirYbEHqTgPTv-wLPPIJm4_rgAD9wwG";

  const [viewwhich, setViewwhich] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewwhich((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between gap-10">

      {/* ── LEFT TEXT SECTION ── */}
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h2 className={`${styles.sectionHeadText} font-serif`}>
            Behind the Screen.
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
        >
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">

            {/* TEXT BLOCK */}
            <div className="w-full lg:w-[65%] pr-0">

              <p className="text-lg leading-8 text-justify font-serif">
                Hi, I’m{" "}
                <span className="font-semibold text-yellow-300">Shubham Kumar</span> — a{" "}
                <span className="font-semibold text-pink-300">
                  web development enthusiast
                </span>{" "}
                and a third-year Electronics and Communication Engineering student at{" "}
                <span className="font-semibold text-yellow-300">BIT Mesra</span>. I specialize
                in{" "}
                <span className="font-semibold text-violet-300">
                  full-stack web development
                </span>
                , building modern, responsive, and high-performance web applications that
                deliver seamless user experiences. My expertise spans frontend development
                with{" "}
                <span className="font-semibold text-violet-300">
                  React and Tailwind CSS
                </span>
                , and component-driven design, as well as backend fundamentals, RESTful API
                integration, and database management.
              </p>

              <p className="text-lg leading-8 mt-4 text-justify font-serif">
                I focus on designing intuitive interfaces, implementing smooth interactions,
                and{" "}
                <span className="font-semibold text-green-300">
                  optimizing application performance
                </span>
                . I actively experiment with emerging web technologies, refine code quality,
                and adopt best practices to develop{" "}
                <span className="font-semibold text-green-300">
                  scalable and maintainable solutions
                </span>
                . Driven by passion for problem-solving, creativity, and continuous learning,
                I aim to create impactful digital products that address real-world challenges.
              </p>
              <p className="text-lg leading-8 mt-4 text-justify font-serif">
                <span className="font-semibold text-yellow-300">
                  Key Skills & Technologies:
                </span>{" "}
                <span className="font-semibold text-violet-300">React</span>,{" "}
                <span className="font-semibold text-violet-300">Tailwind CSS</span>,{" "}
                <span className="font-semibold text-blue-300">JavaScript</span>, HTML,
                CSS, Node.js, REST APIs, MongoDB, Git, Responsive Web Design, UI/UX
                Optimization, Agile Development Practices.
              </p>

              {/* BUTTONS ROW */}
              <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center">

                {/* Download Resume */}
                <div className="mt-6 flex justify-center sm:justify-start">
                  <motion.a
                    href={drivelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      min-w-52 px-6 py-3 rounded-full
                      flex items-center justify-center
                      border-2 border-cyan-400
                      text-cyan-400 font-semibold
                      hover:bg-cyan-400 hover:text-black
                      shadow-[0_0_20px_rgba(34,211,238,0.6)]
                      transition-all duration-300
                    "
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={viewwhich ? "download" : "view"}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        Download Resume
                      </motion.span>
                    </AnimatePresence>
                  </motion.a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 justify-center sm:justify-end items-center mt-6 sm:mt-0">
                  {socials.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        w-12 h-12 rounded-full
                        flex items-center justify-center
                        border-2 border-cyan-400
                        text-cyan-400
                        hover:bg-cyan-400 hover:text-black
                        shadow-[0_0_15px_rgba(34,211,238,0.6)]
                        transition-colors duration-300
                      "
                    >
                      <item.icon size={22} />
                    </motion.a>
                  ))}
                </div>

              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="hidden lg:flex w-full lg:w-[35%] justify-end items-center m-0 p-0">
              <img
                src="/profile.png"
                alt="Shubham Profile"
                className="w-[320px] h-auto object-cover rounded-2xl select-none m-2 p-0"
              />
            </div>

          </div>
        </motion.div>

        {/* ── SERVICE CARDS ── */}
        <div className="mt-20 flex flex-wrap justify-around gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
