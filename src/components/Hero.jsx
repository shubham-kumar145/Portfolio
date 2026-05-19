import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typed from "typed.js";
import workspaceImg from "../assets/aaa.png";
import CodeBlock from "./CodeBlock";

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Crafting Elegant & Scalable Web Solutions",
        "Full-Stack Developer Turning Ideas into Reality",
        "Building Modern, High-Performance Web Experiences",
        "Code-Driven Solutions with Impact & Purpose",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1200,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">

      {/* ─────────────────────────────────────────────
          MOBILE LAYOUT  (flex-col, visible only on < lg)
      ───────────────────────────────────────────── */}
      <div className="flex flex-col items-center px-4 pt-6 pb-24 lg:hidden">

        {/* 1 ▸ Profile picture */}
        <div className="relative mt-4 flex-shrink-0">
          <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
            <img
              src={workspaceImg}
              alt="Ayushi"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
        </div>

        
        <div className="flex gap-3 items-start w-full justify-center mt-5">
          {/* Accent line */}
          <div className="flex flex-col items-center mt-2 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
            <div className="w-[2px] h-28 violet-gradient" />
          </div>

          {/* Text */}
          <div className="text-left">
            <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="text-yellow-400 uppercase italic">shubham</span>
                <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
              </span>
            </h1>

            <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
              Welcome to my digital space, where I craft meaningful web experiences.
            </p>

            {/* Typed text — mobile gets its own ref */}
            <p
              ref={el}
              className="
                mt-2
                text-[10px] sm:text-[12px]
                tracking-widest uppercase
                text-violet-400 font-mono
                min-h-[20px] block
              "
            />
          </div>
        </div>

        {/* 3 ▸ Code editor */}
        <div className="w-full mt-8 flex justify-center">
          <CodeBlock />
        </div>
      </div>


      {/* ─────────────────────────────────────────────
          DESKTOP LAYOUT  (side-by-side, visible only on lg+)
      ───────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-row items-start justify-between">

        {/* LEFT: text + photo */}
        <div
          className="
            relative top-[100px]
            ml-10 w-[55%]
            px-6 z-10
          "
        >
          <div className="flex gap-6 items-start justify-start">
            {/* Left accent */}
            <div className="flex flex-col items-center mt-2">
              <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
              <div className="w-[2px] h-80 violet-gradient" />
            </div>

            {/* Text content */}
            <div className="max-w-2xl text-left">
              {/* NAME ROW: photo + heading */}
              <div className="flex items-center gap-4 mb-2">
                {/* Circular photo */}
                <div className="relative flex-shrink-0">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#915EFF] shadow-[0_0_18px_rgba(145,94,255,0.5)]">
                    <img
                      src={workspaceImg}
                      alt="Ayushi"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute bottom-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black" />
                </div>

                {/* Name heading */}
                <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
                  Hi, I&apos;m{" "}
                  <span className="relative inline-block">
                    <span className="text-yellow-400 uppercase italic">shubham</span>
                    <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className={`${styles.heroSubText} font-serif mt-3 text-white-100`}>
                Welcome to my digital space, where I craft meaningful web experiences.
              </p>

              {/* Typed text */}
              <p
                ref={el}
                className="
                  mt-3
                  text-[14px] md:text-[18px]
                  tracking-widest uppercase
                  text-violet-400 font-mono
                  min-h-[24px]
                "
              />
            </div>
          </div>
        </div>

        {/* RIGHT: code block */}
        <div
          className="
            w-[42%]
            flex justify-start items-start
            mt-[110px] pr-10 pb-20
            z-10
          "
        >
          <CodeBlock />
        </div>
      </div>


      {/* ─────────────────────────────────────────────
          SCROLL INDICATOR  (shared)
      ───────────────────────────────────────────── */}
      <div className="absolute bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

    </section>
  );
};

export default Hero;
