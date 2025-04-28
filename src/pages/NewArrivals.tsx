import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryPage from '@/components/category/CategoryPage';

const NewArrivals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CategoryPage
        title="New Arrivals"
        subtitle="Be the first to discover our latest beauty innovations"
        featured={true}
      />
      <Footer />
    </div>
  );
};

export default NewArrivals;
