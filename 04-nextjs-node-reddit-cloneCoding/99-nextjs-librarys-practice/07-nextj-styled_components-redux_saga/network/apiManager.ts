import urlList from "./urlList";
import restClient from "./restClient";

const apiManager = {
  // news
  retrieveNews: (category: string) => {
    const {
      url,
      params,
    } = urlList.retrieveNews();

    return restClient.get(
      url,
      { ...params, category }
    );
  },
};

export default apiManager;