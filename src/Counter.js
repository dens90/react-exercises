import { useEffect, useState } from "react";

const Counter = ({ initialValue = 0, onCounterChange }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log(`the counter is now ${count}`);
  }, [count, onCounterChange]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => 
       myInterval ? clearInterval(myInterval) : null
    ;
  }, []);

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
      <h3>{count}</h3>
      <h3>Myinterval </h3>
    </div>
  );
};
export default Counter;
