"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetailCard from "@/components/ui/ProjectDetailCard";
import ProjectImageSmall from "@/components/ui/ProjectImage";
import { ProjectImageLarge } from "@/components/ui/ProjectImage";

export default function ProjectDetailContent({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-bold-lg"
    >
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Proyek
      </h1>

      <div className="card-container flex flex-col max-w-[1226px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg pb-regular-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col md:flex-row gap-thin-lg md:gap-regular-lg"
        >
          <motion.div
            key={activeImageIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectImageLarge
              image={project.images[activeImageIndex]}
              title={project.title}
              location={project.location}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:overflow-y-scroll md:w-[230px] overflow-x-scroll w-full md:overflow-x-hidden md:h-[552px]"
          >
            <div className="w-max flex md:flex-col gap-thin-md md:gap-regular-sm">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`cursor-pointer transition-transform ${
                    activeImageIndex === i
                      ? "scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <ProjectImageSmall src={img} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <ProjectDetailCard {...project} />
        </motion.div>
      </div>
    </motion.div>
  );
}
