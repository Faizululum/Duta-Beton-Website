import Button from "@/components/general/Button";
import TitleLayout, { BodyLayout } from "@/components/layout/TextLayout";
import CardImage from "@/components/ui/CardImage";
import CertifiedCard from "@/components/ui/CertifiedCard";
import Link from "next/link";

export default function AboutProductSection({ data }) {
  return (
    <div className="flex flex-col bg-neutral-grayDark w-full pt-bold-lg md:pt-bold-3xl items-center mb-bold-3xl border-bottom">
      <div className="flex flex-col md:flex-row-reverse w-full items-center md:justify-end mb-bold-lg">
        <CardImage src={data.imageSrc} alt="about" align="right" />
        <div className="flex flex-col px-regular-lg md:pr-bold-xl w-full md:w-[60%] md:-mr-10 md:pl-32 py-thin-lg md:py-bold-sm bg-white rounded-tr-[64px] gap-regular-lg md:gap-bold-lg">
          <div className="flex flex-col gap-thin-sm md:gap-thin-md">
            <TitleLayout title="Tentang" description="Produk" align="left" />
            <BodyLayout
              title={data.title}
              description={data.description}
            />
          </div>
          <Link href="/contact" className="w-max">
            <Button
              label="Hubungi Kami"
              icon="phoneRed"
              color="red"
              variant="outline"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <CertifiedCard />
      </div>
    </div>
  );
}
