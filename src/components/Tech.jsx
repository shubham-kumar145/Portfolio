import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, cloud } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col gap-24 w-full">

      {/* ===== TITLE ===== */}
      <div className="flex justify-center items-center text-center">
       {/* ===== TITLE ===== */}
<div className="flex flex-col justify-center items-center text-center">
  <h1
    className={`${styles.sectionHeadText} font-serif flex items-center gap-3`}
  >
    <svg
      viewBox="0 0 24 24"
      className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
    Technology Stack
  </h1>

  {/* Gradient underline */}
  <div className="mt-2 h-[2px] w-64 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full" />

 
</div>
      </div>

      {/* ===== LANGUAGES & FRAMEWORKS ===== */}
      <section className="w-full">
        <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400 mb-12">
          LANGUAGES & FRAMEWORKS
        </h2>

        <div
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="
                flex flex-col items-center gap-3
                p-5
                rounded-2xl
                bg-white/5
                border border-emerald-400/25
                backdrop-blur-md
                shadow-[0_0_18px_rgba(16,185,129,0.18)]
                transition-all duration-300
                hover:shadow-[0_0_28px_rgba(16,185,129,0.55)]
              "
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <BallCanvas
                  icon={technology.icon}
                  mobileIcon={technology.mobileIcon}
                />
              </div>

              <p className="text-sm text-gray-200 font-medium text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DATABASES / TOOLS ===== */}
      <section className="w-full">
        <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-emerald-400 mb-12">
          DATABASES / TOOLS
        </h2>

        <div
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {cloud.map((technology) => (
            <div
              key={technology.name}
              className="
                flex flex-col items-center gap-3
                p-5
                rounded-2xl
                bg-white/5
                border border-emerald-400/25
                backdrop-blur-md
                shadow-[0_0_18px_rgba(16,185,129,0.18)]
                transition-all duration-300
                hover:shadow-[0_0_28px_rgba(16,185,129,0.35)]
              "
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <BallCanvas
                  icon={technology.icon}
                  mobileIcon={technology.mobileIcon}
                />
              </div>

              <p className="text-sm text-gray-200 font-medium text-center">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SectionWrapper(Tech, "tech");
