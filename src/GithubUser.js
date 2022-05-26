import useGithubUsers from "./useGithubUser";

const GithubUser = ({ username }) => {
  const [data] = useGithubUsers(username);

  return <div>{data && <h1>Name {data.name}</h1>}</div>;
};

export default GithubUser;
