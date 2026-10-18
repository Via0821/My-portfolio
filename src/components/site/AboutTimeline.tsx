import { timeline } from "./content";

export function AboutTimeline() {
  return (
    <section id="about" className="border-t border-line" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div data-reveal>
          <p className="text-[12px] tracking-[0.28em] text-accent">05 — ABOUT</p>
          <h2 id="about-title" className="mt-4 font-display text-4xl text-paper sm:text-5xl">
            経歴
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-8 text-muted">
            <p>はじめまして。IT業界で10年以上の開発経験を持つフリーランスエンジニアの金本卓弥です。</p>
            <p>
              これまで、システム開発・Webアプリケーション開発・業務効率化支援を中心に、さまざまなプロジェクトに携わってまいりました。
            </p>
            <p>
              要件定義から設計、実装、運用改善まで一貫して対応し、現場の課題に合わせた実用性の高い開発を行ってきました。品質や保守性を重視しながら、円滑なコミュニケーションを大切にしています。
            </p>
          </div>
        </div>

        <ol className="relative space-y-0 border-l border-line pl-8">
          {timeline.map((item) => (
            <li key={item.label} data-reveal className="relative pb-12 last:pb-0">
              <span className="absolute -left-[39px] top-1.5 h-2.5 w-2.5 bg-accent" aria-hidden="true" />
              <p className="text-[12px] tracking-[0.22em] text-accent">{item.label}</p>
              <h3 className="mt-2 font-display text-2xl text-paper">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-8 text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
