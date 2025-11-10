"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 mt-10 bg-[#F5EBD3] min-h-screen overflow-hidden"
    >
      {/* Conteúdo à esquerda */}
      <div className="z-10 max-w-lg text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-[#6C7042] leading-tight"
        >
          Beleza que nasce do <span className="text-[#A27244]">Cerrado</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-[#6C7042]/80 text-lg"
        >
          Produtos naturais, feitos com ingredientes do bioma mais rico do Brasil.
        </motion.p>

        <motion.a
          href="#produtos"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-8 bg-[#A27244] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#8f5d2f] transition"
        >
          Conheça nossa linha
        </motion.a>
      </div>

      {/* Imagem dentro do círculo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative mt-10 md:mt-0 w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-b from-[#F5EBD3] to-[#E3D5B8] shadow-xl flex items-center justify-center"
      >
        <div className="relative w-[90%] h-[90%]">
          <Image
            src="/images/Produtos.png"
            alt="Linha Cerrado Viva"
            fill
            className="object-contain rounded-full"
            priority
          />
        </div>

        {/* halo decorativo */}
        <div className="absolute inset-0 rounded-full border-4 border-[#A27244]/20" />
      </motion.div>

      {/* Elementos decorativos */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#A27244]/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-60 h-60 bg-[#6C7042]/10 rounded-full blur-3xl" />
    </section>
  );
}