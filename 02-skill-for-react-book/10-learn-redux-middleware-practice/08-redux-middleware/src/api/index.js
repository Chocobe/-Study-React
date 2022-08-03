import axios from "axios";

const END_POINT = "https://newsapi.org/v2/top-headlines";
const API_KEY = "5d2e3f045d7d4a7e914fbd07978284e2";
const COUNTRY = "kr";

const instance = axios.create({
  baseURL: END_POINT,
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
  },
});

export const getNews = category => instance.get(
  "",
  { params: { category }}
);