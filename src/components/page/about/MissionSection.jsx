"use client";

import TitleLayout from "@/components/layout/TextLayout";
import MissionCard from "@/components/ui/MissionCard";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col w-full gap-regular-lg md:gap-bold-lg items-center mb-bold-3xl"
    >
      <TitleLayout title="Visi dan Misi" description="Duta Beton Mandiri" />
      <div className="flex flex-col w-full md:w-auto items-center md:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-[368px] md:w-[437px] h-[389px] md:h-[462px] -mb-bold-lg md:mb-0 -z-10 md:z-10"
        >
          <Image
            src="/about/mission.png"
            alt="mission"
            fill
            className="rounded-3xl object-cover shadow-shadow-icon"
            sizes="(min-width: 768px) 437px, 368px"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col gap-thin-lg"
        >
          <MissionCard
            title="Visi"
            image="/about/target.png"
            description="Menjadi perusahaan terpercaya di industri beton"
          />
          <MissionCard
            title="Misi"
            image="/about/mark.png"
            isList
            description={[
              "Menyediakan produk beton yang memenuhi harapan pelanggan (Best Product).",
              "Membangun kerjsama sehat dan berkelanjutan dengan mitra (Best Partner).",
              "Mengembangkan kompetensi karyawan untuk membangun Perusahaan lebih baik (Best People).",
            ]}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
