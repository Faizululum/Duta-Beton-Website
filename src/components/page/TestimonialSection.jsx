import Image from "next/image";
import TitleLayout from "../layout/TextLayout";
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialSection() {
  return (
    <div className="relative space-text-section h-max w-full py-regular-lg overflow-x-clip">
      <Image
        src="/brick_white.jpg"
        alt="brick"
        fill
        priority
        className="object-cover -z-10 opacity-[8%]"
      />
      <TitleLayout title="Testimonial" description="Lorem ipsum" />
      <div className="flex gap-bold-sm md:gap-bold-lg">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="flex justify-center gap-bold-2xl md:gap-bold-4xl">
        <button className="group relative w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
          {/* Default icon (white) */}
          <Image
            src="/icons/arrow_white_left.svg"
            alt="arrow"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-100 group-hover:opacity-0"
          />
          {/* Hover icon (red) */}
          <Image
            src="/icons/arrow_red_left.svg"
            alt="arrow-hover"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-0 group-hover:opacity-100"
          />
        </button>

        <button className="group relative w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
          {/* Default icon (white) */}
          <Image
            src="/icons/arrow_white_right.svg"
            alt="arrow"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-100 group-hover:opacity-0"
          />
          {/* Hover icon (red) */}
          <Image
            src="/icons/arrow_red_right.svg"
            alt="arrow-hover"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-0 group-hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
}
