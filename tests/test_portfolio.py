from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "index.html").read_text(encoding="utf-8")
CSS = (ROOT / "styles.css").read_text(encoding="utf-8")


class PortfolioTests(unittest.TestCase):
    def test_external_css_is_linked(self):
        self.assertIn('href="styles.css"', HTML)
        self.assertNotIn("<style", HTML)
        self.assertNotIn('style="', HTML)

    def test_required_sections_exist(self):
        for section_id in (
            "tentang",
            "pengalaman",
            "pendidikan",
            "skills",
            "karya",
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

    def test_embeddable_projects_use_live_iframes(self):
        for url in (
            "https://seketika-puce.vercel.app",
            "https://web-desa-tegalrejo.vercel.app",
            "https://mutawwifmu.com",
            "https://youtz-attendance.vercel.app",
        ):
            self.assertIn(f'src="{url}"', HTML)
        self.assertGreaterEqual(HTML.count("<iframe"), 4)

    def test_sigap_uses_clickable_screenshot_fallback(self):
        self.assertIn('src="assets/sigap-preview.jpg"', HTML)
        self.assertIn("https://sigap-murex-seven.vercel.app", HTML)

    def test_live_previews_have_accessible_titles(self):
        iframe_tags = re.findall(r"<iframe\b[\s\S]*?</iframe>", HTML)
        self.assertEqual(len(iframe_tags), 4)
        for iframe in iframe_tags:
            self.assertIn('title="Preview langsung', iframe)


if __name__ == "__main__":
    unittest.main()
