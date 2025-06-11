import AboutProductSection from "@/components/page/product/AboutProductSection";
import BenefitsSection from "@/components/page/product/BenefitsSection";
import ProductHero from "@/components/page/product/ProductHero";
import SpecsSection from "@/components/page/product/SpecsSection";

export default function ConcreteBlockPage() {
  return (
    <div>
        <ProductHero />
        <BenefitsSection />
        <AboutProductSection />
        <SpecsSection />
    </div>
  );
}
