"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Petals } from "./Petals";
import { resume } from "./content";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate grid overflow-hidden bg-[#f3efe6] text-[#1c2744] min-[769px]:min-h-[100svh] min-[769px]:bg-[#1a140f]"
    >
      <img src="/fv-bg_sp.webp" alt="" fetchPriority="high" className="col-start-1 row-start-1 h-auto w-full self-start min-[769px]:hidden" />
      <div className="absolute inset-0 hidden min-[769px]:block">
        <img src="/fv-bg.webp" alt="" fetchPriority="high" className="hero-bg h-full w-full object-cover object-center" />
      </div>
      <Petals />

      <div className="sp-overlay relative z-20 col-start-1 row-start-1 min-[769px]:min-h-[100svh]">
        <div className="sp-shell flex w-full flex-col px-5 pb-10 pt-24 sm:px-8 min-[769px]:min-h-[100svh] min-[769px]:w-[min(54vw,780px)] min-[769px]:px-12 min-[769px]:pb-10 min-[769px]:pt-28 xl:px-16">
          <motion.div
            className="sp-intro max-w-none pt-4 min-[769px]:pt-8"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
          >
            <motion.p variants={reveal} className="sp-kicker text-[11px] tracking-[0.34em] text-[#9a7848]">
              WEB ENGINEER
            </motion.p>
            <motion.h1
              variants={reveal}
              className="sp-title mt-3 font-display text-[clamp(1.7rem,3.7vw,3.15rem)] font-bold leading-[1.32] tracking-[0.02em] text-[#17233f] min-[769px]:mt-5"
            >
              フロントエンドを軸に、
              <br />
              AI・API・運用まで
              <br />
              設計する。
            </motion.h1>
            <motion.p variants={reveal} className="sp-lead mt-4 max-w-[12.5rem] text-[13px] font-bold leading-6 text-[#17233f] sm:max-w-[24rem] sm:text-[15px] sm:leading-7 min-[769px]:mt-6 min-[769px]:max-w-[28rem] min-[769px]:text-[15px] min-[769px]:leading-8">
              React・Next.js を中心に、UI設計・業務システム開発・AI連携・Web運用まで一貫して対応。使いやすく、価値のあるWebサービスを実現します。
            </motion.p>
            <motion.div variants={reveal} className="sp-actions mt-5 flex flex-wrap gap-3 min-[769px]:mt-7">
              <a
                href="#projects"
                className="sp-btn inline-flex h-11 items-center gap-2 rounded-lg bg-[#1c2744] px-5 text-[13px] text-[#f7f4ee] transition-colors hover:bg-[#2a3a5e]"
              >
                実績を見る
                <Arrow />
              </a>
              <a
                href={resume.href}
                download={resume.filename}
                className="sp-btn inline-flex h-11 items-center gap-2 rounded-lg border border-[#1c2744]/30 bg-white/80 px-5 text-[13px] text-[#1c2744] transition-colors hover:border-[#1c2744]"
              >
                職務経歴書をダウンロード
                <Download />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="sp-stats mt-6 grid max-w-[12.5rem] grid-cols-1 gap-2.5 sm:max-w-[22rem]"
          >
            <div className="stat-card" role="img" aria-label="実務経験年数 8年以上">
              <ExperienceRing reduce={reduce} />
              <p className="sp-label text-[12px] leading-snug text-[#6d675e]">実務経験年数</p>
            </div>
            <div className="stat-card">
              <img src="/layers.webp" alt="" className="sp-layer h-10 w-10 shrink-0 object-contain" />
              <div>
                <p className="sp-figure font-sans text-[1.45rem] font-medium leading-none tracking-tight text-[#1c2744]">100+</p>
                <p className="sp-caption mt-1 text-[11px] text-[#6d675e]">対応案件数</p>
              </div>
            </div>
            <div className="stat-card stat-card-gold">
              <p className="foil-lines">
                <span>応用情報</span>
                <span>技術者</span>
              </p>
              <p className="sp-caption foil-caption text-[11px] text-[#6d675e]">国家資格 2022</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-3 xl:flex">
        <span className="h-12 w-px bg-[#f3e6cf]" aria-hidden="true" />
        <p className="text-[13px] tracking-[0.28em] text-[#f7f3ea] [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] [writing-mode:vertical-rl]">
          技術で、働く人の可能性を広げる。
        </p>
      </div>
    </section>
  );
}

function ExperienceRing({ reduce }: { reduce: boolean | null }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (reduce !== false) {
      if (reduce) setCount(8);
      return;
    }
    if (count >= 8) return;
    const timer = window.setTimeout(() => setCount((value) => value + 1), 480);
    return () => window.clearTimeout(timer);
  }, [count, reduce]);

  const revealed = (count / 8) * 100;

  return (
    <div className="sp-ring relative h-12 w-12 shrink-0" aria-hidden="true">
      <img
        src="/eight-ring.webp"
        alt=""
        className="h-full w-full object-contain"
        style={{
          maskImage: `conic-gradient(from -90deg, #000 ${revealed}%, transparent ${revealed}%)`,
          WebkitMaskImage: `conic-gradient(from -90deg, #000 ${revealed}%, transparent ${revealed}%)`,
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <p className="sp-count font-sans text-[15px] font-medium leading-none tracking-tight text-[#1c2744]">
          {count}
          {count === 8 ? <span className="sp-plus text-[11px]">+</span> : null}
        </p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="sp-icon h-3.5 w-3.5" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Download() {
  return (
    <svg viewBox="0 0 16 16" className="sp-icon h-3.5 w-3.5" aria-hidden="true">
      <path d="M8 2.5v8M5 8l3 3 3-3M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
