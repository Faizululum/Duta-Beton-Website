"use client";

import TitleLayout from "@/components/layout/TextLayout";
import CategoryCard from "@/components/ui/CategoryCard";
import ProjectCard from "@/components/ui/ProjectCard";
import { useState } from "react";

const categories = [
  "Semua Proyek",
  "Ready Mix",
  "Concrete Block",
  "Precast Concrete",
  "Stenslag",
];

const projects = [
  {
    id: 1,
    slug: "saygon-inn",
    title: "Saygon Inn & Cottage",
    location: "Pasuruan, East Java",
    product: "Ready Mix & Concrete Block",
    period: "7 Maret - 24 Juni",
    description: "Deskripsi detail proyek Saygon Inn...",
    images: ["/hero.png", "/hero.png", "/hero.png", "/hero.png", "/hero.png"],
  },
];

export default function ProjectDetailPage() {

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Proyek
      </h1>
      <div className="flex flex-col md:w-[1226px] gap-regular-sm md:gap-bold-sm card-container p-thin-lg md:p-bold-lg md:pt-regular-lg pb-regular-lg">
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout title="Proyek Telah Selesai" />
          <CategoryCard
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-thin-lg md:gap-regular-lg flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              location={project.location}
              images={project.images[0]}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
