import { useSelector } from "react-redux";
import News from "../../components/news/news";

const LatestNews = () => {
  const { latestNews, latestNewsError, isLoading } = useSelector(
    (store) => store.counter || {}
  );

  return (
    <div>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      )}
    </div>
  );
};

export default LatestNews;
