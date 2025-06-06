import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-thin-sm md:gap-thin-md">
      <div className="relative w-[40px] h-[40px] md:w-[55px] md:h-[55px]">
        <Image
          src="/logo.jpg"
          className="bg-white border border-neutral-grayLight-60 p-thin-xs rounded-full"
          alt="logo"
          fill
          sizes="(min-width: 768px) 55px, 40px"
        />
      </div>
      <div className="flex flex-col font-poppins uppercase text-primary-red">
        <h1 className="font-bold text-mob-h4 md:text-desk-h4 leading-5 md:leading-7">Duta</h1>
        <h2 className="font-normal text-mob-h6 md:text-desk-h5 leading-3 md:leading-4 tracking-[0.25em] md:tracking-[0.165em]">
          Beton
        </h2>
      </div>
    </div>
  );
}
