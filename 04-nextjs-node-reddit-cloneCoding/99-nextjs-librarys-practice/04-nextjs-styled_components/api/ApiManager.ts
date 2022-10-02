import RestClient from "./RestClient";
import UrlList from "./UrlList";

const ApiManager = {
  retrieveNews: (category: string, callback?: Function) => {
    const params = { category };
    return RestClient.get({
      url: UrlList.retrieveNews(),
      params,
      callback,
    });
  },
};

export default ApiManager;