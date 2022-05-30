import { useState } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import GithubUser from "./GithubUser";
import ShowGithubUsers from "./ShowGithubUser";

const GithubUserList = () => {
  const [users, setUsers] = useState(["dens90"]);

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
              <Link to={`/users/${user}`}>{user}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};
export default GithubUserList;
