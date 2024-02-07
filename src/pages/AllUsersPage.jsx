import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/fetch";
import { Link } from "react-router-dom";

const AllUsersPage = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {users.map((item) => {
        return (
          <div>
            <h1>{item.username}</h1>
            <Link to={item.username}>
              <img src={item.avatar_url} alt={item.username} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllUsersPage;
