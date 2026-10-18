import { technologies as rawTechnologies } from "../../constants";
import { skillGroups } from "./content";

type Technology = { name: string; icon: string };

const technologies = rawTechnologies as Technology[];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div data-reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] tracking-[0.28em] text-accent">03 — CAPABILITIES</p>
            <h2 id="skills-title" className="mt-4 font-display text-4xl text-paper sm:text-5xl">
              使える範囲。
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-8 text-muted">
            中心はフロントエンドです。バックエンド、インフラ、AIは、画面を成立させるために足している範囲です。
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {skillGroups.map((group) => {
            const items = group.names
              .map((name) => technologies.find((item) => item.name === name))
              .filter((item): item is Technology => Boolean(item));

            return (
              <div key={group.label} data-reveal>
                <h3 className="text-[12px] tracking-[0.24em] text-muted">{group.label}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 border border-line px-3 py-3"
                    >
                      <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
                      <span className="text-sm text-paper">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
