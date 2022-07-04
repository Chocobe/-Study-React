import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const KEY = "5d2e3f045d7d4a7e914fbd07978284e2";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const NEWS_API_COUNTRY = {
  KR: "kr",
  US: "us",
}

export const NEWS_API_CATEGORY = {
  BUSINESS: "business",
  ENTERTAINMENT: "entertainment",
  HEALTH: "health",
  SCIENCE: "science",
  SPORTS: "sports",
  TECHNOLOGY: "technology",
};

export const get = ({
  country = NEWS_API_COUNTRY.US,
  category = NEWS_API_CATEGORY.TECHNOLOGY,
}) => {
  return instance.get("", {
    params: {
      apiKey: KEY,
      country,
      category,
    },
  });
};
