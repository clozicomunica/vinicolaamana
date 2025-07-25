import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="wine-heading text-2xl lg:text-3xl font-bold">
              Vinícola Amana
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/vinhos" 
              className="wine-text hover:text-primary transition-wine font-medium"
            >
              Nossos Vinhos
            </Link>
            <Link 
              to="/sobre" 
              className="wine-text hover:text-primary transition-wine font-medium"
            >
              Nossa História
            </Link>
            <Link 
              to="/experiencias" 
              className="wine-text hover:text-primary transition-wine font-medium"
            >
              Experiências
            </Link>
            <Link 
              to="/clube" 
              className="wine-text hover:text-primary transition-wine font-medium"
            >
              Clube do Vinho
            </Link>
            <Link 
              to="/contato" 
              className="wine-text hover:text-primary transition-wine font-medium"
            >
              Contato
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 py-6">
              <Link 
                to="/vinhos" 
                className="wine-text hover:text-primary transition-wine font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossos Vinhos
              </Link>
              <Link 
                to="/sobre" 
                className="wine-text hover:text-primary transition-wine font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossa História
              </Link>
              <Link 
                to="/experiencias" 
                className="wine-text hover:text-primary transition-wine font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiências
              </Link>
              <Link 
                to="/clube" 
                className="wine-text hover:text-primary transition-wine font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Clube do Vinho
              </Link>
              <Link 
                to="/contato" 
                className="wine-text hover:text-primary transition-wine font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;