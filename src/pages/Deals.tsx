
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryPage from "@/components/category/CategoryPage";

const Deals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryPage
        title="Special Deals & Offers"
        subtitle="Discover amazing discounts on your favorite beauty products"
        showDiscounted={true}
      />
      <Footer />
    </div>
  );
};

export default Deals;
