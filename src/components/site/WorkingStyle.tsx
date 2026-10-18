import type { CSSProperties } from "react";
import { values } from "./content";
import { SectionHeading } from "./SectionHeading";

export function WorkingStyle() {
  return (
    <section id="values" className="values-band relative overflow-hidden bg-ai text-washi" aria-labelledby="values-title">
      <div className="seigaiha pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
          <SectionHeading id="values-title" index="02" label="WORKING STYLE" title="仕事の流儀" tone="dark" />
          <blockquote data-reveal className="values-quote">
            <p>
              楽しい道よりも、
              <br />
              将来楽しくなる道を選ぶ。
            </p>
          </blockquote>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-xl border border-kin-leaf/25 bg-kin-leaf/25 md:mt-20 md:grid-cols-3">
          {values.map((value, i) => (
            <li
              key={value.index}
              data-reveal
              style={{ "--d": `${i * 110}ms` } as CSSProperties}
              className="value-card bg-ai p-7 md:p-9"
            >
              <p className="value-num" aria-hidden="true">
                {value.index}
              </p>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-[0.06em] text-washi">{value.title}</h3>
              <p className="mt-4 text-[15px] leading-8 text-washi/75">{value.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
