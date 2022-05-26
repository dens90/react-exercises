import { useEffect, useState } from "react";

const useGithubUsers = (username) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [username]);

  return [data];
};

export default useGithubUsers;
