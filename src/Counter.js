import React from "react";
import useCounter from "./useCounter";

const Counter = ({ initialValue = 0 }) => {
  const { count, incrementCount, decrementCount, resetCount } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment </button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset </button>
      <h3>{count}</h3>
      <h3>Myinterval </h3>
    </div>
  );
};
export default Counter;
