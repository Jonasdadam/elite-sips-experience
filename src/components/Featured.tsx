import { Wine } from "lucide-react";

const cocktails = [
  {
    name: "The Golden Hour",
    description: "Japanese whisky, yuzu, honey, gold dust",
    price: "€22",
  },
  {
    name: "Mediterranean Mist",
    description: "Premium gin, rosemary, citrus foam",
    price: "€20",
  },
  {
    name: "Velvet Night",
    description: "Aged rum, blackberry, vanilla bean",
    price: "€24",
  },
];

export const Featured = () => {
  return (
    <div className="py-32 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b')] bg-cover bg-fixed opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl font-bold mb-20 text-center">
          <span className="gradient-text">Signature</span>
          <br />
          <span className="text-elite-cream">Collection</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.name}
              className="group relative overflow-hidden border border-elite-gold/20 p-12 backdrop-blur-sm hover:border-elite-gold/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-elite-gold/5 group-hover:bg-elite-gold/10 transition-all duration-500" />
              <div className="relative z-10">
                <Wine className="w-12 h-12 text-elite-gold mb-8" />
                <h3 className="text-3xl font-bold mb-4 text-elite-gold">
                  {cocktail.name}
                </h3>
                <p className="text-elite-cream/70 mb-8 text-lg">
                  {cocktail.description}
                </p>
                <p className="text-elite-gold font-bold text-2xl">{cocktail.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};