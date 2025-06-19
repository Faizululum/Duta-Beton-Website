import HeroLayout from "@/components/layout/HeroLayout";
import CardImage from "@/components/ui/CardImage";

export default function ProductHero({ data }) {
  return (
    <div className="hero-section">
      <HeroLayout
        title={data.title}
        description={data.description}
        textColor="text-black"
        buttonProps={{
          label: "Hubungi Kami",
          icon: "phoneRed",
          variant: "outline",
          color: "red",
        }}
        href="/contact"
      />
      <CardImage
        src={data.imageSrc}
        alt="hero"
        align="right"
        variant="medium"
      />
    </div>
  );
}
