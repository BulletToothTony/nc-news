import { useState } from "react"

const SingleArticleID = ({article, articleVoteHandler}) => {
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
        <div>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt="" />
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>votes: {article.votes}</p>

            <button onClick={() => {articleVoteHandler(article.article_id, 'inc'), buttonUpDisableHandler()}} disabled={disableUpButton}>Vote up</button>
            <button onClick={() => {articleVoteHandler(article.article_id, 'dec'), buttownDownDisableHandler()}} disabled={disabledDownButton}>Vote down</button>
  


            <p>{article.body}</p>
        </div>
    )
}

export default SingleArticleID;