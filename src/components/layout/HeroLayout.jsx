import Button from "../general/Button";

export default function HeroLayout() {
  return (
    <div className="flex flex-col items-start w-[558px] ml-bold-4xl gap-regular-lg">
      <div>
        <h2 className="text-desk-h5 font-medium uppercase text-primary-red">Duta Beton Mandiri</h2>
        <div className="flex flex-col gap-regular-sm">
          <h1 className="text-desk-h1 font-bold">Ready Mix</h1>
          <p className="text-desk-tagline font-medium">
            Didesain dengan campuran yang sesuai takaran yang dibutuhkan, untuk
            memudahkan dan menjadikan pekerjaan pengerasan lebih cepat.
          </p>
        </div>
      </div>
      <Button label="Lihat Produk" icon="arrowRed" variant="outline" />
    </div>
  );
}
