import { Link } from "react-router-dom";

const SingleArticle = ({article}) => {
    return (
        <div className="singleArticleDiv">

            <p>{article.title}</p>
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt="" />
            <p>votes: {article.votes}</p>
            
            </Link>
        </div>
    )
}

export default SingleArticle;