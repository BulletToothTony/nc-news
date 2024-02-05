import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://be-nc-news-fz91.onrender.com/api/'
})

export const getArticles = async() => {
    const response = await newsAPI.get(`/articles`)
    return response
}

export const getArticleById = async(id) => {
    const response = await newsAPI.get(`/articles/${id}`)
    return response
}

export const getCommentByArticle = async(id) => {
    const response = await newsAPI.get(`/articles/${id}/comments`)
    return response
}




