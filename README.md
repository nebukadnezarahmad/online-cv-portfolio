# CV & Portofolio — Nebukadnezar Ahmad

Website CV dan portofolio menggunakan **HTML5, CSS, dan JavaScript**. Tidak memerlukan framework atau proses build. JavaScript menambahkan filter proyek, navigasi ponsel, penanda bagian aktif, preview gambar, dan animasi scroll.

- **Live website:** [nebukadnezarahmad.github.io/online-cv-portfolio](https://nebukadnezarahmad.github.io/online-cv-portfolio/)
- **Repositori:** [github.com/nebukadnezarahmad/online-cv-portfolio](https://github.com/nebukadnezarahmad/online-cv-portfolio)

## Konten

Profil dan foto, pengalaman kerja dan organisasi, pendidikan, hard skills dan soft skills, software dan bahasa, galeri desain/fotografi/videografi, lima preview website live dan empat demo hanya baca, prestasi, serta kontak dan tautan sosial. Isi dirangkum dari CV Bahasa Indonesia dan portofolio 2026 milik Nebukadnezar Ahmad. Riwayat terbaru mengacu pada CV; periode Chief Creative YRI yang tidak mencantumkan tahun ditampilkan sebagai aktif.

## Struktur sumber

```text
index.html       # Struktur HTML semantik dan isi website
styles.css       # Seluruh styling, layout, dan media queries
cinematic.css    # Tampilan terang-gelap, proyek bergantian, dan layout scroll
script.js        # Menu ponsel, filter proyek, navigasi aktif, dan dialog karya
motion.js        # Pengalaman horizontal, penekanan kata, reveal, dan progress scroll
assets/          # Foto, karya, favicon, CV DOCX, dan portofolio PDF
demos/           # Preview dashboard hanya baca, HTML + CSS
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

## Portofolio website live

Galeri website menampilkan Mutawwifmu, PRYVO.ID, Seketika, Portal Desa Tegalrejo, Youtz Attendance, SIGAP, YRI Analytics Studio, Student Worker Studio, dan MARKAS melalui iframe. Tombol membuka website dan repositori tersedia. Versi lomba Portal Desa juga ditautkan. Youtz Attendance, YRI Analytics Studio, Student Worker Studio, dan MARKAS memakai demo HTML/CSS lokal tanpa password dengan data contoh. Pengunjung hanya bisa berpindah menu dan scroll. Demo tidak memuat JavaScript, tidak mengakses API internal, tidak meminta kredensial, dan tidak menyediakan aksi pengisian atau perubahan data. Demo Youtz juga tidak mengakses kamera atau lokasi.

Iframe menggunakan lazy loading, judul aksesibel, dan sandbox. Sandbox empat demo tidak mengizinkan script, pengiriman form, atau pop-up. CSS memakai versi pada URL stylesheet agar cache browser tidak mencampur HTML baru dengan CSS lama.

## Formulir kontak

Formulir memvalidasi nama, email, dan pesan melalui HTML. Nomor kontak bersifat opsional. Tombol membuka aplikasi email melalui `mailto:` dengan data formulir; pengunjung perlu memeriksa dan mengirim pesan dari aplikasi tersebut. Website tidak menyimpan pesan atau mengirim email langsung melalui server. Alamat email, nomor telepon, dan tautan sosial juga tersedia.

## Membuka website

Buka `index.html` langsung di browser, atau gunakan tautan GitHub Pages di atas. Tidak memerlukan instalasi dependensi atau proses build.

## Verifikasi

Struktur HTML, jalur aset, navigasi demo, tampilan responsif, dan pembatasan hanya baca diperiksa sebelum publikasi. Alat pengujian digunakan secara lokal dan tidak disertakan dalam repositori tugas.

## Animasi scroll

Pada desktop dengan pointer presisi, lebar minimal 1100px, dan tinggi minimal 700px, bagian pengalaman menetap di layar sementara enam kartu bergerak horizontal mengikuti scroll halaman. Tombol sebelumnya dan berikutnya tersedia. Ponsel, layar kecil, dan pengaturan pengurangan gerakan memakai tampilan pengalaman vertikal.

Ringkasan profil menekankan kata mengikuti posisi scroll. Gerakan foto dibatasi, reveal berjalan sekali saat elemen masuk layar, dan penanda atas menunjukkan progres halaman. Scroll memakai perilaku browser; roda mouse dan sentuhan tidak dicegat. Seluruh informasi tetap tersedia ketika JavaScript dimatikan, termasuk tautan navigasi, proyek, dan unduhan.

## GitHub Pages

Publikasi dari branch `main`, folder `/ (root)`, melalui **Settings → Pages → Deploy from a branch**. Sesudah commit didorong ke `main`, GitHub Pages memperbarui website otomatis.

## Referensi visual

- [Iqmal](https://iqmal.dev/): referensi utama untuk transisi terang-gelap, penekanan teks, pengalaman horizontal, dan penyajian proyek bergantian.
- [RyHar](https://ryhar.my.id/): hierarki profil, navigasi, dan susunan portofolio. Foto dan identitas visual mengikuti portofolio Nebukadnezar.
- Versi sebelumnya website ini: riwayat pengalaman, pendidikan, prestasi, dan proyek digital.

© 2026 Nebukadnezar Ahmad. Karya visual dan dokumen merupakan milik Nebukadnezar Ahmad.
