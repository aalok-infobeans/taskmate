import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React Playground
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  React Hooks
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/useState">
                      useState
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useEffect">
                      useEffect
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useLayoutEffect">
                      useLayoutEffect
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useContext">
                      useContext
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useReducer">
                      useReducer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useMemo">
                      useMemo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useCallback">
                      useCallback
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useTransition">
                      useTransition
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useRef">
                      useRef
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useId">
                      useId
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/customhook">
                      Custom Hook
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Dropdown End */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  React LifeCycles
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/react-lifecycle">
                      React LifeCycles
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/redux">
                  Redux
                </Link>
              </li>
              {/* More Dropdown End */}

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Comming Soon..
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
