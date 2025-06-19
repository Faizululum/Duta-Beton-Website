import TitleLayout from "@/components/layout/TextLayout";
import SpecsItem from "@/components/layout/SpecsItem";
import Link from "next/link";
import Button from "@/components/general/Button";

export default function SpecsSection({ data, title }) {
  return (
    <div className="mb-bold-3xl flex flex-col items-center gap-bold-lg justify-center w-full">
      <div className="card-container flex flex-col items-center gap-regular-lg md:gap-bold-lg">
        <TitleLayout title="Spesifikasi" description={title.title} />
        <div className="md:w-[1200px] w-[400px] px-thin-lg flex flex-col gap-regular-lg md:gap-bold-lg">
          {data.map((item, index) => (
            <SpecsItem
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              imageAlign={index % 2 === 0 ? "left" : "right"}
              specsProps={{
                ...item,
                variant: index % 2 === 0 ? "left" : "right",
              }}
            />
          ))}
        </div>
      </div>
      <div className="p-thin-lg md:px-bold-lg md:py-bold-sm w-[376px] md:w-max md:flex md:justify-center bg-white shadow-shadow-card-small rounded-xl md:rounded-3xl">
        <div className="flex flex-col md:flex-row items-center md:justify-between md:w-[1200px] gap-thin-lg">
          <div className="flex flex-col gap-thin-sm text-center md:text-left">
            <h5 className="text-mob-h5 font-medium">Pahami kebutuhan Anda</h5>
            <p className="text-desc">
              Hubungi kami secara langsung untuk mendapatkan bantuan
            </p>
          </div>
          <Link href="/contact" className="w-full md:w-max h-max">
            <Button
              label="Hubungi Kami"
              color="red"
              icon="phoneRed"
              variant="outline"
              justify="center"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
