import type { CSSProperties } from "react";
import { skillGroups } from "./content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="skills-band relative scroll-mt-20 bg-washi-deep" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <SectionHeading id="skills-title" index="04" label="CAPABILITIES" title="スキル" />
          <div data-reveal className="max-w-xl">
            <p className="text-[15px] leading-8 text-nezumi">
              軸は React / Next.js / TypeScript。直近は認証・データベース・AI連携・VPS運用まで、1名体制でシステム全体を担当しています。
            </p>
            <p className="mt-4 flex items-center gap-4 text-[12px] text-nezumi">
              <span className="flex items-center gap-2">
                <span className="chip chip-core chip-sm">主軸</span>実務の中心
              </span>
              <span className="flex items-center gap-2">
                <span className="chip chip-sm">対応</span>実務経験あり
              </span>
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <li
              key={group.label}
              data-reveal
              style={{ "--d": `${(i % 3) * 90}ms` } as CSSProperties}
              className="skill-card"
            >
              <p className="text-[11px] tracking-[0.3em] text-kin">{group.label.toUpperCase()}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[0.04em] text-sumi">{group.ja}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.core.map((name) => (
                  <li key={name} className="chip chip-core">
                    {name}
                  </li>
                ))}
                {group.rest.map((name) => (
                  <li key={name} className="chip">
                    {name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
