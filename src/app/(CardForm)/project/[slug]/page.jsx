import { notFound } from "next/navigation";
import ProjectDetailCard from "@/components/ui/ProjectDetailCard";
import ProjectImageSmall from "@/components/ui/ProjectImage";
import { ProjectImageLarge } from "@/components/ui/ProjectImage";

export default async function ProjectDetailPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const project = await res.json();

  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Proyek
      </h1>
      <div className="card-container flex flex-col max-w-[1226px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg pb-regular-lg">
        <div className="flex flex-col md:flex-row gap-thin-lg md:gap-regular-lg">
          <ProjectImageLarge
            image={project.images[0]}
            title={project.title}
            location={project.location}
          />
          <div className="md:overflow-y-scroll md:w-[230px] overflow-x-scroll w-full md:overflow-x-hidden md:h-[552px]">
            <div className="w-max flex md:flex-col gap-thin-md md:gap-regular-sm">
              {project.images.map((img, i) => (
                <ProjectImageSmall key={i} src={img} />
              ))}
            </div>
          </div>
        </div>
        <ProjectDetailCard {...project} />
      </div>
    </div>
  );
}
