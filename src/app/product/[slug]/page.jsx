import { productData } from "@/lib/data/productData";
import ProductHero from "@/components/page/product/ProductHero";
import AboutProductSection from "@/components/page/product/AboutProductSection";
import SpecsSection from "@/components/page/product/SpecsSection";
import { notFound } from "next/navigation";
import { allSpecsData } from "@/lib/data/specsData";
import BenefitsSection from "@/components/page/product/BenefitsSection";
import TrustedSection from "@/components/page/TrustedSection";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const product = productData[slug];

  if (!product) return {};

  return {
    title: `${product.hero.title} | Duta Beton`,
    description: product.hero.description,
    openGraph: {
      title: `${product.hero.title} | Duta Beton`,
      description: product.hero.description,
      images: [`${product.hero.imageSrc}`],
    },
  };
}

export default async function ProductPage({ params }) {
  const slug = params.slug;
  const data = productData[slug];
  const specsData = allSpecsData[slug];

  if (!data) return notFound();

  const isSimpleProduct = slug === "ready-mix" || slug === "stenslag";

  return (
    <>
      <ProductHero data={data.hero} />
      <AboutProductSection data={data.about} />
      <BenefitsSection title={data.hero} />
      {isSimpleProduct ? (
        <TrustedSection />
      ) : (
        <SpecsSection data={specsData} title={data.hero} />
      )}
    </>
  );
}
