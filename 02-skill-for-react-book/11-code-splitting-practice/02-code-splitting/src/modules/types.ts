export type NewsItemType = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

export type NewsModule = {
  newsItems: NewsItemType[];
};