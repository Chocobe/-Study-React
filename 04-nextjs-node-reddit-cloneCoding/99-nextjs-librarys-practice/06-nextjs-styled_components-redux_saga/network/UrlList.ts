const UrlList = {
  // news
  retrieveNews: (
    queryString: string = ""
  ) => `https://newsapi.org/v2/top-headlines${queryString}`,
};

export default UrlList;