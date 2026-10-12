# CV & Portofolio Nebukadnezar Ahmad

Website pribadi dengan Next.js App Router, React, TypeScript, GSAP, dan Motion.

- [Website](https://nebukadnezarahmad.github.io/online-cv-portfolio/)
- [Repositori](https://github.com/nebukadnezarahmad/online-cv-portfolio)

## Konten

Profil, pengalaman kerja dan organisasi, pendidikan, keahlian, proyek website, karya visual, prestasi, serta kontak. Informasi berasal dari CV dan portofolio pemilik website.

Proyek lomba: SIGAP, Portal Desa Tegalrejo, dan Seketika. Alat bantu pekerjaan: YRI Analytics Studio, Student Worker Studio, dan MARKAS. Proyek freelance dan pekerjaan: Mutawwifmu, PRYVO.ID, dan Youtz Attendance.

## Desain dan interaksi

Biru `#2B4F81` dan burgundy `#5B0B25` menjadi warna utama. GSAP ScrollTrigger mengatur urutan pembuka, parallax, penekanan kata, pengalaman horizontal, dan gerakan visual proyek. Motion mengatur menu ponsel, pergantian kategori proyek, popup karya, serta latar shape geometris dan bintang yang melayang mengikuti scroll sepanjang halaman. Latar tidak menangkap klik dan gerakannya nonaktif pada mode pengurangan gerakan.

Pengalaman horizontal aktif pada desktop dengan lebar minimal 1100px, tinggi minimal 750px, pointer presisi, dan pengurangan gerakan nonaktif. Ponsel dan mode pengurangan gerakan memakai pengalaman vertikal. Scroll memakai kontrol browser.

Empat demo dashboard memakai HTML/CSS dan data contoh. Sandbox tidak mengizinkan script, pengiriman form, atau pop-up. Pengunjung hanya bisa membaca, berpindah menu, dan scroll. Demo Youtz tidak mengakses kamera atau lokasi.

## Struktur

```text
app/              Halaman, metadata, dan stylesheet
components/       Komponen profil, navigasi, proyek, galeri, dan animasi
data/             Data proyek dan karya visual
lib/              Jalur aset untuk subfolder GitHub Pages
public/assets/    Foto, karya, CV, dan portofolio
public/demos/     Empat demo hanya baca
.github/workflows/pages.yml
```

## Pengembangan

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Buka http://localhost:3000. Website Next.js memerlukan server pengembangan atau hasil ekspor; sumber komponen tidak dibuka langsung sebagai file HTML.

Untuk memeriksa ekspor GitHub Pages:

```sh
NEXT_PUBLIC_BASE_PATH=/online-cv-portfolio npm run build
```

Hasil statis berada di `out/`. Semua foto, unduhan, iframe lokal, dan bundle memakai prefix subfolder yang sama.

## Publikasi

GitHub Pages memakai GitHub Actions. Push ke `main` menjalankan instalasi dependensi, lint, build Next.js, dan publikasi hasil ekspor. Dependensi dikunci melalui `package-lock.json`.

## Kontak

Formulir memvalidasi nama, email, dan pesan melalui HTML, lalu membuka aplikasi email dengan `mailto:`. Pengunjung memeriksa dan mengirim pesan dari aplikasi email. Website tidak menyimpan pesan di server.

## Referensi

- [Iqmal](https://iqmal.dev/): scroll, pengalaman horizontal, dan susunan proyek.
- [RyHar](https://ryhar.my.id/): profil dan navigasi portofolio.

© 2026 Nebukadnezar Ahmad. Karya visual dan dokumen milik pemilik website.
