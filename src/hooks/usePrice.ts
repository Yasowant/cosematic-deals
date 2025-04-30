import { useCurrency } from '@/contexts/CurrencyContext';

export const usePrice = () => {
  const { selectedCurrency, getRateForCurrency } = useCurrency();

  const convert = (priceInUSD: number): string => {
    const rate = getRateForCurrency(selectedCurrency);
    const converted = (priceInUSD * rate).toFixed(2);
    return `${selectedCurrency} ${converted}`;
  };

  return { convert };
};
