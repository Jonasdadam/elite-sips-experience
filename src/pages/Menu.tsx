import { Card, CardContent } from "@/components/ui/card";
import { GlassWater, Wine, CupSoda, Martini } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Drink {
  name: string;
  description: string;
  price: string;
  category: string;
}

const drinks: Record<string, Drink[]> = {
  cocktails: [
    {
      name: "Golden Manhattan",
      description: "Premium bourbon, sweet vermouth, aromatic bitters",
      price: "€18",
      category: "Classics",
    },
    {
      name: "Velvet Martini",
      description: "Grey Goose vodka, dry vermouth, olive or twist",
      price: "€16",
      category: "Classics",
    },
    {
      name: "Sapphire Negroni",
      description: "Aged gin, Campari, sweet vermouth, orange peel",
      price: "€17",
      category: "Classics",
    },
    {
      name: "Royal Fig Old Fashioned",
      description: "Fig-infused bourbon, bitters, demerara sugar",
      price: "€19",
      category: "Signature",
    },
    {
      name: "Lavender Dreams",
      description: "Empress gin, lavender syrup, fresh lemon, prosecco",
      price: "€20",
      category: "Signature",
    },
    {
      name: "Smoky Emerald",
      description: "Mezcal, green chartreuse, lime juice, agave",
      price: "€21",
      category: "Signature",
    },
  ],
  wines: [
    {
      name: "Château Margaux",
      description: "Premier Cru Classé, Bordeaux, France",
      price: "€35",
      category: "Red Wine",
    },
    {
      name: "Dom Pérignon",
      description: "Vintage Champagne, France",
      price: "€40",
      category: "Champagne",
    },
    {
      name: "Cloudy Bay",
      description: "Sauvignon Blanc, Marlborough, New Zealand",
      price: "€25",
      category: "White Wine",
    },
  ],
  softDrinks: [
    {
      name: "Elderflower Spritz",
      description: "Elderflower cordial, sparkling water, fresh mint",
      price: "€8",
      category: "Mocktails",
    },
    {
      name: "Citrus Fizz",
      description: "Fresh citrus blend, soda water, aromatic bitters",
      price: "€7",
      category: "Mocktails",
    },
    {
      name: "Garden Tonic",
      description: "Cucumber, rosemary, premium tonic water",
      price: "€8",
      category: "Mocktails",
    },
  ],
};

const Menu = () => {
  return (
    <div className="min-h-screen bg-elite-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlassWater className="h-16 w-16 text-elite-gold mx-auto mb-6" />
          <h1 className="text-6xl font-bold mb-4">
            <span className="gradient-text">Drink</span> Menu
          </h1>
          <p className="text-elite-cream/80 text-xl">
            Expertly crafted libations for the discerning palate
          </p>
        </div>

        <Tabs defaultValue="cocktails" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-black/50 border border-elite-gold/20">
            <TabsTrigger value="cocktails" className="flex items-center gap-2">
              <Martini className="h-4 w-4" />
              Cocktails
            </TabsTrigger>
            <TabsTrigger value="wines" className="flex items-center gap-2">
              <Wine className="h-4 w-4" />
              Wines
            </TabsTrigger>
            <TabsTrigger value="softDrinks" className="flex items-center gap-2">
              <CupSoda className="h-4 w-4" />
              Soft Drinks
            </TabsTrigger>
          </TabsList>

          {Object.entries(drinks).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((drink, index) => (
                  <Card key={index} className="bg-black/50 border-elite-gold/20">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-semibold text-elite-gold">
                          {drink.name}
                        </h3>
                        <span className="text-elite-gold text-xl">
                          {drink.price}
                        </span>
                      </div>
                      <p className="text-elite-cream/70">{drink.description}</p>
                      <span className="text-sm text-elite-gold/50 mt-4 inline-block">
                        {drink.category}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;