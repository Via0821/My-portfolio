import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ id, index, label, title, tone = "light", className = "" }: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div data-reveal className={`section-heading ${dark ? "is-dark" : ""} ${className}`}>
      <p className="section-kicker">
        <span className="section-num">{index}</span>
        <span className="section-rule" aria-hidden="true" />
        <span className="section-en">{label}</span>
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      <svg className="brush-stroke" viewBox="0 0 220 14" aria-hidden="true" preserveAspectRatio="none">
        <path d="M3 9.5c32-5.2 70-6.8 108-5.6 34 1 70 3.6 106 1.2" pathLength={1} />
      </svg>
    </div>
  );
}
