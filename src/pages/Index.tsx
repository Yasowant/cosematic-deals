
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedDeals from "@/components/home/FeaturedDeals";
import ProductsGrid from "@/components/home/ProductsGrid";
import Newsletter from "@/components/home/Newsletter";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedDeals />
        <Separator className="max-w-5xl mx-auto" />
        <ProductsGrid />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
