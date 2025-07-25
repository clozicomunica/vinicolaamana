import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/vinhos", name: "Nossos Vinhos" },
    { path: "/sobre", name: "Nossa História" },
    { path: "/experiencias", name: "Experiências" },
    { path: "/clube", name: "Clube do Vinho" },
    { path: "/contato", name: "Contato" }
  ];

  return (
    <header className={`sticky top-0 z-50 bg-black border-b border-black transition-all duration-300 ease-in-out ${isScrolled ? 'py-2 bg-black/80 backdrop-blur-sm' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo com transição suave */}
          <Link to="/" className="flex items-center h-full">
            <img
              src={logo}
              alt="Vinícola Amana"
              className={`h-full object-contain transition-all duration-300 ${isScrolled ? 'max-h-10' : 'max-h-12'}`}
            />
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-gray-100 hover:text-white font-medium px-2 py-1 group transition-colors duration-200"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white w-0 group-hover:w-[calc(100%-8px)] transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Ícones de ação */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-100 hover:text-white hover:bg-gray-600/50 relative transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#9a3324] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                0
              </span>
            </Button>

            <Button 
              variant="outline"
              className="hidden lg:flex border-gray-400 hover:bg-gray-600/50 hover:text-white hover:border-gray-300"
            >
              <User className="h-4 w-4 mr-2" />
              Acessar
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-100 hover:text-white hover:bg-gray-600/50 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-600">
            <nav className="flex flex-col divide-y divide-gray-600">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-6 py-3 text-gray-100 hover:bg-gray-600/50 hover:text-white font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;