import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentByArticle } from "../utils/fetch";
import SingleArticle from "../components/SingleArticle";
import SingleArticleID from "../components/SingleArticleID";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { deleteCommentUtil } from "../utils/delete";
import Error from "../components/Error";

import { UserContext } from '../contexts/User'
import { useContext } from 'react'

const SingleArticlePage = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { id } = useParams();

  const {user} = useContext(UserContext)

  useEffect(() => {
    getArticleById(id).then((response) => {
      setSingleArticle(response.data);
      setIsLoading(false);
    }).catch((err) => {
      setError({msg: err.response.data.msg, status: err.response.status})
      setIsLoading(false)
    });
    getCommentByArticle(id).then((response) => {
      setComments(response.data);
    });
  }, []);

  const submitCommentHandler = (id, body) => {
    setComments([
      {
        article_id: id,
        author: user,
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

  // const editCommentHandler = (id) => {
    
  // }

  const setErrorHandler = () => {

  }
  if (isLoading) return <p>Loading...</p>;
  if (error) return <Error error={error} />
  return (
    <div className="singleArticlePageDiv">
      <SingleArticleID article={singleArticle} />
      <CommentList
        deleteCommentHandler={deleteCommentHandler}
        id={id}
        comments={comments}
        user={user}
      />
      <CommentForm user={user} id={id} submitCommentHandler={submitCommentHandler} />
    </div>
  );
};

export default SingleArticlePage;
