import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://be-nc-news-fz91.onrender.com/api/",
  });

export const postComment = async (id, {commentBody}) => {
    console.log(id, commentBody)

    const body = {
        username: "happyamy2016",
        body: commentBody,
      };

    const response = await newsAPI.post(`/articles/${id}/comments`, body);

    return response
}