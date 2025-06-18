"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function FloatingHelpButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      className="fixed z-[9999] bottom-6 right-6 md:bottom-10 md:right-10"
    >
      <Link
        href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20bantuan"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-primary-red hover:bg-primary-red hover:text-white border-2 border-primary-red px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        <Icon icon="ic:baseline-whatsapp" width={24} height={24} />
        <span className="text-sm font-medium">Butuh Bantuan?</span>
      </Link>
    </motion.div>
  );
}
