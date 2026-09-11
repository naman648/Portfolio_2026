"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { DataFlowVisual } from "./data-flow-visual";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="site-shell relative w-full pb-10 sm:pb-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="eyebrow mb-6"
            >
              01 — Data · AI · Engineering
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22 }}
              className="display-font max-w-5xl text-[16vw] font-medium leading-[0.84] tracking-[-0.055em] sm:text-[13vw] lg:text-[7.6rem] xl:text-[8.7rem]"
            >
              DATA
              <br />
              <span className="text-white/95">ENGINEER</span>
              <br />
              <span className="text-white/38">AI / ML</span>
              <br />
              <span className="text-white/38">ENGINEER</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg"
            >
              I build data pipelines, machine-learning solutions, and intelligent applications that turn complex data into useful decisions.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.54 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-violet-300/30 hover:bg-white/[0.09]"
              >
                View Projects
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                className="group inline-flex items-center gap-2 px-1 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65 transition hover:text-white"
              >
                Resume
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.28 }}
            className="flex justify-center lg:justify-end"
          >
            <DataFlowVisual />
          </motion.div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-4 sm:mt-24">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30 sm:justify-between">
            <span>Python</span>
            <span>SQL</span>
            <span>PySpark</span>
            <span>AWS</span>
            <span>Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
