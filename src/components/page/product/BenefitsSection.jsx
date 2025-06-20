"use client";

import TitleLayout from "@/components/layout/TextLayout";
import BenefitCard from "@/components/ui/BenefitCard";
import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Hemat Waktu",
    description: "Proses cepat dan efisien untuk mendukung proyek Anda",
    icon: "/product/benefit_1.svg",
    gradient: "white",
    textColor: "black",
    className: "",
  },
  {
    title: "Tepat Guna",
    description: "Meminimalkan limbah material yang mencemari lingkungan",
    icon: "/product/benefit_2.svg",
    gradient: "yellow",
    textColor: "black",
    className: "ml-bold-3xl md:ml-bold-4xl",
  },
  {
    title: "Mutu",
    description: "Uji mutu dan kualitas lebih terjamin keakuratannya",
    icon: "/product/benefit_3.svg",
    gradient: "gray",
    textColor: "white",
    className: "",
  },
];

export default function BenefitsSection({ title }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      aria-labelledby="benefit-section"
      className="flex flex-col w-full gap-regular-lg md:gap-bold-lg mb-bold-3xl relative"
    >
      <TitleLayout
        id="benefit-section"
        title="Keuntungan"
        description={title.title}
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="w-[400px] md:w-[960px] h-[600px] bg-primary-red rounded-r-full p-regular-lg pl-0 md:relative"
      >
        <div className="bg-primary-red border-[10px] border-l-0 border-white rounded-r-full flex items-center h-full">
          <div className="relative ml-[230px] hidden md:block w-[715px] h-[440px]">
            <Image
              src="/product/benefit.jpg"
              alt="Ilustrasi keuntungan produk"
              fill
              className="object-cover rounded-tr-[56px]"
            />
          </div>

          <div className="flex flex-col ml-bold-sm md:ml-[556px] gap-[100px] md:gap-[64px] w-full items-center md:absolute">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={benefit.className}
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.75 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <BenefitCard
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                  gradient={benefit.gradient}
                  textColor={benefit.textColor}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
