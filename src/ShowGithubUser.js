import React from "react";
import { useParams } from "react-router-dom";

const ShowGithubUsers = () =>{

    const {username} = useParams()
    return(
        <h1>Hello {username}</h1>
    )
}

export default ShowGithubUsers