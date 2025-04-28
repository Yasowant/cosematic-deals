
import { useState, useMemo } from "react";
import { products, Product, categories } from "@/lib/data";
import ProductCard from "../ui/ProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductsGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our best-selling cosmetics with amazing discounts and offers.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              className={cn(
                activeCategory === "All" 
                  ? "bg-cosmo-purple hover:bg-cosmo-purple/90" 
                  : "hover:bg-cosmo-light-purple/20"
              )}
              onClick={() => setActiveCategory("All")}
            >
              All
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={cn(
                  activeCategory === category 
                    ? "bg-cosmo-purple hover:bg-cosmo-purple/90" 
                    : "hover:bg-cosmo-light-purple/20"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-cosmo-purple text-cosmo-purple hover:bg-cosmo-light-purple/20"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
