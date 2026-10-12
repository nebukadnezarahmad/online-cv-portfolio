"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperienceContext = createContext({
  active: 0,
  total: 6,
  jump: (_direction: number) => {},
});

function ExperienceControls() {
  const { active, total, jump } = useContext(ExperienceContext);
  return (
    <div className="experience-controls">
      <button
        type="button"
        disabled={active === 0}
        onClick={() => jump(-1)}
        aria-label="Pengalaman sebelumnya"
      >
        ←
      </button>
      <p className="experience-position" aria-live="polite" aria-atomic="true">
        {active + 1} / {total}
      </p>
      <button
        type="button"
        disabled={active === total - 1}
        onClick={() => jump(1)}
        aria-label="Pengalaman berikutnya"
      >
        →
      </button>
      <span>Scroll untuk melihat pengalaman</span>
    </div>
  );
}

export default function ExperienceSection() {
  const root = useRef<HTMLElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = root.current!;
    const stage = element.querySelector<HTMLElement>(".experience-stage")!;
    const track = element.querySelector<HTMLElement>(".experience-layout")!;
    const region = element.querySelector<HTMLElement>(".experience-scroll")!;
    const cards = [...track.querySelectorAll<HTMLElement>(".timeline-item")];
    const media = gsap.matchMedia();
    media.add(
      "(min-width: 1100px) and (min-height: 750px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        element.classList.add("cinematic-experience", "gsap-rail");
        const distance = () =>
          Math.max(0, track.scrollWidth - stage.clientWidth);
        const measure = () =>
          region.style.setProperty("--rail-distance", distance() + "px");
        measure();
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            id: "experience-rail",
            trigger: region,
            start: "top 104px",
            end: () => "+=" + distance(),
            pin: stage,
            pinSpacing: false,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefreshInit: measure,
            onUpdate: (self) => {
              const step = cards[1].offsetLeft - cards[0].offsetLeft;
              const index =
                self.progress > 0.99
                  ? cards.length - 1
                  : Math.min(
                      cards.length - 1,
                      Math.round((self.progress * distance()) / step),
                    );
              setActive(index);
            },
          },
        });
        trigger.current = tween.scrollTrigger!;
        return () => {
          trigger.current = null;
          element.classList.remove("cinematic-experience", "gsap-rail");
          region.style.removeProperty("--rail-distance");
        };
      },
      root,
    );
    return () => media.revert();
  }, []);
  function jump(direction: number) {
    const scrollTrigger = trigger.current;
    if (!scrollTrigger || !root.current) return;
    const cards = [
      ...root.current.querySelectorAll<HTMLElement>(".timeline-item"),
    ];
    const index = Math.max(0, Math.min(cards.length - 1, active + direction));
    const offset = Math.min(
      scrollTrigger.end - scrollTrigger.start,
      cards[index].offsetLeft - cards[0].offsetLeft,
    );
    window.scrollTo({ top: scrollTrigger.start + offset, behavior: "smooth" });
  }
  return (
    <ExperienceContext.Provider value={{ active, total: 6, jump }}>
      <section
        ref={root}
        className="section section-tinted"
        id="pengalaman"
        aria-labelledby="experience-title"
      >
        <div className="container">
          <div className="experience-scroll">
            <div className="experience-stage">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Pengalaman</p>
                  <h2 id="experience-title">Pekerjaan dan organisasi.</h2>
                </div>
                <p>
                  Peran yang pernah saya jalani
                  <br />
                  dan hasil kerja bersama tim.
                </p>
              </div>
              <div className="experience-layout">
                <div>
                  <h3 className="column-title">Pengalaman kerja</h3>
                  <div className="timeline">
                    <article className="timeline-item">
                      <p className="date">Juni – Agustus 2025</p>
                      <h4>Content Creator &amp; Social Manager</h4>
                      <p className="organization">
                        V-Kool Indonesia · Palembang Outlet
                      </p>
                      <p>
                        Merancang strategi konten sesuai identitas brand pusat,
                        meraih 100.000+ interaksi Instagram, dan berkolaborasi
                        dengan V-Kool Indonesia Pusat.
                      </p>
                    </article>
                    <article className="timeline-item">
                      <p className="date">Juni – Agustus 2025</p>
                      <h4>Content Creator &amp; Customer Service</h4>
                      <p className="organization">Solar Gard Palembang</p>
                      <p>
                        Mengelola produksi konten dan mendukung pelayanan
                        pelanggan. Meningkatkan interaksi Instagram lebih dari
                        90% serta mendukung peningkatan penjualan.
                      </p>
                    </article>
                    <article className="timeline-item">
                      <p className="date">Juni – Agustus 2025</p>
                      <h4>Social Media Manager</h4>
                      <p className="organization">Pratama Variasi Palembang</p>
                      <p>
                        Mengembangkan identitas visual dan kampanye digital
                        tertarget, dengan 100.000+ interaksi Instagram dalam
                        kurang dari dua minggu.
                      </p>
                    </article>
                  </div>
                </div>
                <div>
                  <h3 className="column-title">
                    Organisasi &amp; kepemimpinan
                  </h3>
                  <div className="timeline">
                    <article className="timeline-item">
                      <p className="date">Aktif · Nasional</p>
                      <h4>Chief Creative</h4>
                      <p className="organization">Youth Ranger Indonesia</p>
                      <p>
                        Memimpin 30 anggota tim kreatif, mengarahkan identitas
                        visual, dan mengembangkan strategi konten yang mencapai
                        5 juta+ tayangan dalam dua bulan.
                      </p>
                    </article>
                    <article className="timeline-item">
                      <p className="date">Januari – Desember 2024</p>
                      <h4>Head of Media &amp; Publication</h4>
                      <p className="organization">
                        Forum Edukasi Literasi Siswa Indonesia
                      </p>
                      <p>
                        Memimpin 11 anggota tim media, meraih 500.000+ interaksi
                        Instagram, dan berkolaborasi dalam konten bersama Pusat
                        Prestasi Nasional.
                      </p>
                    </article>
                    <article className="timeline-item">
                      <p className="date">Desember 2023 – Desember 2024</p>
                      <h4>Head of Social Media Manager</h4>
                      <p className="organization">
                        Youth Ranger Indonesia · Sumatera Selatan
                      </p>
                      <p>
                        Mengembangkan akun dari awal hingga 700+ pengikut dan
                        mendukung pelaksanaan YRI EXPO X YRI FEST dengan 1.000+
                        peserta.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <ExperienceControls />
            </div>
          </div>
          <details className="more-experience" open>
            <summary>
              <div className="more-experience-heading">
                <h3>Pengalaman organisasi &amp; kepanitiaan lainnya</h3>
                <p>6 pengalaman di komunitas, organisasi sekolah, dan acara.</p>
              </div>
              <div className="more-experience-action">
                <span className="when-closed">Lihat pengalaman</span>
                <span className="when-open">Tutup daftar</span>
                <span className="more-experience-icon" aria-hidden="true">+</span>
              </div>
            </summary>
            <div className="additional-grid">
              <article>
                <p className="date">Juli 2024 – Sekarang</p>
                <h4>Wakil Ketua Umum Media Kreatif &amp; Publikasi</h4>
                <p>
                  Komunitas Pemuda Penggiat HAM Sumatera Selatan. Berkolaborasi
                  dengan Kementerian Hukum dan HAM serta tim lintas divisi untuk
                  edukasi HAM.
                </p>
              </article>
              <article>
                <p className="date">Juli 2024 – Juli 2025</p>
                <h4>Departemen Kominfo</h4>
                <p>
                  Forum OSIS Sumatera Selatan. Mengelola dokumentasi, desain,
                  dan publikasi kegiatan, termasuk LDBI tingkat provinsi.
                </p>
              </article>
              <article>
                <p className="date">Januari 2024 – Januari 2025</p>
                <h4>Minister of Information, Communication &amp; Technology</h4>
                <p>
                  OSIS SMA Negeri Sumatera Selatan. Meraih 500.000+ interaksi
                  serta mengembangkan Instagram dan TikTok resmi sekolah.
                </p>
              </article>
              <article>
                <p className="date">2023 – 2024</p>
                <h4>Media &amp; teknologi di sekolah</h4>
                <p>
                  Chief of Information and Technology Rohis (2023–2024) dan
                  Social Media Division Dewan Ambalan Penegak (2024) SMA Negeri
                  Sumatera Selatan.
                </p>
              </article>
              <article>
                <p className="date">Juni 2026</p>
                <h4>Media Creative · Rukun Festival</h4>
                <p>
                  Merancang visual branding, feeds Instagram, merchandise, serta
                  dokumentasi dan video live report untuk festival oleh NUO.
                </p>
              </article>
              <article>
                <p className="date">Juni 2026</p>
                <h4>PDD · Symposium Energi ITPLN</h4>
                <p>
                  Menyusun guidebook, mengelola operasional live streaming,
                  serta mendokumentasikan kegiatan untuk publikasi dan arsip
                  resmi.
                </p>
              </article>
            </div>
          </details>
        </div>
      </section>
    </ExperienceContext.Provider>
  );
}
