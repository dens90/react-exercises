import React from "react";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Form from "./Form";
import GithubUser from "./GithubUser";

const App = () => {
  const onCounterChange = (count) => {
    return count;
  };
  return (
    <div>
      <Welcome name={"dennis"} />
      <Sum />
      <Counter onCounterChange={onCounterChange}  />
      <Form />
      <GithubUser  username='dens90'/>
    </div>
  );
};

export default App;
