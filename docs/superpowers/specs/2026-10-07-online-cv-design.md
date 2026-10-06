# Desain Online CV Nebukadnezar Ahmad

## Tujuan

Membangun website CV dan portofolio pribadi satu halaman menggunakan HTML dan CSS murni. Website harus memenuhi seluruh ketentuan tugas Session #4, dapat dijalankan secara lokal, responsif, dan aman dipublikasikan melalui GitHub Pages.

## Arah visual

Desain mengambil inspirasi dari portofolio grafis berwarna biru pada referensi, tetapi menggunakan komposisi dan identitas visual orisinal.

- **Palet:** navy `#091638`, biru utama `#2457FF`, biru muda `#DCE5FF`, oranye `#FF6B35`, putih `#FFFFFF`, dan abu terang `#F5F7FB`.
- **Tipografi:** serif editorial untuk judul dan sans-serif modern untuk isi.
- **Karakter:** profesional, kreatif, energik, dan berorientasi teknologi.
- **Elemen utama:** judul PORTFOLIO berukuran besar, komposisi asimetris, statistik dampak, serta visual proyek yang dibuat dengan CSS.
- **Foto:** placeholder lokal yang jelas dan mudah diganti, tanpa path gambar yang rusak.

## Struktur halaman

1. **Header dan profil**
   - Navigasi menuju section dengan anchor.
   - Nama lengkap, gelar profesional, lokasi, bio ringkas, serta placeholder foto.
   - Statistik: 5 juta tayangan, 30 anggota tim, 14 repository, dan 1.000+ peserta kegiatan.
2. **Tentang saya**
   - Ringkasan profesional yang dipadatkan dari data CV.
3. **Pengalaman**
   - Pengalaman kerja dan organisasi terpilih dalam format timeline.
   - Pengalaman panjang diringkas agar website tetap terbaca.
4. **Pendidikan**
   - Institut Teknologi PLN dan SMA Negeri Sumatera Selatan.
5. **Skills**
   - Hard skills, soft skills, serta tools/software.
6. **Portofolio**
   - Proyek publik GitHub terpilih.
   - Setiap proyek memiliki tautan repository; proyek yang mempunyai deployment juga memiliki tautan website.
7. **Prestasi**
   - Pencapaian paling relevan dan terbaru.
8. **Kontak dan sosial**
   - Email, nomor telepon, GitHub.
   - Form dengan input email, nomor kontak, dan pesan.

## Struktur teknis

- `index.html`: markup semantik dan seluruh konten halaman.
- `styles.css`: seluruh styling eksternal; tidak memakai inline CSS.
- `assets/`: disiapkan untuk foto profil lokal pada versi akhir.
- Tidak memerlukan JavaScript untuk memenuhi tugas.
- Semua tautan file menggunakan relative path agar bekerja di localhost dan GitHub Pages project site.

## Penerapan CSS Essentials

- **Selector tag:** `body`, `nav`, `section`, `footer`, `form`, dan elemen semantik lain.
- **Selector class:** komponen seperti `.hero`, `.project-card`, `.timeline-item`, dan `.contact-form`.
- **Selector ID:** anchor section seperti `#tentang`, `#pengalaman`, `#karya`, dan `#kontak`.
- **Box model:** margin, padding, border, width, max-width, dan `box-sizing: border-box` diterapkan secara nyata.
- **Tipografi:** hierarki font-size, line-height, font-weight, panjang baris, dan alignment yang konsisten.
- **Layout:** CSS Grid dan Flexbox, dengan media query untuk tablet dan ponsel.
- **Warna:** kontras jelas antara latar, isi, dan elemen interaktif.

## Aksesibilitas dan kualitas

- HTML semantik, label form yang terhubung ke input, alt/ARIA yang diperlukan, fokus keyboard yang terlihat, serta dukungan `prefers-reduced-motion`.
- Tautan eksternal memakai `target="_blank"` dan `rel="noreferrer"`.
- Tidak ada image path eksternal yang wajib agar halaman tetap utuh saat offline.
- Form bersifat demonstrasi frontend dan tidak mengirim data ke backend.

## Verifikasi

1. Jalankan melalui web server lokal, bukan hanya membuka file secara langsung.
2. Periksa tampilan desktop dan mobile.
3. Pastikan `styles.css` termuat tanpa error.
4. Pastikan semua anchor navigasi berfungsi.
5. Pastikan seluruh tautan GitHub dan website proyek valid.
6. Setelah repository dibuat, aktifkan GitHub Pages dari branch utama dan verifikasi live URL.

## Kriteria selesai

- Seluruh section wajib tugas tersedia.
- Website responsif dan tidak memiliki horizontal overflow.
- Tidak ada broken CSS, image, atau internal link.
- Repository publik dan GitHub Pages tersedia jika autentikasi GitHub pada perangkat mengizinkan publikasi.
- URL repository dan live site dilaporkan untuk dikumpulkan.
