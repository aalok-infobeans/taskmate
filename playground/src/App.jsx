import { Routes, Route } from "react-router-dom";
import Counter from "./hooks/useState/Counter";
import FatchData from "./hooks/useEffect/FetchData";
import BackgroundChange from "./hooks/useLayoutEffect/BackgroundChange";
import CenteralGov from "./hooks/useContext/props-drlling/CentralGov";

import Header from "./components/Header";
import Footer from "./components/Footer";
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
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
