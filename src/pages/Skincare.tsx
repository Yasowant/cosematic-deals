
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryPage from "@/components/category/CategoryPage";

const Skincare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryPage
        category="Skincare"
        title="Skincare Essentials"
        subtitle="Nourish and protect your skin with our carefully curated skincare products"
      />
      <Footer />
    </div>
  );
};

export default Skincare;
