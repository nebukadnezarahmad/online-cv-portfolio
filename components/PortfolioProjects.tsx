"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";
import { asset } from "@/lib/paths";
import ProjectVisual from "./ProjectVisual";

const categories = [
  "Semua proyek",
  "Proyek lomba",
  "Alat bantu pekerjaan",
  "Freelance & pekerjaan",
];

export default function PortfolioProjects() {
  const [category, setCategory] = useState(categories[0]);
  const reduce = useReducedMotion();
  const visible = projects.filter(
    (project) => category === categories[0] || project.category === category,
  );
  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 350);
    return () => clearTimeout(timer);
  }, [category]);
  return (
    <section
      className="section container websites-section"
      id="website"
      aria-labelledby="website-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Portofolio website</p>
          <h2 id="website-title">Website yang saya bangun.</h2>
        </div>
        <a
          className="text-link"
          href="https://github.com/nebukadnezarahmad?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Semua repositori GitHub ↗
        </a>
      </div>
      <p className="website-intro">
        SIGAP, Portal Desa Tegalrejo, dan Seketika saya buat untuk lomba. YRI,
        Student Worker, dan MARKAS membantu pekerjaan sehari-hari. Proyek
        lainnya saya kerjakan untuk freelance dan pekerjaan. Preview dashboard
        memakai data contoh.
      </p>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter proyek website"
        >
          {categories.map((label) => (
            <motion.button
              tabIndex={0}
              type="button"
              key={label}
              aria-pressed={category === label}
              onClick={() => setCategory(label)}
              whileTap={reduce ? undefined : { scale: 0.96 }}
            >
              {label}
            </motion.button>
          ))}
        </div>
        <p className="project-count" aria-live="polite" aria-atomic="true">
          {visible.length} proyek
        </p>
      </div>
      <div className="website-grid">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              className="website-card"
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -18,
                transition: { duration: reduce ? 0 : 0.18, delay: 0 },
              }}
              transition={{
                duration: reduce ? 0 : 0.4,
                delay: reduce ? 0 : index * 0.04,
              }}
            >
              <div className="browser-bar">
                <span className="browser-dots" aria-hidden="true">
                  ● ● ●
                </span>
                <span className="browser-address">{project.address}</span>
                <span className="preview-status">
                  {project.demo ? "Demo hanya baca" : "Live"}
                </span>
              </div>
              <ProjectVisual>
                <iframe
                  src={project.demo ? asset(project.preview) : project.preview}
                  title={`Preview ${project.demo ? "demo hanya baca" : "live website"} ${project.title}`}
                  loading="lazy"
                  sandbox={
                    project.demo
                      ? ""
                      : "allow-scripts allow-same-origin allow-forms allow-popups"
                  }
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </ProjectVisual>
              <div className="website-copy">
                <p className="category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="website-description">{project.description}</p>
                <p className="preview-note">{project.note}</p>
                <div className="website-actions">
                  {project.links.map((link, index) => (
                    <a
                      key={link.href}
                      className={
                        index === 0 ? "button primary" : "website-repo"
                      }
                      href={
                        link.href.startsWith("http")
                          ? link.href
                          : asset(link.href)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
