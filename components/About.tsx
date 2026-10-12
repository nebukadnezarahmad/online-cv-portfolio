import { asset } from "@/lib/paths";

const summary =
  "Saya tertarik pada teknologi, fotografi, videografi, dan desain grafis. Di organisasi, saya mengurus desain publikasi, produksi konten, dan dokumentasi kegiatan.";

export default function About() {
  return (
    <>
      <section
        className="section container about"
        id="ringkasan"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">Tentang saya</p>
          <h2 id="about-title">
            Kuliah informatika, <br />
            bekerja di bidang kreatif.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            <span className="visually-hidden">{summary}</span>
            <span className="summary-words" aria-hidden="true">
              {summary.split(" ").map((word, index) => (
                <span key={index}>{word} </span>
              ))}
            </span>
          </p>
          <p>
            Saya pernah mengelola media sosial untuk usaha otomotif di Palembang
            dan memimpin tim media di organisasi pelajar. Sekarang, saya kuliah
            di Institut Teknologi PLN sambil mengembangkan proyek website.
            Beberapa karya dan pengalaman saya bisa Anda lihat di halaman ini.
          </p>
          <a
            className="text-link"
            href={asset("assets/portofolio-nebukadnezar-ahmad.pdf")}
            target="_blank"
            rel="noopener"
          >
            Buka portofolio lengkap <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="skill-ribbon" aria-hidden="true">
          <div className="skill-ribbon-track">
            <span>Desain grafis</span>
            <span>Fotografi</span>
            <span>Videografi</span>
            <span>Website</span>
            <span>Media sosial</span>
          </div>
        </div>
      </section>
    </>
  );
}
