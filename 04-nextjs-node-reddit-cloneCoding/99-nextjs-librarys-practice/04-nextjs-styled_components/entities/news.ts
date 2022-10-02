type NewsItem = {
  source: {
    id: string | null;
    name: string | undefined;
  },
  author: null,
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};

export default NewsItem;