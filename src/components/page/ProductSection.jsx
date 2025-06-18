import TitleLayout from "../layout/TextLayout";
import ProductCard from "../ui/ProductCard";

export default function ProductSection() {
  const products = [
    {
      title: "Ready Mix",
      description: "Beton cor dengan mutu K100 sampai dengan K500",
      imageSrc: "/product/ready_mix.svg",
      slug: "ready-mix",
    },
    {
      title: "Precast Concrete",
      description: "Berbagai varian uditch & precast",
      imageSrc: "/product/precast_concrete.svg",
      slug: "precast-concrete",
    },
    {
      title: "Concrete Block",
      description: "Produk berupa paving, topi uskup, kansteen, & batako.",
      imageSrc: "/product/concrete_block.svg",
      slug: "concrete-block",
    },
    {
      title: "Stenslag",
      description: "Batu pecah dengan berbagai ukuran",
      imageSrc: "/product/stenslag.svg",
      slug: "stenslag",
    },
  ];

  return (
    <div className="space-text-section px-regular-lg">
      <TitleLayout
        title="Produk Kami"
        description="Kami menyediakan produk yang berkualitas dan bertahan lama."
      />
      <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-lg items-center">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            description={product.description}
            imageSrc={product.imageSrc}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
