import Image from "next/image";

export default function CardValue() {
  return (
    <div className="w-[345px] h-[513px] bg-gradient-to-t to-gradient-white-0 from-gradient-white-1 rounded-3xl shadow-shadow-card-large px-bold-sm py-bold-lg">
      <div className="flex flex-col gap-bold-lg">
        <div className="flex flex-col gap-bold-sm">
          <div className="flex justify-between items-center">
            <Image src="/value_1.png" alt="value_1" width={82} height={125} />
            <div className="flex flex-col h-full w-full items-end">
              <div className="bg-neutral-grayLight rounded-full w-5 h-5 md:w-7 md:h-7 p-2 opacity-10" />
              <div className="flex relative bg-neutral-grayLight rounded-full w-16 h-16 md:w-20 md:h-20 p-2 opacity-10 items-center justify-center" />
              <h2 className="absolute flex w-16 h-16 md:w-20 md:h-20 text-mob-h4 mt-5 md:mt-7 md:text-desk-h4 font-medium text-center justify-center items-center opacity-35">
                01
              </h2>
            </div>
          </div>
          <div className="border-primary-red border-t-4 w-bold-4xl" />
        </div>
        <div className="flex flex-col gap-regular-sm">
          <h3 className="text-mob-h5 md:text-desk-h5 font-medium">
            Variasi Produk
          </h3>
          <p className="text-mob-tagline md:text-desk-tagline font-normal">
            Kami selalu mengembangkan produk sesuai kebutuhan pasar. Menjaga
            mutu dan kualitas adalah upaya kami dalam melayani pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
}
