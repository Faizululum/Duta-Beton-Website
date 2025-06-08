import Image from "next/image";

export default function TrustedCard() {
  return (
    <div className="shadow-shadow-card-small w-[165px] h-[63px] md:w-[300px] md:h-[115px] rounded-xl md:rounded-3xl px-thin-lg md:px-regular-lg py-thin-md md:py-thin-lg">
      <div className="w-full h-full relative">
        <Image
          src="/trusted/logo_1.jpg"
          alt="Trusted Card"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
