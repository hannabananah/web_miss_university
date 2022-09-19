import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { TopLayout } from "./Screens/TopLayout";
import { Banner } from "./Screens/Banner";
import { BottomLayout } from "./Screens/BottomLayout";
import axios from "axios";

function App({ setTotalPage }) {
  //참가자 언어 설정
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState("en");

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
    const langData = async (page, last_idx) => {
      const response = await axios
        .post(
          "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list",
          {
            page: 1,
            language: selectedValue,
            last_muidx: 0,
            search_result: "",
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      <TopLayout
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        handleChange={handleChange}
      />
      <Banner />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home selectedValue={selectedValue} setTotalPage={setTotalPage} />
            }
          />
          {/* <Route path="/second" element={<Second />} /> */}
        </Routes>
      </HashRouter>
      <BottomLayout />
    </div>
  );
}

export default App;
