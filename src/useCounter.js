import { useCallback, useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCount((count) => count + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCount((count) => count - 1);
  }, []);

  const handleCounterReset = useCallback(function handleCounterReset() {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count: count,
    incrementCount: handleCounterIncrement,
    decrementCount: handleCounterDecrement,
    resetCount: handleCounterReset,
  };
};

export default useCounter;
