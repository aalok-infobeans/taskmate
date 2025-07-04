import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useState Example</h1>
      <p>
        In React, useState is a Hook that allows functional components to manage
        state. It enables components to "remember" values and update them,
        triggering re-renders when the state changes.
      </p>
      <h4>Here's a breakdown:</h4>
      <ol>
        <li>
          <b>Declaring State:</b>
          <br />
          <p>
            <br />
            useState is called with an initial value, which can be a primitive
            (number, string, boolean), an object, or an array.{" "}
          </p>
          <p>
            useState returns an array containing two elements: the current state
            value and a function to update it.{" "}
          </p>
          <p>
            Typically, array destructuring is used to easily access these
            elements, like
            <br />
            <code>const [count, setCount] = useState(0);</code>
          </p>
        </li>
        <li>
          <b>Updating State:</b>
          <p>
            The returned function (e.g., setCount) is used to update the state
            value.{" "}
          </p>
          <p>
            Calling this function triggers a re-render of the component with the
            updated state
          </p>
          <p>
            The update is asynchronous, meaning the state may not be updated
            immediately after the setter function is called.{" "}
          </p>
        </li>
        <li>
          <b>Key Concepts:</b>
          <p>
            Functional Components: useState is used in functional components,
            not class components.{" "}
          </p>
          <p>
            <b>Re-renders:</b> When state is updated, the component re-renders
            to reflect the change.{" "}
          </p>
          <p>
            <b>Asynchronous Updates:</b> State updates are asynchronous; the
            component re-renders after the state is updated.{" "}
          </p>
          <p>
            <b>Initial State:</b> The initial state provided to useState
            determines the starting value of the state variable.{" "}
          </p>
          <p>
            <b>State Management:</b> useState is a fundamental tool for managing
            stateful data within React components.{" "}
          </p>
        </li>
      </ol>

      <h4>Counter</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default Counter;
