import React, { useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

import "../Assets/css/common.css";
import "../Assets/css/topLayout.css";
import "react-dropdown/style.css";
import { ReactComponent as Logo } from "../Assets/images/logo.svg";
import { ReactComponent as Arrow } from "../Assets/images/arrow.svg";
export const TopLayout = () => {
  const options = [
    { value: "Spring", label: "Spring", color: "#498205" },
    { value: "Summer", label: "Summer", color: "#c19c00" },
    { value: "Autumn", label: "Autumn", color: "#da3b01" },
    { value: "Winter", label: "Winter", color: "#004e8c" },
  ];

  return (
    <div className="root">
      <div className="wrapper">
        <div className="header">
          {/* left */}
          <div>
            <Logo className="logo" />
          </div>
          {/* right */}
          <div className="right">
            {/* <ul className="list nav">
              <li>애니챗 HOME</li>
              <li>월드 미스 유니버시티 HOME</li>
              <li className="middle">
                언어 설정
                <Arrow className="dropdownIcon" />
              </li>
            </ul> */}
            <Select myFontSize="20px" options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};
