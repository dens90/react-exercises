import useGithubUsers from "./useGithubUser";

const GithubUser = () => {
  const { users, isloading, error } = useGithubUsers('dens90');
  console.log(users);
  return (
    <div>
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

// // on git
// <button onClick={onRefresh}> Refresh</button>
//       {!isloading && <h3>Loading...</h3>}

// // onusegit
//       const handleRefreshUsers = () => {
//         mutate()
//       }
