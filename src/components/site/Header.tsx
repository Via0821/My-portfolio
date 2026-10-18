"use client";

import { useEffect, useState } from "react";
import { navItems } from "./content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const bottom = hero?.getBoundingClientRect().bottom ?? 0;
      setScrolled(bottom < 72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        solid
          ? "border-line bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-[#f6f4ef]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/icon.png"
            alt=""
            className={`h-8 w-8 object-contain ${solid ? "" : "mix-blend-multiply"}`}
          />
          <span className={`text-[15px] tracking-[0.08em] ${solid ? "text-paper" : "text-[#1c1a17]"}`}>
            金本 卓弥
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主要">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[13px] tracking-[0.12em] transition-colors ${
                solid ? "text-muted hover:text-paper" : "text-[#5e5952] hover:text-[#1c1a17]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`text-[13px] tracking-[0.16em] lg:hidden ${solid ? "text-paper" : "text-[#1c1a17]"}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "閉じる" : "メニュー"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-ink px-5 py-6 lg:hidden" aria-label="主要">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-1 text-lg text-paper"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
