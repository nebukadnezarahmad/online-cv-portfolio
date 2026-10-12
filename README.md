# CV & Portofolio — Nebukadnezar Ahmad

Website pribadi untuk assignment #4, menggunakan **HTML5 dan CSS murni**. Tidak menggunakan JavaScript, framework, atau proses build.

- **Live website:** [nebukadnezarahmad.github.io/online-cv-portfolio](https://nebukadnezarahmad.github.io/online-cv-portfolio/)
- **Repositori:** [github.com/nebukadnezarahmad/online-cv-portfolio](https://github.com/nebukadnezarahmad/online-cv-portfolio)

## Konten

Profil dan foto, pengalaman kerja dan organisasi, pendidikan, hard skills dan soft skills, software dan bahasa, galeri desain/fotografi/videografi, proyek website, prestasi, serta kontak dan tautan sosial. Isi dirangkum dari CV Bahasa Indonesia dan portofolio 2026 milik Nebukadnezar Ahmad. Riwayat terbaru mengacu pada CV; periode Chief Creative YRI yang tidak mencantumkan tahun ditampilkan sebagai aktif.

## Struktur sumber

```text
index.html       # Struktur HTML semantik dan isi website
styles.css       # Seluruh styling, layout, dan media queries
assets/          # Foto, karya, favicon, CV DOCX, dan portofolio PDF
tests/          # Verifikasi struktur, formulir, dan jalur aset
```

Foto dan gambar karya diekstrak dari portofolio milik pemilik website. Gambar menggunakan WebP agar ringan. PDF portofolio dikompresi untuk unduhan. Seluruh jalur aset relatif sehingga kompatibel dengan subdirektori GitHub Pages.

## CSS Essentials

- **Element selectors:** `body`, `h1`, `a`, `input`, dan `textarea`.
- **Class selectors:** `.hero`, `.container`, `.work-grid`, dan `.button`.
- **ID selector:** `#skills`.
- **Box model:** `box-sizing`, `margin`, `padding`, dan `border`.
- **Typography:** font-family, font-size, font-weight, line-height, letter-spacing, dan text-align.
- **Layout:** CSS Grid, Flexbox, responsive media queries, serta stylesheet cetak.
- **Aksesibilitas:** label formulir, teks alternatif gambar, skip link, focus keyboard, dan prefers-reduced-motion.

## Formulir kontak

Formulir memvalidasi nama, email, dan pesan melalui HTML. Nomor kontak bersifat opsional. Tombol membuka aplikasi email melalui `mailto:` dengan data formulir; pengunjung perlu memeriksa dan mengirim pesan dari aplikasi tersebut. Website tidak menyimpan pesan atau mengirim email langsung melalui server. Alamat email, nomor telepon, dan tautan sosial juga tersedia.

## Menjalankan lokal

```bash
python3 -m http.server 4173
```

Buka `http://localhost:4173`. Tidak perlu instalasi dependensi untuk menjalankan website.

## Verifikasi

```bash
python3 -m unittest discover -s tests -v
```

## GitHub Pages

Publikasi dari branch `main`, folder `/ (root)`, melalui **Settings → Pages → Deploy from a branch**. Sesudah commit didorong ke `main`, GitHub Pages memperbarui website otomatis.

## Referensi visual

- [RyHar](https://ryhar.my.id/): profil dua kolom, foto melingkar, navigasi sederhana, dan susunan portofolio.
- Versi sebelumnya website ini: riwayat pengalaman, pendidikan, prestasi, dan proyek digital.

© 2026 Nebukadnezar Ahmad. Karya visual dan dokumen merupakan milik Nebukadnezar Ahmad.
