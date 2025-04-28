import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryPage from '@/components/category/CategoryPage';

const Makeup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryPage
        category="Makeup"
        title="Makeup Collection"
        subtitle="Enhance your natural beauty with our premium makeup selection"
      />
      <Footer />
    </div>
  );
};

export default Makeup;
