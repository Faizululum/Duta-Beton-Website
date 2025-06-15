"use client";

import { useEffect, useState } from "react";
import TitleLayout from "@/components/layout/TextLayout";
import CategoryCard from "@/components/ui/CategoryCard";
import ProjectCard from "@/components/ui/ProjectCard";

const categories = [
  "Semua Proyek",
  "Ready Mix",
  "Concrete Block",
  "Precast Concrete",
  "Stenslag",
];

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
          cache: "no-store",
        });
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal fetch proyek:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Semua Proyek") return true;
    return project.product.includes(activeCategory);
  });

  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Proyek
      </h1>
      <div className="flex flex-col md:w-[1256px] gap-regular-sm md:gap-bold-sm card-container p-thin-lg md:p-bold-lg md:pt-regular-lg pb-regular-lg">
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout title="Proyek Telah Selesai" />
          <CategoryCard
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        {loading ? (
          <p className="text-desc">Loading proyek...</p>
        ) : (
          <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-thin-lg md:gap-regular-sm flex-wrap">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                location={project.location}
                images={project.images[0]}
                slug={project.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
