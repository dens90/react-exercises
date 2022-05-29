import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowGithubUsers = () =>{

    const {username} = useParams()
    return(
       
        <Link to={'/page1'}>page1</Link>
    )
}

export default ShowGithubUsers