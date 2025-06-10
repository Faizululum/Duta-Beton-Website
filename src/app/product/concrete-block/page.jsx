import AboutProductSection from "@/components/page/product/AboutProductSection";
import BenefitsSection from "@/components/page/product/BenefitsSection";
import ProductHero from "@/components/page/product/ProductHero";

export default function ConcreteBlockPage() {
  return (
    <div>
        <ProductHero />
        <BenefitsSection />
        <AboutProductSection />
    </div>
  );
}
