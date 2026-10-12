import Image from "next/image";
import { asset } from "@/lib/paths";

export default function Profile() {
  return (
    <>
      <section
        className="hero container"
        id="tentang"
        aria-labelledby="profile-title"
      >
        <div className="hero-copy">
          <p className="intro">
            Halo, saya Nezar <span aria-hidden="true">✦</span>
          </p>
          <h1 id="profile-title">
            <span className="hero-line-wrap">
              <span className="hero-line">Nebukadnezar</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line">
                Ahmad<span className="name-dot">.</span>
              </span>
            </span>
          </h1>
          <p className="hero-role">Creative Leader &amp; Digital Strategist</p>
          <p className="hero-summary">
            Saya mahasiswa Teknik Informatika di Institut Teknologi PLN. Saya
            membuat desain dan konten media sosial, membangun website, serta
            memimpin tim kreatif di Youth Ranger Indonesia.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#website">
              Lihat website saya <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button secondary"
              href={asset("assets/cv-nebukadnezar-ahmad.docx")}
              download
            >
              Unduh CV <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-social">
            <span>Temukan saya di</span>
            <div>
              <a
                href="https://www.linkedin.com/in/nebukadnezar-ahmad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/nebukadnezarahmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.instagram.com/nebukadnezar._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
        <div className="portrait-entrance">
          <figure className="profile-visual">
            <div className="portrait-circle">
              <Image
                src={asset("assets/pas-foto-nebukadnezar.png")}
                width={860}
                height={1152}
                alt="Pas foto Nebukadnezar Ahmad mengenakan jas hitam dan dasi"
                priority
              />
            </div>
            <figcaption>
              <span className="photo-caption">
                Mahasiswa Teknik Informatika
                <br />
                Institut Teknologi PLN.
              </span>
              <span className="profile-location">
                <span aria-hidden="true">⌖</span> Sumatera Selatan, Indonesia
              </span>
            </figcaption>
            <div className="portrait-note">
              <span aria-hidden="true">✦</span>
              <div>
                Desain dan media sosial
                <small>Chief Creative · Youth Ranger Indonesia</small>
              </div>
            </div>
          </figure>
        </div>
      </section>
      <div className="impact-band">
        <dl className="container impact-grid">
          <div>
            <dt>5 juta+</dt>
            <dd>Tayangan dalam 2 bulan di YRI</dd>
          </div>
          <div>
            <dt>+100 anggota</dt>
            <dd>Tim kreatif yang pernah dipimpin</dd>
          </div>
          <div>
            <dt className="impact-title">
              OPPO Campus
              <br />
              Ambassador
            </dt>
            <dd>OPPO Indonesia · 2026</dd>
          </div>
          <div>
            <dt className="impact-title">
              Student Ambassador
              <br />
              ITPLN
            </dt>
            <dd>Institut Teknologi PLN · 2025</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
