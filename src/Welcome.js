import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = ({ name }) => {


const navigate = useNavigate()

const spostati = () => {
  navigate("/counter")
}

  return (
    <div className="Welcome">
      {name}
      <p>Hello World</p>
      <button onClick={spostati}>spostatti su welcome</button>
    </div>
  );
};

export default Welcome;
