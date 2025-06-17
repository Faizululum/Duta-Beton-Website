import HeroLayout from "@/components/layout/HeroLayout";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="hero-section">
      <HeroLayout
        title="Crafting Excellent Together"
        description="PT Duta Beton Mandiri bergerak dibidang manufaktur berbasis beton dan pengembangannya."
        textColor="text-black"
        buttonProps={{
          label: "Hubungi Kami",
          icon: "phoneRedOutline",
          variant: "filled",
          color: "red",
        }}
        href="/contact"
      />
      <div className="relative w-[375px] h-[281px] md:w-[600px] md:h-[458px]">
        <Image
          src="/about/hero.jpg"
          alt="hero"
          fill
          className="object-cover shadow-shadow-card-large rounded-3xl"
        />
      </div>
    </div>
  );
}
