import RestClient from "./RestClient";
import UrlList from "./UrlList";

const ApiManager = {
  // news
  retrieveNews: (category: string) => {
    return RestClient.get(
      UrlList.retrieveNews,
      { category }
    );
  },
};

export default ApiManager;