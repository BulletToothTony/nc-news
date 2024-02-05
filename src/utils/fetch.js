import axios from 'axios'

export const getArticles = async() => {
    const response = await axios.get(`https://be-nc-news-fz91.onrender.com/api/articles/`)
    return response
}

export const getArticleById = async(id) => {
    const response = await axios.get(`https://be-nc-news-fz91.onrender.com/api/articles/${id}`)
    return response
}


