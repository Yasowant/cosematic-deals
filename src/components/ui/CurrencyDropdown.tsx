import { useState } from 'react';
import { useCurrency } from '@/contexts/CurrencyContext';

const topCurrencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD'];

const CurrencyDropdown = () => {
  const { rates, selectedCurrency, setSelectedCurrency } = useCurrency();
  const [search, setSearch] = useState(selectedCurrency || ''); // Initialize with selected currency
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const filteredRates = rates.filter((rate) =>
    rate.currency.toLowerCase().includes(search.toLowerCase())
  );

  // Show top currencies if no search term
  const displayRates = search
    ? filteredRates
    : rates.filter((rate) => topCurrencies.includes(rate.currency));

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency); // Set the selected currency
    setSearch(currency); // Display the selected currency in the input
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value); // Update search term
    setIsDropdownOpen(value.length > 0); // Open dropdown only if there's text in the input
  };

  return (
    <div className="relative w-full">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search currency"
        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
        value={search} // Display selected currency in the input
        onChange={handleSearchChange} // Update search term and manage dropdown visibility
      />

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg z-10">
          {displayRates.map((rate) => (
            <div
              key={rate.currency}
              className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCurrencySelect(rate.currency)} // Select currency on click
            >
              {rate.currency}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
