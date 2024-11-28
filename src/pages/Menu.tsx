import { Card, CardContent } from "@/components/ui/card";
import { GlassWater } from "lucide-react";

interface Cocktail {
  name: string;
  description: string;
  price: string;
  category: string;
}

const cocktails: Cocktail[] = [
  {
    name: "Golden Manhattan",
    description: "Premium bourbon, sweet vermouth, aromatic bitters",
    price: "$18",
    category: "Classics",
  },
  {
    name: "Velvet Martini",
    description: "Grey Goose vodka, dry vermouth, olive or twist",
    price: "$16",
    category: "Classics",
  },
  {
    name: "Sapphire Negroni",
    description: "Aged gin, Campari, sweet vermouth, orange peel",
    price: "$17",
    category: "Classics",
  },
  {
    name: "Royal Fig Old Fashioned",
    description: "Fig-infused bourbon, bitters, demerara sugar",
    price: "$19",
    category: "Signature",
  },
  {
    name: "Lavender Dreams",
    description: "Empress gin, lavender syrup, fresh lemon, prosecco",
    price: "$20",
    category: "Signature",
  },
  {
    name: "Smoky Emerald",
    description: "Mezcal, green chartreuse, lime juice, agave",
    price: "$21",
    category: "Signature",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-elite-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlassWater className="h-16 w-16 text-elite-gold mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4">
            <span className="gradient-text">Cocktail</span> Menu
          </h1>
          <p className="text-elite-cream/80 text-xl">
            Expertly crafted libations for the discerning palate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cocktails.map((cocktail, index) => (
            <Card key={index} className="bg-black/50 border-elite-gold/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-elite-gold">
                    {cocktail.name}
                  </h3>
                  <span className="text-elite-gold text-xl">{cocktail.price}</span>
                </div>
                <p className="text-elite-cream/70">{cocktail.description}</p>
                <span className="text-sm text-elite-gold/50 mt-4 inline-block">
                  {cocktail.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;