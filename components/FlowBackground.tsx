"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import type { CSSProperties } from "react";

const shapes = [
  { kind: "ring", color: "blue", left: "-5%", top: "12%", size: 250, speed: 1.1, phase: 0 },
  { kind: "diamond", color: "burgundy", left: "86%", top: "14%", size: 120, speed: 1.4, phase: 1 },
  { kind: "star", color: "blue", left: "77%", top: "6%", size: 48, speed: 1.8, phase: 2 },
  { kind: "square", color: "blue", left: "94%", top: "55%", size: 180, speed: 1.2, phase: 3 },
  { kind: "star", color: "burgundy", left: "6%", top: "58%", size: 62, speed: 1.7, phase: 4 },
  { kind: "disc", color: "burgundy", left: "-4%", top: "84%", size: 160, speed: 1.3, phase: 5 },
  { kind: "star", color: "blue", left: "87%", top: "84%", size: 76, speed: 1.9, phase: 6 },
  { kind: "diamond", color: "blue", left: "38%", top: "93%", size: 38, speed: 1.5, phase: 7 },
  { kind: "star", color: "burgundy", left: "49%", top: "3%", size: 24, speed: 2, phase: 8 },
] as const;

type Shape = (typeof shapes)[number];

function FloatingShape({ shape, scroll, reduced }: { shape: Shape; scroll: MotionValue<number>; reduced: boolean }) {
  const y = useTransform(scroll, (value) => Math.sin(value / (460 / shape.speed) + shape.phase) * 85);
  const x = useTransform(scroll, (value) => Math.sin(value / 650 + shape.phase) * 35);
  const rotate = useTransform(scroll, (value) => value * 0.045 * shape.speed + shape.phase * 25);
  const position = {
    left: shape.left,
    top: shape.top,
    "--shape-size": `${shape.size}px`,
    "--float-delay": `${-shape.phase}s`,
  } as CSSProperties;

  return (
    <motion.div className={`floating-shape shape-${shape.kind} shape-${shape.color}`} style={{ ...position, x: reduced ? 0 : x, y: reduced ? 0 : y, rotate: reduced ? 0 : rotate }}>
      <div className="shape-float">
        <svg viewBox="0 0 100 100" focusable="false">
          {shape.kind === "star" ? <path d="M50 0 C55 33 67 45 100 50 C67 55 55 67 50 100 C45 67 33 55 0 50 C33 45 45 33 50 0Z" /> : shape.kind === "diamond" ? <path d="M50 5 95 50 50 95 5 50Z" /> : shape.kind === "square" ? <rect x="8" y="8" width="84" height="84" rx="24" /> : <circle cx="50" cy="50" r="43" />}
        </svg>
      </div>
    </motion.div>
  );
}

export default function FlowBackground() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  return (
    <div className="flow-background" aria-hidden="true">
      {shapes.map((shape) => <FloatingShape key={shape.phase} shape={shape} scroll={scrollY} reduced={Boolean(reduced)} />)}
    </div>
  );
}
