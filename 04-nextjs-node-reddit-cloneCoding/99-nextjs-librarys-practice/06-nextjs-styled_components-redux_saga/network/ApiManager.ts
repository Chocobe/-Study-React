import RestClient from "./RestClient";
import UrlList from "./UrlList";

const ApiManager = {
  // news
  retrieveNews: (category: string) => {
    const params = {
      apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY!,
      country: "kr",
      category,
    };
    
    return RestClient.get(UrlList.retrieveNews(), params);
  },
};

export default ApiManager;