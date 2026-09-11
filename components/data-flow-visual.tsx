"use client";

import { motion } from "motion/react";

const nodes = [
  { x: 50, y: 15, delay: 0 },
  { x: 24, y: 42, delay: 0.15 },
  { x: 74, y: 40, delay: 0.3 },
  { x: 36, y: 72, delay: 0.45 },
  { x: 66, y: 70, delay: 0.6 },
  { x: 50, y: 93, delay: 0.75 },
];

export function DataFlowVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[460px]">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(155,123,255,0.12),transparent_56%)] blur-2xl" />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(155,123,255,0.7)" />
            <stop offset="100%" stopColor="rgba(111,140,255,0.25)" />
          </linearGradient>
        </defs>

        <g stroke="url(#flow-gradient)" strokeWidth="0.35" fill="none">
          <path d="M50 15 L24 42 L36 72 L50 93" />
          <path d="M50 15 L74 40 L66 70 L50 93" />
          <path d="M24 42 L74 40" opacity="0.55" />
          <path d="M36 72 L66 70" opacity="0.55" />
          <path d="M24 42 L36 72" opacity="0.55" />
          <path d="M74 40 L66 70" opacity="0.55" />
        </g>
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[#8f73ff] shadow-[0_0_28px_rgba(155,123,255,0.45)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.45, 1, 0.45],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 3.8,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="glass absolute left-1/2 top-1/2 w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[1.7rem] px-6 py-5">
        <div className="eyebrow mb-4">Data flow</div>
        <div className="display-font text-2xl font-medium tracking-tight text-white/90">
          Raw data → systems → intelligence
        </div>
        <div className="mt-3 h-px w-full bg-white/10" />
        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/35">
          <span>ingest</span>
          <span>process</span>
          <span>model</span>
        </div>
      </div>
    </div>
  );
}
