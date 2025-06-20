"use client";

import { motion } from "framer-motion";
import TitleLayout from "../layout/TextLayout";
import CardValue from "../ui/CardValue";

const valueData = [
  {
    number: "01",
    title: "Variasi Produk",
    desc: "Kami selalu mengembangkan produk sesuai kebutuhan pasar. Menjaga mutu dan kualitas adalah upaya kami dalam melayani pelanggan.",
    image: "/home/value_1.png",
    variant: "white",
  },
  {
    number: "02",
    title: "Keberlanjutan",
    desc: "Terus membangun keberlangsungan perusahaan adalah bentuk usaha untuk mempertahankan eksistensi kami yang telah berdiri selama lebih dari 10 tahun.",
    image: "/home/value_2.png",
    variant: "yellow",
  },
  {
    number: "03",
    title: "Kredibilitas",
    desc: "Saat ini kami selalu berusaha untuk meningkatkan kredibilitas agar semakin dikenal, baik stakeholder maupun shareholder.",
    image: "/home/value_3.png",
    variant: "gray",
  },
];

export default function WhyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="h-max flex justify-center -mt-bold-lg z-10 mb-bold-3xl"
    >
      <div className="card-container md:pt-regular-lg">
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout
            title="Mengapa Pilih Kami?"
            description="Kami menghadirkan kualitas, keberlanjutan, dan kepercayaan."
          />
          <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-sm w-full items-center">
            {valueData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <CardValue
                  variant={item.variant}
                  title={item.title}
                  desc={item.desc}
                  number={item.number}
                  image={item.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
