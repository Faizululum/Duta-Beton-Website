import AboutSection from "@/components/page/AboutSection";
import HomeHero from "@/components/page/HomeHero";
import ProjectTrust from "@/components/page/ProjectTrust";
import TrustedSection from "@/components/page/TrustedSection";
import WhyCard from "@/components/page/WhyCard";

export default function Home() {
  return (
    <div>
      <HomeHero />      
      <WhyCard />
      <ProjectTrust />
      <AboutSection />
      <TrustedSection />
    </div>
  );
}
