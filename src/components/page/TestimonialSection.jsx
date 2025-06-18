"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TitleLayout from "../layout/TextLayout";
import TestimonialCard from "../ui/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jhon Doe",
    profession: "CEO",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/testimonial/user_1.png",
  },
  {
    name: "Jane Smith",
    profession: "Marketing Director",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/testimonial/user_1.png",
  },
  {
    name: "Michael Scott",
    profession: "Regional Manager",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "/testimonial/user_1.png",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  // Auto-slide setiap 8 detik
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative space-text-section h-max w-full py-regular-lg overflow-x-clip">
      {/* Background */}
      <Image
        src="/testimonial/brick_white.jpg"
        alt="brick"
        fill
        priority
        className="object-cover -z-10 opacity-[8%]"
      />

      <TitleLayout
        title="Testimonial"
        description="Apa kata mereka tentang kami"
      />

      {/* Testimonial Slider */}
      <div className="relative flex justify-center items-center w-full h-[258px] md:h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full flex justify-center items-center h-full"
          >
            <TestimonialCard {...testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigasi Arrow */}
      <div className="flex justify-center gap-bold-2xl md:gap-bold-4xl">
        <button
          onClick={() => paginate(-1)}
          className="group relative w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
        >
          <Image
            src="/icons/arrow_white_left.svg"
            alt="arrow"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-100 group-hover:opacity-0"
          />
          <Image
            src="/icons/arrow_red_left.svg"
            alt="arrow-hover"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-0 group-hover:opacity-100"
          />
        </button>

        <button
          onClick={() => paginate(1)}
          className="group relative w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
        >
          <Image
            src="/icons/arrow_white_right.svg"
            alt="arrow"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-100 group-hover:opacity-0"
          />
          <Image
            src="/icons/arrow_red_right.svg"
            alt="arrow-hover"
            fill
            sizes="(min-width: 768px) 48px, 32px"
            className="transition-opacity opacity-0 group-hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
}
