"use client";

import { useReducedMotion } from "framer-motion";

type Petal = {
  left: string;
  delay: string;
  duration: string;
  size: number;
  sway: number;
  opacity: number;
  color: string;
  front: boolean;
  top: string;
};

const petals: Petal[] = [
  { left: "58%", delay: "-2s", duration: "15s", size: 16, sway: 28, opacity: 0.9, color: "#f4b7c8", front: false, top: "12%" },
  { left: "72%", delay: "-8s", duration: "18s", size: 12, sway: -34, opacity: 0.75, color: "#f7d0db", front: false, top: "28%" },
  { left: "84%", delay: "-4s", duration: "13s", size: 20, sway: 22, opacity: 0.85, color: "#ee9eb4", front: true, top: "8%" },
  { left: "64%", delay: "-11s", duration: "17s", size: 11, sway: 18, opacity: 0.7, color: "#f8e4ea", front: false, top: "46%" },
  { left: "91%", delay: "-1s", duration: "16s", size: 15, sway: -26, opacity: 0.8, color: "#f3b4c6", front: true, top: "22%" },
  { left: "48%", delay: "-6s", duration: "19s", size: 13, sway: 30, opacity: 0.55, color: "#f6c3d1", front: false, top: "18%" },
  { left: "77%", delay: "-13s", duration: "14s", size: 18, sway: -20, opacity: 0.88, color: "#e98aa6", front: true, top: "36%" },
  { left: "68%", delay: "-9s", duration: "20s", size: 10, sway: 24, opacity: 0.65, color: "#fbe7ee", front: false, top: "62%" },
  { left: "86%", delay: "-15s", duration: "15s", size: 14, sway: 32, opacity: 0.78, color: "#f4b7c8", front: false, top: "54%" },
  { left: "54%", delay: "-3s", duration: "18s", size: 17, sway: -16, opacity: 0.5, color: "#f7d5e0", front: false, top: "70%" },
  { left: "95%", delay: "-7s", duration: "12s", size: 12, sway: 20, opacity: 0.82, color: "#ee9eb4", front: true, top: "44%" },
  { left: "61%", delay: "-16s", duration: "21s", size: 9, sway: -22, opacity: 0.6, color: "#f8e4ea", front: false, top: "34%" },
  { left: "80%", delay: "-5s", duration: "16s", size: 22, sway: 14, opacity: 0.72, color: "#f3a8bc", front: true, top: "16%" },
  { left: "70%", delay: "-12s", duration: "19s", size: 13, sway: -30, opacity: 0.84, color: "#f6c3d1", front: false, top: "78%" },
  { left: "42%", delay: "-10s", duration: "22s", size: 11, sway: 12, opacity: 0.4, color: "#f4b7c8", front: false, top: "40%" },
];

function PetalShape() {
  return (
    <svg viewBox="0 0 30 38" className="h-full w-full" aria-hidden="true">
      <path
        fill="currentColor"
        d="M15 1.2c-1.6 6.4-7.4 11.2-8.6 18.4C5.1 26.8 8.8 33 15 35.2c6.2-2.2 9.9-8.4 8.6-15.6C22.4 12.4 16.6 7.6 15 1.2z"
      />
    </svg>
  );
}

export function Petals() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          key={index}
          className={`petal absolute block ${petal.front ? "z-30" : "z-10"} ${reduce ? "" : "petal-fall"}`}
          style={{
            left: petal.left,
            top: reduce ? petal.top : undefined,
            width: petal.size,
            height: petal.size * 1.25,
            color: petal.color,
            opacity: petal.opacity,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            ["--sway" as string]: `${petal.sway}px`,
          }}
        >
          <PetalShape />
        </span>
      ))}
    </div>
  );
}
