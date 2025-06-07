import Image from "next/image";

const certifiedImages = [
  "/certified/certified_1.png",
  "/certified/certified_2.png",
  "/certified/certified_3.png",
  "/certified/certified_4.png",
  "/certified/certified_5.png",
];

export default function CertifiedCard() {
  return (
    <div className="flex justify-center py-thin-lg bg-neutral-white w-[300px] md:w-[512px] md:h-24 border-4 md:border-t-8 md:border-l-8 border-primary-red border-r-0 border-b-0 rounded-tl-[96px]">
      <div className="flex justify-between items-center w-full pl-bold-sm md:pl-bold-2xl pr-regular-sm md:pr-regular-lg">
        {certifiedImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Certified logo ${index + 1}`}
            className="h-[32px] md:h-[50px] w-auto"
            width={512}
            height={512}
          />
        ))}
      </div>
    </div>
  );
}
