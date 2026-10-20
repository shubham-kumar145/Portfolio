import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const percent = Math.round(progress);

  return (
    <Html as="div" center style={{ pointerEvents: "none" }}>
      <div
        role="progressbar"
        aria-label="Loading 3D scene"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        {/* neon spinner */}
        <span className="sk-loader-ring" />

        {/* percentage */}
        <p
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            fontFamily: "'Courier New', monospace",
            color: "#e2d9f3",
            textShadow: "0 0 10px rgba(192,132,252,0.6)",
          }}
        >
          {percent}%
        </p>

        {/* progress bar */}
        <div
          style={{
            width: 90,
            height: 3,
            borderRadius: 999,
            background: "rgba(124,111,205,0.2)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              borderRadius: 999,
              background: "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)",
              boxShadow: "0 0 8px rgba(236,72,153,0.6)",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      <style>{`
        .sk-loader-ring {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 3px solid rgba(124,111,205,0.2);
          border-top-color: #c084fc;
          border-right-color: #f472b6;
          box-shadow: 0 0 16px rgba(192,132,252,0.35);
          animation: sk-spin 0.9s linear infinite;
        }
        @keyframes sk-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sk-loader-ring { animation-duration: 2.5s; }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
