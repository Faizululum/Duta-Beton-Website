"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ClientCard({
  count = "100+",
  label = "Client Reviews",
  textColor = "text-secondary-yellow",
  bgColor = "bg-white",
  border = false,
}) {
  const isPlus = count.includes("+");
  const endValue = parseInt(count);

  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1000;
    const increment = endValue / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setDisplayCount(endValue);
        clearInterval(counter);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`flex flex-col w-max h-max rounded-full py-thin-sm md:py-thin-md px-regular-md md:px-bold-sm text-center ${textColor} ${bgColor} ${
        border ? "border-2 md:border-4 border-current bg-transparent" : ""
      }`}
    >
      <h2 className="text-mob-h3 md:text-desk-h1 font-medium -mb-thin-md md:-mb-regular-sm">
        {displayCount}
        {isPlus && "+"}
      </h2>
      <p className="text-mob-h6 md:text-desk-h5 font-normal">{label}</p>
    </motion.div>
  );
}
