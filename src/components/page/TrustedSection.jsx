"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TitleLayout from "../layout/TextLayout";
import TrustedCard from "../ui/TrustedCard";

const logos = [
  { src: "/trusted/logo_1.jpg" },
  { src: "/trusted/logo_2.jpg" },
  { src: "/trusted/logo_3.jpg" },
  { src: "/trusted/logo_4.jpg" },
  { src: "/trusted/logo_5.jpg" },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function TrustedSection() {
  const [repeatedLogos, setRepeatedLogos] = useState([]);

  useEffect(() => {
    const shuffled = [...shuffleArray(logos), ...shuffleArray(logos)];
    setRepeatedLogos(shuffled);
  }, []);

  if (repeatedLogos.length === 0) return null; // prevent mismatch render

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="space-text-section overflow-x-clip"
    >
      <TitleLayout
        title="Dipercaya Oleh"
        description="Trusted by the best brands in the world"
      />
      <div className="flex flex-col gap-regular-sm md:gap-bold-sm">
        <div className="w-full overflow-x-clip">
          <div className="flex gap-regular-sm md:gap-bold-sm animate-scroll-right w-max">
            {repeatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <TrustedCard
                  key={`row1-${index}`}
                  src={logo.src}
                  alt={`Logo-${index}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full overflow-x-clip">
          <div className="flex gap-regular-sm md:gap-bold-sm animate-scroll-left w-max">
            {repeatedLogos
              .slice()
              .reverse()
              .map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <TrustedCard
                    key={`row2-${index}`}
                    src={logo.src}
                    alt={`Logo-reversed-${index}`}
                  />
                </motion.div>
              ))}
          </div>
        </div>
        <div className="w-full overflow-x-clip">
          <div className="flex gap-regular-sm md:gap-bold-sm animate-scroll-right w-max">
            {repeatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <TrustedCard
                  key={`row1-${index}`}
                  src={logo.src}
                  alt={`Logo-${index}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
