import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
  params: {
    apiKey: "5d2e3f045d7d4a7e914fbd07978284e2",
    country: "kr",
  },
})

// country=kr&category=business

export const getNews = category => {
  return instance.get("", {
    params: { category },
  });
}