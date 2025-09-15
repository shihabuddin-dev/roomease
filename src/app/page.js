import PropertiesCardListClient from "@/components/PropertiesCardListClient";
import Hero from "./components/hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PropertiesCardListClient />
      <Features />
      <FAQ/>
      <CTA />
    </main>
  )
}