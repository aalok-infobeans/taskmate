import { useReducer } from "react";
function CounterReducer() {
  const initialState = { count: 0, name: "Aalok" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1 className="text-center">userReducer Example</h1>
      <p>
        The useReducer hook in React is an alternative to useState for managing
        component state, particularly useful when the state logic is complex or
        involves multiple sub-values. It provides a more predictable and
        structured way to handle state transitions.
      </p>
      <h4>
        <b>How it works:</b>
      </h4>
      <p>
        <b>Reducer Function:</b>You define a reducer function that takes the
        current state and an action object as arguments. Based on the
        action.type, this function calculates and returns the new state. It
        should be a pure function, meaning it produces the same output for the
        same input and does not cause side effects.
      </p>
      <p>
        <b>Initial State:</b>You provide an initialState value that represents
        the starting state of your component.
      </p>
      <p>
        <b>useReducer Call:</b>You call useReducer with your reducer function
        and initialState. It returns an array containing:
        <br />
        1. The current state. <br />
        2. A dispatch function.
      </p>
      <p>
        <b>Dispatching Actions:</b>To update the state, you call the dispatch
        function, passing an action object. This action object typically has a
        type property (e.g., 'increment', 'updateName') and can include a
        payload with any necessary data for the state update. When dispatch is
        called, React invokes your reducer function with the current state and
        the dispatched action, and the component re-renders with the new state
        returned by the reducer.
      </p>
      <code>
        <pre>
          const [state, dispatch] = useReducer(reducer, initialState, init);
        </pre>
      </code>
      <ul>
        <li>
          <b>reducer:</b>Your state-managing function.
        </li>
        <li>
          <b>initialState:</b> The initial value of the state.
        </li>
        <li>
          <b>init (optional):</b> An initializer function for lazy
          initialization of the state.
        </li>
      </ul>
      <h4>When to use useReducer:</h4>
      <ul>
        <li>
          Complex state logic: When state updates depend on previous state or
          involve multiple related values.
        </li>
        <li>
          Centralized state management: To consolidate state transition logic in
          a single, testable function.
        </li>
        <li>
          Performance optimization: For components with deep updates, dispatch
          can be passed down without causing unnecessary re-renders in child
          components.
        </li>
      </ul>
      <h4>useReducer example</h4>
      <p>
        The useReducer hook is a powerful tool for managing complex state in
        React applications. It allows you to define a reducer function that
        handles state transitions based on dispatched actions, providing a
        structured and predictable way to manage state updates.
      </p>
      <p>
        In this example, we will create a simple counter application using
        useReducer. The counter will have three actions: increment, decrement,
        and reset. We will define a reducer function to handle these actions and
        use the useReducer hook to manage the counter state.
      </p>
      <h4>Counter: {state.count}</h4>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </>
  );
}

export default CounterReducer;
