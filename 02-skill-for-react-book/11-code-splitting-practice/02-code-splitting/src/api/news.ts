import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "5d2e3f045d7d4a7e914fbd07978284e2";
const COUNTRY = "kr";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
  },
});

export const getNews = (category: string) => {
  return instance.get("", {
    params: { category },
  });
};