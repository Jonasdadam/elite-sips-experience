import { GlassWater } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187')] bg-cover bg-fixed bg-center" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <GlassWater className="h-16 w-16 text-elite-gold animate-pulse" />
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
            <span className="gradient-text">Elite</span>
            <br />
            <span className="text-elite-cream">Cocktails</span>
          </h1>
          <p className="text-xl md:text-2xl text-elite-cream/80 mb-12 font-light">
            Crafting moments of pure sophistication
          </p>
          <div className="space-x-6">
            <button className="bg-elite-gold text-elite-dark px-8 py-3 text-lg font-medium hover:bg-elite-gold/90 transition-all duration-300">
              Reserve a Table
            </button>
            <Link
              to="/menu"
              className="border border-elite-gold text-elite-gold px-8 py-3 text-lg font-medium hover:bg-elite-gold/10 transition-all duration-300 inline-block"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};