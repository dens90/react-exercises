import React from "react";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Form from "./Form";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";

const App = () => {
  const onCounterChange = (count) => {
    return count;
  };
  return (
    <div>
      
      {/* <Sum /> */}
      <Counter />
      {/* <Form /> */}
      {/* <GithubUser  username='dens90'/> */}
      {/* <GithubUserList name /> */}
    </div>
  );
};

export default App;
