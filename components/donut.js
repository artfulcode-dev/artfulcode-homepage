import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
let a = 1;
let b = 1;
const r1 = 1;
const r2 = 2;
const k1 = 150;
const k2 = 5;
const theta_spacing = 0.3;
const phi_spacing = 0.1;

export default function Donut() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateCanvas = () => {
      const theme = localStorage.getItem("theme") || "dark";
      ctx.clearRect(0, 0, 300, 300);
      a += 0.07;
      b += 0.03;
      const cosA = Math.cos(a),
        sinA = Math.sin(a),
        cosB = Math.cos(b),
        sinB = Math.sin(b);

      for (let j = 0; j < 6.28; j += theta_spacing) {
        const sinT = Math.sin(j),
          cosT = Math.cos(j);

        for (let i = 0; i < 6.28; i += phi_spacing) {
          const sinP = Math.sin(i),
            cosP = Math.cos(i);
          const ox = r2 + r1 * cosT,
            oy = r1 * sinT;

          // final 3D coordinate
          const x = ox * (cosB * cosP + sinA * sinB * sinP) - oy * cosA * sinB;
          const y = ox * (sinB * cosP - sinA * cosB * sinP) + oy * cosA * cosB;
          const ooz = 1 / (k2 + cosA * ox * sinP + sinA * oy);

          const xp = k1 + k1 * ooz * x;
          const yp = 120 - k1 * ooz * y;

          const L =
            0.7 *
            (cosP * cosT * sinB -
              cosA * cosT * sinP -
              sinA * sinT +
              cosB * (cosA * sinT - cosT * sinA * sinP));

          if (L > 0) {
            ctx.fillStyle = `rgba(${
              theme === "light" ? "0, 0, 0, " : "255, 255, 255, "
            } ${L})`;
            ctx.fillRect(xp, yp, 1.5, 1.5);
          }
        }
      }
    };
    const interval = setInterval(updateCanvas, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width={300}
      height={240}
      className="m-auto pt-10"
    />
  );
}
