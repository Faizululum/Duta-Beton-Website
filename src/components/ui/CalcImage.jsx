import Image from "next/image";

export default function CalcImage({ category }) {
  const imageSrc = category === "Ready Mix" ? "/product/about_product_mix.jpg" : "/product/product_hero_block.png";

  return (
    <div className="hidden md:block relative w-[550px] h-[400px]">
      <Image
        src={imageSrc}
        alt="calculator"
        fill
        className="object-cover rounded-2xl bg-neutral-white"
      />
    </div>
  );
}
