import { useState, useEffect, useRef } from "react";

const FatchData = () => {
  const [users, setUsers] = useState([]);
  const hasFetched = useRef(false);
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const fetchUsers = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        data.json().then((data) => {
          setUsers(data);
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
    console.log("useEffect called");
  }, []);
  return (
    <>
      <div className="description">
        <h1 className="text-center">Usage of useEffect</h1>
        <p>
          The useEffect Hook in React allows functional components to perform
          side effects. Side effects are operations that interact with the
          "outside world" beyond the component's rendering, such as:{" "}
        </p>
        <ul>
          <li>Data fetching: Making API calls to retrieve data.</li>
          <li>
            Direct DOM manipulation: Modifying the Document Object Model
            directly (e.g., changing document title, adding event listeners).
          </li>
          <li>Timers and intervals: Setting up setTimeout or setInterval</li>
          <li>Subscriptions: Subscribing to external data sources.</li>
        </ul>
        <h3>How it works:</h3>
        <p>useEffect takes two arguments:</p>
        <p>
          <b>A setup function (callback):</b>This function contains the logic
          for the side effect. React will execute this function after every
          render by default.
        </p>
        <p>
          <b>An optional dependency array:</b>This array controls when the
          effect re-runs.
        </p>
        <ul>
          <li>
            Empty array []: The effect runs only once after the initial render
            (similar to componentDidMount in class components).
          </li>
          <li>
            Array with dependencies [dep1, dep2]: The effect re-runs only if any
            of the specified dependencies change between renders.
          </li>
          <li>
            No dependency array: The effect runs after every render of the
            component.
          </li>
        </ul>
        <br />
        <p>
          <b>Cleanup function:</b>The useEffect Hook can optionally return a
          cleanup function. This function runs before the component unmounts or
          before the effect re-runs due to dependency changes. This is crucial
          for cleaning up resources, such as: Removing event listeners,
          Canceling network requests, and Clearing timers or intervals.
        </p>
      </div>
      <div className="user">
        <h2 className="text-center">Users List</h2>
        {users.length > 0 ? (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                <h5>{user.name}</h5>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </>
  );
};

export default FatchData;
