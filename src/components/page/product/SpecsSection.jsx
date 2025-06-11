import TitleLayout from "@/components/layout/TextLayout";
import CardImage from "@/components/ui/CardImage";
import SpecsTable from "@/components/ui/SpecsTable";

export default function SpecsSection() {
  return (
    <div className="w-full mb-bold-3xl flex justify-center">
      <div className="card-container flex flex-col items-center gap-regular-lg md:gap-bold-lg">
        <TitleLayout title="Spesifikasi" description="Lorem ipsum" />
        <div className="md:w-[1200px] flex flex-col gap-thin-lg md:gap-bold-lg">
          {/* Specs Left */}
          <div className="flex flex-col md:flex-row gap-thin-lg md:gap-bold-3xl justify-center md:justify-start items-center">
            <CardImage
              src="/product/product_hero_1.png"
              alt="Product Hero"
              align="left"
              variant="medium"
            />
            <SpecsTable
              title="Spesifikasi Paving"
              variant="left"
              colors={["Merah", "Hitam", "Abu Abu"]}
              tableHeader={["Tebal", "Lebar", "Panjang", "Mutu"]}
              tableData={[
                {
                  tebal: "6 cm",
                  lebar: "10 cm",
                  panjang: "20 cm",
                  mutu: "K-300",
                },
                {
                  tebal: "8 cm",
                  lebar: "10 cm",
                  panjang: "20 cm",
                  mutu: "K-400",
                },
              ]}
              imageSrc="/product/pattern.jpg"
              perMeterNote="30"
            />
            <div className="border-[1px] md:hidden border-neutral-grayLight opacity-20 w-full" />
          </div>
          {/* Specs Right */}
          <div className="flex flex-col md:flex-row-reverse gap-thin-lg md:gap-bold-3xl justify-center md:justify-start items-center">
            <CardImage
              src="/product/product_hero_1.png"
              alt="Product Hero"
              align="right"
              variant="medium"
            />
            <SpecsTable
              title="Spesifikasi Paving"
              variant="right"
              colors={["Merah", "Hitam", "Abu Abu"]}
              tableHeader={["Tebal", "Lebar", "Panjang", "Mutu", "test"]}
              tableData={[
                {
                  tebal: "6 cm",
                  lebar: "10 cm",
                  panjang: "20 cm",
                  mutu: "K-300",
                  test: "test",
                },
                {
                  tebal: "8 cm",
                  lebar: "10 cm",
                  panjang: "20 cm",
                  mutu: "K-400",
                  test: "test",
                },
              ]}
              imageSrc="/product/pattern.jpg"
              perMeterNote="30"
            />
            <div className="border-[1px] md:hidden border-neutral-grayLight opacity-20 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
