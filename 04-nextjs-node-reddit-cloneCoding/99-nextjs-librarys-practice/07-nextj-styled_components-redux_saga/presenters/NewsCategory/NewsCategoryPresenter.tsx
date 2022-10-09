import NewsCard, {
  NewsCardProps,
} from "./NewsCard";

export type NewsCategoryPresenterProps = {
  newsItems: NewsCardProps[];
};

function NewsCategoryPresenter(props: NewsCategoryPresenterProps) {
  const { newsItems } = props;
  
  return (
    <div>
      {newsItems.map((news, idx) => {
        const {
          thumbnailUrl,
          title,
          content,
        } = news;

        return (
          <NewsCard
            key={idx}
            thumbnailUrl={thumbnailUrl}
            title={title}
            content={content}
          />
        );
      })}
    </div>
  );
}

export default NewsCategoryPresenter;