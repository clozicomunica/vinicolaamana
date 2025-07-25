import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Receba Novidades Exclusivas
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Seja o primeiro a saber sobre novos lançamentos, eventos especiais 
              e ofertas exclusivas da Vinícola Mana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="outline" className="whitespace-nowrap bg-transparent text-gray-400 border-gray-400 hover:bg-gray-800 hover:text-white">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Vinícola Mana</h2>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Três gerações dedicadas à arte de produzir vinhos únicos que 
                expressam a essência de nossa terra e tradição familiar.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-primary-foreground/90">
                  Estrada do Vinho, 1952 - Vale dos Vinhedos, RS
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-primary-foreground/90">
                  (11) 3456-7890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-primary-foreground/90">
                  contato@vinicolamana.com.br
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-primary-foreground/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/vinhos" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Nossos Vinhos
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Nossa História
                </Link>
              </li>
              <li>
                <Link 
                  to="/experiencias" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Experiências
                </Link>
              </li>
              <li>
                <Link 
                  to="/clube" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Clube do Vinho
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Wine Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/vinhos/tintos" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Vinhos Tintos
                </Link>
              </li>
              <li>
                <Link 
                  to="/vinhos/brancos" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Vinhos Brancos
                </Link>
              </li>
              <li>
                <Link 
                  to="/vinhos/roses" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Vinhos Rosés
                </Link>
              </li>
              <li>
                <Link 
                  to="/vinhos/especiais" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Edições Especiais
                </Link>
              </li>
              <li>
                <Link 
                  to="/promocoes" 
                  className="text-primary-foreground/80 hover:text-white transition-wine"
                >
                  Promoções
                </Link>
              </li>
            </ul>
          </div>
        </div>

      {/* Bottom Bar */}
<div className="py-6 border-t border-gray-300">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    {/* Direitos autorais - Esquerda */}
    <p className="text-sm text-gray-600">
      © {new Date().getFullYear()} Vinícola Amana. Todos os direitos reservados.
    </p>

    {/* Créditos - Centro (apenas em desktop) */}
    <div className="hidden md:flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
      <span>Desenvolvido com</span>
      <Heart className="h-3 w-3 fill-current" />
      <span>por</span>
      <Link 
        to="https://clozicomunica.com" 
        target="_blank"
        className="font-medium hover:text-[#9a3324]"
      >
        Clozi Comunica
      </Link>
    </div>

    {/* Links - Direita */}
    <div className="flex gap-6">
      <Link 
        to="/privacidade" 
        className="text-sm text-gray-600 hover:text-[#9a3324] transition-colors"
      >
        Política de Privacidade
      </Link>
      <Link 
        to="/termos" 
        className="text-sm text-gray-600 hover:text-[#9a3324] transition-colors"
      >
        Termos de Uso
      </Link>
    </div>

    {/* Créditos - Mobile (centralizado abaixo) */}
    <div className="md:hidden flex items-center gap-1 text-sm text-gray-500 mt-2">
      <span>Desenvolvido com</span>
      <Heart className="h-3 w-3 fill-current" />
      <span>por</span>
      <Link 
        to="https://clozicomunica.com" 
        target="_blank"
        className="font-medium hover:text-[#9a3324]"
      >
        Clozi Comunica
      </Link>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;