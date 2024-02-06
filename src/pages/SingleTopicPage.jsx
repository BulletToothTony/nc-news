import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopicsByTopicType } from "../utils/fetch";
import SingleArticle from "../components/SingleArticle";

const SingleTopicPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { topictype } = useParams();

  useEffect(() => {
    getTopicsByTopicType(topictype).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="articleListDiv">
      {articles.map((article) => {
        return (
          <SingleArticle
            key={article.article_id}
            article={article}
          />
        );
      })}
    </div>
  );
};

export default SingleTopicPage;
