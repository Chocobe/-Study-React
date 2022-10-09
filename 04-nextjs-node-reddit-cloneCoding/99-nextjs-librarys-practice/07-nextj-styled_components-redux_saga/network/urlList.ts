const urlList = {
  retrieveNews: () => ({
    url: process.env.NEXT_PUBLIC_NEWS_API_ENDPOINT!,
    params: {
      apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY!,
      country: "kr",
    },
  }),
};

export default urlList;