import { useLayoutEffect, useState } from "react";
const BackgroundChange = () => {
  const [color, setColor] = useState("");
  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div className="description">
        <h1 className="text-center">Usage of useLayoutEffect</h1>
        <p>
          useLayoutEffect is a React Hook that functions similarly to useEffect,
          but with a crucial difference in its timing. While useEffect runs
          asynchronously after the browser has painted the screen,
          useLayoutEffect runs synchronously immediately after React has
          performed all DOM mutations, but before the browser paints the screen.
        </p>
        <p>
          This synchronous execution makes useLayoutEffect ideal for scenarios
          where you need to perform DOM measurements or manipulations that
          directly affect the layout or visual appearance of your component
          before the user sees the updated UI. Examples include:
        </p>
        <p>
          <b>Measuring DOM elements:</b>
          <br />
          Getting the dimensions or position of an element to adjust another
          element's position or size (e.g., positioning a tooltip relative to
          its target).
        </p>
        <p>
          <b>Preventing layout "flashing" or "flickering":</b>
          <br />
          When a component needs to render, then immediately re-render based on
          a measurement or calculation, useLayoutEffect ensures the second
          render happens before the browser paints, preventing the user from
          seeing an intermediate, incorrect state.
        </p>
        <h3>Key characteristics of useLayoutEffect: :</h3>

        <p>
          <b>Synchronous execution: :</b>
          <br />
          It blocks the browser's painting process until its callback function
          completes.
        </p>
        <p>
          <b>Runs after DOM mutations, before paint :</b>
          <br />
          This guarantees that you are working with the most up-to-date DOM
          state when performing layout-dependent operations.
        </p>
        <p>
          <b>Same API as useEffect:</b>
          <br />
          It takes a function containing the effect and an optional dependency
          array to control when the effect re-runs.
        </p>
        <p>
          <b>Caution: </b>Because useLayoutEffect is synchronous and blocks the
          browser's rendering, using it for computationally intensive tasks can
          lead to performance issues and a "janky" user experience. Therefore,
          it should be used judiciously and only when necessary for
          layout-critical operations. In most cases, useEffect is the preferred
          choice.
        </p>
      </div>
      <button onClick={() => setColor("red")}>Change to red </button>
      <button onClick={() => setColor("green")}>Change to green </button>
      <button onClick={() => setColor("yellow")}>Change to Yellow </button>
    </>
  );
};

export default BackgroundChange;
