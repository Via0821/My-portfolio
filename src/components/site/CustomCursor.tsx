"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const move = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      ringRef.current?.animate(
        [{ transform: `translate3d(${x}px, ${y}px, 0)` }],
        { duration: 380, fill: "forwards", easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    };

    const over = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const hot = Boolean(target.closest("a, button, input, textarea, select, [data-cursor='hot']"));
      root.classList.toggle("cursor-hot", hot);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      root.classList.remove("has-cursor", "cursor-hot");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
