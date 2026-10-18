import { AboutIntro } from "./AboutIntro";
import { Career } from "./Career";
import { ContactSection } from "./ContactSection";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ScrollReveal } from "./ScrollReveal";
import { SelectedProjects } from "./SelectedProjects";
import { Skills } from "./Skills";
import { WorkingStyle } from "./WorkingStyle";

export function SiteShell() {
  return (
    <div className="site-root relative min-h-screen bg-washi text-sumi">
      <ScrollReveal />
      <Header />
      <main className="relative">
        <Hero />
        <AboutIntro />
        <WorkingStyle />
        <SelectedProjects />
        <Skills />
        <Career />
        <ContactSection />
      </main>
    </div>
  );
}
