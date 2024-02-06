import { useEffect, useState } from "react";
import { getTopics } from "../utils/fetch";
import { Link } from "react-router-dom";

const AllTopicsPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response.data);
    });
  }, []);

  return (
    <div>
      <h1>All topics page</h1>

      {topics.map((topic, index) => {
        return (
          <Link to={topic.slug} key={index}>
            <div style={{ border: "1px solid black", margin: "5px" }}>
              <h2>{topic.slug}</h2>
              <h3>{topic.description}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllTopicsPage;
