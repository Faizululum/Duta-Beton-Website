import Button from "../general/Button";

export default function HeroLayout() {
  return (
    <div className="flex flex-col items-start w-full p-bold-sm md:p-0 md:w-[558px] lg:ml-bold-4xl gap-regular-sm md:gap-regular-lg">
      <div className="flex flex-col">
        <h2 className="text-mob-h5 md:text-desk-h5 font-medium uppercase text-primary-red">Duta Beton Mandiri</h2>
        <div className="flex flex-col gap-thin-lg md:gap-regular-sm">
          <h1 className="text-mob-h1 md:text-desk-h1 font-bold">Ready Mix</h1>
          <p className="text-mob-tagline md:text-desk-tagline font-medium">
            Didesain dengan campuran yang sesuai takaran yang dibutuhkan, untuk
            memudahkan dan menjadikan pekerjaan pengerasan lebih cepat.
          </p>
        </div>
      </div>
      <Button label="Lihat Produk" icon="arrowRed" variant="outline" />
    </div>
  );
}
