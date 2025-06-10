import Button from "@/components/general/Button";
import TitleLayout, { BodyLayout } from "@/components/layout/TextLayout";
import CardImage from "@/components/ui/CardImage";
import CertifiedCard from "@/components/ui/CertifiedCard";

export default function AboutProductSection() {
  return (
    <div className="flex flex-col bg-neutral-grayDark w-full pt-bold-lg md:pt-bold-3xl items-center mb-bold-3xl border-bottom">
      <div className="flex flex-col md:flex-row-reverse w-full items-center md:justify-end mb-bold-lg">
        <CardImage src="/product/about_product.jpg" alt="about" align="right" />
        <div className="flex flex-col px-regular-lg md:pr-bold-xl w-full md:w-[60%] md:-mr-10 md:pl-32 py-thin-lg md:py-bold-sm bg-white rounded-tr-[64px] gap-regular-lg md:gap-bold-lg">
          <div className="flex flex-col gap-thin-sm md:gap-thin-md">
            <TitleLayout title="Tentang" description="Produk" align="left" />
            <BodyLayout
              title="Concrete Block"
              description="Readymix sangat disukai konsumen dibandingkan cara dan bahan lainnya seperti molen portable, karena biaya, waktu dan kegunaannya yang luas, mulai dari pondasi dak, jalan raya sampai kepada gedung yang bertingkat seperti ruko, mall dan apartment.Readymix adalah beton yang secara spesifik dan dicampur atau diproduksi untuk proyek konstruksi sesuai mutu yang dipesan. Bahan yang dicampur adalah semen Portland, air dan agregat (pasir, kerikil, atau batu-batuan yang hancur).Readymix ini, biasa dipesan dengan volume per kubik (m3)."
            />
          </div>
          <div className="w-max">
            <Button label="Hubungi Kami" color="red" variant="outline" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <CertifiedCard />
      </div>
    </div>
  );
}
