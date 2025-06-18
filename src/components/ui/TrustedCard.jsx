import Image from "next/image";

export default function TrustedCard({ src, alt }) {
  return (
    <div className="shadow-shadow-card-small w-[165px] h-[63px] md:w-[300px] md:h-[115px] rounded-xl md:rounded-3xl px-thin-lg md:px-regular-lg py-thin-md md:py-thin-lg flex-shrink-0">
      <div className="w-full h-full relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
