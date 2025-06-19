import { productData } from "@/lib/data/productData";
import ProductHero from "@/components/page/product/ProductHero";
import AboutProductSection from "@/components/page/product/AboutProductSection";
import SpecsSection from "@/components/page/product/SpecsSection";
import { notFound } from "next/navigation";
import { allSpecsData } from "@/lib/data/specsData";
import BenefitsSection from "@/components/page/product/BenefitsSection";

export default function ProductPage({ params }) {
  const data = productData[params.slug];
  const specsData = allSpecsData[params.slug];

  if (!data) return notFound();

  return (
    <>
      <ProductHero data={data.hero} />
      <AboutProductSection data={data.about} />
      <BenefitsSection />
      <SpecsSection data={specsData} />
    </>
  );
}
