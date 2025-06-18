import Image from "next/image";
import Button from "../general/Button";
import Link from "next/link";

export default function ProductCard({ title, description, imageSrc, slug }) {
  return (
    <div className="flex flex-col w-full h-max group transition-all duration-300 ease-in-out hover:-translate-y-2">
      <div className="relative w-auto h-[105px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain transition-all duration-300 group-hover:drop-shadow-shadow-card-large"
        />
      </div>
      <div className="flex flex-col -mt-bold-lg items-center border border-neutral-white gap-bold-sm px-regular-lg pt-bold-3xl py-regular-md hover:shadow-shadow-card-small transition-all duration-300 ease-in-out rounded-3xl w-[270px] h-max">
        <div className="flex flex-col gap-thin-sm text-center">
          <h3 className="text-mob-h5 md:text-desk-h5 font-medium">{title}</h3>
          <p className="text-desc">{description}</p>
        </div>
        <div className="w-full flex justify-center">
          <Link className="w-full" href={`/product/${slug}`}>
            <Button
              label="Lihat Produk"
              color="yellow"
              icon="arrowYellow"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
