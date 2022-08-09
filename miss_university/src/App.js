import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import Second from "./Screens/Second";
import { TopLayout } from "./Screens/TopLayout";
import { Banner } from "./Screens/Banner";
import { BottomLayout } from "./Screens/BottomLayout";
import DetailModal from "./Components/DetailModal";

function App() {
  // 모달 팝업
  const popup = () => {
    const modal = showModal(DetailModal, {
      title: "애니챗 보내기",
      modalClose: () => {
        modal.hide();
      },
      modalSend: () => {
        setSend(!send);
        modal.hide();
      },
    });
  };
  return (
    <div className="App" style={{ position: "relative" }}>
      <TopLayout />
      <Banner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home onClick={popup} />} />
          {/* <Route path="/second" element={<Second />} /> */}
        </Routes>
      </HashRouter>
      <BottomLayout />
    </div>
  );
}

export default App;
