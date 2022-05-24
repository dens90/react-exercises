import React, { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [username]);

  return <div>{data && <h1>Name {data.name}</h1>}</div>;
};

export default GithubUser;
