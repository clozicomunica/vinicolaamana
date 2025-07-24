import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grape, Award, Heart, Users, Calendar, MapPin } from "lucide-react";
import wineTasting from "@/assets/wine-tasting.jpg";
import heroVineyard from "@/assets/hero-vineyard.jpg";

const timeline = [
  {
    year: "1952",
    title: "Fundação da Vinícola",
    description: "João Mana planta os primeiros vinhedos na região, iniciando nossa tradição familiar."
  },
  {
    year: "1978",
    title: "Segunda Geração",
    description: "Carlos Mana assume a vinícola, modernizando os processos e expandindo a produção."
  },
  {
    year: "1995",
    title: "Primeiro Prêmio Internacional",
    description: "Nosso Cabernet Sauvignon conquista medalha de ouro na França."
  },
  {
    year: "2010",
    title: "Terceira Geração",
    description: "Ana e Pedro Mana trazem inovação tecnológica mantendo a tradição familiar."
  },
  {
    year: "2024",
    title: "Presente",
    description: "Mais de 70 anos dedicados à excelência e paixão pelos vinhos únicos."
  },
];

const values = [
  {
    icon: Grape,
    title: "Tradição",
    description: "Preservamos técnicas ancestrais passadas de geração em geração."
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Cada vinho é criado com amor e dedicação pela arte da vinicultura."
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos constantemente a perfeição em cada garrafa produzida."
  },
  {
    icon: Users,
    title: "Família",
    description: "Somos uma família que cultiva não apenas uvas, mas relacionamentos duradouros."
  },
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroVineyard})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossa História de
              <span className="gold-accent block">Paixão e Tradição</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Desde 1952, a família Mana cultiva as melhores uvas em nosso terroir único, 
              criando vinhos que expressam a essência de nossa terra e tradição.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="wine-heading text-3xl lg:text-4xl font-bold mb-6">
                Nossos Valores
              </h2>
              <p className="wine-text text-lg max-w-2xl mx-auto">
                Os princípios que guiam nossa família há mais de 70 anos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-wine">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="wine-heading text-xl font-bold mb-4">
                      {value.title}
                    </h3>
                    <p className="wine-text">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-gradient-wine">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="wine-heading text-3xl lg:text-4xl font-bold mb-8">
                  Uma Jornada de
                  <span className="gold-accent block">Três Gerações</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="wine-text text-lg leading-relaxed">
                    Tudo começou em 1952, quando João Mana, imigrante italiano apaixonado 
                    por vinhos, decidiu plantar os primeiros vinhedos em nossa propriedade. 
                    Sua visão era criar vinhos que honrassem tanto as tradições europeias 
                    quanto o terroir único brasileiro.
                  </p>
                  
                  <p className="wine-text leading-relaxed">
                    Hoje, três gerações depois, continuamos essa missão com a mesma paixão 
                    e dedicação. Combinamos métodos tradicionais com tecnologia moderna, 
                    garantindo que cada garrafa carregue nossa assinatura de qualidade.
                  </p>
                  
                  <p className="wine-text leading-relaxed">
                    Nossa vinícola não é apenas um negócio familiar - é o legado de uma 
                    família que acredita que o vinho é mais que uma bebida: é arte, 
                    cultura e tradição em cada gole.
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="wine" size="lg">
                    Agende uma Visita
                  </Button>
                  <Button variant="elegant" size="lg">
                    Nossos Vinhos
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={wineTasting} 
                  alt="Família Mana na vinícola" 
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-elegant"
                />
                
                <Card className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold">Vale dos Vinhedos</div>
                        <div className="text-sm text-muted-foreground">Região Premium</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="wine-heading text-3xl lg:text-4xl font-bold mb-6">
                Nossa Linha do Tempo
              </h2>
              <p className="wine-text text-lg max-w-2xl mx-auto">
                Momentos importantes que moldaram nossa história.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-border" />
                  )}
                  
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mr-6">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 hover:shadow-elegant transition-wine">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="wine-text">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Venha Conhecer Nossa História
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Agende uma visita guiada e descubra os segredos por trás de nossos vinhos únicos.
            </p>
            <Button variant="gold" size="lg" className="px-8">
              Agendar Visita
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;