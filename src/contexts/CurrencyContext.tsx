import React, { createContext, useContext, useEffect, useState } from 'react';

export type CurrencyRate = {
  currency: string;
  rate: number;
};

type CurrencyContextType = {
  rates: CurrencyRate[];
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  getRateForCurrency: (currency: string) => number;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();

        if (data.result === 'success' && typeof data.rates === 'object') {
          const fetchedRates: CurrencyRate[] = Object.entries(data.rates).map(
            ([currency, rate]) => ({
              currency,
              rate: Number(rate),
            })
          );
          setRates(fetchedRates);
        }
      } catch (error) {
        console.error('Failed to fetch currency rates:', error);
      }
    };

    fetchRates();
  }, []);

  const getRateForCurrency = (currency: string): number => {
    return rates.find((r) => r.currency === currency)?.rate ?? 1;
  };

  return (
    <CurrencyContext.Provider
      value={{
        rates,
        selectedCurrency,
        setSelectedCurrency,
        getRateForCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
