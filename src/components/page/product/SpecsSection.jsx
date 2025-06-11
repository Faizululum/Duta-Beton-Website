import TitleLayout from "@/components/layout/TextLayout";
import SpecsItem from "@/components/layout/SpecsItem";

export default function SpecsSection() {
  return (
    <div className="w-full mb-bold-3xl flex justify-center">
      <div className="card-container flex flex-col items-center gap-regular-lg md:gap-bold-lg">
        <TitleLayout title="Spesifikasi" description="Lorem ipsum" />
        <div className="md:w-[1200px] flex flex-col gap-thin-lg md:gap-bold-lg">
          <SpecsItem
            imageSrc="/product/product_hero_1.png"
            imageAlt="Paving K-300"
            imageAlign="left"
            specsProps={{
              title: "Spesifikasi Paving",
              variant: "left",
              colors: ["Merah", "Hitam", "Abu Abu"],
              tableHeader: ["Tebal", "Lebar", "Panjang", "Mutu"],
              tableData: [
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
              ],
              imageSrc: "/product/pattern.jpg",
              perMeterNote: "30",
            }}
          />
          <SpecsItem
            imageSrc="/product/product_hero_1.png"
            imageAlt="Paving K-400"
            imageAlign="right"
            specsProps={{
              title: "Spesifikasi Paving",
              variant: "right",
              colors: ["Merah", "Hitam", "Abu Abu"],
              tableHeader: ["Tebal", "Lebar", "Panjang", "Mutu", "test"],
              tableData: [
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
              ],
              imageSrc: "/product/pattern.jpg",
              perMeterNote: "30",
            }}
          />
        </div>
      </div>
    </div>
  );
}
