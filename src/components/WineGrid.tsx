import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import wineCollection from "@/assets/wine-collection.jpg";

const wines = [
  {
    id: 1,
    name: "Mana Reserva Cabernet Sauvignon",
    vintage: "2020",
    price: "R$ 189,90",
    originalPrice: "R$ 220,00",
    image: wineCollection,
    category: "Tinto",
    description: "Vinho encorpado com notas de frutas vermelhas e especiarias.",
    isOnSale: true,
  },
  {
    id: 2,
    name: "Mana Chardonnay Premium",
    vintage: "2021",
    price: "R$ 156,90",
    image: wineCollection,
    category: "Branco",
    description: "Elegante e refrescante, com toques cítricos e minerais.",
    isOnSale: false,
  },
  {
    id: 3,
    name: "Mana Gran Reserva Malbec",
    vintage: "2019",
    price: "R$ 289,90",
    image: wineCollection,
    category: "Tinto",
    description: "Nossa jóia rara, envelhecido em carvalho francês.",
    isOnSale: false,
  },
  {
    id: 4,
    name: "Mana Rosé Pinot Noir",
    vintage: "2022",
    price: "R$ 145,90",
    originalPrice: "R$ 170,00",
    image: wineCollection,
    category: "Rosé",
    description: "Delicado e aromático, perfeito para ocasiões especiais.",
    isOnSale: true,
  },
];

const WineGrid = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="wine-heading text-3xl lg:text-4xl font-bold mb-4">
            Nossos Vinhos Premiados
          </h2>
          <p className="wine-text text-lg max-w-2xl mx-auto">
            Cada garrafa conta uma história única, criada com paixão e dedicação 
            por três gerações de vinicultores.
          </p>
        </div>

        {/* Wine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {wines.map((wine) => (
            <Card 
              key={wine.id} 
              className="group overflow-hidden hover:shadow-elegant transition-wine border-border/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={wine.image} 
                  alt={wine.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-wine"
                />
                
                {wine.isOnSale && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    Oferta
                  </Badge>
                )}

                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
                >
                  {wine.category}
                </Badge>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-wine flex items-center justify-center gap-2">
                  <Button variant="elegant" size="sm" className="bg-white/90 text-primary">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="wine" size="sm">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-wine">
                    {wine.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Safra {wine.vintage}
                  </p>
                </div>

                <p className="wine-text text-sm mb-4 line-clamp-2">
                  {wine.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary text-lg">
                      {wine.price}
                    </span>
                    {wine.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {wine.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-wine"
                >
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="wine" size="lg" className="px-8">
            Ver Todos os Vinhos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WineGrid;