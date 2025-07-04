import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/Counter/CounterSlice";
const StoreCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Create Store for centralized state management </h1>
      <p>
        Redux is a state management library that provides a centralized store
        and a unidirectional data flow, making state changes predictable.{" "}
      </p>
      <p>
        Redux Toolkit is the official abstraction layer over Redux that
        simplifies its usage by reducing boilerplate and promoting best
        practices. It provides utilities like createSlice, configureStore, and
        createAsyncThunk to streamline the development process and make Redux
        more accessible and scalable.
      </p>
      <h4>Benefits of Redux Toolkit</h4>
      <br />✅ Less boilerplate <br />✅ Built-in development tools (Redux
      DevTools)
      <br />✅ Built-in support for async logic
      <br /> ✅ Encourages best practices
      <br /> ✅ Based on modern JS features (Immer, ES6)
      <br />
      <h4>When to Use Redux (or Redux Toolkit)?</h4>
      <p>
        Use Redux/RTK if:
        <br />
        ✅Your app has shared state across many components.
        <br />
        ✅You need predictable, traceable state changes.
        <br />
        ✅ You need powerful debugging (Redux DevTools).
        <br />
        ✅You need to handle complex state logic or async actions.
        <br /> Avoid Redux if: You're managing simple local UI state (use
        useState or useReducer instead).
      </p>
      <h4>Working flow diagram</h4>
      <pre>
        {`     +------------------+                +------------------------+
     |  React Component |                |  Redux Store (Provider)|
     |  (Counter.jsx)   |                |   (store.js)           |
     +--------+---------+                +-----------+------------+
              |                                      ^
              | dispatch(increment())                |
              v                                      |
     +------------------------+            uses      |
     |     Slice Reducers     |  <-------------------+
     | (counterSlice.js)      |                     |
     +-----------+------------+                     |
                 |                                  |
                 v                                  |
     +-------------------------+          +--------------------------+
     |  Redux Store with Slice | <--------| combine & configure      |
     |   (configureStore)      |          | in store.js              |
     +-------------------------+          +--------------------------+`}
      </pre>
      <br />
      <pre>
        {`[Counter.jsx]
   |
   |-- useSelector() --> Reads state from --> [store.reducer.counter.value]
   |
   |-- useDispatch() --> Triggers --> [increment(), decrement()] from Slice
   |
   v
[counterSlice.js] -- defines --> initialState + reducers (mutate state)`}
      </pre>
      <h3>Example usage store - Redux and Redux toolkit</h3>
      <p>Counter {count}</p>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(incrementByAmount(400));
        }}
      >
        Increment by amount
      </button>
    </>
  );
};

export default StoreCounter;
