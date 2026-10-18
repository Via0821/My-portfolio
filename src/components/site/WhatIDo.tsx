import { services } from "./content";

export function WhatIDo() {
  return (
    <section id="services" className="border-t border-line" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div data-reveal className="max-w-2xl">
          <p className="text-[12px] tracking-[0.28em] text-accent">01 — WHAT I DO</p>
          <h2 id="services-title" className="mt-4 font-display text-4xl text-paper sm:text-5xl">
            画面から入って、仕組みまで見る。
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-muted">
            最初に整えるのはインターフェースです。その先で、データ、業務、公開後の運用まで同じ基準で扱います。
          </p>
        </div>

        <ol className="mt-16 grid gap-px bg-line sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.index} data-reveal className="bg-ink p-7 sm:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[12px] tracking-[0.22em] text-accent">{service.index}</p>
                <p className="text-[12px] tracking-[0.16em] text-muted">{service.lead}</p>
              </div>
              <h3 className="mt-6 font-display text-3xl text-paper">{service.title}</h3>
              <p className="mt-4 max-w-md text-[15px] leading-8 text-muted">{service.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
