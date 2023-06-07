import { useSelector } from "react-redux";
import News from "../../components/news/news";

const PopularNews = () => {
  const { popularNews, popularNewsError, isLoading } = useSelector(
    (store) => store.counter || {}
  );

  return (
    <div>
      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <News
          news={popularNews}
          error={popularNewsError}
          title="Popular News"
        />
      )}
    </div>
  );
};

export default PopularNews;
