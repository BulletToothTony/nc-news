import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-fz91.onrender.com/api/",
});

export const postComment = async (id, { commentBody }, user) => {
  const body = {
    username: user,
    body: commentBody,
  };

  const response = await newsAPI.post(`/articles/${id}/comments`, body);

  return response;
};

export const postNewArticle = async (body, user) => {
  const articleBody = {
    ...body,
    author: user
  }

  try {
    const response = await newsAPI.post(`/articles/`, articleBody)
    
    return response

  }

  catch(err) {
    return Promise.reject(err)
}
}