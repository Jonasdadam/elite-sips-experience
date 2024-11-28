import { Wine } from "lucide-react";

const cocktails = [
  {
    name: "Golden Sunset",
    description: "Premium rum, passion fruit, mango, gold leaf",
    price: "€14",
  },
  {
    name: "Mediterranean Dream",
    description: "Gin, local herbs, citrus, prosecco",
    price: "€16",
  },
  {
    name: "Maltese Nights",
    description: "Vodka, blue curaçao, coconut, star anise",
    price: "€15",
  },
];

export const Featured = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Signature Cocktails
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.name}
              className="bg-elite-dark/30 p-8 rounded-lg border border-elite-gold/20 hover:border-elite-gold/40 transition-colors"
            >
              <Wine className="w-8 h-8 text-elite-gold mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-elite-gold">
                {cocktail.name}
              </h3>
              <p className="text-elite-cream/60 mb-4">{cocktail.description}</p>
              <p className="text-elite-gold font-bold">{cocktail.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};