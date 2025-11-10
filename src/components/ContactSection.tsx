"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-[#EDE3CF] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#6C7042] mb-4"
        >
          Entre em Contato
        </motion.h2>

        {/* Frase introdutória */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#4A4A4A] text-lg mb-12"
        >
          Ficou com alguma dúvida ou quer conhecer mais sobre nossos produtos?
          Fale conosco e descubra o poder da natureza do Cerrado nos seus fios 🌾
        </motion.p>

        {/* Botões de contato */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/5538997352627"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#6C7042] text-white px-6 py-3 rounded-full hover:bg-[#555937] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_gabrielapalves"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#C37C3A] text-white px-6 py-3 rounded-full hover:bg-[#a3632d] transition-all"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>

          {/* E-mail */}
          <a
            href="mailto:gabriela917078@gmail.com"
            className="flex items-center gap-2 bg-[#A27244] text-white px-6 py-3 rounded-full hover:bg-[#875b34] transition-all"
          >
            <Mail className="w-5 h-5" />
            E-mail
          </a>
        </motion.div>

        {/* Rodapé */}
        <div className="mt-16 border-t border-[#c8bfa9] pt-6">
          <p className="text-sm text-[#6C7042]/80">
            © {new Date().getFullYear()} Cerrado Viva — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
