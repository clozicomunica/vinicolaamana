import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-vineyard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
            <span className="gold-accent">Tradição desde 1952</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Vinhos Únicos,
            <br />
            <span className="gold-accent">Experiências Inesquecíveis</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Descubra a tradição e excelência da Vinícola Mana. Três gerações dedicadas 
            à arte de produzir vinhos que contam a história de nossa terra.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="wine" 
              size="lg" 
              className="group text-lg px-8 py-4 h-auto"
            >
              Explore Nossos Vinhos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="elegant" 
              size="lg" 
              className="group text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              <Play className="mr-2 h-5 w-5" />
              Nossa História
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white mb-1">70+</div>
              <div className="text-white/70 text-sm">Anos de Tradição</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white mb-1">15</div>
              <div className="text-white/70 text-sm">Tipos de Uva</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white mb-1">50k+</div>
              <div className="text-white/70 text-sm">Garrafas/Ano</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;