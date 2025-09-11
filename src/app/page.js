import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/hero";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <CTA />
    </main>
  )
}
