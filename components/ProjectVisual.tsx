"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectVisual({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const target = ref.current!;
    let animation: gsap.core.Tween | undefined;
    media.add(
      "(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        animation = gsap.fromTo(
          target,
          { y: 48, scale: 0.95 },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: target,
              start: "top 95%",
              end: "top 30%",
              scrub: 0.6,
            },
          },
        );
      },
      ref,
    );
    const focus = () => {
      animation?.scrollTrigger?.kill();
      animation?.kill();
      gsap.set(target, { clearProps: "transform" });
    };
    target.addEventListener("focusin", focus);
    return () => {
      target.removeEventListener("focusin", focus);
      media.revert();
    };
  }, []);
  return (
    <div ref={ref} className="website-preview">
      {children}
    </div>
  );
}
