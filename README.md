# Nebukadnezar Ahmad

Website CV dan portofolio saya. Di sini saya mencantumkan pengalaman kerja dan organisasi, pendidikan, keahlian, proyek website, serta karya desain, foto, dan video.

[Buka website](https://nebukadnezarahmad.github.io/online-cv-portfolio/)

## Proyek website

Saya mengerjakan SIGAP, Portal Desa Tegalrejo, dan Seketika untuk lomba. YRI Analytics Studio, Student Worker Studio, dan MARKAS membantu pekerjaan saya. Mutawwifmu, PRYVO.ID, dan Youtz Attendance merupakan proyek freelance dan pekerjaan.

Demo YRI, Student Worker, MARKAS, dan Youtz memakai data contoh. Pengunjung bisa berpindah menu dan scroll tanpa login. Demo ini hanya untuk dilihat; pengunjung tidak bisa mengisi atau mengubah data.

## Teknologi

Website ini memakai Next.js, React, dan TypeScript. GSAP mengatur animasi scroll, sedangkan Motion menangani interaksi menu, filter proyek, galeri, dan bentuk melayang di latar. Warna utamanya biru `#2B4F81` dan burgundy `#5B0B25`.

Di layar desktop yang cukup lebar, bagian pengalaman bergerak horizontal saat scroll. Di ponsel, pengalaman tersusun vertikal. Website menonaktifkan animasi ketika pengunjung mengaktifkan pengurangan gerakan di perangkatnya.

## Menjalankan di komputer

```sh
npm ci
npm run dev
```

Buka [localhost:3000](http://localhost:3000) setelah server berjalan.

Untuk memeriksa kode dan membuat hasil build:

```sh
npm run lint
npm run typecheck
npm run build
```

## Susunan folder

```text
app/              Halaman dan CSS
components/       Komponen website dan animasi
data/             Daftar proyek dan karya
lib/              Pengaturan jalur aset
public/assets/    Foto, karya, CV, dan portofolio
public/demos/     Demo dashboard dengan data contoh
```

## GitHub Pages

Setiap push ke `main` menjalankan pemeriksaan kode, build, dan publikasi melalui GitHub Actions. Hasil ekspor statis berada di folder `out/`.

Untuk membuat build dengan jalur GitHub Pages di komputer:

```sh
NEXT_PUBLIC_BASE_PATH=/online-cv-portfolio npm run build
```

## Kontak

Formulir kontak membuka aplikasi email melalui `mailto:`. Pengunjung memeriksa dan mengirim pesan dari aplikasi email tersebut. Website tidak menyimpan pesan.

© 2026 Nebukadnezar Ahmad. Foto, karya visual, CV, dan dokumen portofolio milik saya.
