import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/hero";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <FAQ/>
      <CTA />
    </main>
  )
}
