import React, { useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

// Custom ease for smoother zoom
const ease = [0.4, 0, 0.2, 1];



export default function ZoomIntoO() {
  const gameBoard = [
    "X", "O", "X",
    "X", "O", "O",
    "O", "X", "X"
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  // Board scales up, but fades out completely at the end
  // Delay zoom: scaling starts after 20% scroll
  // Smoother zoom and fade with more keyframes
  const boardScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8, 1],
    [1, 1, 3, 5, 8],
    { ease: easeInOut }
  );
  const boardOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9, 0.97, 1],
    [1, 1, 0.5, 0.1, 0],
    { ease: easeInOut }
  );
  // Center O scales up and fades out at the very end
  const centerOScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8, 1],
    [1, 1, 2, 6, 16],
    { ease: easeInOut }
  );
  const centerOOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.95, 1],
    [1, 1, 0.5, 0],
    { ease: easeInOut }
  );
  const centerOZ = useTransform(scrollYProgress, [0, 0.7, 1], [1, 10, 100]);

  // Animate grid lines floating away
  // 4 lines: 2 vertical, 2 horizontal
  const gridLineTransforms = [
    useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]), // Vertical 1 (left)
    useTransform(scrollYProgress, [0, 1], ["0px", "200px"]),  // Vertical 2 (right)
    useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]), // Horizontal 1 (top)
    useTransform(scrollYProgress, [0, 1], ["0px", "200px"]),  // Horizontal 2 (bottom)
  ];

  // Precompute opacity transforms for non-center cells (indices 0-8 except 4)
  // Fade out quicker for non-center cells
  const nonCenterCellOpacities = Array(9).fill(null).map((_, i) =>
    i === 4 ? null : useTransform(scrollYProgress, [0, 0.6, 0.7], [1, 0.2, 0])
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap" rel="stylesheet" />
      <div
        ref={containerRef}
        style={{ height: "160vh", background: "#000" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            minHeight: "45vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1
          }}
        >
          <div className="text-center" style={{ width: "100vw" }}>
            <motion.h2
              className="text-5xl font-bold mb-8"
              style={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                fontFamily: "Fredoka, Arial, sans-serif",
                letterSpacing: "0.05em"
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              Game Complete
            </motion.h2>
            <motion.div
              style={{
                width: "320px",
                height: "320px",
                margin: "0 auto 2rem auto",
                background: "none",
                scale: boardScale,
                opacity: boardOpacity,
                position: "relative",
                overflow: "visible",
                borderRadius: 0,
                boxShadow: "none",
                pointerEvents: "none"
              }}
            >
              {/* Grid lines as absolutely positioned divs */}
              {/* Vertical line 1 */}
              <motion.div
                style={{
                  position: "absolute",
                  left: "33.33%",
                  top: 0,
                  width: "4px",
                  height: "100%",
                  background: "#fff",
                  borderRadius: "2px",
                  zIndex: 2,
                  x: gridLineTransforms[0],
                }}
              />
              {/* Vertical line 2 */}
              <motion.div
                style={{
                  position: "absolute",
                  left: "66.66%",
                  top: 0,
                  width: "4px",
                  height: "100%",
                  background: "#fff",
                  borderRadius: "2px",
                  zIndex: 2,
                  x: gridLineTransforms[1],
                }}
              />
              {/* Horizontal line 1 */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "33.33%",
                  left: 0,
                  height: "4px",
                  width: "100%",
                  background: "#fff",
                  borderRadius: "2px",
                  zIndex: 2,
                  y: gridLineTransforms[2],
                }}
              />
              {/* Horizontal line 2 */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "66.66%",
                  left: 0,
                  height: "4px",
                  width: "100%",
                  background: "#fff",
                  borderRadius: "2px",
                  zIndex: 2,
                  y: gridLineTransforms[3],
                }}
              />

              {/* Board cells */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                {gameBoard.map((cell, i) =>
                  i === 4 ? (
                    <motion.div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        background: "none",
                        userSelect: "none",
                        zIndex: centerOZ,
                        scale: centerOScale,
                        opacity: centerOOpacity,
                        position: "relative",
                        pointerEvents: "none"
                      }}
                    >
                      {/* High-res SVG O for crisp scaling */}
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1200 1200"
                        style={{ display: "block" }}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="O"
                      >
                        <defs>
                          <radialGradient id="o-glass-gradient" cx="50%" cy="50%" r="60%">
                            <stop offset="0%" stopColor="#00fff7" stopOpacity="0.9" />
                            <stop offset="60%" stopColor="#00fff7" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#00fff7" stopOpacity="0.2" />
                          </radialGradient>
                          <filter id="o-glow" x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="48" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <circle
                          cx="600"
                          cy="600"
                          r="420"
                          fill="url(#o-glass-gradient)"
                          stroke="#00fff7"
                          strokeWidth="108"
                          filter="url(#o-glow)"
                          opacity="0.95"
                        />
                        <circle
                          cx="600"
                          cy="600"
                          r="288"
                          fill="#000"
                          opacity="0.9"
                        />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "4rem",
                        fontWeight: 700,
                        fontFamily: "Fredoka, Arial, sans-serif",
                        color: cell === "O" ? "#00fff7" : "#ff2d7a",
                        textShadow: cell === "O"
                          ? "0 0 24px #00fff7, 0 0 48px #00fff799"
                          : "0 0 24px #ff2d7a, 0 0 48px #ff2d7a99",
                        width: "100%",
                        height: "100%",
                        background: "none",
                        userSelect: "none",
                        opacity: nonCenterCellOpacities[i] || 1,
                        pointerEvents: "none",
                        transition: "opacity 0.2s"
                      }}
                    >
                      {cell}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
            <motion.p
              className="text-xl"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "1.25rem",
                fontFamily: "Fredoka, Arial, sans-serif"
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              O wins!
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}