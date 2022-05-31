import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUsers = (username) => {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const handleRefreshUsers = () => {
    mutate()
  }
  return {
    users: data,
    error,
    isLoading: !data && !error,
    handleRefreshUsers
  };
};

export default useGithubUsers;
