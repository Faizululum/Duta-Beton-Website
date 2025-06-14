import TitleLayout from "@/components/layout/TextLayout";
import SpecsItem from "@/components/layout/SpecsItem";
import { specsData } from "@/lib/data/specsData";

export default function SpecsSection() {
  return (
    <div className="w-full mb-bold-3xl flex justify-center">
      <div className="card-container flex flex-col items-center gap-regular-lg md:gap-bold-lg">
        <TitleLayout title="Spesifikasi" description="Lorem ipsum" />
        <div className="md:w-[1200px] w-[400px] px-thin-lg flex flex-col gap-regular-lg md:gap-bold-lg">
          {specsData.map((item, index) => (
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
    </div>
  );
}
