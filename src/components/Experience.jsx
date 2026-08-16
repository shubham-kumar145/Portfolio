// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-full h-full rounded-full object-contain p-1"
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-yellow-200 text-[24px] font-bold font-serif'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold font-serif'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider font-serif'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} font-serif text-center`}>
//           My journey of learning, building, and growing
//         </p>
//         <h2 className={`${styles.sectionHeadText} font-serif text-center`}>
//           What I've Worked On So Far
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "experience");

import React, { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

/**
 * Parses a date range string like "Jan 2022 - Present" or
 * "Mar 2021 - Jun 2022" and returns a short human duration,
 * e.g. "1 yr 4 mos" or "8 mos". Falls back gracefully if the
 * string can't be parsed so it never breaks the render.
 */
const getDuration = (dateStr = "") => {
  const parts = dateStr.split("-").map((p) => p.trim());
  if (parts.length < 2) return null;

  const [startRaw, endRaw] = parts;
  const start = new Date(startRaw);
  const isPresent = /present/i.test(endRaw);
  const end = isPresent ? new Date() : new Date(endRaw);

  if (isNaN(start) || isNaN(end)) return null;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  months = Math.max(months, 1);

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const yLabel = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const mLabel = remMonths > 0 ? `${remMonths} mo${remMonths > 1 ? "s" : ""}` : "";

  return { text: [yLabel, mLabel].filter(Boolean).join(" "), isPresent };
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const ExperienceCard = ({ experience, index }) => {
  const duration = useMemo(() => getDuration(experience.date), [experience.date]);
  const accent = experience.iconBg || "#915EFF";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: `0 8px 30px -12px rgba(0,0,0,0.6), 0 0 0 1px ${accent}22`,
        borderTop: `3px solid ${accent}`,
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      dateClassName="!text-secondary !font-sans !text-[13px] !tracking-wide"
      iconStyle={{ background: accent, boxShadow: `0 0 0 4px #1d183655` }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading="lazy"
            className="w-full h-full rounded-full object-contain p-1"
          />
        </div>
      }
    >
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -4 }}
        className="motion-reduce:transform-none motion-reduce:transition-none"
      >
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h3 className="text-yellow text-[22px] font-bold font-sans tracking-tight">
              {experience.title}
            </h3>
            <p
              className="text-secondary text-[15px] font-medium font-sans mt-1"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          {duration && (
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{
                color: accent,
                background: `${accent}1A`,
                border: `1px solid ${accent}40`,
              }}
            >
              {duration.isPresent && (
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: accent }}
                />
              )}
              {duration.text}
            </span>
          )}
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-white-100/90 text-[14px] pl-1 tracking-wide font-sans leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>

        {Array.isArray(experience.technologies) && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {experience.technologies.map((tech, i) => (
              <span
                key={`tech-${i}`}
                className="text-[11px] font-sans text-white-100/70 bg-white/5 border border-white/10 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-sans text-center`}>
          My journey of learning, building, and growing
        </p>
        <h2 className={`${styles.sectionHeadText} font-serif text-center`}>
          What I've Worked On So Far
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#232631">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
