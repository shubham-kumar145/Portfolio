import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_sk, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='w-full flex justify-center '>
      <div className={`${styles.paddingX} w-[98%] rounded-3xl flex items-center py-3 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

          {/* ── Logo ── */}
          <Link
            to="/"
            className="group flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo_sk}
              alt="logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p
              className="
                relative text-white text-[18px] font-bold flex items-center
                transition-colors duration-300 group-hover:text-white
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full after:bg-gradient-to-r
                after:from-yellow-400 after:to-pink-400
                after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                group-hover:after:scale-x-100 uppercase whitespace-nowrap
              "
            >
              Shubham&nbsp;
              <span className="sm:inline hidden text-secondary font-medium ml-1">
                | MERN DEVELOPER
              </span>
            </p>
          </Link>

          {/* ── Desktop nav ── */}
          <ul className='list-none hidden sm:flex flex-row gap-3 items-center'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`
                  relative text-[14px] font-medium cursor-pointer transition-all duration-300
                  ${active === nav.title ? "text-white after:scale-x-100" : "text-secondary after:scale-x-0"}
                  hover:text-white
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-pink-400
                  after:origin-left after:transition-transform after:duration-300
                  hover:after:scale-x-100
                `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* ── Open to Internships pill ── */}
            <li style={{ listStyle: "none" }}>
              <a
                href="#contact"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                // onClick={() => setActive("")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "7px 16px",
                  borderRadius: 50,
                  border: `1.5px solid ${btnHovered ? "rgba(145,94,255,1)" : "rgba(145,94,255,0.6)"}`,
                  background: btnHovered ? "rgba(145,94,255,0.13)" : "rgba(10,10,15,0.6)",
                  color: btnHovered ? "#ddd6fe" : "#a78bfa",
                  fontSize: 12,
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: btnHovered
                    ? "0 0 18px 4px rgba(145,94,255,0.65), 0 0 40px 8px rgba(145,94,255,0.25)"
                    : "0 0 10px 2px rgba(145,94,255,0.4), 0 0 22px 4px rgba(145,94,255,0.15)",
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#22c55e", display: "inline-block", flexShrink: 0,
                  boxShadow: "0 0 6px 2px rgba(34,197,94,0.6)",
                  animation: "pulse-dot 1.8s ease-in-out infinite",
                }} />
                open to work
              </a>
            </li>
          </ul>

          {/* ── Mobile hamburger ── */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              // onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-3'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}

                {/* Mobile: open to work */}
                <li>
                  <a
                    href="#contact"
                    onClick={() => { setToggle(false); setActive(""); }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "6px 14px", borderRadius: 50,
                      border: "1.5px solid rgba(145,94,255,0.6)",
                      background: "rgba(145,94,255,0.1)",
                      color: "#a78bfa", fontSize: 12,
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.05em", textDecoration: "none",
                      boxShadow: "0 0 10px 2px rgba(145,94,255,0.35)",
                    }}
                  >
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#22c55e", display: "inline-block",
                      boxShadow: "0 0 5px rgba(34,197,94,0.6)",
                      animation: "pulse-dot 1.8s ease-in-out infinite",
                    }} />
                    open to work
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
