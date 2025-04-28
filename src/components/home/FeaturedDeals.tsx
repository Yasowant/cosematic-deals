
import { featuredOffers } from "@/lib/data";
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgePercent, Clock, Copy } from "lucide-react";
import { toast } from "sonner";

const FeaturedDeals = () => {
  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Promo code copied to clipboard!", {
      description: `You can now use ${code} at checkout.`,
    });
  };

  return (
    <section className="section-padding bg-cosmo-cream">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Deals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of these limited-time offers and save on your favorite beauty products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredOffers.map((offer) => (
            <Card key={offer.id} className="bg-white border border-gray-100 shadow-sm hover-scale">
              <CardHeader className="bg-gradient-to-br from-cosmo-light-purple to-cosmo-purple/5 pb-4">
                <CardTitle className="flex items-center text-lg">
                  <BadgePercent className="h-5 w-5 mr-2 text-cosmo-purple" />
                  {offer.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-4">
                <p className="mb-4 text-gray-600">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Expires: {new Date(offer.expiryDate).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-gray-100 pt-4 pb-4 flex items-center justify-between">
                <div className="bg-gray-100 px-3 py-1.5 rounded font-mono text-sm flex-grow text-center mr-2">
                  {offer.code}
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => copyPromoCode(offer.code)}
                  className="text-cosmo-purple hover:text-cosmo-deep-pink hover:bg-cosmo-light-purple/50"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
