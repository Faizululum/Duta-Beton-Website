"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroLayout from "../layout/HeroLayout";
import { homeHeroData } from "@/lib/data/homeHeroData";

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const currentData = homeHeroData[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % homeHeroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:p-bold-4xl h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentData.slug}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, zIndex: -10 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <Image
            src={currentData.image}
            alt={currentData.title}
            fill
            priority
            className="object-cover -z-10"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/65 via-black/50 via-50% to-black/0 to-88% pointer-events-none -z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <motion.div
          key={currentData.slug + "-content"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full"
        >
          <HeroLayout
            title={currentData.title}
            subtitle="Duta Beton Mandiri"
            description={currentData.description}
            textColor="text-white"
            buttonProps={{
              label: "Lihat Produk",
              icon: "arrowWhite",
              variant: "outline",
              color: "white",
            }}
            href={`/product/${currentData.slug}`}
          />
        </motion.div>
      </div>
    </div>
  );
}
