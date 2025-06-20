"use client";

import Link from "next/link";
import Button from "../general/Button";
import TitleLayout, { BodyLayout } from "../layout/TextLayout";
import CardImage from "../ui/CardImage";
import CertifiedCard from "../ui/CertifiedCard";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="flex flex-col bg-neutral-grayDark w-full pt-bold-lg md:pt-bold-3xl items-center mb-bold-3xl border-bottom">
      <div className="flex flex-col md:flex-row-reverse w-full items-center md:justify-end mb-bold-lg">
        <motion.div
          initial={{ opacity: 0, x: 50, zIndex: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <CardImage src="/home/about.jpg" alt="about" align="right" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col px-regular-lg md:pr-bold-xl w-full md:w-[60%] md:-mr-10 md:pl-32 py-thin-lg md:py-bold-sm bg-white rounded-tr-[64px] gap-regular-lg md:gap-bold-lg"
        >
          <div className="flex flex-col gap-thin-sm md:gap-thin-md">
            <TitleLayout
              title="Tentang Kami"
              description="Material dan kualitas yang dapat diandalkan"
              align="left"
            />
            <BodyLayout
              title="PT. Duta Beton Mandiri"
              description="Kami berfokus pada produksi concrete block, paving block, precast
              concrete, pengolahan batu. Membuat produk yang berkesinambungan
              merupakan tanggung jawab kami sebagai bentuk kebijakan mutu dengan ISO
              9001:2015 STANDAR dengan nomor sertifikat 1377Q. Kami juga berkomitmen
              melaksanakan Sistem Manajemen K3."
            />
          </div>
          <Link href="/about" className="w-max">
            <Button
              label="Selengkapnya"
              color="red"
              icon="arrowRed"
              variant="outline"
            />
          </Link>
        </motion.div>
      </div>
      <div className="flex w-full justify-end">
        <CertifiedCard />
      </div>
    </div>
  );
}
