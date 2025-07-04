import Button from "./Button";
import { useCallback, useState } from "react";
const ParentUseCallback = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h1 className="text-center">useCallback Example</h1>
      <p>
        The useCallback hook in React is a built-in hook used for performance
        optimization by memoizing (caching) a function. It prevents unnecessary
        re-creations of functions on every render, which can be beneficial when
        passing functions as props to child components or when using functions
        in dependencies of other hooks like useEffect or useMemo.
      </p>
      <h4>How it works:</h4>
      <p>
        <b>useCallback</b> takes two arguments:
      </p>
      <ol>
        <li>
          A function that you want to memoize. This function will only be
          recreated when its dependencies change.
        </li>
        <li>
          An array of dependencies. These are the values that, if changed, will
          trigger a re-creation of the function.
        </li>
      </ol>
      <p>
        <b>useCallback</b> returns a memoized version of the function that only
        changes if one of the dependencies has changed. This is useful for
        preventing unnecessary re-renders of child components that rely on the
        function as a prop, or for optimizing performance in cases where the
        function is expensive to create.
      </p>
      <code>
        <pre>{`const memoizedFunction = useCallback(() => {
  // Function logic here
}, [dependency1, dependency2]);`}</pre>
      </code>
      <h4>When to use useCallback:</h4>
      <p>
        <b>Performance optimization:</b> When you have a function that is passed
        as a prop to a child component, and you want to prevent that child from
        re-rendering unnecessarily when the parent component re-renders.
      </p>
      <p>
        <b>Referential equality:</b> When you need to maintain referential
        equality of a function, especially when using it in dependencies of
        other hooks like useEffect or useMemo. This ensures that the function
        does not change unless its dependencies change, preventing unnecessary
        re-renders or re-computations.
      </p>
      <p>
        <b>Event handlers:</b> When you have event handlers that are passed to
        child components, and you want to ensure that the same function instance
        is used across renders, preventing the child from re-rendering unless
        necessary.
      </p>
      <p>
        <b>Complex functions:</b> When you have a function that is expensive to
        create or compute, and you want to avoid re-creating it on every render,
        especially if it is used in multiple places within the component.
      </p>
      <p>
        <b>Note:</b> While useCallback can help with performance optimization,
        it should be used judiciously. Overusing it can lead to unnecessary
        complexity and can actually hurt performance if not used correctly. It
        is best used when you have a clear performance bottleneck or when you
        are passing functions as props to child components that are wrapped in
        React.memo or similar optimizations.
      </p>
      <h4>Example:</h4>
      <p>
        In this example, we have a button that increments a count. The
        handleClick function is memoized using useCallback, so it will not be
        recreated on every render unless the dependencies change. This is useful
        if the button is passed down to child components or used in other hooks
        that depend on it.
      </p>

      <Button onClick={handleClick} />
      <p>Count= {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Me Parent
      </button>
    </>
  );
};

export default ParentUseCallback;
