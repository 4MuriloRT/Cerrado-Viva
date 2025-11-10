"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  reverse?: boolean; // alterna a posição em telas md+
}

export default function ProductCard({
  image,
  name,
  description,
  reverse = false,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-5 flex justify-center"
    >
      {/* Wrapper central: aqui aplicamos o reverse */}
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center justify-center gap-10 md:gap-16 max-w-5xl w-full px-4`}
      >
        {/* Imagem do produto */}
        <div className="relative w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full bg-gradient-to-b from-[#F5EBD3] to-[#E3D5B8] shadow-md flex items-center justify-center overflow-hidden">
          <div className="relative w-[70%] h-[70%]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#6C7042]">
            {name}
          </h3>
          <p className="mt-4 text-[#6C7042]/80 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
