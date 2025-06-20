"use client";

import HeroLayout from "@/components/layout/HeroLayout";
import CardImage from "@/components/ui/CardImage";
import { motion } from "framer-motion";

export default function ProductHero({ data }) {
  return (
    <div className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <HeroLayout
          title={data.title}
          description={data.description}
          textColor="text-black"
          buttonProps={{
            label: "Hubungi Kami",
            icon: "phoneRed",
            variant: "outline",
            color: "red",
          }}
          href="/contact"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <CardImage
          src={data.imageSrc}
          alt="hero"
          align="right"
          variant="medium"
        />
      </motion.div>
    </div>
  );
}
