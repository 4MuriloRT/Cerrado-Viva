import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section id="produtos" className="bg-[#F5EBD3] px-6 md:px-20 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#6C7042] text-center mb-16 mt-10">
        Nossa Linha de Produtos
      </h2>

      <div className="space-y-20">
        <ProductCard
          image="/images/Shampoo.png"
          name="Shampoo Nutritivo"
          description="Limpeza suave e natural, com óleos de buriti e pequi que restauram o brilho e vitalidade dos fios."
        />

        <ProductCard
          image="/images/Condicionador.png"
          name="Condicionador"
          description="Hidratação profunda e desembaraço imediato, enriquecido com óleos do cerrado como buriti, pequi e baru para fios macios e saudáveis."
          reverse
        />

        <ProductCard
          image="/images/Mascara Pequena.png"
          name="Máscara de Hidratação"
          description="Hidratação profunda com óleo de baru e extratos naturais que devolvem a maciez e força ao cabelo."
        />

        <ProductCard
          image="/images/Creme Pentear.png"
          name="Creme de Pentear"
          description="Finalização leve com proteção térmica e brilho intenso. Ideal para todos os tipos de cabelo."
          reverse
        />

        <ProductCard
          image="/images/Perfume capilar.png"
          name="Perfume Capilar"
          description="Fragrância suave inspirada no cerrado brasileiro. Deixa os fios perfumados, com brilho e sem pesar."
        />
      </div>
    </section>
  );
}
