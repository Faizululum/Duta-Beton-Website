import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="w-[376px] shadow-shadow-card-small p-regular-md bg-white border-2 border-neutral-white rounded-xl">
      <div className="flex flex-col gap-thin-md">
        <div className="w-full h-[200px] relative">
          <Image
            src="/hero.png"
            alt="project"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col -space-y-thin-sm">
            <h4 className="text-desk-tagline font-bold">
              Saygon Inn & Cottage
            </h4>
            <p className="text-desk-tiny font-normal text-primary-red">
              Purwosari - Kab. Pasuruan, Jatim
            </p>
          </div>
          <Link href="/project/{slug}" className="w-bold-sm h-bold-sm relative">
            <Image src="/icons/arrow_red.svg" alt="arrow" fill />
          </Link>
        </div>
      </div>
    </div>
  );
}
