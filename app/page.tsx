import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import ProductsSection from "@/src/components/ProductsSection";
import IngredientsSection from "@/src/components/IngredientsSection";
import ContactSection from "@/src/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <ProductsSection/>
      <IngredientsSection/>
      <ContactSection/>
    </main>
  );
}