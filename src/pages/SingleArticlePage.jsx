import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentByArticle } from "../utils/fetch";
import SingleArticle from "../components/SingleArticle";
import SingleArticleID from "../components/SingleArticleID";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { deleteCommentUtil } from "../utils/delete";

const SingleArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getArticleById(id).then((response) => {
      setSingleArticle(response.data);
      setIsLoading(false);
    });
    getCommentByArticle(id).then((response) => {
      setComments(response.data);
    });
  }, []);

  const submitCommentHandler = (id, body) => {
    setComments([
      {
        article_id: id,
        author: "happyamy2016",
        body: body.commentBody,
        votes: 0,
      },
      ...comments,
    ]);
  };

  const deleteCommentHandler = (id) => {
    setComments((prevState) => {
      return prevState.filter((comment) => comment.comment_id !== id);
    });

    deleteCommentUtil(id);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="singleArticlePageDiv">
      <SingleArticleID article={singleArticle} />
      <CommentList
        deleteCommentHandler={deleteCommentHandler}
        id={id}
        comments={comments}
      />
      <CommentForm submitCommentHandler={submitCommentHandler} />
    </div>
  );
};

export default SingleArticlePage;
