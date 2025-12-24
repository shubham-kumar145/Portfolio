// import Tilt from "react-parallax-tilt";
// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ServiceCard = ({ index, title, icon }) => (
// <Tilt
//   tiltMaxAngleX={20}
//   tiltMaxAngleY={20}
//   scale={1.03}
//   transitionSpeed={600}
//   className="xs:w-[250px] w-full"
// >
//   <motion.div
//     variants={fadeIn("right", "spring", index * 0.2, 0.9)}
//     initial="hidden"
//     animate="show"
//     whileHover={{ scale: 1.02}}
//     transition={{
//       type: "spring",
//       stiffness: 80,
//       damping: 15,
//     }}
//     className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//   >
//     <div
//       className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//     >
//       <img
//         src={icon}
//         alt="development"
//         className="w-60 h-30 object-contain rounded-xl"
//       />

//       <h3 className="text-white text-[20px] font-bold text-center">
//         {title}
//       </h3>
//     </div>
//   </motion.div>
// </Tilt>

// );

// const About = () => {
//   const drivelink =
//     "https://drive.google.com/uc?export=download&id=1YNwlGpK6VJuf9NiQf8d2Gje8QZlyDy42";

//   const [viewwhich, setViewwhich] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setViewwhich((prev) => !prev);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full flex flex-col lg:flex-row justify-between  gap-10">

//       {/* ================= LEFT TEXT SECTION ================= */}
//       <div className="flex-1">
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>INTRODUCTION</p>
//           <h2 className={`${styles.sectionHeadText} font-serif`}>
//             Behind the Screen.
//           </h2>
//         </motion.div>
//         <motion.div
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
//         >
//           {/* FLEX ROW: TEXT + IMAGE SIDE BY SIDE */}
//           <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">

//             {/* LEFT TEXT BLOCK (65% WIDTH) */}
//             <div className="w-full lg:w-[65%] pr-0">

//               <p className="text-lg leading-8 text-justify font-serif">
//                 Hi, I’m{" "}
//                 <span className="font-semibold text-yellow-300">Shubham Kumar</span> — a{" "}
//                 <span className="font-semibold text-pink-300">
//                   web development enthusiast
//                 </span>{" "}
//                 and a third-year Electronics and Communication Engineering student at{" "}
//                 <span className="font-semibold text-yellow-300">BIT Mesra</span>. I specialize
//                 in{" "}
//                 <span className="font-semibold text-violet-300">
//                   full-stack web development
//                 </span>
//                 , building modern, responsive, and high-performance web applications that
//                 deliver seamless user experiences. My expertise spans frontend development
//                 with{" "}
//                 <span className="font-semibold text-violet-300">
//                   React and Tailwind CSS
//                 </span>
//                 , and component-driven design, as well as backend fundamentals, RESTful API
//                 integration, and database management.
//               </p>

//               <p className="text-lg leading-8 mt-4 text-justify font-serif">
//                 I focus on designing intuitive interfaces, implementing smooth interactions,
//                 and{" "}
//                 <span className="font-semibold text-green-300">
//                   optimizing application performance
//                 </span>
//                 . I actively experiment with emerging web technologies, refine code quality,
//                 and adopt best practices to develop{" "}
//                 <span className="font-semibold text-green-300">
//                   scalable and maintainable solutions
//                 </span>
//                 . Driven by passion for problem-solving, creativity, and continuous learning,
//                 I aim to create impactful digital products that address real-world challenges.
//               </p>

//               <p className="text-lg leading-8 mt-4 text-justify font-serif">
//                 <span className="font-semibold text-yellow-300">
//                   Key Skills & Technologies:
//                 </span>{" "}
//                 <span className="font-semibold text-violet-300">React</span>,{" "}
//                 <span className="font-semibold text-violet-300">Tailwind CSS</span>,{" "}
//                 <span className="font-semibold text-blue-300">JavaScript</span>, HTML,
//                 CSS, Node.js, REST APIs, MongoDB, Git, Responsive Web Design, UI/UX
//                 Optimization, Agile Development Practices.
//               </p>


//               {/* DOWNLOAD BUTTON */}
//               <div className="mt-6 flex justify-start">
//                 <a
//                   href={drivelink}
//                   target="_blank"
//                   className="min-w-52 inline-block bg-primary hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.span
//                       key={viewwhich ? "download" : "view"}
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       Download Resume
//                     </motion.span>
//                   </AnimatePresence>
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT IMAGE BLOCK (35% WIDTH) */}
//             <div className="hidden lg:flex w-full lg:w-[35%] justify-end items-center m-0 p-0">
//               <img
//                 src="/profile.png"
//                 alt="Shubham Profile"
//                 className="w-[320px] h-auto object-cover rounded-2xl select-none m-0 p-0"
//               />
//             </div>

//           </div>
//         </motion.div>
//         <div className="mt-20 flex flex-wrap gap-10">
//           {services.map((service, index) => (
//             <ServiceCard key={service.title} index={index} {...service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(About, "about");
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  {
    icon: Github,
    link: "https://github.com/shubham-kumar145",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/shubham-kumar145/",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/shubham._.ku.m.ar",
  },
  {
    icon: Mail,
    link: "mailto:shubhamkr5923@gmail.com",
  },
];
const ServiceCard = ({ index, title, icon }) => (

  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.03}
    transitionSpeed={600}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.9)}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="development"
          className="w-60 h-30 object-contain rounded-xl"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>

);

const About = () => {
  const drivelink =
    "https://drive.google.com/uc?export=download&id=1YNwlGpK6VJuf9NiQf8d2Gje8QZlyDy42";

  const [viewwhich, setViewwhich] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewwhich((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between  gap-10">

      {/* ================= LEFT TEXT SECTION ================= */}
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
          {/* FLEX ROW: TEXT + IMAGE SIDE BY SIDE */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">

            {/* LEFT TEXT BLOCK (65% WIDTH) */}
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


              {/* DOWNLOAD BUTTON */}
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
                      className="w-12 h-12 rounded-full
          flex items-center justify-center
          border-2 border-cyan-400
          text-cyan-400
          hover:bg-cyan-400 hover:text-black
          shadow-[0_0_15px_rgba(34,211,238,0.6)]
          transition-colors duration-300"
                    >
                      <item.icon size={22} />
                    </motion.a>
                  ))}
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE BLOCK (35% WIDTH) */}
            <div className="hidden lg:flex w-full lg:w-[35%] justify-end items-center m-0 p-0">
              <img
                src="/profile.png"
                alt="Shubham Profile"
                className="w-[320px] h-auto object-cover rounded-2xl select-none m-0 p-0"
              />
            </div>

          </div>
        </motion.div>
        <div className="mt-20 flex flex-wrap justify-around gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");