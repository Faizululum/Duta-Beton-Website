import Image from "next/image";

export default function ProjectImage() {
  return (
    <div className="w-[85px] md:w-[206px] h-[52px] md:h-[126px] relative">
      <Image
        src="/hero.png"
        alt="project"
        fill
        className="object-cover rounded-md md:rounded-lg"
      />
    </div>
  );
}
