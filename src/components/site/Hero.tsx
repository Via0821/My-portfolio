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
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-10">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
          }}
        >
          <motion.p variants={reveal} className="text-[12px] tracking-[0.28em] text-accent">
            FRONTEND ENGINEER
          </motion.p>
          <motion.p variants={reveal} className="mt-5 font-display text-[15px] text-muted">
            金本 卓弥
          </motion.p>
          <motion.h1
            variants={reveal}
            className="mt-4 max-w-[14ch] font-display text-[2.35rem] leading-[1.25] text-paper sm:text-5xl sm:leading-[1.22]"
          >
            React / Next.js を軸に、AI・API・運用まで設計する。
          </motion.h1>
          <motion.p variants={reveal} className="mt-6 max-w-xl text-[15px] leading-8 text-muted sm:text-base">
            UI設計・業務システム開発・AI連携・VPS運用まで一貫して対応。直近では、MEO支援システムと音声対話型AIアシスタントを1名体制で開発。
          </motion.p>
          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center border border-paper bg-paper px-6 text-[13px] tracking-[0.14em] text-ink transition-colors hover:bg-transparent hover:text-paper"
            >
              実績を見る
            </a>
            <a
              href="/resume.png"
              download="金本卓弥-resume.png"
              className="inline-flex h-12 items-center border border-line px-6 text-[13px] tracking-[0.14em] text-paper transition-colors hover:border-accent hover:text-accent"
            >
              履歴書をダウンロード
            </a>
          </motion.div>
        </motion.div>

        <div
          ref={stageRef}
          data-hero-visual
          onMouseMove={onMove}
          onMouseLeave={() => setOffset({ x: 0, y: 0 })}
          className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[520px]"
        >
          <div className="absolute inset-6 border border-line" aria-hidden="true" />
          {cards.map((project, index) => {
            const depth = (cards.length - index) * 14;
            const src = project.videos?.[0] || project.video;
            return (
              <article
                key={project.id}
                className="absolute overflow-hidden border border-line bg-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                style={{
                  top: 28 + index * 36,
                  left: 18 + index * 28,
                  right: 70 - index * 18,
                  height: 210,
                  zIndex: cards.length - index,
                  transform: `translate3d(${offset.x * depth}px, ${offset.y * depth}px, 0)`,
                  transition: reduce ? undefined : "transform 180ms ease-out",
                }}
              >
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
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 to-transparent px-4 py-3">
                  <p className="text-[13px] text-paper">{project.name}</p>
                  <span className="text-[11px] tracking-[0.18em] text-accent">0{index + 1}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[11px] tracking-[0.28em] text-muted sm:flex"
      >
        SCROLL
        <span className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
