# Online CV Nebukadnezar Ahmad Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun Online CV satu halaman yang memenuhi tugas Session #4, menampilkan identitas profesional Nebukadnezar Ahmad, dan siap dipublikasikan melalui GitHub Pages.

**Architecture:** Website statis terdiri dari satu dokumen HTML semantik dan satu stylesheet eksternal. Seluruh navigasi memakai anchor ID, proyek memakai tautan GitHub/Vercel langsung, dan formulir kontak bersifat demonstrasi frontend tanpa backend.

**Tech Stack:** HTML5, CSS3, CSS Grid, Flexbox, Python standard library untuk verifikasi statis, dan Python `http.server` untuk localhost.

**Spec:** `docs/superpowers/specs/2026-10-07-online-cv-design.md`

## Global Constraints

- Seluruh styling wajib berada di `styles.css`; tidak boleh ada inline `<style>` atau atribut `style`.
- Website harus memuat Header/Profile, Education & Experience, Skills, Contact & Social Links, serta form Email, contact number, dan message.
- CSS harus menunjukkan selector tag, class, dan ID; box model; tipografi; palet warna; dan layout terstruktur.
- Semua path aset lokal harus relatif agar kompatibel dengan GitHub Pages project site.
- Tidak menggunakan framework CSS atau JavaScript.
- Foto profil memakai placeholder lokal hingga foto final diberikan.

---

### Task 1: Verifikasi Struktur Wajib Tugas

**Files:**
- Create: `tests/test_portfolio.py`
- Modify: `index.html`

**Interfaces:**
- Consumes: file `index.html` dari root proyek.
- Produces: kontrak struktur HTML yang dapat diverifikasi dengan `python3 -m unittest`.

- [ ] **Step 1: Tulis tes struktur HTML**

```python
from html.parser import HTMLParser
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "index.html").read_text(encoding="utf-8")

class PortfolioTests(unittest.TestCase):
    def test_external_css_is_linked(self):
        self.assertIn('href="styles.css"', HTML)
        self.assertNotIn("<style", HTML)

    def test_required_sections_exist(self):
        for section_id in ("tentang", "pengalaman", "pendidikan", "skills", "karya", "kontak"):
            self.assertIn(f'id="{section_id}"', HTML)

    def test_contact_form_fields_exist(self):
        for name in ("email", "phone", "message"):
            self.assertIn(f'name="{name}"', HTML)

    def test_identity_and_social_link_exist(self):
        self.assertIn("Nebukadnezar Ahmad", HTML)
        self.assertIn("https://github.com/nebukadnezarahmad", HTML)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Jalankan tes dan catat kegagalan struktur yang belum sesuai**

Run: `python3 -m unittest tests/test_portfolio.py -v`

Expected: FAIL jika `#pendidikan` atau `#skills` belum menjadi anchor section eksplisit.

- [ ] **Step 3: Perbaiki struktur semantik HTML**

Pastikan `index.html` memiliki elemen yang tepat dengan ID berikut:

```html
<section id="tentang">...</section>
<section id="pengalaman">...</section>
<section id="pendidikan">...</section>
<section id="skills">...</section>
<section id="karya">...</section>
<section id="kontak">...</section>
```

- [ ] **Step 4: Jalankan tes struktur hingga lulus**

Run: `python3 -m unittest tests/test_portfolio.py -v`

Expected: `Ran 4 tests ... OK`.

### Task 2: Terapkan Desain Biru Portfolio

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Test: `tests/test_portfolio.py`

**Interfaces:**
- Consumes: anchor section dan konten CV dari Task 1.
- Produces: halaman responsif bergaya biru portfolio dengan class yang digunakan stylesheet eksternal.

- [ ] **Step 1: Tambahkan tes CSS essentials**

Tambahkan ke `PortfolioTests`:

```python
CSS = (ROOT / "styles.css").read_text(encoding="utf-8")

def test_css_essentials_are_present(self):
    for token in ("box-sizing", "font-family", "line-height", "margin", "padding", "border", "display: grid", "display: flex"):
        self.assertIn(token, CSS)
    self.assertIn("@media", CSS)
    self.assertIn(":root", CSS)
```

- [ ] **Step 2: Jalankan tes CSS**

Run: `python3 -m unittest tests/test_portfolio.py -v`

Expected: PASS hanya bila semua essential CSS sudah tersedia.

- [ ] **Step 3: Bentuk hero dan hierarki visual**

Gunakan judul besar `PORTFOLIO`, nama, profesi, placeholder foto berinisial `NA`, bio singkat, dan statistik dampak. Terapkan palet dari spec melalui custom properties di `:root`.

- [ ] **Step 4: Bentuk pengalaman, pendidikan, skills, proyek, dan prestasi**

Gunakan timeline untuk pengalaman, dua kelompok terpisah untuk pendidikan dan skills, serta project showcase dengan tautan live dan repository. Pertahankan teks ringkas dan angka dampak yang dapat dibuktikan dari CV pengguna.

- [ ] **Step 5: Terapkan responsive layout**

Tambahkan breakpoint `900px` dan `600px`; ubah layout dua kolom menjadi satu kolom, sembunyikan nav sekunder bila perlu, dan pastikan seluruh konten tetap berada dalam viewport.

- [ ] **Step 6: Jalankan semua tes**

Run: `python3 -m unittest tests/test_portfolio.py -v`

Expected: seluruh tes PASS.

### Task 3: Validasi Kontak, Tautan, dan GitHub Pages

**Files:**
- Modify: `index.html`
- Modify: `tests/test_portfolio.py`

**Interfaces:**
- Consumes: halaman lengkap dari Task 2.
- Produces: tautan aman, path relatif, serta form yang memenuhi instruksi tugas.

- [ ] **Step 1: Tambahkan tes path dan tautan**

```python
def test_no_absolute_local_paths(self):
    self.assertNotIn("/Users/", HTML)
    self.assertNotIn("file://", HTML)

def test_contact_values_exist(self):
    self.assertIn("nebukadnezarahmad2018@gmail.com", HTML)
    self.assertIn("+6285758073647", HTML)

def test_projects_include_live_and_repository_links(self):
    self.assertIn("seketika-puce.vercel.app", HTML)
    self.assertIn("github.com/nebukadnezarahmad/seketika", HTML)
    self.assertIn("web-desa-tegalrejo.vercel.app", HTML)
```

- [ ] **Step 2: Jalankan tes tautan**

Run: `python3 -m unittest tests/test_portfolio.py -v`

Expected: seluruh tes PASS.

- [ ] **Step 3: Jalankan localhost dan lakukan smoke test HTTP**

Run: `python3 -m http.server 4173 --directory .`

Dalam terminal kedua jalankan:

```bash
curl -I http://127.0.0.1:4173/
curl -I http://127.0.0.1:4173/styles.css
```

Expected: kedua respons memiliki status `HTTP/1.0 200 OK`.

### Task 4: Siapkan Publikasi GitHub

**Files:**
- Create: `README.md`
- Verify: `.git/`

**Interfaces:**
- Consumes: website yang lolos seluruh tes dan smoke test.
- Produces: repository publik dan URL GitHub Pages setelah persetujuan publikasi.

- [ ] **Step 1: Dokumentasikan proyek**

`README.md` harus menjelaskan tujuan tugas, struktur file, cara menjalankan localhost, teknologi, dan link live setelah GitHub Pages aktif.

- [ ] **Step 2: Inisialisasi repository lokal bila belum ada**

Run: `git init && git branch -M main`

Expected: branch aktif bernama `main`.

- [ ] **Step 3: Verifikasi sebelum publikasi**

Run: `python3 -m unittest tests/test_portfolio.py -v`

Expected: seluruh tes PASS.

- [ ] **Step 4: Publikasikan hanya setelah nama repository disetujui pengguna**

Gunakan nama repository yang disepakati, buat sebagai public repository, push branch `main`, aktifkan GitHub Pages dari root branch `main`, lalu verifikasi URL final dengan HTTP 200.

## Self-review

- Semua section dari spesifikasi dipetakan ke Task 1 dan Task 2.
- External CSS, selector, box model, tipografi, warna, serta layout dipetakan ke Task 2.
- Form dan social links dipetakan ke Task 1 dan Task 3.
- Localhost, path aman, GitHub repository, dan GitHub Pages dipetakan ke Task 3 dan Task 4.
- Tidak ada library atau subsystem tambahan di luar kebutuhan tugas.
