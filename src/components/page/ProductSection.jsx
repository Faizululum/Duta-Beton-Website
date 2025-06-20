"use client";

import TitleLayout from "../layout/TextLayout";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";

export default function ProductSection() {
  const products = [
    {
      title: "Ready Mix",
      description: "Beton cor dengan mutu K100 sampai dengan K500",
      imageSrc: "/product/ready_mix.svg",
      slug: "ready-mix",
    },
    {
      title: "Precast Concrete",
      description: "Berbagai varian uditch & precast",
      imageSrc: "/product/precast_concrete.svg",
      slug: "precast-concrete",
    },
    {
      title: "Concrete Block",
      description: "Produk berupa paving, topi uskup, kansteen, & batako.",
      imageSrc: "/product/concrete_block.svg",
      slug: "concrete-block",
    },
    {
      title: "Stenslag",
      description: "Batu pecah dengan berbagai ukuran",
      imageSrc: "/product/stenslag.svg",
      slug: "stenslag",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="space-text-section px-regular-lg"
    >
      <TitleLayout
        title="Produk Kami"
        description="Kami menyediakan produk yang berkualitas dan bertahan lama."
      />
      <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-lg items-center">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              slug={product.slug}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
