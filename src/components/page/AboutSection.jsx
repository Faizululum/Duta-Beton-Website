import Button from "../general/Button";
import TitleLayout, { BodyLayout } from "../layout/TextLayout";
import CardImage from "../ui/CardImage";
import CertifiedCard from "../ui/CertifiedCard";

export default function AboutSection() {
  return (
    <div className="flex flex-col bg-neutral-grayDark w-full pt-bold-lg md:pt-bold-3xl items-center mb-bold-3xl border-b-4 md:border-b-8 border-primary-red">
      <div className="flex flex-col md:flex-row-reverse w-full items-center md:justify-end mb-bold-lg">
        <CardImage src="/about.jpg" alt="about" align="right" />
        <div className="flex flex-col px-regular-lg md:pr-bold-xl w-full md:w-[60%] md:-mr-10 md:pl-32 py-thin-lg md:py-bold-sm bg-white rounded-tr-[64px] gap-regular-lg md:gap-bold-lg">
          <div className="flex flex-col gap-thin-sm md:gap-thin-md">
            <TitleLayout
              title="Tentang Kami"
              description="Lorem ipsum"
              align="left"
            />
            <BodyLayout
              title="PT. Duta Beton Mandiri"
              description="Kami berfokus pada produksi concrete block, paving block, precast
              concrete, pengolahan batu. Membuat produk yang berkesinambungan
              merupakan tanggung jawab kami sebagai bentuk kebijakan mutu dengan ISO
              9001:2015 STANDAR dengan nomor sertifikat 1377Q. Kami juga berkomitmen
              melaksanakan Sistem Manajemen K3."
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
