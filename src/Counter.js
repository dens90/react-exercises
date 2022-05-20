import { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const handleCounterIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleCounterReset = () => {
    setCount(initialValue);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleCounterIncrement}>Increment </button>
      <button onClick={handleCounterReset}>Reset </button>
    </div>
  );
};
export default Counter;
