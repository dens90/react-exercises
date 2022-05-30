import useGithubUsers from "./useGithubUser";

const GithubUser = () => {
  const { users, isloading, error } = useGithubUsers();

  return (
    <div>
      {!isloading && <h3>Loading...</h3>}
      {error && <h3>An error has occured</h3>}
      {users && !error && (
        <ul>
          {users.map((user) => {
            return <li key={user.login}>{user.login}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default GithubUser;
