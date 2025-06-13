"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import CategoryButton from "./CategoryButton";

export default function CategoryCard({ categories, activeCategory, setActiveCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    setActiveCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-thin-md md:gap-thin-lg px-thin-lg md:px-regular-lg py-thin-md md:py-thin-lg bg-white border-2 border-neutral-white rounded-full shadow-shadow-card-small">
      {/* Mobile Dropdown */}
      <div className="relative w-full md:hidden">
        <button
          className={`flex w-full items-center justify-between py-thin-sm md:py-thin-md px-thin-md pl-regular-sm rounded-full ${
            isOpen ? "bg-neutral-grayLight" : "bg-primary-red"
          } text-white font-medium`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{activeCategory}</span>
          <Icon
            icon={isOpen ? "iconamoon:arrow-up-2" : "iconamoon:arrow-down-2"}
            width="20"
            height="20"
          />
        </button>
        {isOpen && (
          <div className="absolute flex flex-col gap-thin-sm p-thin-md z-10 mt-2 w-full bg-white border rounded-2xl shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full rounded-full text-left px-regular-sm py-thin-sm ${
                  activeCategory === category
                    ? "bg-primary-red text-white font-medium"
                    : "text-neutral-gray font-normal"
                }`}
                onClick={() => handleSelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden w-full z-10 md:flex gap-thin-lg">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            categoryName={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
    </div>
  );
}
