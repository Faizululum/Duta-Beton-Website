import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.jpg"
        className="bg-white border border-neutral-grayLight-60 p-thin-xs rounded-full"
        alt="logo"
        width={55}
        height={55}
      />
      <div className="flex flex-col font-poppins uppercase text-primary-red">
        <h1 className="font-bold text-4xl">Duta</h1>
        <h2 className="font-normal text-2xl leading-4 tracking-[0.25em]">
          Beton
        </h2>
      </div>
    </div>
  );
}
