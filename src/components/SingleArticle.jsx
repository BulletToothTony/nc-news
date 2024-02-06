import { Link } from "react-router-dom";

const SingleArticle = ({article, articleVoteHandler}) => {
    return (
        <div className="singleArticleDiv">

            <p>{article.title}</p>
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt="" />
            </Link>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>votes: {article.votes}</p>
            <button onClick={() => {articleVoteHandler(article.article_id, 'inc')}}>Vote up</button>
            <button onClick={() => {articleVoteHandler(article.article_id, 'dec')}}>Vote down</button>
            
            
        </div>
    )
}

export default SingleArticle;