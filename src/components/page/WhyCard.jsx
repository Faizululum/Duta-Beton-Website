import TitleLayout from "../layout/TextLayout";
import CardValue from "../ui/CardValue";

export default function WhyCard() {
  return (
    <div className="h-max flex justify-center -mt-bold-lg z-10 mb-bold-3xl">
      <div className="card-container">
        <div className="flex flex-col gap-thin-lg">
          <TitleLayout title="Mengapa Pilih Kami?" description="Lorem ipsum" />
          <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-sm w-full items-center">
            <CardValue />
            <CardValue />
            <CardValue />
          </div>
        </div>
      </div>
    </div>
  );
}
