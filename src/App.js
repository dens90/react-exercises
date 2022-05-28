import React from "react";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Form from "./Form";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import FilteredList from "./FilteredList";
import CarDetails from "./CarDetails";

const App = () => {
  const onCounterChange = (count) => {
    return count;
  };
  return (
    <div>
      <CarDetails initialData={{model:'', year:'', color:''}}/>
      {/* <Sum /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <GithubUser  username='dens90'/> */}
      {/* <GithubUserList name /> */}
      {/* <FilteredList /> */}
    </div>
  );
};

export default App;
