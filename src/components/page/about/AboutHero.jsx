"use client";

import HeroLayout from "@/components/layout/HeroLayout";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <HeroLayout
          title="Crafting Excellent Together"
          description="PT Duta Beton Mandiri bergerak dibidang manufaktur berbasis beton dan pengembangannya."
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
        className="relative w-[375px] h-[281px] md:w-[600px] md:h-[458px]"
      >
        <Image
          src="/about/hero.jpg"
          alt="hero"
          fill
          className="object-cover shadow-shadow-card-large rounded-3xl"
        />
      </motion.div>
    </div>
  );
}
