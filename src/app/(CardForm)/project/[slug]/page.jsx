import ProjectDetailCard from "@/components/ui/ProjectDetailCard";
import ProjectImage from "@/components/ui/ProjectImage";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Proyek
      </h1>
      <div className="card-container flex flex-col max-w-[1226px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg pb-regular-lg">
        <div className="flex flex-col md:flex-row gap-thin-lg md:gap-regular-lg">
          <div className="w-full md:w-[900px] h-[230px] md:h-[552px] relative rounded-lg">
            <Image
              src="/hero.png"
              alt="project"
              fill
              className="object-cover rounded-lg md:rounded-2xl"
            />
            <div className="absolute rounded-lg md:rounded-2xl bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/45 via-black/25 via-45% to-black/0 to-65% pointer-events-none" />
            <div className="flex flex-col absolute text-white w-full h-full justify-end px-thin-lg md:px-bold-sm py-thin-md md:py-regular-lg">
              <h4 className="text-mob-h5 md:text-desk-h3 font-medium">
                Saygon Inn & Cottage
              </h4>
              <p className="text-mob-h6 md:text-desk-h5 font-normal">
                Purwosari - Kab. Pasuruan, Jatim
              </p>
            </div>
          </div>
          <div className="md:overflow-y-scroll md:w-[230px] overflow-x-scroll w-full md:overflow-x-hidden md:h-[552px]">
            <div className="w-max flex md:flex-col gap-thin-md md:gap-regular-sm">
              <ProjectImage />
              <ProjectImage />
              <ProjectImage />
              <ProjectImage />
              <ProjectImage />
              <ProjectImage />
            </div>
          </div>
        </div>
        <ProjectDetailCard />
      </div>
    </div>
  );
}
