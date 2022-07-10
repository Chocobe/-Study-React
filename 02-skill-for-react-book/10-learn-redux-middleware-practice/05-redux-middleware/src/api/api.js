import axios from "axios";

const API_KEY = "5d2e3f045d7d4a7e914fbd07978284e2";
const COUNTRY = "kr";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines"
})

export const getNews = (category="business") => instance.get("", {
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
    category,
  },
});
