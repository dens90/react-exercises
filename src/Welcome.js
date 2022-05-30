import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = ({ name }) => {
  return (
    <div className="Welcome">
      {name}
      <p>Hello World</p>
    </div>
  );
};

export default Welcome;
