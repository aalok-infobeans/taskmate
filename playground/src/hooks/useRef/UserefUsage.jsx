import { useRef } from "react";

const UserefUsage = () => {
  const inputRef = useRef(null); // Step 1: Create a ref
  const handleFocus = () => {
    inputRef.current.focus(); // Step 3: Use ref to focus the input
  };
  return (
    <>
      <h2>useRef Hook</h2>
      <p>
        useRef is a React Hook used to create a mutable reference object whose
        .current property persists across component renders without causing
        re-renders when its value changes. It serves two primary purposes:
        accessing and interacting with DOM elements, and storing mutable values
        that persist across renders without triggering re-renders.
      </p>

      <h4>Key uses of useRef:</h4>
      <p>
        <b>Accessing DOM Elements:</b>
        You can attach a ref to a JSX element using the ref prop, and useRef
        will provide a direct reference to that DOM node, allowing you to
        perform operations like focusing input fields or managing animations.
      </p>
      <p>
        <b>Persisting Values Across Renders:</b>
        Unlike useState which triggers a re-render when updated, useRef can
        store any mutable value (like a previous state, a timer ID, or a
        counter) that needs to persist between renders without causing the
        component to re-render unnecessarily. This makes it ideal for scenarios
        where you need to track or store data that doesn't directly impact the
        UI's rendering cycle.
      </p>
      <h4>Important Considerations:</h4>
      <p>
        While useRef can store mutable values, it's not a substitute for
        useState when you need the UI to update in response to data changes.
        Updating a ref's .current property does not cause a re-render.
      </p>
      <p>
        <b>
          Immutability vs. Mutability: useRef returns a mutable object, allowing
          you to directly modify its .current property. This differs from values
          managed by useState, which are generally updated through setter
          functions that trigger re-renders.{" "}
        </b>
      </p>
      <div className="useRef">
        <input ref={inputRef} type="text" placeholder="Click button to focus" />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    </>
  );
};

export default UserefUsage;
