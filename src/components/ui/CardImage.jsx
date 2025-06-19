import Image from "next/image";

export default function CardImage({
  src,
  alt = "image",
  align = "right",
  variant = "large", // "large" | "medium"
  object = "cover",
}) {
  const borderPosition =
    align === "right"
      ? "top-[-12px] right-[-12px]"
      : "top-[-12px] left-[-12px]";

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
        className={`rounded-3xl bg-neutral-white object-${object} relative z-10 `}
        sizes={imageSizes}
      />
    </div>
  );
}
