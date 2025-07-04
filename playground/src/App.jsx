import { Routes, Route } from "react-router-dom";
import Counter from "./hooks/useState/Counter";
import FatchData from "./hooks/useEffect/FetchData";
import BackgroundChange from "./hooks/useLayoutEffect/BackgroundChange";
import CenteralGov from "./hooks/useContext/props-drlling/CentralGov";
import CounterReducer from "./hooks/useReducer/CounterReducer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./hooks/useMemo/ShoppingCart";
import ParentUseCallback from "./hooks/useCallback/ParentUseCallback";
import SearchableList from "./hooks/useTransition/SearchableList";
import UserefUsage from "./hooks/useRef/UserefUsage";
import UseidUsage from "./hooks/useId/UseidUsage";
import Lifecycle from "./pages/Lifecycle";
import StoreCounter from "./pages/StoreCounter";
import CustomFetch from "./hooks/useFetch/CustomFetch";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/useState" element={<Counter />} />
            <Route path="/useEffect" element={<FatchData />} />
            <Route path="/useLayoutEffect" element={<BackgroundChange />} />
            <Route path="/useContext" element={<CenteralGov />} />
            <Route path="/useReducer" element={<CounterReducer />} />
            <Route path="/useMemo" element={<ShoppingCart />} />
            <Route path="/useCallback" element={<ParentUseCallback />} />
            <Route path="/useTransition" element={<SearchableList />} />
            <Route path="/useRef" element={<UserefUsage />} />
            <Route path="/useId" element={<UseidUsage />} />
            <Route path="/react-lifecycle" element={<Lifecycle />} />
            <Route path="/redux" element={<StoreCounter />} />
            <Route path="/customhook" element={<CustomFetch />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
