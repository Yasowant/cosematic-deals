import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  BadgePercent,
  LogOut,
} from 'lucide-react';
import { categories } from '@/lib/data';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
  };

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
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-cosmo-charcoal">
              <span className="text-cosmo-deep-pink">Cosmo</span>Deals
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="font-medium hover:text-cosmo-deep-pink transition-colors"
            >
              Home
            </Link>
            <Link
              to="/deals"
              className="font-medium hover:text-cosmo-deep-pink transition-colors"
            >
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

            {user ? (
              <div className="flex items-center">
                <span className="hidden md:inline-block mr-2 text-sm">
                  Hi, {user.name || user.email.split('@')[0]}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/login">
                  <Button variant="ghost" className="flex items-center">
                    <User className="h-5 w-5 mr-1" />
                    <span className="hidden md:inline-block">Login</span>
                  </Button>
                </Link>
              </div>
            )}

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

              {user ? (
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="font-medium hover:text-cosmo-deep-pink transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="font-medium hover:text-cosmo-deep-pink transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
