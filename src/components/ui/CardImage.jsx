import Image from "next/image";

export default function CardImage({
  src,
  alt = "image",
  align = "right",
  variant = "large", // "large" | "medium"
}) {
  const borderPosition =
    align === "right" ? "top-[-8px] right-[-8px]" : "top-[-8px] left-[-8px]";

  const sizeClasses =
    variant === "medium"
      ? "w-[368px] h-[227px] md:w-[586px] md:h-[362px]"
      : "w-[364px] h-[264px] md:w-[516px] md:h-[376px]";

  const imageSizes =
    variant === "medium"
      ? "(min-width: 768px) 586px, 368px"
      : "(min-width: 768px) 516px, 364px";

  return (
    <div className={`relative inline-block ${sizeClasses}`}>
      <div
        className={`absolute ${borderPosition} w-full h-full border-2 border-red-500 rounded-3xl z-0`}
      />
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-3xl bg-neutral-white object-cover relative z-10 shadow-shadow-card-large"
        sizes={imageSizes}
      />
    </div>
  );
}
