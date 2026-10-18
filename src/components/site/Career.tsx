import type { CSSProperties } from "react";
import { career, certifications } from "./content";
import { SectionHeading } from "./SectionHeading";

export function Career() {
  return (
    <section id="career" className="relative scroll-mt-20" aria-labelledby="career-title">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="career-title" index="05" label="CAREER" title="経歴" />
          <p data-reveal className="mt-8 max-w-sm text-[15px] leading-8 text-nezumi">
            2018年にWebエンジニアへ転向して約8年。制作会社での正社員、フリーランス、業務委託を経て、現在はWeb / AIシステムの受託開発を行っています。
          </p>
          <div data-reveal className="cert-card mt-10 max-w-sm">
            <p className="text-[11px] tracking-[0.3em] text-kin">CERTIFICATIONS</p>
            <ul className="mt-4 space-y-3">
              {certifications.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-rule pb-3 last:border-0 last:pb-0">
                  <span className="font-display text-[17px] font-semibold text-sumi">{item.name}</span>
                  <span className="shrink-0 font-display text-[13px] tabular-nums text-kin">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol data-reveal className="timeline">
          {career.map((item, i) => (
            <li key={item.period} className="timeline-item" style={{ "--d": `${200 + i * 140}ms` } as CSSProperties}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="font-display text-[13px] tracking-[0.12em] tabular-nums text-kin">{item.period}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-sumi">{item.org}</h3>
              <p className="mt-1 text-[13px] tracking-[0.06em] text-nezumi">{item.role}</p>
              <p className="mt-4 text-[15px] leading-8 text-sumi/85">{item.body}</p>
              {item.metrics.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="metric-pill">
                      {metric}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
