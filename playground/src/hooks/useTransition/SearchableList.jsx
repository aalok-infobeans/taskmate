import React, { useState, useTransition } from "react";

const SearchableList = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInputValue(e.target.value);

    // Mark the list filtering as a non-urgent transition
    startTransition(() => {
      // Simulate a slow filtering process
      const newItems = Array.from(
        { length: 10000 },
        (_, i) => `Item ${i + 1}`
      ).filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setListItems(newItems);
    });
  };

  return (
    <>
      <h2>useTransion hook</h2>
      <p>
        The useTransition hook in React, introduced in React 18, is a tool for
        managing UI responsiveness during potentially slow state updates. It
        allows you to mark certain state updates as "non-urgent" or
        "transitions," preventing them from blocking the main thread and keeping
        the UI interactive.
      </p>
      <h4>How it works:</h4>
      <p>
        <b>The useTransition hook returns an array containing two elements:</b>
        <br />
        <b>isPending:</b>A boolean value that indicates whether a transition is
        currently in progress. It is true when the startTransition function is
        executing and false otherwise. This can be used to display loading
        indicators or disable UI elements during the transition.
      </p>
      <p>
        <b>startTransition:</b>
        <br />A function that takes a callback function as an argument. The
        state updates wrapped within this callback function are marked as
        non-urgent. React will prioritize urgent updates (like user input) and
        render them immediately, while the non-urgent updates within
        startTransition can be deferred or rendered in the background,
        preventing UI freezes.
      </p>
      <h4>Typical Use Cases:</h4>
      <p>
        <b>Large list rendering:</b> When filtering or sorting a large dataset
        that might cause a noticeable delay in rendering, useTransition can be
        used to keep the input field responsive while the list updates in the
        background.
      </p>
      <p>
        <b>Data fetching and updates:</b> When making API calls or performing
        other asynchronous operations that might take time, useTransition can
        ensure that the UI remains interactive during the data fetching process.
      </p>
      <p>
        <b>Complex UI transitions:</b> For intricate animations or transitions
        that might be computationally intensive, useTransition can help maintain
        smoothness by deferring less critical updates.
      </p>
      <div className="useTransion">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search items..."
        />
        {isPending && <div>Loading list...</div>}
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchableList;
