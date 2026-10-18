"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PROJECT_CATEGORIES, projects as rawProjects } from "../../constants";

type ProjectTag = { name: string; color: string };

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  detailedDescription: string;
  tags: ProjectTag[];
  video?: string;
  videos?: string[];
  images?: string[];
  image?: string;
  live_link?: string;
};

type Category = { id: string; label: string };

const projects = rawProjects as Project[];
const categories = PROJECT_CATEGORIES as Category[];

function LoopVideo({ src, className }: { src: string; className?: string }) {
  return <video src={src} autoPlay muted loop playsInline className={className} />;
}

function ProjectMedia({ project }: { project: Project }) {
  const videos = project.videos ?? [];
  const images = project.images ?? [];
  const media = videos.length ? videos : images;
  const isVideo = videos.length > 0;
  const [index, setIndex] = useState(0);
  const total = media.length;

  if (total === 0) return null;

  const goTo = (next: number) => setIndex((next + total) % total);

  return (
    <div>
      <div className="relative h-[220px] overflow-hidden bg-black sm:h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {isVideo ? (
              <LoopVideo src={media[index]} className="h-full w-full object-cover" />
            ) : (
              <img
                src={media[index]}
                alt={`${project.name}の画面 ${index + 1}`}
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="前の画像"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center bg-ink/80 text-paper"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="次の画像"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center bg-ink/80 text-paper"
            >
              ›
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {media.map((_, dot) => (
            <button
              key={dot}
              type="button"
              aria-label={`${dot + 1}番目を表示`}
              onClick={() => goTo(dot)}
              className={`h-1.5 w-6 ${dot === index ? "bg-accent" : "bg-line"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8" role="presentation">
      <button type="button" aria-label="詳細を閉じる" className="absolute inset-0 bg-ink/80" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-${project.id}`}
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-line bg-ink p-5 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-[12px] tracking-[0.16em] text-muted hover:text-paper"
        >
          閉じる
        </button>
        <ProjectMedia project={project} />
        <h3 id={`project-${project.id}`} className="mt-6 pr-16 font-display text-3xl text-paper">
          {project.name}
        </h3>
        <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-muted">
          {project.detailedDescription}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          {project.tags.map((tag) => (
            <li key={tag.name} className="text-[13px] tracking-[0.08em] text-accent">
              {tag.name}
            </li>
          ))}
        </ul>
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-11 items-center border border-paper px-5 text-[13px] tracking-[0.14em] text-paper hover:border-accent hover:text-accent"
          >
            サイトを見る
          </a>
        )}
      </div>
    </div>
  );
}

export function SelectedProjects() {
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visible =
    category === "all" ? projects : projects.filter((project) => project.category === category);
  const selected = projects.find((project) => project.id === selectedId) ?? null;

  return (
    <section id="projects" className="border-t border-line" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div data-reveal className="max-w-3xl">
          <p className="text-[12px] tracking-[0.28em] text-accent">02 — SELECTED PROJECTS</p>
          <h2 id="projects-title" className="mt-4 font-display text-4xl text-paper sm:text-5xl">
            実績
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-muted">
            ここでは、かかわってきたプロジェクトの一部を紹介します。企業に在籍していた際の開発実績は、秘密保持契約のため具体的な内容や数値を公開できません。
          </p>
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto border-b border-line" role="tablist" aria-label="実績の分類">
          {categories.map((item) => {
            const active = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setCategory(item.id);
                  setSelectedId(null);
                }}
                className={`shrink-0 border-b-2 pb-3 text-[14px] tracking-[0.08em] ${
                  active ? "border-accent text-paper" : "border-transparent text-muted hover:text-paper"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-[15px] leading-8 text-muted">
            申し訳ございませんが、現時点では公開可能な実績がございません。
          </p>
        ) : (
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {visible.map((project) => {
              const preview = project.video || project.videos?.[0] || project.image;
              return (
                <li key={project.id}>
                  <article className="group relative">
                    <div
                      role="button"
                      tabIndex={0}
                      data-cursor="hot"
                      onClick={() => setSelectedId(project.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedId(project.id);
                        }
                      }}
                      className="block w-full text-left"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-black">
                        {preview && project.video ? (
                          <LoopVideo
                            src={preview}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        ) : preview ? (
                          <img src={preview} alt="" className="h-full w-full object-cover" />
                        ) : null}
                      </div>
                      <h3 className="mt-5 font-display text-2xl text-paper">{project.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{project.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                        {project.tags.map((tag) => (
                          <li key={tag.name} className="text-[12px] tracking-[0.08em] text-accent">
                            {tag.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 z-10 border border-line bg-ink/80 px-3 py-1 text-[12px] tracking-[0.12em] text-paper"
                      >
                        サイトを見る
                      </a>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <AnimatePresence>
        {selected && <ProjectDialog key={selected.id} project={selected} onClose={() => setSelectedId(null)} />}
      </AnimatePresence>
    </section>
  );
}
