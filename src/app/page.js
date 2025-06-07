import AboutSection from "@/components/page/AboutSection";
import HomeHero from "@/components/page/HomeHero";
import ProjectTrust from "@/components/page/ProjectTrust";
import WhyCard from "@/components/page/WhyCard";

export default function Home() {
  return (
    <div>
      <HomeHero />      
      <WhyCard />
      <ProjectTrust />
      <AboutSection />
    </div>
  );
}
