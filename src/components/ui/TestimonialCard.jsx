import { Icon } from "@iconify/react";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="w-[400px] md:w-[724px] h-[248px] md:h-[312px] p-regular-lg md:p-bold-sm bg-white rounded-2xl border-2 border-neutral-white shadow-shadow-card">
      <div className="w-full h-full flex flex-col items-center justify-center gap-thin-lg">
        <div className="flex gap-thin-md w-full items-center">
          <Image
            src="/testimonial/user_1.png"
            alt="testimonial"
            className="h-[64px] md:h-[72px] w-auto"
            width={72}
            height={72}
          />
          <div className="flex flex-col gap-0">
            <h3 className="text-mob-h6 md:text-desk-h6 font-bold">John Doe</h3>
            <p className="text-mob-tagline md:text-desk-tagline font-normal text-primary-red">
              Profesi / Jabatan
            </p>
          </div>
        </div>
        <div>
          <div className="flex w-full">
            <Icon icon="raphael:quote" width="24" height="24" />
          </div>
          <p className="text-desc px-thin-md text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex commodo consequat.
          </p>
          <div className="flex w-full rotate-180">
            <Icon icon="raphael:quote" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  );
}
