// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send(
//       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//       {
//         name: form.name,
//         email: form.email,
//         message: form.message,
//         title: "New Contact Message",
//       },
//       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//     ).then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);
//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <motion.label
//             className='flex flex-col'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <motion.input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//               whileFocus={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//           </motion.label>

//           <motion.label
//             className='flex flex-col'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <motion.input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//               whileFocus={{ scale: 1.03 }}
//             />
//           </motion.label>

//           <motion.label
//             className='flex flex-col'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <span className='text-white font-medium mb-4'>Your Message/Feedback</span>
//             <motion.textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//               whileFocus={{ scale: 1.02 }}
//             />
//           </motion.label>

//           <motion.button
//             type='submit'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </motion.button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");




import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

/* ── direct contact links ── */
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shubhamkr5923@gmail.com",
    href: "mailto:shubhamkr5923@gmail.com",
    color: "#f472b6",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/shubham-kumar145",
    href: "https://www.linkedin.com/in/shubham-kumar145/",
    color: "#60a5fa",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "shubham-kumar145",
    href: "https://github.com/shubham-kumar145",
    color: "#c084fc",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ranchi, India · Open to relocate",
    href: null,
    color: "#34d399",
  },
];

const MAX_MESSAGE = 1000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ── reusable neon field ── */
const Field = ({ label, error, children, delay }) => (
  <motion.label
    className="flex flex-col gap-2"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
  >
    <span
      className="font-mono text-[10px] tracking-[0.2em] uppercase"
      style={{ color: error ? "#f87171" : "rgba(196,181,253,0.7)" }}
    >
      {label}
    </span>
    {children}
    {error && (
      <span className="font-mono text-[10px]" style={{ color: "#f87171" }}>
        {error}
      </span>
    )}
  </motion.label>
);

const inputClass = `
  contact-input w-full py-3.5 px-4 rounded-[10px] text-[14px] text-white
  placeholder:text-[rgba(162,158,192,0.45)] outline-none transition-all duration-300
`;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_REGEX.test(form.email.trim())) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // Honeypot: real users never fill the hidden "company" field
    if (form.company) return;

    if (!validate()) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          title: "New Portfolio Contact Message",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <>
      <style>{`
        .contact-input {
          background: rgba(10, 10, 24, 0.7);
          border: 1px solid rgba(124, 111, 205, 0.22);
        }
        .contact-input:hover {
          border-color: rgba(124, 111, 205, 0.4);
        }
        .contact-input:focus {
          border-color: rgba(192, 132, 252, 0.8);
          box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.15), 0 0 24px rgba(192, 132, 252, 0.18);
          background: rgba(14, 14, 32, 0.9);
        }
        .contact-input.has-error {
          border-color: rgba(248, 113, 113, 0.7);
        }
        @keyframes contact-spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* ── Section header ── */}
      <motion.div variants={textVariant()} className="mb-8 text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase italic font-serif" style={{ color: "#7c6fcd" }}>
          Let's build something,
        </p>
        <h2
          className="font-black md:text-[52px] sm:text-[42px] xs:text-[34px] text-[26px] italic font-serif uppercase leading-tight"
          style={{
            background: "linear-gradient(135deg, #e2d9f3 0%, #c084fc 40%, #f472b6 75%, #fb923c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get In Touch
        </h2>
        <div
          className="mx-auto mt-2 h-[2px] w-24 rounded-full"
          style={{ background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)" }}
        />
        <p className="mt-2 font-mono text-[9px] tracking-[0.3em] uppercase font-light" style={{ color: "rgba(196,181,253,0.45)" }}>
          Open to internships &amp; full-time roles · Batch 2027
        </p>
      </motion.div>

      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        {/* ── LEFT: form card ── */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] rounded-[20px] p-[1.5px]"
          style={{
            background: "linear-gradient(135deg, rgba(192,132,252,0.45), rgba(236,72,153,0.25), rgba(34,211,238,0.3))",
            boxShadow: "0 0 40px rgba(145,94,255,0.12)",
          }}
        >
          <div
            className="relative h-full rounded-[19px] p-6 sm:p-8 overflow-hidden"
            style={{
              background: "rgba(13, 13, 30, 0.88)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {/* ambient glow */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(192,132,252,0.14) 0%, transparent 70%)" }}
            />

            {/* terminal-style header */}
            <div className="relative flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] tracking-wide" style={{ color: "#75e110" }}>
                ~/contact $ send-message
              </span>
            </div>

            {/* quick contact chips */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              {contactLinks.map(({ icon: Icon, label, value, href, color }) => {
                const content = (
                  <>
                    <span
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}1a`, border: `1px solid ${color}40` }}
                    >
                      <Icon size={15} color={color} />
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="font-mono text-[8px] tracking-[0.18em] uppercase" style={{ color: `${color}cc` }}>
                        {label}
                      </span>
                      <span className="text-[12px] truncate" style={{ color: "#e2d9f3" }}>
                        {value}
                      </span>
                    </span>
                  </>
                );
                const chipClass =
                  "flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-all duration-300 min-w-0";
                const chipStyle = { background: "rgba(0,0,0,0.3)", border: "1px solid rgba(124,111,205,0.15)" };

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`${chipClass} hover:-translate-y-0.5 hover:border-[rgba(192,132,252,0.45)]`}
                    style={chipStyle}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className={chipClass} style={chipStyle}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* divider */}
            <div className="relative flex items-center gap-3 mb-6">
              <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,111,205,0.4))" }} />
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(196,181,253,0.5)" }}>
                or drop a message
              </span>
              <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(124,111,205,0.4), transparent)" }} />
            </div>

            {/* form */}
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
              {/* honeypot (hidden from humans) */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your Name" error={errors.name} delay={0.1}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    className={`${inputClass} ${errors.name ? "has-error" : ""}`}
                  />
                </Field>

                <Field label="Your Email" error={errors.email} delay={0.2}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    autoComplete="email"
                    className={`${inputClass} ${errors.email ? "has-error" : ""}`}
                  />
                </Field>
              </div>

              <Field label="Your Message" error={errors.message} delay={0.3}>
                <div className="relative">
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    maxLength={MAX_MESSAGE}
                    placeholder="Tell me about the role, project, or idea…"
                    className={`${inputClass} resize-none ${errors.message ? "has-error" : ""}`}
                  />
                  <span
                    className="absolute bottom-2.5 right-3 font-mono text-[9px]"
                    style={{ color: "rgba(196,181,253,0.4)" }}
                  >
                    {form.message.length}/{MAX_MESSAGE}
                  </span>
                </div>
              </Field>

              {/* submit + status */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-1">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.04 } : {}}
                  whileTap={!loading ? { scale: 0.96 } : {}}
                  className="relative w-fit flex items-center gap-2.5 px-7 py-3 rounded-full font-semibold text-[14px] text-white disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #c026d3, #ec4899)",
                    boxShadow: "0 0 24px rgba(192,38,211,0.45), 0 0 48px rgba(124,58,237,0.2)",
                    opacity: loading ? 0.75 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                        style={{ animation: "contact-spin 0.8s linear infinite" }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      role="status"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[12px]"
                      style={
                        status === "success"
                          ? { color: "#34d399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.3)" }
                          : { color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.3)" }
                      }
                    >
                      {status === "success" ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
                      {status === "success"
                        ? "Message sent! I'll get back to you soon."
                        : "Couldn't send. Please email me directly."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ── RIGHT: Earth ── */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
