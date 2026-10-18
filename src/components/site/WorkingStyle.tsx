import { values } from "./content";

export function WorkingStyle() {
  return (
    <section id="values" className="border-t border-line" aria-labelledby="values-title">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div data-reveal className="max-w-3xl">
          <p className="text-[12px] tracking-[0.28em] text-accent">04 — WORKING STYLE</p>
          <h2 id="values-title" className="mt-4 font-display text-4xl leading-snug text-paper sm:text-5xl">
            「楽しい道よりも、将来楽しくなる道を選ぶ」
          </h2>
        </div>

        <ol className="mt-16 grid gap-10 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.index} data-reveal className="border-t border-line pt-6">
              <p className="text-[12px] tracking-[0.22em] text-accent">{value.index}</p>
              <h3 className="mt-4 font-display text-2xl text-paper">{value.title}</h3>
              <p className="mt-4 text-[15px] leading-8 text-muted">{value.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
