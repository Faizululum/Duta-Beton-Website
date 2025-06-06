import HomeAbout from "@/components/page/HomeAbout";
import HomeHero from "@/components/page/HomeHero";
import ProjectTrust from "@/components/page/ProjectTrust";
import WhyCard from "@/components/page/WhyCard";

export default function Home() {
  return (
    <div>
      <HomeHero />      
      <WhyCard />
      <ProjectTrust />
      <HomeAbout />
    </div>
  );
}
