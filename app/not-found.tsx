import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container missing-page">
      <p className="eyebrow">404</p>
      <h1>Halaman tidak ditemukan.</h1>
      <p>Kembali ke portofolio untuk melihat profil dan karya saya.</p>
      <Link className="button primary" href="/">
        Kembali ke portofolio
      </Link>
    </main>
  );
}
