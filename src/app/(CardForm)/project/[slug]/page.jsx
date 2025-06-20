import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/page/project/ProjectDetailContent";

export default async function ProjectDetailPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${params.slug}`,
    { cache: "force-cache" }
  );

  if (!res.ok) return notFound();

  const project = await res.json();

  return <ProjectDetailContent project={project} />;
}
