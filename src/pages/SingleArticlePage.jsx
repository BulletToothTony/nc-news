import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/fetch";
import SingleArticle from "../components/SingleArticle";
import SingleArticleID from "../components/SingleArticleID";

const SingleArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getArticleById(id).then((response) => {
      setSingleArticle(response.data)
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>
  return (
    <div className="singleArticlePageDiv">

        <SingleArticleID article={singleArticle} />
    </div>
  ) 
};

export default SingleArticlePage;
