import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopicsByTopicType } from "../utils/fetch";
import SingleArticle from "../components/SingleArticle";
import Error from "../components/Error";

const SingleTopicPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState();
  const { topictype } = useParams();

  useEffect(() => {
    getTopicsByTopicType(topictype).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false)
    }).catch((err) => {
        setError({msg: err.response.data.msg, status: err.response.status})
        setIsLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <Error error={error} />

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
