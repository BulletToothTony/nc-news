import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://be-nc-news-fz91.onrender.com/api/",
  });

export const deleteCommentUtil = async (commentID) => {
    console.log(commentID)

    

    const response = await newsAPI.delete(`/comments/${commentID}`);

    return response
}