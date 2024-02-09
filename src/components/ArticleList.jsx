import axios from "axios";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/fetch";
import { patchArticleVotes } from "../utils/patch";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [dropdownValue, setDropdownValue] = useState('created_at&order=desc')

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value)
  }

  useEffect(() => {
    getArticles(dropdownValue).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
    });
  }, [dropdownValue]);

  if (isLoading) return <p>Loading...</p>;

  const articleVoteHandler = async (id, direction) => {
    let inc_votes;

    if (direction === "inc") {
      inc_votes = 1;
    } else if (direction === "dec") {
      inc_votes = -1;
    }

    let updatedArticles = articles.map((article) => {
      if (article.article_id === id) {
        return { ...article, votes: (article.votes += inc_votes) };
      }

      return article;
    });

    setArticles(updatedArticles);

    patchArticleVotes(id, direction);
  };

  return (
    <div className="articleListDiv">
      <div style={{width:"100%"}}>
        <label>
          Sort by
          <select onChange={handleDropdownChange}>
          <option value="created_at&order=asc">Date low to high</option>

          <option value="created_at&order=desc">Date high to low</option>

            <option value="votes&order=asc">Votes low to high</option>

            <option value="votes&order=desc">Votes high to low</option>

            

            <option value="comment_count&order=asc">Comments count low to high</option>

            <option value="comment_count&order=desc">Comments count high to low</option>

          </select>
        </label>
      </div>
 

      {articles.map((article) => {
        return (
          <SingleArticle
            key={article.article_id}
            article={article}
            articleVoteHandler={articleVoteHandler}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;
