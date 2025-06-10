import TitleLayout from "@/components/layout/TextLayout";
import BenefitCard from "@/components/ui/BenefitCard";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <div className="flex flex-col w-full gap-regular-lg md:gap-bold-lg mb-bold-3xl relative">
      <TitleLayout title="Keuntungan" description="Concrete Block" />
      <div className="w-[400px] md:w-[960px] h-[600px] bg-primary-red rounded-r-full p-regular-lg pl-0 md:relative">
        <div className="bg-primary-red border-[10px] border-l-0 border-white rounded-r-full flex items-center h-full">
          <div className="relative ml-[230px] hidden md:block w-[715px] h-[440px]">
            <Image
              src="/product/benefit.jpg"
              alt="benefits"
              fill
              className="object-cover rounded-tr-[56px]"
            />
          </div>
          <div className="flex flex-col ml-bold-sm md:ml-[556px] gap-[100px] md:gap-[64px] w-full items-center md:absolute">
            <BenefitCard title="Hemat Waktu" description="Uji mutu dan kwalitas lebih terjamin keakuratannya" icon="/product/benefit_1.svg" gradient="white" textColor="black" />
            <div className="ml-bold-3xl md:ml-bold-4xl">
              <BenefitCard title="Tepat Guna" description="Meminimalkan limbah material yang dapat mencemari lingkungan" icon="/product/benefit_2.svg" gradient="yellow" textColor="black" />
            </div>
            <BenefitCard title="Mutu" description="Uji mutu dan kwalitas lebih terjamin keakuratannya" icon="/product/benefit_3.svg" gradient="gray" textColor="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
