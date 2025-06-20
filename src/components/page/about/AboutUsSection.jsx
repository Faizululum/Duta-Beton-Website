"use client";

import Button from "@/components/general/Button";
import TitleLayout, { BodyLayout } from "@/components/layout/TextLayout";
import CardImage from "@/components/ui/CardImage";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div className="flex flex-col md:flex-row w-full md:pl-40 items-center justify-center md:justify-end gap-thin-md mb-bold-3xl overflow-x-clip">
      <div className="md:-mr-[135px]">
        <motion.div
          initial={{ opacity: 0, x: -50, zIndex: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <CardImage src="/home/about.jpg" alt="about" align="left" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50, zIndex: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
        className="w-full md:w-[1950px] bg-white border-2 md:border-4 border-l-0 md:border-r-0 p-thin-lg pl-0 md:pl-thin-lg md:pr-0 border-primary-red shadow-shadow-card-large rounded-full rounded-l-none md:rounded-l-full md:rounded-r-none"
      >
        <div className="flex flex-col w-full md:justify-center bg-white border-2 md:border-4 border-l-0 md:border-r-0 px-regular-lg md:pr-[140px] md:pl-[156px] py-regular-lg md:py-bold-2xl gap-thin-lg md:gap-regular-lg border-primary-red rounded-full rounded-l-none md:rounded-l-full md:rounded-r-none">
          <div className="flex flex-col gap-thin-sm">
            <TitleLayout
              title="Tentang Kami"
              description="Material dan kualitas yang dapat diandalkan"
              align="left"
            />
            <BodyLayout
              title="PT. Duta Beton Mandiri"
              subtitle="PT Duta Beton Mandiri bergerak dibidang manufaktur berbasis beton dan pengembangannya."
              description="PT. Duta Beton Mandiri pada tahun 2008 didirikan oleh H. Moch. Roeslan yang bergerak dibidang manufaktur berbasis beton dan pengembangannya. Kami berfokus pada produksi ready mix, paving, topi uskup, kanstin, hexagonal, batako, precast, uditch dan penggilingan batu."
            />
          </div>
          <div className="w-max">
            <Link href="/contact">
              <Button
                label="Hubungi Kami"
                color="red"
                variant="outline"
                icon="phoneRed"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
