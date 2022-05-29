import React from "react";

const Welcome = ({ name }) => {
  return (
    <div className="Welcome">
      {name}
      <p>Hello World</p>
    </div>
  );
};

export default Welcome;
