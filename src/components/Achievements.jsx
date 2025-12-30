// // // import React from "react";
// // // import Tilt from "react-parallax-tilt";
// // // import { motion } from "framer-motion";

// // // import { styles } from "../styles";
// // // import { github } from "../assets";
// // // import { SectionWrapper } from "../hoc";
// // // import { Achievements, projects } from "../constants";
// // // import { fadeIn, textVariant } from "../utils/motion";
// // // import Carousel from "./Carousel";
// // // import { useRef } from "react";



// // // const ProjectCard = ({
// // //   items,
// // //   index,
// // //   name,
// // //   description,
// // //   date,
// // // }) => {
// // //   return (
// // //     <div className="bg-tertiary p-5 rounded-2xl w-[360px] h-auto flex flex-col justify-between min-h-[480px]">
// // //       <div>
// // //         <h3 className="text-yellow-400 text-shadow-gold  font-bold text-[24px] font-serif uppercase">{name}</h3>
// // //         <div className="relative w-full bg-black/25 flex justify-center rounded-3xl overflow-hidden">
// // //           <Carousel
// // //             items={items}
// // //             baseWidth={320}
// // //             autoplay={true}
// // //             autoplayDelay={3000}
// // //             pauseOnHover={true}
// // //             loop={true}
// // //             round={false}
// // //           />
// // //         </div>

// // //         <div className="mt-2">
// // //           <p>{date}</p>
// // //           <p className="mt-2 text-secondary text-[14px] font-serif">{description}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const Works = () => {

// // //   const scrollRef = useRef(null);

// // //   const scrollLeft = () => {
// // //     scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
// // //   };

// // //   const scrollRight = () => {
// // //     scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
// // //   };

// // //   return (
// // //     <>
// // //       <div>
// // //         <div>
// // //           <h1>my Achievements</h1>
// // //         </div>


// // //         <div className="flex items-center relative">
// // //           {/* Left Arrow */}
// // //           <button
// // //             onClick={scrollLeft}
// // //             className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
// // //           >
// // //             &#8249;
// // //           </button>

// // //           {/* Scrollable Project Cards */}
// // //           <div
// // //             ref={scrollRef}
// // //             className="relative mt-20 flex overflow-x-auto scrollbar-none gap-7 px-2"
// // //           >
// // //             {Achievements.map((project, index) => (
// // //               <ProjectCard
// // //                 key={`project-${index}`}
// // //                 index={index}
// // //                 items={project.item}
// // //                 {...project}
// // //               />
// // //             ))}
// // //           </div>

// // //           {/* Right Arrow */}
// // //           <button
// // //             onClick={scrollRight}
// // //             className="text-white text-3xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70 transition z-10"
// // //           >
// // //             &#8250;
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default SectionWrapper(Works, "");
// // import React, { useRef } from "react";
// // import { motion } from "framer-motion";
// // import { SectionWrapper } from "../hoc";
// // import { Achievements } from "../constants";
// // import { textVariant } from "../utils/motion";
// // import Carousel from "./Carousel";
// // import { styles } from "../styles";

// // const ProjectCard = ({ items, name, description, date }) => {
// //   return (
// //     <div
// //       className="
// //         bg-tertiary
// //         w-[360px]
// //         min-h-[480px]
// //         p-5
// //         rounded-2xl
// //         flex flex-col
// //         justify-between
// //         border border-white/10
// //         shadow-[0_0_20px_rgba(0,0,0,0.4)]
// //       "
// //     >
// //       <div>
// //         <h3 className="text-yellow-400 font-bold text-[22px] font-serif uppercase mb-3">
// //           {name}
// //         </h3>

// //         <div className="relative w-full bg-black/30 rounded-2xl overflow-hidden">
// //           <Carousel
// //             items={items}
// //             baseWidth={320}
// //             autoplay
// //             autoplayDelay={3000}
// //             pauseOnHover
// //             loop
// //             round={false}
// //           />
// //         </div>

// //         <div className="mt-4">
// //           <p className="text-xs text-gray-400">{date}</p>
// //           <p className="mt-2 text-secondary text-[14px] font-serif leading-relaxed">
// //             {description}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Works = () => {
// //   const scrollRef = useRef(null);

// //   const scrollLeft = () => {
// //     scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
// //   };

// //   const scrollRight = () => {
// //     scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
// //   };
// //   return (
// //     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
// //       <div
// //         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
// //       >
// //         <motion.div
// //           variants={textVariant()}
// //           className="text-center mb-10 "
// //         >
// //           <p className="relative inline-block after:block after:h-[2px] after:bg-violet-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-serif">
// //             My Achievements
// //           </p>


// //         </motion.div>

// //       </div>
// //       {/* ===== SCROLL AREA ===== */}
// //       <div className="relative flex items-center">

// //         {/* LEFT BUTTON */}
// //         <button
// //           onClick={scrollLeft}
// //           className="
// //             absolute left-0 z-10
// //             w-10 h-10
// //             flex items-center justify-center
// //             rounded-full
// //             bg-black/50
// //             text-white text-3xl
// //             hover:bg-black/80
// //             transition
// //           "
// //         >
// //           &#8249;
// //         </button>

// //         {/* CARDS */}
// //         <div
// //           ref={scrollRef}
// //           className="
// //             flex gap-8
// //             overflow-x-auto
// //             scrollbar-none
// //             px-14
// //             py-4
// //           "
// //         >
// //           {Achievements.map((project, index) => (
// //             <ProjectCard
// //               key={`project-${index}`}
// //               items={project.item}
// //               {...project}
// //             />
// //           ))}
// //         </div>

// //         {/* RIGHT BUTTON */}
// //         <button
// //           onClick={scrollRight}
// //           className="
// //             absolute right-0 z-10
// //             w-10 h-10
// //             flex items-center justify-center
// //             rounded-full
// //             bg-black/50
// //             text-white text-3xl
// //             hover:bg-black/80
// //             transition
// //           "
// //         >
// //           &#8250;
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SectionWrapper(Works, "");
// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { Achievements } from "../constants";
// import { textVariant } from "../utils/motion";
// import Carousel from "./Carousel";
// import { styles } from "../styles";

// const ProjectCard = ({ items, name, description, date }) => {
//   return (
//     <div
//       className="
//         relative
//         w-[360px]
//         min-h-[480px]
//         p-[1px]
//         rounded-3xl
//         bg-gradient-to-br from-violet-500/40 via-yellow-400/20 to-pink-500/30
//       "
//     >
//       <div
//         className="
//           bg-tertiary
//           h-full
//           p-6
//           rounded-3xl
//           flex flex-col
//           justify-between
//           backdrop-blur-md
//           shadow-[0_0_30px_rgba(0,0,0,0.45)]
//         "
//       >
//         <div>
//           <h3 className="text-yellow-400 font-bold text-[22px] font-serif uppercase mb-4 text-center">
//             {name}
//           </h3>

//           <div className="relative w-full bg-black/40 rounded-2xl overflow-hidden mb-4">
//             <Carousel
//               items={items}
//               baseWidth={320}
//               autoplay
//               autoplayDelay={3000}
//               pauseOnHover
//               loop
//               round={false}
//             />
//           </div>

//           <div className="text-center">
//             <p className="text-xs text-gray-400 mb-2">{date}</p>
//             <p className="text-secondary text-[14px] font-serif leading-relaxed">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Works = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
//   };

//   return (
//     <div className="mt-20 bg-black-100 rounded-[28px] overflow-hidden">

//       {/* ===== HEADER ===== */}
//       <div
//         className={`
//           bg-tertiary
//           rounded-2xl
//           ${styles.padding}
//           min-h-[260px]
//           flex items-center justify-center
//           relative
//         `}
//       >
//         <motion.div
//           variants={textVariant()}
//           className="text-center"
//         >
//           <p
//             className="
//               relative inline-block
//               text-xl
//               font-serif
//               tracking-[0.25em]
//               text-transparent bg-clip-text
//               bg-gradient-to-r from-yellow-400 via-pink-400 to-violet-500
//               after:block after:h-[2px]
//               after:bg-gradient-to-r after:from-yellow-400 after:to-pink-500
//               after:mt-3 after:scale-x-100
//             "
//           >
//             MY ACHIEVEMENTS
//           </p>
//         </motion.div>
//       </div>

//       {/* ===== SCROLL AREA ===== */}
//       <div className="relative flex items-center -mt-16">

//         {/* LEFT BUTTON */}
//         <button
//           onClick={scrollLeft}
//           className="
//             absolute left-6 z-10
//             w-12 h-12
//             flex items-center justify-center
//             rounded-full
//             bg-black/70
//             text-white text-3xl
//             backdrop-blur-md
//             hover:scale-110
//             transition
//           "
//         >
//           &#8249;
//         </button>

//         {/* CARDS */}
//         <div
//           ref={scrollRef}
//           className="
//             flex gap-12
//             overflow-x-auto
//             scrollbar-none
//             px-28
//             py-14
//           "
//         >
//           {Achievements.map((project, index) => (
//             <ProjectCard
//               key={`project-${index}`}
//               items={project.item}
//               {...project}
//             />
//           ))}
//         </div>

//         {/* RIGHT BUTTON */}
//         <button
//           onClick={scrollRight}
//           className="
//             absolute right-6 z-10
//             w-12 h-12
//             flex items-center justify-center
//             rounded-full
//             bg-black/70
//             text-white text-3xl
//             backdrop-blur-md
//             hover:scale-110
//             transition
//           "
//         >
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Works, "");
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { Achievements } from "../constants";
import { textVariant } from "../utils/motion";
import Carousel from "./Carousel";
import { styles } from "../styles";

const ProjectCard = ({ items, name, description, date }) => {
  return (
    <div
      className="
        relative
        w-[320px]
        min-h-[440px]
        p-[1px]
        rounded-3xl
        bg-gradient-to-br from-violet-500/35 via-yellow-400/20 to-pink-500/25
      "
    >
      <div
        className="
          bg-tertiary
          h-full
          p-5
          rounded-3xl
          flex flex-col
          justify-between
          backdrop-blur-md
          shadow-[0_0_24px_rgba(0,0,0,0.4)]
        "
      >
        <div>
          <h3 className="text-yellow-400 font-bold text-[20px] font-serif uppercase mb-3 text-center">
            {name}
          </h3>

          <div className="relative w-full bg-black/40 rounded-xl overflow-hidden mb-3">
            <Carousel
              items={items}
              baseWidth={280}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round={false}
            />
          </div>

          <div className="text-center">
            <p className="text-[11px] text-gray-400 mb-1">{date}</p>
            <p className="text-secondary text-[13px] font-serif leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <div className="mt-16 bg-black-100 rounded-[26px] overflow-hidden">

      {/* ===== HEADER ===== */}
      <div
        className={`
          bg-tertiary
          rounded-2xl
          ${styles.padding}
          min-h-[120px]
          flex items-center justify-center
        `}
      >
        <motion.div
          variants={textVariant()}
          className="text-center"
        >
          <p
            className="
              text-2xl
              font-serif
              tracking-[0.25em]
              text-transparent bg-clip-text
              bg-gradient-to-r from-yellow-400 via-pink-400 to-violet-500
            "
          >
            MY ACHIEVEMENTS
          </p>
        </motion.div>
      </div>

      {/* ===== SCROLL AREA ===== */}
      <div className="relative flex items-center -mt-14">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="
            absolute left-5 z-10
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-black/60
            text-white text-2xl
            backdrop-blur-md
            hover:scale-110
            transition
          "
        >
          &#8249;
        </button>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="
            flex gap-10
            overflow-x-auto
            scrollbar-none
            px-20
            py-10
          "
        >
          {Achievements.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              items={project.item}
              {...project}
            />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="
            absolute right-5 z-10
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-black/60
            text-white text-2xl
            backdrop-blur-md
            hover:scale-110
            transition
          "
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
