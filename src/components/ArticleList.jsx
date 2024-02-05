import axios from "axios";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getArticles = async () => {
        const response = await axios.get('https://be-nc-news-fz91.onrender.com/api/articles/')


        console.log(response.data)

        setArticles(response.data.articles)

        

        setIsLoading(false)

        
    }

    useEffect(() => {
        getArticles()
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