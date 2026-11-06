import { useState } from "react";
import "../styles/counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1 className="heading">Counter Application</h1>
      <h2 className="count">{count}</h2>
      <button className="increment" onClick={increment}>
        +
      </button>
      <button className="decrement" onClick={decrement}>
        -
      </button>
    </>
  );
};

export default Counter;
