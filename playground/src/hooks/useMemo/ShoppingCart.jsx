import { useState, useMemo } from "react";

const ShoppingCart = () => {
  const [disCount, setDiscount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "Apple", price: 1.2 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Cherry", price: 2.0 },
  ]);
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);
  const incrementDiscount = () => {
    setDiscount((prevDiscount) => prevDiscount + 1);
  };
  //console.log("Rendering ShoppingCart component...");
  return (
    <>
      <h1 className="text-center">Use of useMemo</h1>
      <p>
        {" "}
        The useMemo hook in React is a built-in hook used for performance
        optimization by memoizing (caching) the result of an expensive
        calculation. It prevents unnecessary re-computations of values on every
        re-render of a component, only re-calculating when its dependencies
        change.
      </p>
      <h4>How it works:</h4>
      <p>
        <b>useMemo</b> takes two arguments:
      </p>
      <ol>
        <li>
          A function that returns the value to be memoized. This function will
          only execute when necessary.
        </li>
        <li>
          An array of dependencies. These are the values that, if changed, will
          trigger a re-execution of the function and a re-computation of the
          memoized value.
        </li>
      </ol>
      <p>
        <b>useMemo</b> stores the result of the function's execution. In
        subsequent renders, if the dependencies in the array have not changed,
        it returns the previously cached value instead of re-running the
        function.
      </p>
      <code>
        <pre>
          {`const memoizedValue = useMemo(() => {
  // Expensive computation or value creation
  return someCalculatedValue;
}, [dependency1, dependency2]);`}
        </pre>
      </code>
      <h4>When to use useMemo:</h4>
      <p>
        <b>Expensive computations:</b> <br />
        When a value derived from props or state involves complex calculations
        (e.g., filtering, sorting large datasets, heavy data transformations).
      </p>
      <p>
        <b>Preventing unnecessary re-renders of child components:</b> <br />
        If a memoized value is passed as a prop to a React.memo wrapped child
        component, the child component will only re-render if that memoized prop
        (or other props/state it depends on) actually changes.
      </p>
      <p>
        <b>Referential equality issues:</b> <br />
        When you need to maintain referential equality of an object or array
        passed down to a child component, to prevent the child from re-rendering
        due to a new object/array reference being created on every parent
        re-render, even if the content is the same.
      </p>
      <h3>Important considerations:</h3>
      <p>
        <b>Dependencies Array:</b> <br />
        Always include all variables used within the useMemo function in the
        dependencies array. Omitting dependencies can lead to stale data or
        unexpected behavior.
      </p>
      <p>
        <b>Performance Trade-offs:</b> <br />
        While useMemo can improve performance, it also introduces a small
        overhead for memoization itself. Use it strategically for genuinely
        expensive computations. useCallback vs. useMemo: useCallback is similar
        but specifically memoizes functions, while useMemo memoizes values.
      </p>

      <h3>Shopping Cart</h3>
      {items.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: ${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Total Price</h5>
          <p className="card-text">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <p className="text-center">
        The total price of items in the cart is: ${totalPrice.toFixed(2)}
      </p>
      <button className="btn btn-primary" onClick={incrementDiscount}>
        Increment Discount
      </button>
      <button
        className="btn btn-secondary ms-2"
        onClick={() =>
          setItems((prevItem) => [
            ...prevItem,
            { id: items.length + 1, name: "One plus node ce3", price: 8.9 },
          ])
        }
      >
        Add Items
      </button>
      <p className="text-center">Current Discount: {disCount}</p>
      <p className="text-center">
        The total price is calculated by summing the prices of all items in the
        cart. The total price is: ${totalPrice.toFixed(2)}
      </p>
      <p>
        The useMemo hook is used to optimize performance by memoizing the result
        of a computation (in this case, the total price) so that it is only
        recalculated when its dependencies change. This can help avoid
        unnecessary recalculations and improve the performance of your React
        application, especially when dealing with expensive calculations or
        large datasets.
      </p>
      <p>
        In this example, the total price is calculated using the reduce method
        on the items array. The useMemo hook is not explicitly used here, but it
        can be applied to memoize the total price calculation if needed. For
        example, you could wrap the total price calculation in useMemo like
        this:
      </p>
      <pre>
        {`const totalPrice = useMemo(() => {
  itmes.reduce((total, item) => total + item.price, 0);
}, [itmes]);`}
      </pre>
      <p>
        This way, the total price will only be recalculated when the items array
        changes, preventing unnecessary recalculations on every render.
      </p>
    </>
  );
};

export default ShoppingCart;
