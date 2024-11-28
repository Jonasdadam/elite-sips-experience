import { Cocktail } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551038247-3d9af20df552')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Cocktail className="w-12 h-12 text-elite-gold mr-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Elite Cocktails
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-elite-cream/80">
            Experience the finest mixology in Malta
          </p>
          <button className="bg-elite-gold text-elite-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-elite-gold/90 transition-colors">
            Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
};