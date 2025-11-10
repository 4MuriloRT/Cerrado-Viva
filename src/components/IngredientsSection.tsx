"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Buriti",
    description:
      "Rico em betacaroteno e antioxidantes, restaura o brilho natural e protege contra os danos solares.",
    image: "/images/buriti.png",
  },
  {
    name: "Pequi",
    description:
      "Hidrata profundamente, nutre e devolve a maciez aos fios ressecados, mantendo o toque sedoso.",
    image: "/images/pequi.png",
  },
  {
    name: "Baru",
    description:
      "Fortalece a fibra capilar e ajuda a reduzir a quebra, promovendo cabelos mais resistentes.",
    image: "/images/baru.jpg",
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredientes" className="bg-[#F5EBD3] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#6C7042] mb-12"
        >
          Ingredientes do Cerrado
        </motion.h2>

        {/* Cards dos ingredientes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#6C7042] mb-3">
                {item.name}
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}