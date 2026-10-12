"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function FlowBackground() {
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const counterDrift = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const dash = useTransform(scrollYProgress, [0, 1], [0, -1800]);
  const draw = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div className="flow-background" aria-hidden="true">
      <svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="flow-palette" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b4f81" />
            <stop offset="55%" stopColor="#5b0b25" />
            <stop offset="100%" stopColor="#b8a6ad" />
          </linearGradient>
        </defs>
        <motion.g className="flow-group" style={{ y: drift }} fill="none">
          <path
            className="flow-outline"
            d="M-120 160 C220 -80 480 30 730 240 S1210 460 1580 180"
          />
          <path
            className="flow-outline"
            d="M-120 920 C230 650 400 1040 770 760 S1200 410 1570 720"
          />
          <motion.path
            className="flow-current"
            d="M-120 920 C230 650 400 1040 770 760 S1200 410 1570 720"
            style={{ strokeDashoffset: dash }}
          />
        </motion.g>
        <motion.g
          className="flow-group"
          style={{ y: counterDrift }}
          fill="none"
        >
          <motion.path
            className="flow-draw"
            d="M1170 -160 C810 140 1470 400 1080 640 S700 900 1220 1180"
            style={{ pathLength: draw }}
          />
          <path
            className="flow-side"
            d="M190 -160 C500 110 -70 350 290 590 S490 960 60 1160"
          />
        </motion.g>
      </svg>
    </div>
  );
}
