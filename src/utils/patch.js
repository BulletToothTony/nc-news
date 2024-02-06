import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-fz91.onrender.com/api/",
});

export const patchArticleVotes = async (id, direction) => {
  const voteNum = {};

  if (direction === "inc") {
    voteNum.inc_votes = 1;
  } else if (direction === "dec") {
    voteNum.inc_votes = -1;
  }

  const response = await newsAPI.patch(`/articles/${id}`, voteNum);

  return response;
};
