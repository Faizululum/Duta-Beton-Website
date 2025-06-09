import TitleLayout from "../layout/TextLayout";
import ProductCard from "../ui/ProductCard";

export default function ProductSection() {
  return (
    <div className="space-text-section px-regular-lg">
      <TitleLayout
        title="Produk Kami"
        description="Kami menyediakan produk yang berkualitas dan bertahan lama."
      />
      <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-lg items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
