export type CurrencyRate = {
  currency: string;
  rate: number;
};

export const fetchAllRates = async (): Promise<CurrencyRate[]> => {
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await response.json();
    console.log('Currency API response:', data);
    if (data.result === 'success' && typeof data.rates === 'object') {
      return Object.entries(data.rates).map(([currency, rate]) => ({
        currency,
        rate: Number(rate), // Ensure it's a number
      }));
    } else {
      console.error('Failed to fetch exchange rates:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    return [];
  }
};
