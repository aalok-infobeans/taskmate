import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useState Example</h1>
      <p>
        In React, useState is a Hook that allows functional components to manage
        state. It enables components to "remember" values and update them,
        triggering re-renders when the state changes.{" "}
      </p>
      <h4>Counter</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default Counter;
