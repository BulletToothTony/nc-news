import { useState } from "react";
import { Link } from "react-router-dom";

const SingleArticle = ({article, articleVoteHandler}) => {
    const [disableUpButton, setDisableUpButton] = useState(false)
    const [disabledDownButton, setDisabledDownButton] = useState(false)

    const buttonUpDisableHandler = () => {
        setDisableUpButton(true)
        setDisabledDownButton(false)
    }

    const buttownDownDisableHandler = () => {
        setDisabledDownButton(true)
        setDisableUpButton(false)
    }

    return (
        <div className="singleArticleDiv">

            <p>{article.title}</p>
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt="" />
            </Link>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>votes: {article.votes}</p>
            <p>date: {article.created_at}</p>
            <p>comments: {article.comment_count}</p>
            <button onClick={() => {articleVoteHandler(article.article_id, 'inc'), buttonUpDisableHandler()}} disabled={disableUpButton}>Vote up</button>
            <button onClick={() => {articleVoteHandler(article.article_id, 'dec'), buttownDownDisableHandler()}} disabled={disabledDownButton}>Vote down</button>
            
            
        </div>
    )
}

export default SingleArticle;