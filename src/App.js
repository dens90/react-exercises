import React from "react";
import Sum from "./Sum";
import Counter from "./Counter";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <Welcome name={"dennis"} />
      <Sum />
      <Counter />
    </div>
  );
};

export default App;
