// // import { motion } from "framer-motion";
// // import { styles } from "../styles";
// // import { ComputersCanvas } from "./canvas";

// // const Hero = () => {
// //   return (
// //     <section className="relative w-full min-h-screen mx-auto">

// //       {/* TEXT SECTION */}
// //       <div
// //         className={`relative top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
// //       >
// //         <div className="flex flex-col justify-center items-center mt-3">
// //           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
// //           <div className="w-1 sm:h-80 h-40 violet-gradient" />
// //         </div>

// //         <div>
// //           <h1 className={`${styles.heroHeadText} font-serif text-yellow-100`}>
// //             Hi, I'm{" "}
// //             <span className="text-yellow-400 text-shadow-gold uppercase italic font-serif">
// //               SHUBHAM
// //             </span>
// //           </h1>

// // <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
// //   Welcome to my digital space. <br className="sm:block hidden" />
// //   Explore my journey, projects, and passion for building meaningful
// //   web experiences.
// // </p>
// //         </div>
// //       </div>
// //       <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-10 sm:mt-0">
// //         <ComputersCanvas />
// //       </div>


// //       {/* SCROLL INDICATOR */}
// //       <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
// //         <a href="#about">
// //           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
// //             <motion.div
// //               animate={{ y: [0, 24, 0] }}
// //               transition={{
// //                 duration: 1.5,
// //                 repeat: Infinity,
// //                 repeatType: "loop",
// //               }}
// //               className="w-3 h-3 rounded-full bg-secondary mb-1"
// //             />
// //           </div>
// //         </a>
// //       </div>

// //     </section>
// //   );
// // };

// // export default Hero;
// // // import { motion } from "framer-motion";
// // // import { styles } from "../styles";
// // // import { ComputersCanvas } from "./canvas";
// // // import Typed from "typed.js";
// // // const Hero = () => {
// // //   const el = React.useRef(null);

// // //   React.useEffect(() => {
// // //     const typed = new Typed(el.current, {
// // //       strings: [
// // //         "Passionate Software Engineer",
// // //         "Full-Stack MERN Developer",
// // //       ],
// // //       typeSpeed: 60,
// // //       backSpeed: 35,
// // //       backDelay: 1200,
// // //       loop: true,
// // //     });

// // //     return () => typed.destroy();
// // //   }, []);

// // //   return (
// // //     <section className="relative w-full min-h-screen mx-auto">

// // //       {/* TEXT SECTION */}
// // //       <div
// // //         className={`relative top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
// // //       >
// // //         <div className="flex flex-col justify-center items-center mt-3">
// // //           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
// // //           <div className="w-1 sm:h-80 h-40 violet-gradient" />
// // //         </div>

// // //         <div>
// // //           <h1 className={`${styles.heroHeadText} font-serif text-yellow-100`}>
// // //             Hi, I'm{" "}
// // //             <span className="text-yellow-400 text-shadow-gold uppercase italic font-serif">
// // //               SHUBHAM
// // //             </span>
// // //           </h1>
// // //           <p
// // //             ref={el}
// // //             className="
// // //               text-[14px]
// // //               sm:text-[16px]
// // //               tracking-widest
// // //               uppercase
// // //               text-violet-400
// // //               font-mono
// // //               min-h-[24px]
// // //             "
// // //           />

// // //           <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
// // //             Welcome to my digital space. <br className="sm:block hidden" />
// // //             Explore my journey, projects, and passion for building meaningful
// // //             web experiences.
// // //           </p>
// // //         </div>
// // //       </div>
// // //       <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-10 sm:mt-0">
// // //         <ComputersCanvas />
// // //       </div>


// // //       {/* SCROLL INDICATOR */}
// // //       <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
// // //         <a href="#about">
// // //           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
// // //             <motion.div
// // //               animate={{ y: [0, 24, 0] }}
// // //               transition={{
// // //                 duration: 1.5,
// // //                 repeat: Infinity,
// // //                 repeatType: "loop",
// // //               }}
// // //               className="w-3 h-3 rounded-full bg-secondary mb-1"
// // //             />
// // //           </div>
// // //         </a>
// // //       </div>

// // //     </section>
// // //   );
// // // };

// // // export default Hero;
// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import { styles } from "../styles";
// // // // import { ComputersCanvas } from "./canvas";
// // // // import Typed from "typed.js";

// // // // const Hero = () => {
// // // // const el = React.useRef(null);

// // // // React.useEffect(() => {
// // // //   const typed = new Typed(el.current, {
// // // //     strings: [
// // // //       "MERN Stack Developer",
// // // //       "Crafting Scalable Web Apps",
// // // //       "Turning Ideas into Code",
// // // //       "Building Modern Digital Experiences",
// // // //     ],
// // // //     typeSpeed: 60,
// // // //     backSpeed: 35,
// // // //     backDelay: 1200,
// // // //     loop: true,
// // // //   });

// // // //   return () => typed.destroy();
// // // // }, []);

// // // //   return (
// // // //     <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-black">

// // // //       {/* ===== TEXT SECTION ===== */}
// // // //       <div
// // // //         className={`
// // // //           relative
// // // //           top-[120px]
// // // //           max-w-7xl
// // // //           mx-auto
// // // //           ${styles.paddingX}
// // // //           flex
// // // //           flex-row
// // // //           items-start
// // // //           gap-6
// // // //           z-10
// // // //         `}
// // // //       >
// // // //         {/* LEFT DECOR */}
// // // //         <div className="flex flex-col justify-center items-center mt-2">
// // // //           <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
// // // //           <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
// // // //         </div>

// // // //         {/* TEXT CONTENT */}
// // // //         <div className="flex flex-col gap-4 max-w-xl">

// // // //           {/* Typed role */}
// // // // <p
// // // //   ref={el}
// // // //   className="
// // // //     text-[14px]
// // // //     sm:text-[16px]
// // // //     tracking-widest
// // // //     uppercase
// // // //     text-violet-400
// // // //     font-mono
// // // //     min-h-[24px]
// // // //   "
// // // // />

// // // //           {/* Heading */}
// // // //           <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
// // // //             Hi, I&apos;m{" "}
// // // //             <span className="relative inline-block">
// // // //               <span className="text-yellow-400 uppercase italic text-shadow-gold">
// // // //                 SHUBHAM
// // // //               </span>

// // // //               {/* Glow behind name */}
// // // //               <span className="absolute -inset-2 blur-xl bg-yellow-400/20 rounded-lg -z-10" />
// // // //             </span>
// // // //           </h1>

// // // //           {/* Description */}
// // // //           <p
// // // //             className={`
// // // //               ${styles.heroSubText}
// // // //               font-serif
// // // //               mt-2
// // // //               text-white-100
// // // //               leading-relaxed
// // // //             `}
// // // //           >
// // // //             Welcome to my digital space.
// // // //             <br className="sm:block hidden" />
// // // //             Explore my journey, projects, and passion for building
// // // //             modern, meaningful web experiences.
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* ===== 3D / VISUAL SECTION ===== */}
// // // //       <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-20 sm:mt-0">
// // // //         <ComputersCanvas />
// // // //       </div>

// // // //       {/* ===== SCROLL INDICATOR ===== */}
// // // //       <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
// // // //         <a href="#about">
// // // //           <div className="w-[34px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
// // // //             <motion.div
// // // //               animate={{ y: [0, 24, 0] }}
// // // //               transition={{
// // // //                 duration: 1.5,
// // // //                 repeat: Infinity,
// // // //                 repeatType: "loop",
// // // //               }}
// // // //               className="w-3 h-3 rounded-full bg-secondary mb-1"
// // // //             />
// // // //           </div>
// // // //         </a>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;


// // import React from "react";
// // import { motion } from "framer-motion";
// // import { styles } from "../styles";
// // import { ComputersCanvas } from "./canvas";
// // import Typed from "typed.js";

// // const Hero = () => {
// //   const el = React.useRef(null);

// //   React.useEffect(() => {
// //     const typed = new Typed(el.current, {
// //       strings: [
// //         "Passionate Software Engineer",
// //         "Full-Stack MERN Developer",
// //         "Building Scalable Web Applications",
// //         "Turning Ideas into Digital Products",
// //       ],
// //       typeSpeed: 60,
// //       backSpeed: 35,
// //       backDelay: 1200,
// //       loop: true,
// //       showCursor: false,
// //     });

// //     return () => typed.destroy();
// //   }, []);

// //   return (
// //     <section className="relative w-full min-h-screen mx-auto overflow-hidden">

// //       {/* ===== TEXT SECTION ===== */}
// //       <div
// //         className={`
// //           relative
// //           top-[100px]
// //           max-w-7xl
// //           mx-auto
// //           ${styles.paddingX}
// //           flex
// //           flex-row
// //           items-start
// //           gap-6
// //           z-10
// //         `}
// //       >
// //         {/* LEFT ACCENT */}
// //         <div className="flex flex-col justify-center items-center mt-2">
// //           <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
// //           <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
// //         </div>

// //         {/* TEXT CONTENT */}
// //         <div className="flex flex-col gap-2 max-w-xl">

// //           <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
// //             Hi, I&apos;m{" "}
// //             <span className="relative inline-block">
// //               <span className="text-yellow-400 text-shadow-gold uppercase italic font-serif">
// //                 SHUBHAM
// //               </span>
// //               <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
// //             </span>
// //           </h1>

// //           {/* Typed Text */}
// //           <p
// //             ref={el}
// //             className="
// //               text-[14px]
// //               sm:text-[20px]
// //               tracking-widest
// //               uppercase
// //               text-violet-400
// //               font-mono
// //               min-h-[24px]
// //             "
// //           />

// //           {/* Description */}
// //           <p className={`${styles.heroSubText} font-serif text-white-100 leading-relaxed`}>
// //             Welcome to my digital space, where I share my journey, projects, and passion for building meaningful web experiences.
// //           </p>

// //         </div>
// //       </div>

// //       {/* ===== 3D CANVAS ===== */}
// //       <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-16 sm:mt-0">
// //         <ComputersCanvas />
// //       </div>

// //       {/* ===== SCROLL INDICATOR ===== */}
// //       <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
// //         <a href="#about">
// //           <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
// //             <motion.div
// //               animate={{ y: [0, 24, 0] }}
// //               transition={{
// //                 duration: 1.5,
// //                 repeat: Infinity,
// //                 repeatType: "loop",
// //               }}
// //               className="w-3 h-3 rounded-full bg-secondary mb-1"
// //             />
// //           </div>
// //         </a>
// //       </div>

// //     </section>
// //   );
// // };

// // export default Hero;


// // import React from "react";
// // import { motion } from "framer-motion";
// // import { styles } from "../styles";
// // import { ComputersCanvas } from "./canvas";
// // import Typed from "typed.js";

// // const Hero = () => {
// //   const el = React.useRef(null);

// //   React.useEffect(() => {
// //     const typed = new Typed(el.current, {
// //       strings: [
// //         "Crafting Elegant & Scalable Web Solutions",
// //         "Full-Stack Developer Turning Ideas into Reality",
// //         "Building Modern, High-Performance Web Experiences",
// //         "Code-Driven Solutions with Impact & Purpose",
// //       ],
// //       typeSpeed: 60,
// //       backSpeed: 35,
// //       backDelay: 1200,
// //       loop: true,
// //       showCursor: false,
// //     });

// //     return () => typed.destroy();
// //   }, []);

// //   return (
// //     <section className="relative w-full min-h-screen mx-auto overflow-hidden">

// //       {/* ===== TEXT SECTION ===== */}
// //       <div
// //         className={`
// //           relative
// //           top-[100px]
// //           max-w-7xl
// //           mx-auto
// //           ${styles.paddingX}
// //           flex
// //           flex-row
// //           items-start
// //           gap-6
// //           z-10
// //         `}
// //       >
// //         {/* LEFT ACCENT */}
// //         <div className="flex flex-col justify-center items-center mt-2">
// //           <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
// //           <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
// //         </div>

// //         {/* TEXT CONTENT */}
// //         <div className="flex flex-col  max-w-2xl">

// //           <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
// //             Hi, I&apos;m{" "}
// //             <span className="relative inline-block">
// //               <span className="text-yellow-400 text-shadow-gold uppercase italic font-serif">
// //                 SHUBHAM
// //               </span>
// //               <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
// //             </span>
// //           </h1>

// //           {/* Typed Text */}

// //           {/* Description */}
// //           <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
// //             Welcome to my digital space <br className="sm:block hidden" />
// //             Discover my journey, projects, and passion for meaningful digital experiences
// //           </p>
// //           <p
// //             ref={el}
// //             className="
// //               text-[14px]
// //               sm:text-[20px]
// //               tracking-widest
// //               uppercase
// //               text-violet-400
// //               font-mono
// //               mt-1
// //               min-h-[24px]
// //             "
// //           />


// //         </div>
// //       </div>

// //       {/* ===== 3D CANVAS ===== */}
// //       <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-16 sm:mt-0">
// //         <ComputersCanvas />
// //       </div>

// //       {/* ===== SCROLL INDICATOR ===== */}
// //       <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
// //         <a href="#about">
// //           <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
// //             <motion.div
// //               animate={{ y: [0, 24, 0] }}
// //               transition={{
// //                 duration: 1.5,
// //                 repeat: Infinity,
// //                 repeatType: "loop",
// //               }}
// //               className="w-3 h-3 rounded-full bg-secondary mb-1"
// //             />
// //           </div>
// //         </a>
// //       </div>

// //     </section>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import Typed from "typed.js";

// const Hero = () => {
//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "Crafting Elegant & Scalable Web Solutions",
//         "Full-Stack Developer Turning Ideas into Reality",
//         "Building Modern, High-Performance Web Experiences",
//         "Code-Driven Solutions with Impact & Purpose",
//       ],
//       typeSpeed: 60,
//       backSpeed: 35,
//       backDelay: 1200,
//       loop: true,
//       showCursor: false,
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <div className="flex">

//       <section className="relative w-full min-h-screen mx-auto overflow-hidden">

//         {/* ===== TEXT SECTION ===== */}
//         <div
//           className={`
//           relative
//           top-[100px]
//           max-w-7xl
//           mx-auto
//           ${styles.paddingX}
//           flex
//           flex-row
//           items-start
//           gap-6
//           z-10
//           `}
//         >
//           {/* LEFT ACCENT */}
//           <div className="flex flex-col justify-center items-center mt-2">
//             <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
//             <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
//           </div>

//           {/* TEXT CONTENT */}
//           <div className="flex flex-col  max-w-2xl">

//             <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
//               Hi, I&apos;m{" "}
//               <span className="relative inline-block">
//                 <span className="text-yellow-400 text-shadow-gold uppercase italic font-serif">
//                   SHUBHAM
//                 </span>
//                 <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
//               </span>
//             </h1>

//             {/* Typed Text */}

//             {/* Description */}
//             <p className={`${styles.heroSubText} font-serif mt-2 text-white-100`}>
//               Welcome to my digital space <br className="sm:block hidden" />
//               Discover my journey, projects, and passion for meaningful digital experiences
//             </p>
//             <p
//               ref={el}
//               className="
//             text-[14px]
//             sm:text-[20px]
//             tracking-widest
//             uppercase
//             text-violet-400
//             font-mono
//             mt-1
//             min-h-[24px]
//             "
//             />


//           </div>
//         </div>

//         {/* ===== 3D CANVAS ===== */}
//         <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-16 sm:mt-0">
//           <ComputersCanvas />
//         </div>

//         {/* ===== SCROLL INDICATOR ===== */}
//         <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
//           <a href="#about">
//             <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
//               <motion.div
//                 animate={{ y: [0, 24, 0] }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: "loop",
//                 }}
//                 className="w-3 h-3 rounded-full bg-secondary mb-1"
//               />
//             </div>
//           </a>
//         </div>

//       </section>
//       <section className="">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesI05cNORjWsP-FtcmRLyd2DtpjOaJsJbcw&s" alt="img" />
//       </section>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from "typed.js";

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
      {/* MAIN WRAPPER */}
      <div className="flex">

        {/* ===== LEFT : TEXT SECTION ===== */}
        <div className="relative top-[100px] h-10 ml-10 lg:w-[70%] px-6 z-10">
          <div className="flex gap-6">

            {/* LEFT ACCENT */}
            <div className="flex flex-col items-center mt-2">
              <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
              <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
            </div>

            {/* TEXT CONTENT */}
            <div className="max-w-2xl">
              <h1 className={`${styles.heroHeadText} font-serif text-yellow-100 leading-tight`}>
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="text-yellow-400 uppercase italic">
                    SHUBHAM
                  </span>
                  <span className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-lg -z-10" />
                </span>
              </h1>

              <p className={`${styles.heroSubText} font-serif mt-3 text-white-100`}>
               Welcome to my digital space, where I craft meaningful web experiences.
              </p>

              {/* Typed Text */}
              <p
                ref={el}
                className="
                  mt-2
                  text-[14px]
                  sm:text-[20px]
                  tracking-widest
                  uppercase
                  text-violet-400
                  font-mono
                  min-h-[24px]
                "
              />
            </div>
          </div>
        </div>

        {/* ===== RIGHT : IMAGE (DESKTOP ONLY) ===== */}
        <div className="hidden lg:flex items-center max-h-screen ">
          <img
            src="https://res.cloudinary.com/dkbowuecy/image/upload/v1766516357/aaa_gzcfkx.png"
            alt="workspace"
            className="max-w-[420px] w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* ===== 3D CANVAS ===== */}
      <div className="relative sm:absolute sm:inset-0 sm:top-[120px] w-full sm:h-screen mt-16 sm:mt-0">
        <ComputersCanvas />
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
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
    </section>
  );
};

export default Hero;
