import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Eye, Search, Filter } from "lucide-react";
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
  {
    id: 5,
    name: "Mana Branco Sauvignon Blanc",
    vintage: "2021",
    price: "R$ 132,90",
    image: wineCollection,
    category: "Branco",
    description: "Fresco e vibrante, com aromas herbáceos únicos.",
    isOnSale: false,
  },
  {
    id: 6,
    name: "Mana Tinto Blend Premium",
    vintage: "2020",
    price: "R$ 245,90",
    image: wineCollection,
    category: "Tinto",
    description: "Blend harmonioso de nossas melhores uvas tintas.",
    isOnSale: false,
  },
];

const Vinhos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-[#dad6d6]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-black text-4xl lg:text-5xl font-bold mb-6">
              Nossos Vinhos Premiados
            </h1>
            <p className="text-black text-lg max-w-3xl mx-auto">
              Descubra nossa coleção exclusiva de vinhos, cada um cuidadosamente
              elaborado para oferecer uma experiência sensorial única.
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-white/20 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              {/* Filtros */}
              <div className="flex gap-2 flex-wrap">
                <Button
                  size="sm"
                  className="bg-black text-white border border-white/20 hover:bg-black active:scale-95"
                >
                  Todos
                </Button>
                <Button
                  size="sm"
                  className="bg-black text-white border border-white/20 hover:bg-black active:scale-95"
                >
                  Tintos
                </Button>
                <Button
                  size="sm"
                  className="bg-black text-white border border-white/20 hover:bg-black active:scale-95"
                >
                  Brancos
                </Button>
                <Button
                  size="sm"
                  className="bg-black text-white border border-white/20 hover:bg-black active:scale-95"
                >
                  Rosés
                </Button>
                <Button
                  size="sm"
                  className="bg-black text-white border border-white/20 hover:bg-black active:scale-95"
                >
                  Especiais
                </Button>
              </div>

              {/* Busca */}
              <div className="flex gap-2 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
                  <Input
                    placeholder="Buscar vinhos..."
                    className="pl-10 bg-black text-white border-white/20 placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black text-white border-white/20 hover:bg-black hover:text-white"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Wine Grid */}
        <section className="py-16 bg-[#dad6d6]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {wines.map((wine) => (
                <Card
                  key={wine.id}
                  className="group overflow-hidden hover:shadow-elegant transition-wine border-border/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={wine.image}
                      alt={wine.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition"
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

                    <div className="flex items-center justify-between mb-4">
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
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-wine"
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="wine" size="lg" className="px-8">
                Carregar Mais Vinhos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vinhos;