import AboutSection from "@/components/page/AboutSection";
import HomeHero from "@/components/page/HomeHero";
import ProductSection from "@/components/page/ProductSection";
import ProjectTrust from "@/components/page/ProjectTrust";
import TestimonialSection from "@/components/page/TestimonialSection";
import TrustedSection from "@/components/page/TrustedSection";
import WhyCard from "@/components/page/WhyCard";

export default function Home() {
  return (
    <div>
      <HomeHero />      
      <WhyCard />
      <ProjectTrust />
      <AboutSection />
      <ProductSection />
      <TrustedSection />
      <TestimonialSection />
    </div>
  );
}
