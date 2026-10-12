"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationShell({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = root.current!;
    const media = gsap.matchMedia();
    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width:1100px) and (pointer:fine)",
      },
      (context) => {
        const { motion: enabled, desktop } = context.conditions!;
        if (!enabled) return;
        const intro = gsap.timeline({
          defaults: { duration: 1.1, ease: "power3.out" },
        });
        intro
          .from(".hero .intro", { y: 20, opacity: 0 }, 0)
          .from(
            ".hero-line",
            { yPercent: 105, rotation: 3, opacity: 0, stagger: 0.12 },
            0.1,
          )
          .from(
            ".hero-role, .hero-summary, .hero-actions, .hero-social",
            { y: 25, opacity: 0, stagger: 0.08 },
            0.35,
          )
          .from(
            ".profile-visual",
            { y: 70, rotation: 4, scale: 0.92, opacity: 0, duration: 1.35 },
            0.18,
          );
        if (desktop)
          gsap.to(".profile-visual", {
            y: -65,
            rotation: -2.5,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        gsap.to(".reading-progress span", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });
        gsap.fromTo(
          ".summary-words > span",
          { color: "#c0cedf" },
          {
            color: "#ffffff",
            stagger: 0.075,
            ease: "none",
            scrollTrigger: {
              trigger: ".summary-words",
              start: "top 82%",
              end: "bottom 35%",
              scrub: 0.45,
            },
          },
        );
        gsap.from(".skill-ribbon-track", {
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ".skill-ribbon",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        const reveals = element.querySelectorAll<HTMLElement>(
          ".section-heading:not(#pengalaman .section-heading), .education-card, .skills-grid > article, .work-card, .award-list > article, .contact-intro",
        );
        reveals.forEach((target, index) => {
          gsap.from(target, {
            y: desktop ? 60 : 28,
            opacity: 0.55,
            duration: 0.95,
            delay: (index % 2) * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: target, start: "top 91%", once: true },
          });
        });
        const imageContainers =
          element.querySelectorAll<HTMLElement>(".work-image");
        if (desktop)
          imageContainers.forEach((target) =>
            gsap.fromTo(
              target.querySelector("img"),
              { scale: 1.08 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: target,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 0.6,
                },
              },
            ),
          );
        gsap.from(".contact-intro h2", {
          y: 48,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: "#kontak", start: "top 75%", once: true },
        });
      },
      root,
    );
    const focus = (event: FocusEvent) => {
      const node = event.target as HTMLElement;
      const container = node.closest(
        ".work-card, .education-card, .skills-grid > article, .contact-intro",
      );
      if (container) {
        gsap.killTweensOf(container);
        gsap.set(container, { clearProps: "opacity,transform" });
      }
    };
    element.addEventListener("focusin", focus);
    let mounted = true;
    const refresh = () => {
      if (mounted) ScrollTrigger.refresh();
    };
    window.addEventListener("load", refresh, { once: true });
    document.fonts.ready.then(refresh);
    const timer = setTimeout(refresh, 300);
    return () => {
      mounted = false;
      clearTimeout(timer);
      media.revert();
      element.removeEventListener("focusin", focus);
      window.removeEventListener("load", refresh);
    };
  }, []);
  return <div ref={root}>{children}</div>;
}
