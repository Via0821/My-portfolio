"use client";

import { useEffect } from "react";
import { AboutTimeline } from "./AboutTimeline";
import { ContactSection } from "./ContactSection";
import { CustomCursor } from "./CustomCursor";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { SelectedProjects } from "./SelectedProjects";
import { Skills } from "./Skills";
import { WhatIDo } from "./WhatIDo";
import { WorkingStyle } from "./WorkingStyle";

export function SiteShell() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let active = true;
    let revert: (() => void) | undefined;

    void (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!active) return;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.to("[data-hero-visual]", {
          y: 48,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
            },
          });
        });
      });

      revert = () => context.revert();
    })();

    return () => {
      active = false;
      revert?.();
    };
  }, []);

  return (
    <div className="site-root relative min-h-screen bg-ink text-paper">
      <div className="site-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="site-noise pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <CustomCursor />
      <Header />
      <main className="relative z-10">
        <Hero />
        <WhatIDo />
        <SelectedProjects />
        <Skills />
        <WorkingStyle />
        <AboutTimeline />
        <ContactSection />
      </main>
    </div>
  );
}
