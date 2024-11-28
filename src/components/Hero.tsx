import { GlassWater } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-elite-dark/90 to-elite-dark/70" />
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <GlassWater className="w-12 h-12 text-elite-gold mr-4" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text tracking-tight">
            Elite Cocktails
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-elite-cream/90 max-w-2xl mx-auto">
            Where luxury meets mixology in the heart of Malta
          </p>
          <button className="bg-transparent border-2 border-elite-gold text-elite-gold px-8 py-4 rounded-none text-lg font-semibold hover:bg-elite-gold hover:text-elite-dark transition-all duration-300">
            Experience Luxury
          </button>
        </div>
      </div>
    </div>
  );
};