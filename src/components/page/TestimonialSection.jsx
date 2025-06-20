"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TitleLayout from "../layout/TextLayout";
import TestimonialCard from "../ui/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Hendra Wijaya",
    profession: "Kontraktor Perumahan",
    quote:
      "Saya selalu percayakan kebutuhan ready mix dan paving ke Duta Beton Mandiri. Kualitasnya konsisten, dan pengirimannya tepat waktu.",
    imageSrc: "/testimonial/user_hendra.jpg",
  },
  {
    name: "Siti Rohmah",
    profession: "Pemilik Toko Bangunan",
    quote:
      "Produk dari Duta Beton seperti batako dan kansteen sangat laku di toko saya. Pelayanan mereka juga ramah dan profesional.",
    imageSrc: "/testimonial/user_siti.jpg",
  },
  {
    name: "Bagus Pratama",
    profession: "Site Manager Proyek",
    quote:
      "Mutu beton K350 dari Duta Beton sangat kuat dan sesuai spesifikasi. Cocok untuk proyek jalan dan gedung bertingkat.",
    imageSrc: "/testimonial/user_3.jpg",
  },
  {
    name: "Lina Santoso",
    profession: "Developer Perumahan",
    quote:
      "Saya suka kerja sama dengan Duta Beton karena bisa pesan custom precast sesuai desain kami. Respons cepat dan harga bersaing.",
    imageSrc: "/testimonial/user_lina.jpg",
  },
  {
    name: "Doni Kurniawan",
    profession: "Kontraktor Jalan",
    quote:
      "Stenslag dari Duta Beton sangat membantu untuk proyek jalan desa. Ukuran sesuai dan kualitas batunya oke banget.",
    imageSrc: "/testimonial/user_doni.jpg",
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

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative space-text-section h-max w-full py-regular-lg overflow-x-clip"
    >
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
      <motion.div
        initial={{ opacity: 0, y: 50, zIndex: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="relative flex justify-center items-center w-full h-[258px] md:h-[320px]"
      >
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
      </motion.div>

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
    </motion.div>
  );
}
