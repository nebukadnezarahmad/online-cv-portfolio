import Navigation from "@/components/Navigation";
import AnimationShell from "@/components/AnimationShell";
import Profile from "@/components/Profile";
import About from "@/components/About";
import ExperienceSection from "@/components/ExperienceSection";
import ResumeSections from "@/components/ResumeSections";
import PortfolioProjects from "@/components/PortfolioProjects";
import ArtworkGallery from "@/components/ArtworkGallery";
import AchievementsContact from "@/components/AchievementsContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <Navigation />
      <AnimationShell>
        <main id="main">
          <div className="reading-progress" aria-hidden="true">
            <span />
          </div>
          <Profile />
          <About />
          <ExperienceSection />
          <ResumeSections />
          <PortfolioProjects />
          <ArtworkGallery />
          <AchievementsContact />
        </main>
      </AnimationShell>
      <Footer />
    </>
  );
}
