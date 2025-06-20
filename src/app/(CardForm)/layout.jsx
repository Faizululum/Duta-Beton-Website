import Image from "next/image";

export default function CardFormLayout({ children }) {
  return (
    <div className="mb-bold-3xl">
      <div className="relative h-[550px] w-full -mb-[335px] -z-10">
        <Image
          src="/about/detailed.jpg"
          alt="detailed"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/65 via-black/50 via-50% to-black/0 to-88% pointer-events-none -z-10" />
      </div>
      <div className="w-full flex justify-center">{children}</div>
    </div>
  );
}
