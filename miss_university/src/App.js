import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { TopLayout } from "./Screens/layout/TopLayout";
import { BottomLayout } from "./Screens/layout/BottomLayout";
import { Banner } from "./Component/Banner";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import store from "./redux";
import { increase, decrease, changeLang } from "./redux/module/counter";
import { setLangCode } from "./redux/actions/langAction";
import { useTranslation, initReactI18next } from "react-i18next";

function App({ setTotalPage }) {
  // 다국어
  const [t, i18n] = useTranslation("lang", { useSuspense: false });

  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  //참가자 언어 설정
  // set value for default selection
  // const [selectedValue, setSelectedValue] = useState("en");

  // handle onChange event of the dropdown
  // const handleChange = (e) => {
  // setSelectedValue(e.value);
  // };

  //참가자 언어 설정
  const [selectLangVal, setSelectLangVal] = useState("en");

  const onChangeLang = (e) => {
    setSelectLangVal(e.target.value);

    i18n.changeLanguage(e.target.value);
    dispatch(setLangCode({ langCode: e.target.value }));
  };

  // 배포 환경에서 console.log, console.warn 지우기
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
    console.warn = function () {};
  }

  return (
    <div className="App" style={{ position: "relative" }}>
      <TopLayout
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onChangeLang={onChangeLang}
        selectLangVal={selectLangVal}
        setSelectLangVal={setSelectLangVal}
      />
      <Banner selectLangVal={selectLangVal} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home setTotalPage={setTotalPage} />} />
          {/* <Route path="/second" element={<Second />} /> */}
        </Routes>
      </HashRouter>
      <BottomLayout />
    </div>
  );
}

export default App;
