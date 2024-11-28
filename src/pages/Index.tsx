import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Featured } from "@/components/Featured";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Featured />
      <Contact />
    </main>
  );
};

export default Index;