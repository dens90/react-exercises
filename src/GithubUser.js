import { useEffect } from "react";
import ShowGithubUsers from "./ShowGithubUser";
import useGithubUsers from "./useGithubUser";

const GithubUser = ({ username }) => {
  const [data, loading, error, getDataFetch] = useGithubUsers(username);

  useEffect(() => {
    getDataFetch(username);
  }, [data]);

  return <div>{data && <h1>Name: {data.name}</h1>}</div>;
};

export default GithubUser;
