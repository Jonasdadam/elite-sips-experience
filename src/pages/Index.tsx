import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Featured } from "@/components/Featured";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-elite-dark to-black">
      <Hero />
      <Featured />
      <About />
      <Contact />
    </main>
  );
};

export default Index;