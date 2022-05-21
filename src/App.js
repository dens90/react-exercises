import React from "react";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";
import Form from "./Form";


const App = () => {
  return (
    <div>
      <Welcome name={"dennis"} />
      <Sum />
      <Counter />
      <Form />
    </div>
  );
};

export default App;
