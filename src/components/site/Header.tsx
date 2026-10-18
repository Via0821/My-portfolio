"use client";

import { useEffect, useState } from "react";
import { navItems, resume } from "./content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const bottom = hero?.getBoundingClientRect().bottom ?? 0;
      setScrolled(bottom < 72);

      const mark = window.scrollY + 120;
      let current: string = navItems[0].id;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= mark) current = item.id;
      }
      setActive(current);
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

  // Only the open drawer sits on indigo; the bar itself stays on washi in both states.
  const onDark = open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled && !open ? "border-b border-rule bg-washi/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="sp-bar relative mx-auto flex w-full items-center justify-between">
        <a href="#top" className="sp-brand flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className={`sp-logo font-display text-[1.35rem] leading-none tracking-tight ${onDark ? "text-washi" : "text-sumi"}`}>
            TK
          </span>
          <span className={`sp-name text-[14px] tracking-[0.04em] ${onDark ? "text-washi" : "text-sumi"}`}>
            Takuya Kanemoto
          </span>
        </a>

        <nav className="sp-nav hidden min-w-0 flex-1 items-center justify-center min-[769px]:flex" aria-label="主要">
          {navItems.map((item) => {
            const current = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={current ? "true" : undefined}
                className={`nav-item relative pb-1.5 font-bold tracking-[0.02em] ${
                  current || !scrolled ? "text-sumi" : "text-nezumi hover:text-sumi"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center">
          <a
            href={resume.href}
            download={resume.filename}
            className="resume-btn hidden items-center gap-2 rounded-full font-medium tracking-[0.04em] text-[#f6f3ec] min-[769px]:inline-flex"
          >
            最新の職務経歴書
            <span className="resume-arrow" aria-hidden="true">
              <ArrowDown />
            </span>
          </a>
          <button
            type="button"
            className={`sp-menu min-[769px]:hidden ${onDark ? "text-washi" : "text-sumi"}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "閉じる" : "メニュー"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="sp-menu-icon" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="sp-menu-icon" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`sp-drawer-scrim min-[769px]:hidden ${open ? "is-open" : ""}`}
        aria-label="メニューを閉じる"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
      <nav
        id="mobile-nav"
        className={`sp-drawer min-[769px]:hidden ${open ? "is-open" : ""}`}
        aria-label="主要"
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="sp-drawer-list flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="sp-drawer-link block py-1 text-lg text-washi"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resume.href}
              download={resume.filename}
              className="sp-drawer-link block py-1 text-lg text-kin-leaf"
              onClick={() => setOpen(false)}
            >
              最新の職務経歴書
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function ArrowDown() {
  return (
    <>
      <svg viewBox="0 0 24 28" className="resume-static" aria-hidden="true">
        <path className="resume-base" d="M3.5 25.5h17" />
      </svg>
      <svg viewBox="0 0 24 28" className="resume-drop" aria-hidden="true">
        <path d="M12 1.8v7.2" />
        <path d="M6.8 7.2 12 13.2 17.2 7.2" />
      </svg>
    </>
  );
}
