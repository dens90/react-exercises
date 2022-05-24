import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleCounterIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleCounterDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleCounterReset = () => {
    setCount(initialValue);
  };

  return {
    count: count,
    incrementCount: handleCounterIncrement,
    decrementCount: handleCounterDecrement,
    resetCount: handleCounterReset,
  };
};

export default useCounter;
