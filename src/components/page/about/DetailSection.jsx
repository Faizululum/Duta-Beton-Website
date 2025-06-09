import CertifiedCard from "@/components/ui/CertifiedCard";
import ClientCard from "@/components/ui/ClientCard";
import Image from "next/image";

export default function DetailSection() {
  return (
    <div className="flex flex-col relative w-full h-[573px] md:h-[470px] px-regular-lg md:px-bold-4xl py-bold-lg border-bottom mb-bold-3xl">
      <Image
        src="/about/detailed.jpg"
        alt="detailed"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/65 via-black/50 via-50% to-black/0 to-88% pointer-events-none -z-10" />
      <div className="relative z-10 h-full md:w-[1100px] flex flex-col gap-bold-sm md:gap-bold-lg items-center text-white">
        <div className="flex flex-col gap-thin-lg md:gap-regular-sm">
          <h3 className="text-mob-h3 md:text-desk-h3 font-medium">
            Your Trust Project
          </h3>
          <p className="text-mob-h5 md:text-desk-h5 font-normal text-justify h-[224px] md:h-[136px]">
            At Duta Beton Mandiri we are committed to revolutionizing the
            construction industry with innovative, sustainable, and
            cost-effective solutions. With a proven track record of delivering
            exceptional projects, we combine state-of-the-art technology,
            skilled expertise, and customer-centric approaches to bring visions
            to life.
          </p>
        </div>
        <div className="flex w-full gap-regular-sm md:gap-bold-sm items-start">
          <ClientCard
            count="250+"
            label="Project Selesai"
            textColor="text-white"
            bgColor="bg-transparent"
            border={true}
          />
          <ClientCard
            count="100+"
            label="Project Selesai"
            textColor="text-white"
            bgColor="bg-transparent"
            border={true}
          />
        </div>
      </div>
      <div className="flex justify-end absolute bottom-0 right-0">
        <CertifiedCard />
      </div>
    </div>
  );
}
