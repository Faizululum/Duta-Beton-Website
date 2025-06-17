import Image from "next/image";
import Button from "../general/Button";

export default function ProductCard() {
  return (
    <div className="flex flex-col w-full h-max">
      <div className="relative w-auto h-[105px]">
        <Image
          src="/product/product_1.svg"
          alt="product"
          fill
          className="object-contain drop-shadow-shadow-card-large"
        />
      </div>
      <div className="flex flex-col -mt-bold-lg items-center gap-bold-sm px-regular-lg pt-bold-3xl py-regular-md shadow-shadow-card-small rounded-3xl w-[270px] h-max">
        <div className="flex flex-col gap-thin-sm text-center">
          <h3 className="text-mob-h5 md:text-desk-h5 font-medium">Ready Mix</h3>
          <p className="text-desc">
            Beton cor dengan mutu K100 sampai dengan K500
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Button
            label="Lihat Produk"
            color="yellow"
            icon="arrowYellow"
            variant="outline"
          />
        </div>
      </div>
    </div>
  );
}
