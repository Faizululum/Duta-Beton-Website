import TitleLayout from "@/components/layout/TextLayout";
import CategoryCard from "@/components/ui/CategoryCard";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectDetailPage() {
  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Proyek
      </h1>
      <div className="flex flex-col max-w-screen-xl gap-regular-sm md:gap-bold-sm card-container p-thin-lg md:p-bold-lg md:pt-regular-lg pb-regular-lg">
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout title="Proyek Telah Selesai" />
          <CategoryCard />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-thin-lg md:gap-regular-lg flex-wrap md:justify-between">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
