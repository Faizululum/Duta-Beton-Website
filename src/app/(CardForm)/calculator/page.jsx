"use client";

import { useState } from "react";
import Button from "@/components/general/Button";
import TitleLayout from "@/components/layout/TextLayout";
import CalcImage from "@/components/ui/CalcImage";
import CalculatorCard from "@/components/ui/CalculatorCard";
import CategoryCard from "@/components/ui/CategoryCard";

const categories = ["Ready Mix", "Concrete Block"];

export default function CalculatorPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col items-center gap-bold-lg">
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">Kalkulator</h1>
      <div className="flex flex-col items-center gap-bold-sm md:gap-bold-lg">
        <div className="card-container flex flex-col md:w-[1226px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg pb-regular-lg">
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

        <div className="p-thin-lg md:px-bold-lg md:py-bold-sm w-[376px] md:w-full bg-white shadow-shadow-card-small rounded-xl md:rounded-3xl">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-thin-lg">
            <div className="flex flex-col gap-thin-sm text-center md:text-left">
              <h5 className="text-mob-h5 font-medium">Pahami kebutuhan Anda</h5>
              <p className="text-desc">
                Kami akan menghubungi Anda secara langsung untuk mendapatkan bantuan
              </p>
            </div>
            <div className="w-full md:w-max h-max">
              <Button
                label="Hubungi Kami"
                color="red"
                icon="arrowRedOutline"
                variant="filled"
                justify="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
