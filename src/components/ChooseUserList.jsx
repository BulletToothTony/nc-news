const ChooseUserList = ({ users, setUserHandler }) => {
  return (
    <div>
        <h2>Please choose a user to login as</h2>
    
    <div style={{display: "flex", flexWrap: "wrap"}}>
        
      {users.map((user) => {
        return (
          <div key={user.username} onClick={() => setUserHandler(user.username)}>
            <img src={user.avatar_url}></img>
            <p >{user.username}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ChooseUserList;
