import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Grape, Award, Heart, Users } from "lucide-react";
import wineTasting from "@/assets/wine-tasting.jpg";

const features = [
  {
    icon: Grape,
    title: "Tradição Familiar",
    description: "Três gerações dedicadas à arte da vinicultura, mantendo técnicas tradicionais com inovação moderna."
  },
  {
    icon: Award,
    title: "Vinhos Premiados",
    description: "Reconhecidos nacionalmente e internacionalmente por nossa qualidade e excelência."
  },
  {
    icon: Heart,
    title: "Paixão pelo Terroir",
    description: "Respeitamos nossa terra e o clima único que tornam nossos vinhos especiais."
  },
  {
    icon: Users,
    title: "Experiências Únicas",
    description: "Oferecemos degustações e visitas guiadas para compartilhar nossa paixão."
  }
];

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#9c9c9c]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6">
                Nossa História de
                <span className="text-gray-600 block">Paixão e Tradição</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-white text-lg leading-relaxed">
                  Desde 1952, a família Mana cultiva as melhores uvas em nosso terroir único, 
                  criando vinhos que expressam a essência de nossa terra e tradição.
                </p>
                
                <p className="text-white leading-relaxed">
                  Nossa vinícola combina métodos tradicionais com tecnologia moderna, 
                  garantindo que cada garrafa carregue a assinatura inconfundível da qualidade Mana.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:shadow-elegant transition-wine">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="wine-text text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="wine" size="lg">
                Nossa História Completa
              </Button>
              <Button variant="elegant" size="lg">
                Agende uma Visita
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={wineTasting} 
                alt="Degustação de vinhos na Vinícola Mana" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <Card className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">70+</div>
                  <div className="text-sm text-muted-foreground">Anos de Tradição</div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-8 -right-8 bg-background/95 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Prêmios Conquistados</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;