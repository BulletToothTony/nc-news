import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentByArticle } from "../utils/fetch";
import SingleArticle from "../components/SingleArticle";
import SingleArticleID from "../components/SingleArticleID";
import CommentList from "../components/CommentList";

const SingleArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getArticleById(id).then((response) => {
      setSingleArticle(response.data)
      setIsLoading(false);
    });
    getCommentByArticle(id).then((response) => {
        setComments(response.data)
    })
  }, []);

  if (isLoading) return <p>Loading...</p>
  return (
    <div className="singleArticlePageDiv">

        <SingleArticleID article={singleArticle} />
        <CommentList comments={comments}/>
    </div>
  ) 
};

export default SingleArticlePage;
