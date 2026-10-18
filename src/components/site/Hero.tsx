"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";
import { projects as rawProjects } from "../../constants";
import { heroProjectIds } from "./content";

type Project = {
  id: string;
  name: string;
  video?: string;
  videos?: string[];
};

const projects = rawProjects as Project[];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardFrames = [
  { top: "4%", left: "8%", width: "76%", height: "44%", z: 3 },
  { top: "34%", left: "0%", width: "70%", height: "38%", z: 2 },
  { top: "60%", left: "16%", width: "74%", height: "36%", z: 1 },
];

export function Hero() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const cards = heroProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setOffset({ x, y });
  };

  return (
    <section id="top" className="hero-surface relative min-h-[100svh] overflow-hidden text-[#1c1a17]">
      <div className="hero-wash pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-16 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:pb-16 lg:pt-24">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
          }}
        >
          <motion.p variants={reveal} className="text-[12px] tracking-[0.28em] text-[#8a6840]">
            FRONTEND ENGINEER
          </motion.p>
          <motion.p variants={reveal} className="mt-5 font-display text-[15px] tracking-[0.12em] text-[#5e5952]">
            金本 卓弥
          </motion.p>
          <motion.h1
            variants={reveal}
            className="mt-5 font-display text-[1.85rem] leading-[1.5] sm:text-[2.25rem] sm:leading-[1.45]"
          >
            React / Next.js を軸に、
            <br />
            AI・API・運用まで設計する。
          </motion.h1>
          <motion.p variants={reveal} className="mt-6 max-w-xl text-[15px] leading-8 text-[#5e5952] sm:text-base">
            UI設計・業務システム開発・AI連携・VPS運用まで一貫して対応。直近では、MEO支援システムと音声対話型AIアシスタントを1名体制で開発。
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center bg-[#1c1a17] px-6 text-[13px] tracking-[0.14em] text-[#f6f4ef] transition-colors hover:bg-[#3a342c]"
            >
              実績を見る
            </a>
            <a
              href="/resume.png"
              download="金本卓弥-resume.png"
              className="inline-flex h-12 items-center border border-[#1c1a17]/20 bg-white/70 px-6 text-[13px] tracking-[0.14em] text-[#1c1a17] transition-colors hover:border-[#8a6840] hover:text-[#8a6840]"
            >
              履歴書をダウンロード
            </a>
          </motion.div>

          <motion.p
            variants={reveal}
            className="mt-10 border-t border-[#1c1a17]/10 pt-5 text-[13px] tracking-[0.08em] text-[#5e5952]"
          >
            10年以上
            <span className="mx-3 text-[#1c1a17]/25" aria-hidden="true">
              /
            </span>
            フリーランス
            <span className="mx-3 text-[#1c1a17]/25" aria-hidden="true">
              /
            </span>
            画面から運用まで
          </motion.p>
        </motion.div>

        <div
          ref={stageRef}
          data-hero-visual
          onMouseMove={onMove}
          onMouseLeave={() => setOffset({ x: 0, y: 0 })}
          className="relative mx-auto h-[460px] w-full max-w-[480px] sm:h-[560px]"
        >
          <p className="absolute -top-7 left-2 text-[11px] tracking-[0.22em] text-[#8a6840]">SELECTED WORK</p>
          <div
            className="absolute inset-x-6 bottom-2 top-4 border border-[#1c1a17]/10"
            aria-hidden="true"
          />
          {cards.map((project, index) => {
            const frame = cardFrames[index] ?? cardFrames[0];
            const depth = (index + 1) * 10;
            const src = project.videos?.[0] || project.video;
            return (
              <article
                key={project.id}
                className="absolute bg-white p-1.5 shadow-[0_14px_36px_rgba(28,26,23,0.08)] ring-1 ring-[#1c1a17]/10"
                style={{
                  top: frame.top,
                  left: frame.left,
                  width: frame.width,
                  height: frame.height,
                  zIndex: frame.z,
                  transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
                  transition: reduce ? undefined : "transform 200ms ease-out",
                }}
              >
                <div className="relative h-full overflow-hidden bg-[#ece8e1]">
                  {src ? (
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-white/92 px-3 py-2 backdrop-blur-sm">
                    <p className="line-clamp-1 text-[12px] text-[#1c1a17]">{project.name}</p>
                    <span className="shrink-0 text-[11px] tracking-[0.16em] text-[#8a6840]">0{index + 1}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[11px] tracking-[0.28em] text-[#5e5952] lg:flex"
      >
        SCROLL
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
