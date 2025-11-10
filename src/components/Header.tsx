"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F5EBD3]/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/Logo.jpeg"
            alt="Cerrado Viva"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-[#6C7042] tracking-wide">
            Cerrado Viva
          </span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-[#6C7042] font-medium">
          <a href="#inicio" className="hover:text-[#A27244] transition">Início</a>
          <a href="#produtos" className="hover:text-[#A27244] transition">Produtos</a>
          <a href="#ingredientes" className="hover:text-[#A27244] transition">Ingredientes</a>
          <a href="#contato" className="hover:text-[#A27244] transition">Contato</a>
        </nav>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#6C7042]"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5EBD3] flex flex-col items-center py-4 space-y-4 text-[#6C7042] font-medium">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
          <a href="#ingredientes" onClick={() => setMenuOpen(false)}>Ingredientes</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>
      )}
    </header>
  );
}
