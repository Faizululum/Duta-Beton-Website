import Image from "next/image";
import HeroLayout from "../layout/HeroLayout";

export default function HomeHero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/65 via-black/50 via-50% to-black/0 to-88% pointer-events-none -z-10" />
      <div className="relative z-10 h-full flex items-center">
        <HeroLayout />
      </div>
    </div>
  );
}
