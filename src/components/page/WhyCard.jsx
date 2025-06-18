import TitleLayout from "../layout/TextLayout";
import CardValue from "../ui/CardValue";

export default function WhyCard() {
  return (
    <div className="h-max flex justify-center -mt-bold-lg z-10 mb-bold-3xl">
      <div className="card-container">
        <div className="flex flex-col gap-thin-lg">
          <TitleLayout title="Mengapa Pilih Kami?" description="Lorem ipsum" />
          <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-sm w-full items-center">
            <CardValue
              variant="white"
              title="Variasi Produk"
              desc="Kami selalu mengembangkan produk sesuai kebutuhan pasar. Menjaga mutu dan kualitas adalah upaya kami dalam melayani pelanggan."
              number="01"
              image="/home/value_1.png"
            />
            <CardValue
              variant="yellow"
              title="Keberlanjutan"
              desc="Terus membangun keberlangsungan perusahaan adalah bentuk usaha untuk mempertahankan eksistensi kami yang telah berdiri selama lebih dari 10 tahun."
              number="02"
              image="/home/value_2.png"
            />
            <CardValue
              variant="gray"
              title="Kredibilitas"
              desc="Saat ini kami selalu berusaha untuk meningkatkan kredibilitas agar semakin dikenal, baik stakeholder maupun shareholder."
              number="03"
              image="/home/value_3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
