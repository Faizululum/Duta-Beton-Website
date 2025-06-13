import Image from "next/image";

export default function CalcImage({ category }) {
  const imageSrc = category === "Ready Mix" ? "/product/product_2.jpg" : "/product/product_hero_1.png";

  return (
    <div className="hidden md:block relative w-[550px] h-[400px]">
      <Image
        src={imageSrc}
        alt="calculator"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );
}
