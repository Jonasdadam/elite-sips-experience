import { Wine } from "lucide-react";

const cocktails = [
  {
    name: "Golden Sunset",
    description: "Premium rum, passion fruit, mango, gold leaf",
    price: "€16",
  },
  {
    name: "Mediterranean Dream",
    description: "Gin, local herbs, citrus, prosecco",
    price: "€18",
  },
  {
    name: "Maltese Nights",
    description: "Vodka, blue curaçao, coconut, star anise",
    price: "€17",
  },
];

export const Featured = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-elite-dark to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center gradient-text">
          Signature Collection
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.name}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-elite-gold/10 transform group-hover:bg-elite-gold/20 transition-all duration-500" />
              <div className="border border-elite-gold/20 p-10 backdrop-blur-sm">
                <Wine className="w-10 h-10 text-elite-gold mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-elite-gold">
                  {cocktail.name}
                </h3>
                <p className="text-elite-cream/70 mb-6 text-lg">{cocktail.description}</p>
                <p className="text-elite-gold font-bold text-2xl">{cocktail.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};