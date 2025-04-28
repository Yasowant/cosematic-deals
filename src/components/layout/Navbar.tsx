
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  BadgePercent,
} from "lucide-react";
import { categories } from "@/lib/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Top promo bar */}
        <div className="bg-cosmo-light-purple text-cosmo-purple py-2 text-center text-sm w-full -mx-4 px-4">
          <p className="flex items-center justify-center">
            <BadgePercent className="h-4 w-4 mr-1" />
            Free shipping on orders over $50! Use code: FREESHIP50
          </p>
        </div>
        
        {/* Main navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-cosmo-charcoal">
              <span className="text-cosmo-deep-pink">Cosmo</span>Deals
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-cosmo-deep-pink transition-colors">
              Home
            </Link>
            <Link to="/deals" className="font-medium hover:text-cosmo-deep-pink transition-colors">
              Deals
            </Link>
            {categories.slice(0, 4).map((category) => (
              <Link 
                key={category} 
                to={`/category/${category.toLowerCase()}`} 
                className="font-medium hover:text-cosmo-deep-pink transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>
          
          {/* Right icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-cosmo-pink text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium hover:text-cosmo-deep-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/deals" 
                className="font-medium hover:text-cosmo-deep-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category} 
                  to={`/category/${category.toLowerCase()}`} 
                  className="font-medium hover:text-cosmo-deep-pink transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
