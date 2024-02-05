import axios from "axios";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/fetch";


const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response.data.articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>



    
    return (
        <div className="articleListDiv">
        {articles.map((article) => {
            return (
                <SingleArticle key={article.article_id} article={article}/>
            )
        })}
        </div>
    )
}

export default ArticleList;