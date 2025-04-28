
import { Product } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import DiscountBadge from "./DiscountBadge";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const discountedPrice = product.discountPercentage
    ? product.price - (product.price * product.discountPercentage) / 100
    : product.price;

  return (
    <div 
      className={cn(
        "group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      {product.discountPercentage && (
        <DiscountBadge percentage={product.discountPercentage} />
      )}
      
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-base line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.brand}</p>
          </div>
          <Badge variant="outline" className="bg-cosmo-light-purple text-cosmo-purple">
            {product.category}
          </Badge>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-lg">${discountedPrice.toFixed(2)}</span>
            {product.discountPercentage && (
              <span className="text-gray-400 text-sm line-through">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
        
        <Button className="w-full mt-4 bg-cosmo-purple hover:bg-cosmo-purple/90 text-white">
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
