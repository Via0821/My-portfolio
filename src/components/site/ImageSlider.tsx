"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type ImageSliderProps = {
  images: string[];
  alt: string;
  interval?: number;
  controls?: boolean;
  /** Size the frame from the first image instead of the parent, and show screenshots uncropped. */
  fit?: boolean;
  className?: string;
};

// Crossfading slideshow. The gold progress bar of the current slide drives it: when the bar's
// CSS animation ends we advance, so pausing the bar (hover, off-screen, reduced motion) pauses the slides.
export function ImageSlider({
  images,
  alt,
  interval = 3800,
  controls = false,
  fit = false,
  className = "",
}: ImageSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [onScreen, setOnScreen] = useState(false);
  const total = images.length;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const goTo = (next: number) => setIndex((next + total) % total);

  return (
    <div
      ref={ref}
      className={`slider ${fit ? "slider-fit" : ""} ${onScreen ? "" : "is-paused"} ${className}`}
      style={{ "--interval": `${interval}ms` } as CSSProperties}
      aria-roledescription="スライドショー"
    >
      {fit && <img src={images[0]} alt="" aria-hidden="true" className="slider-sizer" />}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt}（${i + 1}/${total}）`}
          aria-hidden={i !== index}
          loading="lazy"
          decoding="async"
          className={`slider-img ${i === index ? "is-active" : ""}`}
        />
      ))}

      {total > 1 && (
        <div className="slider-progress" aria-hidden={!controls}>
          {images.map((src, i) => {
            const state = i < index ? "is-done" : i === index ? "is-current" : "";
            const onAnimationEnd = i === index ? () => goTo(index + 1) : undefined;
            return controls ? (
              <button
                key={src}
                type="button"
                aria-label={`${i + 1}枚目を表示`}
                aria-current={i === index ? "true" : undefined}
                className={`slider-bar ${state}`}
                onClick={() => goTo(i)}
                onAnimationEnd={onAnimationEnd}
              />
            ) : (
              <span key={src} className={`slider-bar ${state}`} onAnimationEnd={onAnimationEnd} />
            );
          })}
        </div>
      )}

      {controls && total > 1 && (
        <>
          <button type="button" aria-label="前の画像" onClick={() => goTo(index - 1)} className="media-nav left-3">
            ‹
          </button>
          <button type="button" aria-label="次の画像" onClick={() => goTo(index + 1)} className="media-nav right-3">
            ›
          </button>
        </>
      )}
    </div>
  );
}
