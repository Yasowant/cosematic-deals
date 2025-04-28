
import { Button } from "@/components/ui/button";
import { BadgePercent } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-cosmo-purple/10 to-cosmo-pink/10 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-cosmo-charcoal">
            Discover <span className="text-cosmo-deep-pink">Amazing Deals</span> on Premium Cosmetics
          </h1>
          <p className="text-lg mb-8 text-gray-600 max-w-lg mx-auto md:mx-0">
            Explore exclusive offers and discounts on your favorite beauty brands. Limited-time deals you don't want to miss!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-cosmo-deep-pink hover:bg-cosmo-deep-pink/90 text-white font-medium">
              <Link to="/deals">
                <BadgePercent className="h-5 w-5 mr-2" />
                Shop Deals
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cosmo-deep-pink text-cosmo-deep-pink hover:bg-cosmo-deep-pink/10">
              <Link to="/new-arrivals">
                Explore New Arrivals
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="aspect-square max-w-lg mx-auto">
            <img
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=60"
              alt="Beauty products and cosmetics collection"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
            <div className="absolute -bottom-2 -right-2 sm:bottom-6 sm:right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-[200px] animate-fade-in">
              <div className="flex items-center text-cosmo-deep-pink mb-1">
                <BadgePercent className="h-4 w-4 mr-1" />
                <span className="font-bold">Flash Sale!</span>
              </div>
              <p className="text-xs sm:text-sm">Use code <span className="font-bold">BEAUTY25</span> for an extra 25% off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
