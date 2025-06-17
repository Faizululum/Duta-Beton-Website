import Link from "next/link";
import Button from "../general/Button";

export default function HeroLayout({
  title = "Ready Mix",
  subtitle = "Duta Beton Mandiri",
  description = "Didesain dengan campuran yang sesuai takaran yang dibutuhkan, untuk memudahkan dan menjadikan pekerjaan pengerasan lebih cepat.",
  textColor = "text-white",
  buttonProps = {
    label: "Lihat Produk",
    icon: "arrowRedOutline",
    variant: "outline",
    color: "white",
  },
  href = "/contact",
}) {
  return (
    <div className="flex flex-col items-start w-full p-bold-sm md:p-0 md:w-[558px] gap-regular-sm md:gap-regular-lg">
      <div className={`flex flex-col ${textColor}`}>
        <h2 className="text-mob-h5 md:text-desk-h5 font-medium uppercase text-primary-red">
          {subtitle}
        </h2>
        <div className="flex flex-col gap-thin-lg md:gap-regular-sm">
          <h1 className="text-mob-h1 md:text-desk-h1 font-bold">{title}</h1>
          <p className="text-mob-tagline md:text-desk-tagline font-medium">
            {description}
          </p>
        </div>
      </div>
      <div>
        <Link href={`${href}`}>
          <Button {...buttonProps} />
        </Link>
      </div>
    </div>
  );
}
