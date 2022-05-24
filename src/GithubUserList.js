import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  const findUsers = (e) => {
    e.preventDefault();

    setUsers([...users, e.target.elements.input.value]);
  };
  return (
    <div>
      <form onSubmit={findUsers}>
        <input type="text" name="input" />
        <button type="submit">add</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <GithubUser username={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default GithubUserList;
