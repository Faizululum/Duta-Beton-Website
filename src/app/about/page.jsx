import AboutHero from "@/components/page/about/AboutHero";
import AboutUsSection from "@/components/page/about/AboutUsSection";
import DetailSection from "@/components/page/about/DetailSection";
import MissionSection from "@/components/page/about/MissionSection";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <DetailSection />
      <AboutUsSection />
      <MissionSection />
    </div>
  );
}
