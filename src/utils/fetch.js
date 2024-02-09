import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://be-nc-news-fz91.onrender.com/api/'
})

export const getArticles = async(dropdownValue) => {
    // const response = await newsAPI.get(`/articles`, {params: {dropdownValue: dropdownValue}})
    const response = await newsAPI.get(`/articles`)

    if (dropdownValue) {
        const response = await newsAPI.get(`/articles?sort_by=${dropdownValue}`)
        return response
    }
    return response
   
    
}

export const getArticleById = async(id) => {

    try {
        const response = await newsAPI.get(`/articles/${id}`)
        return response
    }

    catch(err) {
        return Promise.reject(err)
    }


}

export const getCommentByArticle = async(id) => {
    try {
        const response = await newsAPI.get(`/articles/${id}/comments`)
        return response

    }
    catch(err) {
        return Promise.reject(err)
    }
}

export const getTopics = async() => {
    const response = await newsAPI.get(`/topics`)
    return response
}

export const getTopicsByTopicType = async(topic) => {

    try {
        const response = await newsAPI.get(`/articles?topic=${topic}`)
        return response

    }

    catch(err) {
        return Promise.reject(err)
    }
}

export const getAllUsers = async () => {
    const response = await newsAPI.get(`/users`)
    return response 
}

export const getSingleUser = async (username) => {
    const response = await newsAPI.get(`/users/${username}`)
    return response 
}



