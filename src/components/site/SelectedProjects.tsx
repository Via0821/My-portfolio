"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { PROJECT_CATEGORIES, projects as rawProjects } from "../../constants";
import { InViewVideo } from "./InViewVideo";
import { SectionHeading } from "./SectionHeading";

type Project = {
  id: string;
  name: string;
  category: string;
  period?: string;
  role?: string;
  metric?: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  videos?: string[];
  live_link?: string;
};

type Category = { id: string; label: string };

const projects = rawProjects as Project[];
const categories = PROJECT_CATEGORIES as Category[];
const categoryLabel = Object.fromEntries(categories.map((item) => [item.id, item.label]));
const isSite = (project: Project) => project.category === "hp-lp-coding";

function ProjectPoster({ project }: { project: Project }) {
  return (
    <div className="project-poster">
      <div className="seigaiha absolute inset-0" aria-hidden="true" />
      <p className="relative text-[11px] tracking-[0.3em] text-kin-leaf">{categoryLabel[project.category]}</p>
      <p className="relative mt-3 font-display text-xl font-semibold leading-snug text-washi sm:text-2xl">{project.name}</p>
      {project.metric && <p className="poster-metric relative mt-auto">{project.metric}</p>}
    </div>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  const videos = project.videos ?? [];
  const [index, setIndex] = useState(0);
  const total = videos.length;

  if (total === 0) return null;

  const goTo = (next: number) => setIndex((next + total) % total);

  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-sumi">
        <InViewVideo key={videos[index]} src={videos[index]} className="h-full w-full object-cover" />
        {total > 1 && (
          <>
            <button type="button" aria-label="前の動画" onClick={() => goTo(index - 1)} className="media-nav left-3">
              ‹
            </button>
            <button type="button" aria-label="次の動画" onClick={() => goTo(index + 1)} className="media-nav right-3">
              ›
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {videos.map((_, dot) => (
            <button
              key={dot}
              type="button"
              aria-label={`${dot + 1}番目を表示`}
              aria-current={dot === index ? "true" : undefined}
              onClick={() => goTo(dot)}
              className={`h-1.5 w-6 rounded-full ${dot === index ? "bg-kin" : "bg-rule"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        aria-label="詳細を閉じる"
        tabIndex={-1}
        className="absolute inset-0 bg-sumi/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}`}
        className="dialog-panel relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl p-5 sm:p-8"
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.3em] text-kin">{categoryLabel[project.category]}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-rule px-4 py-1.5 text-[12px] tracking-[0.16em] text-nezumi transition-colors hover:border-sumi hover:text-sumi"
          >
            閉じる
          </button>
        </div>
        <ProjectMedia project={project} />
        <h3 id={`project-${project.id}`} className="mt-6 font-display text-2xl font-semibold text-sumi sm:text-3xl">
          {project.name}
        </h3>
        {(project.role || project.metric) && (
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
            {project.role && (
              <div className="flex gap-2">
                <dt className="text-kin">担当</dt>
                <dd className="text-sumi">{project.role}</dd>
              </div>
            )}
            {project.metric && (
              <div className="flex gap-2">
                <dt className="text-kin">成果</dt>
                <dd className="text-sumi">{project.metric}</dd>
              </div>
            )}
          </dl>
        )}
        <p className="mt-5 whitespace-pre-line text-[15px] leading-8 text-nezumi">{project.detailedDescription}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
        {project.live_link && (
          <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn-ink mt-8">
            サイトを見る
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, compact, onOpen }: { project: Project; compact: boolean; onOpen: () => void }) {
  return (
    <article className={`project-card group ${compact ? "is-compact" : ""}`}>
      <div className="project-thumb">
        {project.videos?.[0] ? (
          <InViewVideo src={project.videos[0]} className="h-full w-full object-cover" />
        ) : (
          <ProjectPoster project={project} />
        )}
      </div>
      <div className="mt-5 flex items-center gap-3 text-[11px] tracking-[0.22em] text-kin">
        <span>{categoryLabel[project.category]}</span>
        {project.period && (
          <>
            <span className="h-px w-4 bg-kin/50" aria-hidden="true" />
            <span>{project.period}</span>
          </>
        )}
      </div>
      <h3
        className={`mt-2 font-display font-semibold leading-snug text-sumi ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
      >
        <button type="button" className="card-open" onClick={onOpen}>
          {project.name}
        </button>
      </h3>
      <p className={`mt-3 text-sm leading-7 text-nezumi ${compact ? "line-clamp-2" : ""}`}>{project.description}</p>
      {project.metric && <p className="metric-pill mt-4">{project.metric}</p>}
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((tag) => (
          <li key={tag} className="chip chip-sm">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-5 text-[13px]">
        <span className="card-more" aria-hidden="true">
          詳細を見る
          <span className="card-more-arrow">→</span>
        </span>
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-live"
            aria-label={`${project.name}のサイトを見る（新しいタブ）`}
          >
            サイトを見る ↗
          </a>
        )}
      </div>
    </article>
  );
}

export function SelectedProjects() {
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // "All" splits systems work from website builds; a single filter shows one list.
  const groups =
    category === "all"
      ? [
          { key: "systems", title: "システム開発・AI", compact: false, items: projects.filter((p) => !isSite(p)) },
          { key: "sites", title: "Webサイト制作", compact: true, items: projects.filter(isSite) },
        ]
      : [
          {
            key: category,
            title: null,
            compact: category === "hp-lp-coding",
            items: projects.filter((p) => p.category === category),
          },
        ];
  const selected = projects.find((project) => project.id === selectedId) ?? null;
  const close = useCallback(() => setSelectedId(null), []);

  return (
    <section id="projects" className="scroll-mt-20 relative" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <SectionHeading id="projects-title" index="03" label="SELECTED PROJECTS" title="実績" />
          <p data-reveal className="max-w-xl text-[15px] leading-8 text-nezumi">
            直近の1名体制でのシステム開発から、Webサイト制作まで。企業在籍時の開発実績は、秘密保持契約のため掲載していません。
          </p>
        </div>

        <div data-reveal className="filter-bar mt-12 mb-2" role="group" aria-label="実績の分類で絞り込む">
          {categories.map((item) => {
            const active = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item.id)}
                className={`filter-pill ${active ? "is-active" : ""}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {groups.map((group) => (
          <div key={`${category}-${group.key}`} className="mt-12">
            {group.title && (
              <p className="group-label">
                <span>{group.title}</span>
              </p>
            )}
            <ul
              className={`grid ${group.compact ? "gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3" : "gap-x-8 gap-y-12 md:grid-cols-2"} ${group.title ? "mt-8" : ""}`}
            >
              {group.items.map((project, i) => (
                <li key={project.id} className="card-enter" style={{ "--d": `${Math.min(i, 6) * 70}ms` } as CSSProperties}>
                  <ProjectCard project={project} compact={group.compact} onOpen={() => setSelectedId(project.id)} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectDialog key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
