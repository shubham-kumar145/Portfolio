import React, { useEffect, useRef, useState } from "react";
import { lines } from "../constants";


const lineToString = (tokens) => tokens.map((t) => t.t).join("");

const renderPartialLine = (tokens, charsToShow) => {
  if (charsToShow <= 0) return null;
  let remaining = charsToShow;
  const result = [];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (remaining <= 0) break;
    const visible = tok.t.slice(0, remaining);
    result.push(
      <span key={i} style={{ color: tok.c, fontStyle: tok.s ? "italic" : "normal" }}>
        {visible}
      </span>
    );
    remaining -= tok.t.length;
  }
  return result;
};

const CHAR_SPEED = 18;

const CodeBlock = () => {
  const containerRef = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const line = lines[currentLine];
    const fullText = lineToString(line.tokens);

    // Blank lines: skip instantly with tiny pause
    if (fullText.length === 0) {
      const t = setTimeout(() => {
        if (currentLine + 1 < lines.length) {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        } else {
          setDone(true);
        }
      }, 60);
      return () => clearTimeout(t);
    }

    if (currentChar < fullText.length) {
      const t = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, CHAR_SPEED);
      return () => clearTimeout(t);
    } else {
      // Line complete — move to next
      const t = setTimeout(() => {
        if (currentLine + 1 < lines.length) {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        } else {
          setDone(true);
        }
      }, 40);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, done]);

  // Auto-scroll to follow active line
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentLine]);

  return (
    <div
      className="w-full max-w-[480px] rounded-xl overflow-hidden border border-[#2a2a4a] font-mono text-sm"
      style={{
        background: "#1a1a2e",
        boxShadow:
          "0 0 0 1px #2a2a4a, 0 0 40px rgba(145,94,255,0.15), 0 0 80px rgba(145,94,255,0.05)",
      }}
    >
      {/* ── Title Bar ── */}
      <div
        className="flex items-center gap-2 px-4 py-[10px] border-b border-[#2a2a4a] select-none"
        style={{ background: "#111128" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[#75e110] text-xs tracking-wide">Shubham.jsx</span>
        <span className="text-[#75e110] text-xs ml-1">— react</span>
      </div>

      {/* ── Code Body ── */}
      <div
        ref={containerRef}
        className="px-4 py-4 overflow-y-auto"
        style={{ maxHeight: "420px" }}
      >
        {lines.map(({ ln, tokens }, idx) => {
          // Hide lines not yet reached
          if (idx > currentLine) return null;

          const fullText = lineToString(tokens);
          const isActiveLine = idx === currentLine && !done;
          const isBlank = fullText.length === 0;

          return (
            <div key={ln} className="flex gap-3 leading-[1.75]">
              {/* Line number */}
              <span
                className="select-none text-right shrink-0 text-[11px] pt-[1px]"
                style={{ color: "#3a3a5a", minWidth: "18px" }}
              >
                {ln}
              </span>

              {/* Code tokens */}
              <span className="text-[12.5px]">
                {isBlank ? (
                  <span>&nbsp;</span>
                ) : isActiveLine ? (
                  <>
                    {renderPartialLine(tokens, currentChar)}
                    {/* blinking cursor on the line being typed */}
                    <span
                      style={{
                        display: "inline-block",
                        width: "7px",
                        height: "1em",
                        background: "#FFD700",
                        verticalAlign: "middle",
                        marginLeft: "1px",
                        animation: "blink 0.7s step-end infinite",
                      }}
                    />
                  </>
                ) : (
                  tokens.map((tok, i) => (
                    <span
                      key={i}
                      style={{ color: tok.c, fontStyle: tok.s ? "italic" : "normal" }}
                    >
                      {tok.t}
                    </span>
                  ))
                )}
              </span>
            </div>
          );
        })}

        {/* Resting cursor after all done */}
        {done && (
          <div
            className="flex gap-3 leading-[1.75] mt-1 pt-2"
            style={{ borderTop: "1px solid #2a2a4a" }}
          >
            <span
              className="select-none shrink-0"
              style={{ minWidth: "18px" }}
            />
            <span className="text-[12.5px]">
              <span
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "1em",
                  background: "#FFD700",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-track { background: transparent; }
        div::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default CodeBlock;
