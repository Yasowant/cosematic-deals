
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryPage from "@/components/category/CategoryPage";

const Haircare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryPage
        category="Haircare"
        title="Haircare Solutions"
        subtitle="Transform your hair with our professional haircare products"
      />
      <Footer />
    </div>
  );
};

export default Haircare;
