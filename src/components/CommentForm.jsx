import { useState } from "react";
import { postComment } from "../utils/post";

const CommentForm = ({ id, submitCommentHandler }) => {
  const [username, setUsername] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    setIsSubmitted(false);
  };

  const commentBodyHandler = (e) => {
    setCommentBody(e.target.value);
    setIsSubmitted(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const body = { commentBody };

    // optimistic rendering
    submitCommentHandler(id, body);
    // post request with username and body
    postComment(id, body);

    setIsSubmitted(true);
    setUsername("");
    setCommentBody("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="username">Username</label>
      <br />
      <input
        required
        value={username}
        onChange={usernameHandler}
        type="text"
        id="username"
      />
      <br />

      <label htmlFor="commentText">Comment</label>
      <br />
      <textarea
        required
        value={commentBody}
        onChange={commentBodyHandler}
        name="commentText"
        id="commentText"
        cols="30"
        rows="10"
      ></textarea>

      <br />
      <button type="submit">Submit</button>

      {isSubmitted && <p>Comment Submitted!</p>}
    </form>
  );
};

export default CommentForm;
