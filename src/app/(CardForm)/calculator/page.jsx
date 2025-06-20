"use client";

import { useState } from "react";
import Button from "@/components/general/Button";
import TitleLayout from "@/components/layout/TextLayout";
import CalcImage from "@/components/ui/CalcImage";
import CalculatorCard from "@/components/ui/CalculatorCard";
import CategoryCard from "@/components/ui/CategoryCard";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = ["Ready Mix", "Concrete Block"];

export default function CalculatorPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-bold-lg"
    >
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Kalkulator
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center gap-bold-sm md:gap-bold-lg"
      >
        <div className="card-container flex flex-col md:w-[1256px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg md:pt-regular-lg pb-regular-lg">
          <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
            <TitleLayout title="Hitung Kebutuhan Produk" />
            <CategoryCard
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className="flex">
            <CalcImage category={activeCategory} />
            <CalculatorCard category={activeCategory} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-thin-lg md:px-bold-lg md:py-bold-sm w-[376px] md:w-full bg-white shadow-shadow-card-small rounded-xl md:rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-thin-lg">
            <div className="flex flex-col gap-thin-sm text-center md:text-left">
              <h5 className="text-mob-h5 font-medium">Pahami kebutuhan Anda</h5>
              <p className="text-desc">
                Hubungi kami secara langsung untuk mendapatkan bantuan
              </p>
            </div>
            <Link href="/contact" className="w-full md:w-max h-max">
              <Button
                label="Hubungi Kami"
                color="red"
                icon="phoneRed"
                variant="outline"
                justify="center"
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
