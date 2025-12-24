import React from "react";
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

const ExperienceCard = ({ experience }) => {
  return (
//     <VerticalTimelineElement
//   contentStyle={{
//     background: "linear-gradient(145deg, #1d1836, #15102a)",
//     color: "#fff",
//     borderRadius: "16px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
//     padding: "24px",
//   }}
//   contentArrowStyle={{
//     borderRight: "7px solid rgba(35, 38, 49, 0.9)",
//   }}
//   date={experience.date}
//   iconStyle={{
//     background: experience.iconBg,
//     boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.08)",
//   }}
//   icon={
//     <div className="flex justify-center items-center w-full h-full bg-black/30 rounded-full backdrop-blur-sm">
//       <img
//         src={experience.icon}
//         alt={experience.company_name}
//         className="w-[55%] h-[55%] object-contain drop-shadow-md"
//       />
//     </div>
//   }
// >
//   <div className="mb-3">
//     <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 text-[26px] font-bold font-serif leading-tight">
//       {experience.title}
//     </h3>

//     <p
//       className="text-gray-300 text-[15px] font-medium font-serif tracking-wide"
//       style={{ margin: 0 }}
//     >
//       {experience.company_name}
//     </p>
//   </div>

//   <ul className="mt-5 list-disc ml-5 space-y-3">
//     {experience.points.map((point, index) => (
//       <li
//         key={`experience-point-${index}`}
//         className="text-gray-200 text-[14.5px] leading-relaxed pl-1 tracking-wide font-serif"
//       >
//         {point}
//       </li>
//     ))}
//   </ul>
// </VerticalTimelineElement>

    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-yellow-200 text-[24px] font-bold font-serif'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold font-serif'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider font-serif'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-serif text-center`}>
          My journey of learning, building, and growing
        </p>
        <h2 className={`${styles.sectionHeadText} font-serif text-center`}>
          What I've Worked On So Far
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");