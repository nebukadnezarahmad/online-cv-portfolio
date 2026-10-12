export default function AchievementsContact() {
  return (
    <>
      <section
        className="section container awards"
        aria-labelledby="awards-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Prestasi pilihan</p>
            <h2 id="awards-title">Kompetisi dan program ambassador.</h2>
          </div>
        </div>
        <div className="award-list">
          <article>
            <span className="award-year">2026</span>
            <div>
              <h3>Top 10 HSSE Innovation Challenge</h3>
              <p>
                Scientific Paper Competition &amp; Video Campaign Competition ·
                Pertamina HSE Training Center
              </p>
            </div>
            <span className="award-mark" aria-hidden="true">
              ✦
            </span>
          </article>
          <article>
            <span className="award-year">2026</span>
            <div>
              <h3>OPPO Campus Ambassador</h3>
              <p>Terpilih sebagai Campus Ambassador OPPO Indonesia</p>
            </div>
            <span className="award-mark" aria-hidden="true">
              ✦
            </span>
          </article>
          <article>
            <span className="award-year">2025</span>
            <div>
              <h3>Juara 3 Kompetisi UI/UX Nasional</h3>
              <p>
                Unika Atma Jaya · Sustainable Development Through Technology
              </p>
            </div>
            <span className="award-mark" aria-hidden="true">
              ✦
            </span>
          </article>
          <article>
            <span className="award-year">2025</span>
            <div>
              <h3>Student Ambassador ITPLN</h3>
              <p>Institut Teknologi PLN · Periode satu tahun</p>
            </div>
            <span className="award-mark" aria-hidden="true">
              ✦
            </span>
          </article>
          <article>
            <span className="award-year">2023</span>
            <div>
              <h3>Juara 1 Film Pendek TVRI Sumatera Selatan</h3>
              <p>HUT ke-50 TVRI Sumatera Selatan · “SEMU SAMACARA”</p>
            </div>
            <span className="award-mark" aria-hidden="true">
              ✦
            </span>
          </article>
        </div>
      </section>
      <section
        className="section section-tinted"
        id="kontak"
        aria-labelledby="contact-title"
      >
        <div className="container contact-layout">
          <div className="contact-intro">
            <p className="eyebrow">Kontak</p>
            <h2 id="contact-title">
              Hubungi saya
              <br />
              untuk kerja sama.
            </h2>
            <p>
              Untuk membahas proyek atau mengajak saya bekerja sama, kirim pesan
              melalui email atau formulir ini.
            </p>
            <dl className="contact-details">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:nebukadnezarahmad2018@gmail.com">
                    nebukadnezarahmad2018@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Nomor kontak</dt>
                <dd>
                  <a href="tel:+6285758073647">+62 857 5807 3647</a>
                </dd>
              </div>
            </dl>
            <div className="contact-social">
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
          <form
            className="contact-form"
            action="mailto:nebukadnezarahmad2018@gmail.com?subject=Kolaborasi%20dari%20website%20portofolio"
            method="post"
            encType="text/plain"
            aria-describedby="form-note"
          >
            <div className="form-row">
              <div>
                <label htmlFor="name">Nama Anda</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nama lengkap"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="email">Email Anda</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </div>
            </div>
            <label htmlFor="phone">
              Nomor kontak <span>(opsional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+62 ..."
              autoComplete="tel"
              maxLength={30}
            />
            <label htmlFor="message">Pesan Anda</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tulis pesan atau detail proyek Anda di sini."
              required
              maxLength={5000}
            ></textarea>
            <button className="button primary" type="submit">
              Lanjutkan ke email <span aria-hidden="true">↗</span>
            </button>
            <p className="form-note" id="form-note">
              Formulir membuka aplikasi email Anda. Periksa lalu kirim pesan
              dari aplikasi tersebut. Jika aplikasi email belum diatur, hubungi
              saya melalui alamat email di samping.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
