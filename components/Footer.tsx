import TopLink from "@/components/TopLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <TopLink className="brand">
            Nebukadnezar<span>.</span>
          </TopLink>
          <p>© 2026 Nebukadnezar Ahmad</p>
        </div>
        <p>CV dan portofolio pribadi.</p>
        <TopLink className="back-top">
          Kembali ke atas ↑
        </TopLink>
      </div>
    </footer>
  );
}
