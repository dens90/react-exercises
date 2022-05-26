import { useEffect } from "react";
import useGithubUsers from "./useGithubUser";

const GithubUser = ({ username }) => {
  const [data, loading, error, getDataFetch] = useGithubUsers(username);

  const getFetch = () => {
    getDataFetch(username);
  };
  
  return (
    <div>
      <button onClick={getFetch}>Load user data</button>
      {data && <h1>Name: {data.name}</h1>}
    </div>
  );
};

export default GithubUser;
