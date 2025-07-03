import StateGov from "./StateGov";
import MyContext from "../MyContext";
const CenteralGov = () => {
  const money = "1000000";
  const code = `
function App() {
  const sharedValue = "Hello from Context!";
  return (
    <MyContext.Provider value={sharedValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
  `;
  const consumecode = `    import React, { useContext } from 'react';
    import { MyContext } from './App'; // Assuming MyContext is exported from App.js

    function ChildComponent() {
      const data = useContext(MyContext);
      return <h1>{data}</h1>; // Renders "Hello from Context!"
    }`;
  return (
    <>
      <h2>useContext</h2>
      <p>
        The useContext hook in React is a built-in hook that allows functional
        components to subscribe to and consume values from a React Context. It
        provides a way to share data across the component tree without manually
        passing props down through every level, a pattern known as "prop
        drilling."
      </p>
      <p>
        <b>How it works:</b>
        <br />
        1. <b>Create a Context:</b> First, a Context object is created using
        React.createContext(). This object will hold the shared data.
        <code>
          <br />
          import React from 'react'; <br />
          const MyContext = React.createContext();
        </code>
        <br />
        2. <b>Provide the Context:</b> A Provider component, which is part of
        the created Context object, is used to wrap the part of the component
        tree that needs access to the shared data. The value prop of the
        Provider is where the actual data to be shared is passed.
        <code>
          <br />
          <pre> {code}</pre>
        </code>
        <br />
        3. <b>Consume the Context:</b> Inside any component that is a child of
        the Provider, the useContext hook can be used to access the shared data.
        The hook takes the Context object as an argument and returns the current
        value of that Context.
        <code>
          <br />
          <pre>{consumecode}</pre>
        </code>
      </p>
      <b>Benefits of useContext: </b>
      1.Avoids Prop Drilling: Eliminates the need to pass props down through
      multiple intermediate components that don't directly use the data.
      <br />
      2. Simplifies State Management: Provides a straightforward way to manage
      global or shared state like themes, user authentication status, or
      language preferences. <br />
      3.Cleaner Code: Leads to more readable and maintainable code by reducing
      the verbosity of prop passing.
      <br />
      <b>When to use useContext:</b> useContext is ideal for managing state that
      needs to be accessible by many components throughout the application, but
      it's not a replacement for more complex state management solutions like
      Redux or Zustand for large-scale applications with intricate state logic
      or frequent updates. It's particularly well-suited for: Theming, User
      Authentication status, Localization settings, and Global configurations.
      <br />
      <br />
      <h2>Props Drilling problem</h2>
      <br />
      <h4>I am in Centeral government</h4>
      <MyContext.Provider value={`400000$`}>
        <StateGov money={money} />
      </MyContext.Provider>
    </>
  );
};

export default CenteralGov;
