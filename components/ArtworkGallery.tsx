"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { artworks } from "@/data/portfolio";
import { asset } from "@/lib/paths";

export default function ArtworkGallery() {
  const [selected, setSelected] = useState<(typeof artworks)[number] | null>(
    null,
  );
  const [closing, setClosing] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);
  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  function finishClose() {
    dialog.current?.close();
    setSelected(null);
    setClosing(false);
    trigger.current?.focus({ preventScroll: true });
  }
  return (
    <>
      <section
        className="section section-tinted"
        id="karya"
        aria-labelledby="work-title"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Portofolio pilihan</p>
              <h2 id="work-title">Desain, foto, dan video.</h2>
            </div>
            <a
              className="button secondary"
              href={asset("assets/portofolio-nebukadnezar-ahmad.pdf")}
              download
            >
              Unduh portofolio ↓
            </a>
          </div>
          <div className="work-grid">
            {artworks.map((work) => (
              <article className="work-card" key={work.title}>
                <a
                  className={work.imageClass}
                  href={asset(work.src)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Lihat ${work.title} ukuran penuh`}
                  onClick={(event) => {
                    if (
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    )
                      return;
                    event.preventDefault();
                    trigger.current = event.currentTarget;
                    setClosing(false);
                    setSelected(work);
                  }}
                >
                  <Image
                    src={asset(work.src)}
                    width={work.width}
                    height={work.height}
                    alt={work.alt}
                  />
                </a>
                <div className="work-copy">
                  <p className="category">{work.category}</p>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <dialog
        ref={dialog}
        className="art-dialog"
        aria-labelledby="art-title"
        onCancel={(event) => {
          event.preventDefault();
          setClosing(true);
        }}
        onClick={(event) => {
          if (event.target !== dialog.current) return;
          const rect = dialog.current.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            setClosing(true);
        }}
      >
        <motion.div
          key={selected?.title}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={
            closing
              ? { opacity: 0, scale: 0.97, y: 8 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{ duration: reduce ? 0 : 0.24 }}
          onAnimationComplete={() => {
            if (closing) finishClose();
          }}
        >
          <div className="art-dialog-header">
            <h2 id="art-title">{selected?.title || "Karya pilihan"}</h2>
            <button
              className="dialog-close"
              type="button"
              onClick={() => setClosing(true)}
            >
              Tutup ×
            </button>
          </div>
          {selected && (
            <Image
              className="art-dialog-image"
              src={asset(selected.src)}
              width={selected.width}
              height={selected.height}
              alt={selected.alt}
            />
          )}
          <p className="art-dialog-caption">{selected?.description}</p>
        </motion.div>
      </dialog>
    </>
  );
}
