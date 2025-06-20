"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
          {
            cache: "no-store",
          }
        );
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
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-bold-lg"
    >
      <motion.h1
        variants={fadeUp}
        className="text-mob-h2 md:text-mob-h2 font-bold text-white"
      >
        Proyek
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="flex flex-col md:w-[1256px] min-h-[430px] md:min-h-[525px] gap-regular-sm md:gap-bold-sm card-container p-thin-lg md:p-bold-lg md:pt-regular-lg pb-regular-lg"
      >
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout title="Proyek Telah Selesai" />
          <CategoryCard
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {loading ? (
          <p className="text-desc">Memuat proyek...</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="w-full flex flex-col md:grid md:grid-cols-3 gap-thin-lg md:gap-regular-sm flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.09 }}
                >
                  <ProjectCard
                    title={project.title}
                    location={project.location}
                    images={project.images[0]}
                    slug={project.slug}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
}
