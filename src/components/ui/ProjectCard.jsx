import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, location, images, slug }) {
  return (
    <div className="group w-[376px] hover:shadow-shadow-card-small p-regular-md bg-white border border-neutral-white rounded-xl transform transition-all duration-300 hover:-translate-y-2">
      <div className="flex flex-col gap-thin-md">
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg">
          <Image
            src={images}
            alt={title}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col -space-y-thin-sm">
            <h4 className="text-desk-tagline font-medium">{title}</h4>
            <p className="text-desk-tiny font-normal text-primary-red">
              {location}
            </p>
          </div>
          <Link href={`/project/${slug}`} className="group relative w-8 h-8">
            <Image
              src="/icons/arrow_red_outline.svg"
              alt="arrow"
              fill
              className="transition-opacity opacity-100 group-hover:opacity-0"
            />
            <Image
              src="/icons/arrow_red.svg"
              alt="arrow-hover"
              fill
              className="transition-opacity opacity-0 group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
