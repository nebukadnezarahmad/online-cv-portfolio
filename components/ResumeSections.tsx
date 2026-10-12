export default function ResumeSections() {
  return (
    <>
      <section
        className="section container"
        id="pendidikan"
        aria-labelledby="education-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Pendidikan</p>
            <h2 id="education-title">Riwayat pendidikan saya.</h2>
          </div>
        </div>
        <div className="education-grid">
          <article className="education-card">
            <span className="education-icon" aria-hidden="true">
              ↗
            </span>
            <div>
              <p className="date">September 2025 – Sekarang</p>
              <h3>S1 Teknik Informatika</h3>
              <p className="organization">Institut Teknologi PLN · Jakarta</p>
              <p>Mahasiswa Program Ikatan Kerja PLN Group.</p>
            </div>
          </article>
          <article className="education-card">
            <span className="education-icon" aria-hidden="true">
              ↗
            </span>
            <div>
              <p className="date">Juni 2022 – Mei 2025</p>
              <h3>SMA Negeri Sumatera Selatan</h3>
              <p className="organization">Palembang</p>
              <p>
                Boarding School berasrama dengan Beasiswa penuh selama tiga
                tahun dari Pemerintah Provinsi Sumatera Selatan.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section
        className="section container skills-section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Keahlian</p>
            <h2 id="skills-title">Keahlian yang saya gunakan.</h2>
          </div>
        </div>
        <div className="skills-grid">
          <article>
            <span className="skill-symbol" aria-hidden="true">
              ✳
            </span>
            <h3>Hard skills</h3>
            <ul className="skill-list">
              <li>Desain grafis &amp; UI/UX</li>
              <li>Social media management</li>
              <li>Content planning &amp; copywriting</li>
              <li>Fotografi &amp; videografi</li>
              <li>Video editing</li>
              <li>Digital marketing &amp; SEO analytics</li>
            </ul>
          </article>
          <article>
            <span className="skill-symbol" aria-hidden="true">
              ◎
            </span>
            <h3>Soft skills</h3>
            <ul className="skill-list">
              <li>Kepemimpinan tim</li>
              <li>Berpikir kreatif</li>
              <li>Komunikasi</li>
              <li>Kerja sama lintas divisi</li>
              <li>Manajemen waktu</li>
              <li>Perencanaan &amp; manajemen proyek</li>
            </ul>
          </article>
          <article>
            <span className="skill-symbol" aria-hidden="true">
              ⌘
            </span>
            <h3>Software &amp; bahasa</h3>
            <ul className="tool-tags">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Premiere Pro</li>
              <li>After Effects</li>
              <li>Lightroom</li>
              <li>Figma</li>
              <li>Canva</li>
              <li>CapCut</li>
              <li>Microsoft Office</li>
            </ul>
            <p className="language-note">
              Bahasa Indonesia · Native
              <br />
              Bahasa Inggris · Advanced
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
