import React from "react";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Form from "./Form";

const App = () => {
  const onCounterChange = (count) => {
    return count;
  };
  return (
    <div>
      <Welcome name={"dennis"} />
      <Sum />
      <Counter onCounterChange={onCounterChange} />
      <Form />
    </div>
  );
};

export default App;
