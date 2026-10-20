// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo_sk, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [btnHovered, setBtnHovered] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className='w-full flex justify-center'>
//       <div className={`${styles.paddingX} w-[98%] rounded-3xl flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
//         <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

//           {/* ── Logo ── */}
//           <Link
//             to="/"
//             className="group flex items-center gap-2 cursor-pointer"
//             onClick={() => {
//               setActive("");
//               window.scrollTo(0, 0);
//             }}
//           >
//             <img
//               src={logo_sk}
//               alt="logo"
//               className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
//             />
//             <p
//               className="
//                 relative text-white text-[18px] font-bold flex items-center
//                 transition-colors duration-300 group-hover:text-white
//                 after:content-[''] after:absolute after:left-0 after:-bottom-1
//                 after:h-[2px] after:w-full after:bg-gradient-to-r
//                 after:from-yellow-400 after:to-pink-400
//                 after:origin-left after:scale-x-0 after:transition-transform after:duration-300
//                 group-hover:after:scale-x-100 uppercase whitespace-nowrap
//               "
//             >
//               Shubham&nbsp;
//               <span className="sm:inline hidden text-secondary font-medium ml-1">
//                 | MERN DEVELOPER
//               </span>
//             </p>
//           </Link>

//           {/* ── Desktop nav ── */}
//           <ul className='list-none hidden sm:flex flex-row gap-3 items-center'>
//             {navLinks.map((nav) => (
//               <li
//                 key={nav.id}
//                 className={`
//                   relative text-[14px] font-medium cursor-pointer transition-all duration-300
//                   ${active === nav.title ? "text-white after:scale-x-100" : "text-secondary after:scale-x-0"}
//                   hover:text-white
//                   after:content-[''] after:absolute after:left-0 after:-bottom-1
//                   after:h-[2px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-pink-400
//                   after:origin-left after:transition-transform after:duration-300
//                   hover:after:scale-x-100
//                 `}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}

//             {/* ── Open to Internships pill ── */}
//             <li style={{ listStyle: "none" }}>
//               <a
//                 href="#contact"
//                 onMouseEnter={() => setBtnHovered(true)}
//                 onMouseLeave={() => setBtnHovered(false)}
//                 // onClick={() => setActive("")}
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 7,
//                   padding: "7px 16px",
//                   borderRadius: 50,
//                   border: `1.5px solid ${btnHovered ? "rgba(145,94,255,1)" : "rgba(145,94,255,0.6)"}`,
//                   background: btnHovered ? "rgba(145,94,255,0.13)" : "rgba(10,10,15,0.6)",
//                   color: btnHovered ? "#ddd6fe" : "#a78bfa",
//                   fontSize: 12,
//                   fontFamily: "'Courier New', monospace",
//                   letterSpacing: "0.05em",
//                   whiteSpace: "nowrap",
//                   textDecoration: "none",
//                   cursor: "pointer",
//                   transition: "all 0.25s",
//                   boxShadow: btnHovered
//                     ? "0 0 18px 4px rgba(145,94,255,0.65), 0 0 40px 8px rgba(145,94,255,0.25)"
//                     : "0 0 10px 2px rgba(145,94,255,0.4), 0 0 22px 4px rgba(145,94,255,0.15)",
//                 }}
//               >
//                 <span style={{
//                   width: 7, height: 7, borderRadius: "50%",
//                   background: "#22c55e", display: "inline-block", flexShrink: 0,
//                   boxShadow: "0 0 6px 2px rgba(34,197,94,0.6)",
//                   animation: "pulse-dot 1.8s ease-in-out infinite",
//                 }} />
//                 open to work
//               </a>
//             </li>
//           </ul>

//           {/* ── Mobile hamburger ── */}
//           <div className='sm:hidden flex flex-1 justify-end items-center'>
//             <img
//               src={toggle ? close : menu}
//               alt='menu'
//               className='w-[28px] h-[28px] object-contain'
//               // onClick={() => setToggle(!toggle)}
//             />

//             <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
//               <ul className='list-none flex justify-end items-start flex-1 flex-col gap-3'>
//                 {navLinks.map((nav) => (
//                   <li
//                     key={nav.id}
//                     className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
//                     onClick={() => {
//                       setToggle(!toggle);
//                       setActive(nav.title);
//                     }}
//                   >
//                     <a href={`#${nav.id}`}>{nav.title}</a>
//                   </li>
//                 ))}

//                 {/* Mobile: open to work */}
//                 <li>
//                   <a
//                     href="#contact"
//                     onClick={() => { setToggle(false); setActive(""); }}
//                     style={{
//                       display: "inline-flex", alignItems: "center", gap: 6,
//                       padding: "6px 14px", borderRadius: 50,
//                       border: "1.5px solid rgba(145,94,255,0.6)",
//                       background: "rgba(145,94,255,0.1)",
//                       color: "#a78bfa", fontSize: 12,
//                       fontFamily: "'Courier New', monospace",
//                       letterSpacing: "0.05em", textDecoration: "none",
//                       boxShadow: "0 0 10px 2px rgba(145,94,255,0.35)",
//                     }}
//                   >
//                     <span style={{
//                       width: 6, height: 6, borderRadius: "50%",
//                       background: "#22c55e", display: "inline-block",
//                       boxShadow: "0 0 5px rgba(34,197,94,0.6)",
//                       animation: "pulse-dot 1.8s ease-in-out infinite",
//                     }} />
//                     open to work
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse-dot {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(0.75); }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_sk, menu, close } from "../assets";

/* ── "open to work" pill (shared by desktop & mobile) ── */
const OpenToWorkPill = ({ onClick, compact = false }) => (
  <a
    href="#contact"
    onClick={onClick}
    className={`
      otw-pill inline-flex items-center gap-[7px] rounded-full whitespace-nowrap
      font-mono tracking-[0.05em] no-underline transition-all duration-300
      ${compact ? "px-3.5 py-1.5 text-[12px]" : "px-4 py-[7px] text-[12px]"}
    `}
  >
    <span className="otw-dot w-[7px] h-[7px] rounded-full inline-block flex-shrink-0" />
    open to work
  </a>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  /* ── background on scroll ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── scroll-spy: highlight the section currently on screen ── */
  useEffect(() => {
    const sections = navLinks
      .map((nav) => document.getElementById(nav.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navLinks.find((nav) => nav.id === entry.target.id);
            if (match) setActive(match.title);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ── close mobile menu on outside click or Escape ── */
  useEffect(() => {
    if (!toggle) return;

    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setToggle(false);
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setToggle(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [toggle]);

  /* ── close mobile menu if the screen is resized to desktop ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setToggle(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full flex justify-center" aria-label="Main navigation">
      <div
        className={`
          ${styles.paddingX} w-[98%] rounded-3xl flex items-center py-3 fixed top-0 z-20
          transition-all duration-300
          ${scrolled ? "bg-primary/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"}
        `}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="group flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setActive("");
              setToggle(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo_sk}
              alt="Shubham Kumar logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p
              className="
                relative text-white text-[18px] font-bold flex items-center uppercase whitespace-nowrap
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-pink-400
                after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                group-hover:after:scale-x-100
              "
            >
              Shubham
              <span className="hidden xl:inline text-secondary font-medium ml-2">
                | Full Stack Developer
              </span>
            </p>
          </Link>

          {/* ── Desktop nav (≥ 1024px) ── */}
          <ul className="list-none hidden lg:flex flex-row gap-5 items-center">
            {navLinks.map((nav) => {
              const isActive = active === nav.title;
              return (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => setActive(nav.title)}
                    aria-current={isActive ? "true" : undefined}
                    className={`
                      relative text-[14px] font-medium transition-colors duration-300 hover:text-white
                      ${isActive ? "text-white after:scale-x-100" : "text-secondary after:scale-x-0"}
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-pink-400
                      after:origin-left after:transition-transform after:duration-300
                      hover:after:scale-x-100
                    `}
                  >
                    {nav.title}
                  </a>
                </li>
              );
            })}

            <li>
              <OpenToWorkPill onClick={() => setActive("Contact")} />
            </li>
          </ul>

          {/* ── Mobile / tablet hamburger (< 1024px) ── */}
          <div ref={menuRef} className="lg:hidden flex flex-1 justify-end items-center">
            <button
              type="button"
              onClick={() => setToggle((prev) => !prev)}
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              aria-controls="mobile-menu"
              className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <img src={toggle ? close : menu} alt="" className="w-[28px] h-[28px] object-contain" />
            </button>

            <div
              id="mobile-menu"
              className={`
                ${toggle ? "flex mobile-menu-open" : "hidden"}
                p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl
                border border-[rgba(145,94,255,0.25)] shadow-[0_12px_40px_rgba(0,0,0,0.5)]
              `}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                      aria-current={active === nav.title ? "true" : undefined}
                      className={`font-poppins font-medium text-[16px] transition-colors duration-200 hover:text-white ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}

                <li className="pt-1">
                  <OpenToWorkPill
                    compact
                    onClick={() => {
                      setToggle(false);
                      setActive("Contact");
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .otw-pill {
          color: #a78bfa;
          border: 1.5px solid rgba(145,94,255,0.6);
          background: rgba(10,10,15,0.6);
          box-shadow: 0 0 10px 2px rgba(145,94,255,0.4), 0 0 22px 4px rgba(145,94,255,0.15);
        }
        .otw-pill:hover,
        .otw-pill:focus-visible {
          color: #ddd6fe;
          border-color: rgba(145,94,255,1);
          background: rgba(145,94,255,0.13);
          box-shadow: 0 0 18px 4px rgba(145,94,255,0.65), 0 0 40px 8px rgba(145,94,255,0.25);
          outline: none;
        }
        .otw-dot {
          background: #22c55e;
          box-shadow: 0 0 6px 2px rgba(34,197,94,0.6);
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
        .mobile-menu-open {
          animation: menu-in 0.2s ease-out;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.75); }
        }
        @keyframes menu-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .otw-dot, .mobile-menu-open { animation: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
