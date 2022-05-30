import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GithubUser from "./GithubUser";

const ShowGithubUsers = () => {
  const { username } = useParams();
  return <GithubUser username={username} />;
};

export default ShowGithubUsers;
