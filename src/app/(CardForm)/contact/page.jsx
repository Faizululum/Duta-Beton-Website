import TitleLayout from "@/components/layout/TextLayout";
import ContactCard from "@/components/ui/ContactCard";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Hubungi Kami
      </h1>
      <div className="card-container flex flex-col md:w-[1226px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg pb-regular-lg">
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout title="Kirim Pesan" />
          <div className="flex">
            <div className="hidden md:block w-[520px] border-2 border-primary-red rounded-2xl h-[570px]">
              Map
            </div>
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
}
