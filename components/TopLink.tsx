"use client";

import { useCallback, useEffect, useRef, type ComponentProps } from "react";
import gsap from "gsap";

let activeCancel: (() => void) | null = null;

export default function TopLink(props: Omit<ComponentProps<"a">, "href" | "onClick">) {
  const animation = useRef<gsap.core.Tween | null>(null);
  const restorePreviews = useRef<(() => void) | null>(null);
  const cancel = useCallback((): void => {
    animation.current?.kill();
    animation.current = null;
    restorePreviews.current?.();
    if (activeCancel === cancel) activeCancel = null;
  }, []);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) cancel();
    };
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", key);
    return () => {
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", key);
    };
  }, [cancel]);
  return (
    <a
      {...props}
      href="#top"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        activeCancel?.();
        activeCancel = cancel;
        const previews = [...document.querySelectorAll("iframe")].map((frame) => ({
          frame,
          wasInert: frame.inert,
        }));
        previews.forEach(({ frame }) => { frame.inert = true; });
        restorePreviews.current = () => {
          previews.forEach(({ frame, wasInert }) => { frame.inert = wasInert; });
          restorePreviews.current = null;
        };
        document.getElementById("top")?.focus({ preventScroll: true });
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          window.scrollTo({ top: 0, behavior: "instant" });
          cancel();
          return;
        }
        const position = { y: window.scrollY };
        animation.current = gsap.to(position, {
          y: 0,
          duration: 1,
          ease: "power3.inOut",
          onUpdate: () => window.scrollTo({ top: position.y, behavior: "instant" }),
          onComplete: () => {
            window.scrollTo({ top: 0, behavior: "instant" });
            cancel();
          },
        });
      }}
    />
  );
}
