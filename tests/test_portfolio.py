from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "index.html").read_text(encoding="utf-8")
CSS = (ROOT / "styles.css").read_text(encoding="utf-8")


class PortfolioTests(unittest.TestCase):
    def test_external_css_is_linked(self):
        self.assertRegex(HTML, r'href="styles\.css\?v=[^"]+"')
        self.assertNotIn("<style", HTML)
        self.assertNotIn('style="', HTML)

    def test_required_sections_exist(self):
        for section_id in (
            "tentang",
            "pengalaman",
            "pendidikan",
            "skills",
            "karya",
            "website",
            "kontak",
        ):
            self.assertIn(f'id="{section_id}"', HTML)

    def test_contact_form_fields_exist(self):
        for name in ("email", "phone", "message"):
            self.assertIn(f'name="{name}"', HTML)

    def test_identity_and_social_link_exist(self):
        self.assertIn("Nebukadnezar Ahmad", HTML)
        self.assertIn("https://github.com/nebukadnezarahmad", HTML)

    def test_css_essentials_are_present(self):
        for token in (
            "box-sizing",
            "font-family",
            "line-height",
            "margin",
            "padding",
            "border",
            "display: grid",
            "display: flex",
        ):
            self.assertIn(token, CSS)
        self.assertIn("@media", CSS)
        self.assertIn(":root", CSS)

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

    def test_local_assets_and_fragment_targets_exist(self):
        from html.parser import HTMLParser
        from urllib.parse import unquote, urlsplit

        class References(HTMLParser):
            def __init__(self):
                super().__init__()
                self.references = []
                self.ids = set()

            def handle_starttag(self, tag, attrs):
                attrs = dict(attrs)
                if "id" in attrs:
                    self.ids.add(attrs["id"])
                for attr in ("href", "src"):
                    if attr in attrs:
                        self.references.append(attrs[attr])

        parser = References()
        parser.feed(HTML)
        for value in parser.references:
            url = urlsplit(value)
            if url.scheme or url.netloc:
                continue
            if url.path:
                self.assertTrue((ROOT / unquote(url.path)).is_file(), value)
            elif url.fragment:
                self.assertIn(url.fragment, parser.ids)

    def test_contact_form_has_real_destination(self):
        self.assertIn('action="mailto:nebukadnezarahmad2018@gmail.com?', HTML)
        self.assertIn('enctype="text/plain"', HTML)
        self.assertIn('aria-describedby="form-note"', HTML)
        self.assertIn('id="form-note"', HTML)
        self.assertNotIn('action="#"', HTML)

    def test_photo_and_source_portfolio_are_present(self):
        self.assertIn('src="assets/profile.webp"', HTML)
        self.assertIn('href="assets/portofolio-nebukadnezar-ahmad.pdf"', HTML)
        self.assertNotIn("portrait-placeholder", HTML)

    def test_website_previews_and_repositories_exist(self):
        iframe_tags = re.findall(r"<iframe\b[^>]*>", HTML)
        self.assertEqual(len(iframe_tags), 9)
        for tag in iframe_tags:
            self.assertIn('title="Preview live website ', tag)
            self.assertIn('loading="lazy"', tag)
            self.assertIn('sandbox="', tag)
        self.assertIn('title="Preview live website SIGAP"', HTML)
        self.assertNotIn('kalkulator-umroh-two.vercel.app', HTML)
        self.assertIn('https://mutawwifmu.com', HTML)
        self.assertIn('https://github.com/nebukadnezarahmad/pryvo-id', HTML)

    def test_site_uses_only_html_and_external_css(self):
        self.assertNotRegex(HTML, r"<script\b")
        self.assertNotRegex(HTML, r"\son(?:click|submit|load)=")
        self.assertIn("#skills", CSS)


if __name__ == "__main__":
    unittest.main()
