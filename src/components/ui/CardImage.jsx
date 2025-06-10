import Image from "next/image";

export default function CardImage({ src, alt = "image", align = "right" }) {
  const borderPosition =
    align === "right" ? "top-[-8px] right-[-8px]" : "top-[-8px] left-[-8px]";

  return (
    <div className="relative inline-block w-[364px] h-[264px] md:w-[516px] md:h-[376px]">
      <div
        className={`absolute ${borderPosition} w-full h-full border-2 border-red-500 rounded-3xl z-0`}
      ></div>

      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-3xl object-cover relative z-10 shadow-shadow-card-large"
        sizes="(min-width: 768px) 516px, 364px"
      />
    </div>
  );
}
