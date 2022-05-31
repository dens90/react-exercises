import useGithubUsers from "./useGithubUser";

const GithubUser = () => {
  const { users, isloading, error, handleRefreshUsers } =
    useGithubUsers("dens90");
  console.log(users);
  return (
    <div>
      <button onClick={handleRefreshUsers}> Refresh</button>
      {!isloading && <h3>Loading...</h3>}
      {error && <h3>An error has occured</h3>}
      {users && !error && (
        <ul>
          <li key={users.name}>{users.name}</li>
        </ul>
      )}
    </div>
  );
};

export default GithubUser;

// on git
