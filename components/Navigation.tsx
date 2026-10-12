"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const links = [
  ["tentang", "Profil"],
  ["pengalaman", "Pengalaman"],
  ["pendidikan", "Pendidikan"],
  ["skills", "Keahlian"],
  ["website", "Website"],
  ["karya", "Karya"],
] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("tentang");
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[visible.length - 1].target.id);
      },
      { rootMargin: "-18% 0px -60% 0px" },
    );
    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    const closeOutside = (event: MouseEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", escape);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", closeOutside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia("(min-width:901px)");
    const close = () => setOpen(false);
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  const items = links.map(([id, label]) => (
    <a
      key={id}
      href={`#${id}`}
      aria-current={active === id ? "location" : undefined}
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  ));
  return (
    <header ref={header} className="site-header" id="top">
      <div className="container header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Nebukadnezar Ahmad, beranda"
        >
          Nebukadnezar<span>.</span>
        </a>
        <nav
          id="main-nav"
          className="desktop-navigation"
          aria-label="Navigasi utama"
        >
          {items}
        </nav>
        <motion.button
          tabIndex={0}
          ref={button}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          whileTap={reduce ? undefined : { scale: 0.96 }}
        >
          Menu <span aria-hidden="true">{open ? "×" : "+"}</span>
        </motion.button>
        <a className="header-contact" href="#kontak">
          Hubungi saya ↗
        </a>
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              key="mobile"
              id="mobile-nav"
              className="mobile-navigation"
              aria-label="Navigasi ponsel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
            >
              {items}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
