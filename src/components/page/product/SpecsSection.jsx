"use client";

import { motion } from "framer-motion";
import TitleLayout from "@/components/layout/TextLayout";
import SpecsItem from "@/components/layout/SpecsItem";
import Link from "next/link";
import Button from "@/components/general/Button";

export default function SpecsSection({ data, title }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-bold-3xl flex flex-col items-center gap-bold-lg justify-center w-full"
    >
      <div className="card-container flex flex-col items-center gap-regular-lg md:gap-bold-lg">
        <TitleLayout title="Spesifikasi" description={title.title} />
        <div className="md:w-[1200px] w-[400px] px-thin-lg flex flex-col gap-regular-lg md:gap-bold-lg">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <SpecsItem
                key={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                imageAlign={isLeft ? "left" : "right"}
                specsProps={{
                  ...item,
                  variant: isLeft ? "left" : "right",
                }}
              />
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="p-thin-lg md:px-bold-lg md:py-bold-sm w-[376px] md:w-max md:flex md:justify-center bg-white shadow-shadow-card-small rounded-xl md:rounded-3xl"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between md:w-[1200px] gap-thin-lg">
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
    </motion.section>
  );
}
