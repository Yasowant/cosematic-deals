// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import {
//   ShoppingCart,
//   Search,
//   User,
//   Menu,
//   X,
//   BadgePercent,
//   LogOut,
// } from 'lucide-react';
// import { categories } from '@/lib/data';
// import { useAuth } from '@/contexts/AuthContext';
// import { useCurrency } from '@/contexts/CurrencyContext';
// import { toast } from 'sonner';
// import CurrencyDropdown from '../ui/CurrencyDropdown';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const { rates, selectedCurrency, setSelectedCurrency, getRateForCurrency } =
//     useCurrency();

//   const handleLogout = () => {
//     logout();
//     toast.success('Logged out successfully!');
//   };

//   // Example base price and conversion
//   const basePrice = 100; // USD
//   const convertedPrice = (
//     basePrice * getRateForCurrency(selectedCurrency)
//   ).toFixed(2);

//   // Dropdown handler
//   const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCurrency(e.target.value);
//   };

//   return (
//     <header className="bg-white sticky top-0 z-50 shadow-sm">
//       <div className="container mx-auto px-4 flex flex-col">
//         {/* Top promo bar */}
//         <div className="bg-cosmo-light-purple text-cosmo-purple py-2 text-center text-sm w-full -mx-4 px-4">
//           <p className="flex items-center justify-center">
//             <BadgePercent className="h-4 w-4 mr-1" />
//             Free shipping on orders over {selectedCurrency} {convertedPrice}!
//             Use code: FREESHIP50
//           </p>
//         </div>

//         {/* Main navbar */}
//         <div className="flex items-center justify-between py-4">
//           {/* Mobile menu button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </Button>

//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <h1 className="text-2xl font-playfair font-bold text-cosmo-charcoal">
//               <span className="text-cosmo-deep-pink">Cosmo</span>Deals
//             </h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-6">
//             <Link
//               to="/"
//               className="font-medium hover:text-cosmo-deep-pink transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="/deals"
//               className="font-medium hover:text-cosmo-deep-pink transition-colors"
//             >
//               Deals
//             </Link>
//             {categories.slice(0, 4).map((category) => (
//               <Link
//                 key={category}
//                 to={`/category/${category.toLowerCase()}`}
//                 className="font-medium hover:text-cosmo-deep-pink transition-colors"
//               >
//                 {category}
//               </Link>
//             ))}
//           </nav>

//           {/* Right icons */}
//           <div className="flex items-center space-x-2">
//             <Button variant="ghost" size="icon">
//               <Search className="h-5 w-5" />
//             </Button>

//             {user ? (
//               <div className="flex items-center">
//                 {/* Profile Image and Greeting */}
//                 <div className="flex items-center mr-2">
//                   {user?.photoUrl ? (
//                     <img
//                       src={user.photoUrl}
//                       alt="Profile"
//                       className="h-8 w-8 rounded-full object-cover mr-2"
//                     />
//                   ) : (
//                     <User className="h-8 w-8 text-gray-500 mr-2" />
//                   )}
//                   <span className="hidden md:inline-block text-sm">
//                     Hi, {user.name || user.email.split('@')[0]}
//                   </span>
//                 </div>

//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={handleLogout}
//                   title="Logout"
//                 >
//                   <LogOut className="h-5 w-5" />
//                 </Button>
//               </div>
//             ) : (
//               <div className="flex items-center">
//                 <Link to="/login">
//                   <Button variant="ghost" className="flex items-center">
//                     <User className="h-5 w-5 mr-1" />
//                     <span className="hidden md:inline-block">Login</span>
//                   </Button>
//                 </Link>
//               </div>
//             )}

//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-cosmo-pink text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//                 0
//               </span>
//             </Button>
//           </div>

//           {/* Currency Dropdown */}
//           <div className="ml-4">
//             {/* <select
//               value={selectedCurrency}
//               onChange={handleCurrencyChange}
//               className="bg-white border border-gray-300 rounded px-2 py-1 text-sm"
//             >
//               {rates.map((rate) => (
//                 <option key={rate.currency} value={rate.currency}>
//                   {rate.currency}
//                 </option>
//               ))}
//             </select> */}

//             <CurrencyDropdown />
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden py-4 border-t">
//             <nav className="flex flex-col space-y-4">
//               <Link
//                 to="/"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="font-medium hover:text-cosmo-deep-pink"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/deals"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="font-medium hover:text-cosmo-deep-pink"
//               >
//                 Deals
//               </Link>
//               {categories.map((category) => (
//                 <Link
//                   key={category}
//                   to={`/category/${category.toLowerCase()}`}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="font-medium hover:text-cosmo-deep-pink"
//                 >
//                   {category}
//                 </Link>
//               ))}

//               {user ? (
//                 <Button
//                   variant="outline"
//                   className="justify-start"
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   <LogOut className="h-4 w-4 mr-2" />
//                   Logout
//                 </Button>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="font-medium hover:text-cosmo-deep-pink"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="font-medium hover:text-cosmo-deep-pink"
//                   >
//                     Register
//                   </Link>
//                 </>
//               )}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  BadgePercent,
  LogOut,
} from 'lucide-react';
import { categories } from '@/lib/data';
import { useAuth } from '@/contexts/AuthContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { toast } from 'sonner';
import CurrencyDropdown from '../ui/CurrencyDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { rates, selectedCurrency, setSelectedCurrency, getRateForCurrency } =
    useCurrency();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
  };

  // Example base price and conversion
  const basePrice = 100; // USD
  const convertedPrice = (
    basePrice * getRateForCurrency(selectedCurrency)
  ).toFixed(2);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Top promo bar */}
        <div className="bg-cosmo-light-purple text-cosmo-purple py-2 text-center text-sm w-full -mx-4 px-4">
          <p className="flex items-center justify-center">
            <BadgePercent className="h-4 w-4 mr-1" />
            Free shipping on orders over {selectedCurrency} {convertedPrice}!
            Use code: FREESHIP50
          </p>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-cosmo-charcoal">
              <span className="text-cosmo-deep-pink">Cosmo</span>Deals
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="font-medium hover:text-cosmo-deep-pink transition-colors"
            >
              Home
            </Link>
            <Link
              to="/deals"
              className="font-medium hover:text-cosmo-deep-pink transition-colors"
            >
              Deals
            </Link>
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="font-medium hover:text-cosmo-deep-pink transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>

            {user ? (
              <div className="flex items-center">
                {/* Profile Image and Greeting */}
                <div className="flex items-center mr-2">
                  {user?.photoUrl ? (
                    <img
                      src={user.photoUrl}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover mr-2"
                    />
                  ) : (
                    <User className="h-8 w-8 text-gray-500 mr-2" />
                  )}
                  <span className="hidden md:inline-block text-sm">
                    Hi, {user.name || user.email.split('@')[0]}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center">
                <Link to="/login">
                  <Button variant="ghost" className="flex items-center">
                    <User className="h-5 w-5 mr-1" />
                    <span className="hidden md:inline-block">Login</span>
                  </Button>
                </Link>
              </div>
            )}

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-cosmo-pink text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Currency Dropdown */}
          <div className="ml-4">
            <CurrencyDropdown />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-cosmo-deep-pink"
              >
                Home
              </Link>
              <Link
                to="/deals"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-cosmo-deep-pink"
              >
                Deals
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium hover:text-cosmo-deep-pink"
                >
                  {category}
                </Link>
              ))}

              {user ? (
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium hover:text-cosmo-deep-pink"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium hover:text-cosmo-deep-pink"
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
