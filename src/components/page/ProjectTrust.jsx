"use client";

import { motion } from "framer-motion";
import ClientCard from "../ui/ClientCard";

export default function ProjectTrust() {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between w-full h-max md:h-[230px] items-start md:items-center bg-secondary-yellow rounded-tr-[85px] md:rounded-tr-[112px] px-regular-lg md:px-bold-4xl py-bold-sm gap-regular-sm"
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.9 }}
    >
      <div className="flex gap-bold-sm md:gap-bold-xl">
        <ClientCard count="100+" label="Proyek Selesai" />
        <ClientCard count="900+" label="Produk Terjual" />
      </div>
      <div className="flex flex-col text-white md:text-right w-full md:gap-thin-lg justify-center">
        <h3 className="text-mob-h4 md:text-desk-h4 font-medium">
          Your Trusted Project Partner
        </h3>
        <p className="text-mob-h6 md:text-desk-h6 font-normal">
          Kami ada untuk mendukung pembangunan di Indonesia
        </p>
      </div>
    </motion.div>
  );
}
