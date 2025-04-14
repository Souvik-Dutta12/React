// useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({ conversionRates: {}, currencyCodes: [] });

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const res = await fetch(`https://v6.exchangerate-api.com/v6/112cf1a4842e60f4298cde84/latest/${currency}`);
                const json = await res.json();

                if (json && json.conversion_rates) {
                    // Return both conversion rates and currency codes
                    const conversionRates = json.conversion_rates;
                    const currencyCodes = Object.keys(conversionRates); // Get currency codes
                    setData({ conversionRates, currencyCodes });
                } else {
                    console.error("Invalid response structure:", json);
                    setData({ conversionRates: {}, currencyCodes: [] });
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({ conversionRates: {}, currencyCodes: [] });
            }
        };

        fetchCurrencyData();
    }, [currency]); // Re-run whenever `currency` changes

    return data;
}

export default useCurrencyInfo;
