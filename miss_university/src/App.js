import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Second from "./Screens/Second";
import { TopLayout } from "./Screens/TopLayout";
import { Banner } from "./Screens/Banner";
import { BottomLayout } from "./Screens/BottomLayout";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <TopLayout />
      <Banner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </HashRouter>
      <BottomLayout />
    </div>
  );
}

export default App;
