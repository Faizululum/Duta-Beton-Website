import { Icon } from "@iconify/react";
import Image from "next/image";

export default function TestimonialCard({ name, profession, quote, imageSrc }) {
  return (
    <div className="w-[400px] md:w-[724px] h-[248px] md:h-[312px] p-regular-lg md:p-bold-sm bg-white rounded-2xl border-2 border-neutral-white shadow-shadow-card">
      <div className="w-full h-full flex flex-col items-center justify-center gap-thin-lg">
        <div className="flex gap-thin-md w-full items-center">
          <Image
            src={imageSrc}
            alt="testimonial"
            className="h-[64px] md:h-[72px] w-[64px] md:w-[72px] rounded-full object-cover"
            width={128}
            height={128}
          />
          <div className="flex flex-col gap-0">
            <h3 className="text-mob-h6 md:text-desk-h6 font-bold">{name}</h3>
            <p className="text-mob-tagline md:text-desk-tagline font-normal text-primary-red">
              {profession}
            </p>
          </div>
        </div>
        <div>
          <div className="flex w-full">
            <Icon icon="raphael:quote" width="24" height="24" />
          </div>
          <p className="text-desc px-thin-md text-justify">
            {quote}
          </p>
          <div className="flex w-full rotate-180">
            <Icon icon="raphael:quote" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  );
}
