
import { products, Product } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

interface CategoryPageProps {
  category?: string;
  title: string;
  subtitle: string;
  showDiscounted?: boolean;
}

const CategoryPage = ({ category, title, subtitle, showDiscounted }: CategoryPageProps) => {
  const filteredProducts = products.filter((product) => {
    if (showDiscounted) {
      return product.discountPercentage !== undefined;
    }
    if (category) {
      return product.category === category;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cosmo-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cosmo-charcoal mb-4">{title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
