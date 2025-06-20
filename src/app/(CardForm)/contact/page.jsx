"use client";

import { motion } from "framer-motion";
import TitleLayout from "@/components/layout/TextLayout";
import ContactCard from "@/components/ui/ContactCard";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-bold-lg"
    >
      <h1 className="text-mob-h2 md:text-mob-h2 font-bold text-white">
        Hubungi Kami
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="card-container flex flex-col md:w-[1256px] gap-regular-sm md:gap-bold-sm p-thin-lg md:p-bold-lg md:pt-regular-lg pb-regular-lg"
      >
        <div className="flex flex-col gap-thin-lg md:gap-regular-lg">
          <TitleLayout title="Kirim Pesan" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex"
          >
            <div className="hidden md:block w-[520px] border-2 border-primary-red rounded-2xl h-[570px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5688.91517588073!2d112.7327684334812!3d-7.729874225412678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d13f22105d89%3A0x5e78e0ed6b6f1d42!2sPT.%20Duta%20Beton%20Mandiri!5e0!3m2!1sen!2sid!4v1749865387377!5m2!1sen!2sid"
                className="w-full h-full rounded-2xl"
              />
            </div>
            <ContactCard />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
