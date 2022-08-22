import axios from 'axios';

const exchangeRatesApi = axios.create({
    baseURL: `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3`,
});

exchangeRatesApi.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export const getExchangeRates = () => exchangeRatesApi.get();
