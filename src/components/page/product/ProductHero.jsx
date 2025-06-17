import HeroLayout from "@/components/layout/HeroLayout";
import CardImage from "@/components/ui/CardImage";

export default function ProductHero() {
  return (
    <div className="hero-section">
      <HeroLayout
        title="Concrete Block"
        description="Concrete Block atau Paving Block merupakan perkerasan block beton yang merupakan versi modern block granit."
        textColor="text-black"
        buttonProps={{
          label: "Hubungi Kami",
          icon: "phoneRedOutline",
          variant: "filled",
          color: "red",
        }}
        href="/contact"
      />
      <CardImage src="/product/product_hero_1.png" alt="hero" align="right" variant="medium" />
    </div>
  );
}
