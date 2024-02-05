const SingleArticleID = ({article}) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt="" />
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>votes: {article.votes}</p>


            <p>{article.body}</p>
        </div>
    )
}

export default SingleArticleID;