import { useId } from "react";
const UseidUsage = () => {
  const emailId = useId();
  const passwordId = useId();
  return (
    <>
      <h2>useId Hook</h2>
      <p>
        The useId hook in React is a built-in hook introduced in React 18 for
        generating unique, stable IDs that can be passed to accessibility
        attributes and other HTML elements requiring unique identification.
      </p>

      <h4>Key features and uses of useId:</h4>
      <p>
        <b>Unique ID Generation:</b>
        useId ensures that each instance of a component receives a unique ID,
        preventing conflicts, especially in dynamic lists or when a component is
        rendered multiple times.
      </p>
      <p>
        <b>Accessibility:</b>
        Its primary use case is in conjunction with accessibility attributes
        like htmlFor for linking labels to input fields, or aria-describedby for
        associating descriptive text with an element.
      </p>
      <h4>Server-Side Rendering (SSR) Compatibility:</h4>
      <p>
        useId generates IDs that are consistent between server and client
        rendering, which helps prevent hydration mismatches in SSR applications.
      </p>
      <p>
        <b>Simplicity:</b>
        It's a straightforward hook to use; simply call const id = useId();
        within your functional component.
      </p>
      <h4>Important Considerations:</h4>
      <ul>
        <li>
          useId is not intended for generating keys in lists. Keys should be
          derived from your data to help React efficiently re-render lists.
        </li>
        <li>
          The generated IDs often include colons (e.g., :r1:), which are not
          supported in CSS selectors or DOM APIs like querySelector or
          querySelectorAll.
        </li>
        <li>
          For multi-root applications, you can configure an identifierPrefix
          with hydrateRoot or ReactDOMServer to prevent ID collisions.
        </li>
      </ul>
      <div className="useID">
        <form>
          <label htmlFor={emailId}>Email:</label>
          <input type="email" id={emailId} />

          <label htmlFor={passwordId}>Password:</label>
          <input type="password" id={passwordId} />
        </form>
      </div>
    </>
  );
};

export default UseidUsage;
