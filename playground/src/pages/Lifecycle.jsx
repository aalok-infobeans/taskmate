import lifeCycleimage from "../assets/life-cycle.png";
import CounterClass from "../components/CounterClass";
export const Lifecycle = () => {
  return (
    <>
      <h2>Lifecycle in Reacts</h2>
      <p>
        React components, particularly class components, progress through a
        lifecycle with distinct phases, each triggering specific lifecycle
        methods. These methods allow developers to execute code at different
        points during a component's existence.
      </p>
      <ol>
        <li>
          <b>Mounting Phase:</b> This phase occurs when a component is created
          and inserted into the DOM.
          <br />
          <br />
          <b>static getDerivedStateFromProps(props, state):</b> Called before
          the component is mounted. Used for initializing state and binding
          methods.
          <br />
          <br />
          <b>render():</b> The only required method in a class component. It
          returns the JSX that React will render to the DOM.
          <br />
          <br />
          <b>componentDidMount():</b> Called immediately after the component is
          mounted (inserted into the DOM). Ideal for data fetching, setting up
          subscriptions, or direct DOM manipulation.
          <br />
          <br />
        </li>
        <li>
          <b>Updating Phase:</b> This phase occurs when a component's props or
          state change, leading to a re-render.
          <br />
          <br />
          <b>static getDerivedStateFromProps(props, state):</b> : (As above)
          Called before rendering on updates.
          <br />
          <br />
          <b>render():</b> The only required method in a class component. It
          returns the JSX that React will render to the DOM.
          <br />
          <br />
          <b>shouldComponentUpdate(nextProps, nextState):</b> Allows controlling
          whether a component re-renders. Returns true by default, false
          prevents re-rendering.
          <br />
          <br />
          <b>render():</b> Re-renders the component with the updated props or
          state.
          <br />
          <br />
          <b>getSnapshotBeforeUpdate(prevProps, prevState):</b> R Called right
          before the changes from the virtual DOM are reflected in the actual
          DOM. It allows capturing some information from the DOM (e.g., scroll
          position) before it is potentially changed
          <br />
          <br />
          <b>componentDidUpdate(prevProps, prevState, snapshot):</b> Called
          immediately after updating occurs. Useful for performing side effects
          based on updated props or state, like network requests.
          <br />
          <br />
        </li>
        <li>
          <b>Unmounting Phase:</b> This phase occurs when a component is removed
          from the DOM.
          <br />
          <br />
          <b>componentWillUnmount():</b> Called immediately before a component
          is unmounted and destroyed. Used for cleanup tasks like invalidating
          timers, canceling network requests, or cleaning up subscriptions.
        </li>
        <li>
          <b>Error Handling Phase:</b> This phase occurs when an error is thrown
          during rendering, in a lifecycle method, or in a constructor of any
          child component.
          <br />
          <br />
          <b>static getDerivedStateFromError(error):</b> Called when an error is
          thrown in a child component. It allows updating the state to display a
          fallback UI.
          <br />
          <br />
          <b>componentDidCatch(error, info):</b> Called after an error has been
          thrown by a descendant component. It can be used for logging errors or
          performing side effects.
          <br />
          <br />
        </li>
      </ol>
      <p>
        <b>Note:</b> The above methods are primarily used in class components.
        In functional components, the useEffect hook can be used to achieve
        similar lifecycle behavior. For example, useEffect can be used to
        replicate componentDidMount, componentDidUpdate, and
        componentWillUnmount behavior by specifying dependencies and cleanup
        functions.
        <br />
        <br />
      </p>
      <img src={lifeCycleimage} alt="React Logo" />
      <CounterClass />
    </>
  );
};
export default Lifecycle;
