import useFetch from "./useFetch";

const CustomFetch = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(JSON.stringify(data), loading, error);
  return (
    <>
      <h2>Custom Hooks</h2>
      <p>
        React Custom Hooks are JavaScript functions that allow developers to
        extract and reuse stateful logic across different functional components.
        They are a powerful feature for promoting code reusability, modularity,
        and maintainability in React applications.
      </p>
      <h4>Key characteristics of React Custom Hooks:</h4>
      <p>
        <b>Naming Convention: </b>Custom hooks must always start with the prefix
        use (e.g., useFetchData, useFormInput). This convention allows React's
        linter to enforce the "Rules of Hooks," which are crucial for ensuring
        correct hook usage.
      </p>
      <p>
        <b>Encapsulation of Logic:</b>
        They encapsulate specific pieces of logic, such as data fetching, form
        handling, state management, or subscriptions, making them reusable
        across multiple components without duplicating code.
      </p>
      <p>
        <b>Internal Use of React Hooks:</b>
        Custom hooks can call other built-in React Hooks like useState,
        useEffect, useContext, etc., to manage state and side effects within the
        encapsulated logic.
      </p>
      <p>
        <b>Sharing Stateful Logic, Not State Itself:</b>
        When a custom hook is used in multiple components, each component gets
        its own independent instance of the state and effects managed by that
        hook. The custom hook shares the logic for managing state, not the state
        variables themselves.
      </p>
      <h4>Benefits of using Custom Hooks:</h4>
      <ol>
        <li>
          Code Reusability: Avoids code duplication by centralizing common logic
          into reusable functions.
        </li>
        <li>
          Improved Readability and Maintainability: Keeps components cleaner and
          more focused on their UI rendering, separating concerns by extracting
          complex logic into dedicated hooks.
        </li>
        <li>
          Easier Testing: Encapsulated logic in custom hooks can be tested
          independently, simplifying the testing process.
        </li>
        <li>
          Enhanced Modularity: Promotes a more modular application structure,
          making it easier to manage and scale.
        </li>
      </ol>
      <h4>useFetch Example</h4>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default CustomFetch;
