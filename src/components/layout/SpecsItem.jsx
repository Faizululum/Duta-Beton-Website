"use client";

import CardImage from "@/components/ui/CardImage";
import SpecsTable from "@/components/ui/SpecsTable";
import { motion } from "framer-motion";

export default function SpecsItem({
  imageSrc,
  imageAlt,
  imageAlign,
  specsProps,
}) {
  const isRight = imageAlign === "right";

  return (
    <div
      className={`flex flex-col w-full md:flex-row${
        isRight ? "-reverse" : ""
      } gap-thin-lg md:gap-bold-3xl justify-center md:justify-start md:items-center mb-regular-lg`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <CardImage
          src={imageSrc}
          alt={imageAlt}
          align={imageAlign}
          variant="medium"
          object="contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SpecsTable {...specsProps} />
      </motion.div>
      <div className="border-space-gray md:hidden" />
    </div>
  );
}
