import React from "react";
import Select from "react-select";

import "../Assets/css/topLayout.css";
import "react-dropdown/style.css";
import { ReactComponent as SVGLogo } from "../Assets/images/logo.svg";
export const TopLayout = () => {
  const options = [
    { value: "한국어 (ko)", label: "한국어 (ko)" },
    { value: "Englilsh (en)", label: "Englilsh (en)" },
    { value: "China (zh-CN)", label: "China (zh-CN)" },
    { value: "China (zh-TW)", label: "China (zh-TW)" },
    { value: "Japan (ja)", label: "Japan (ja)" },
    { value: "(ru)", label: "(ru)" },
    { value: "(de)", label: "(de)" },
    { value: "(fr)", label: "(fr)" },
    { value: "(es)", label: "(es)" },
    { value: "(ar)", label: "(ar)" },
    { value: "(id)", label: "(id)" },
    { value: "(vi)", label: "(vi)" },
    { value: "(th)", label: "(th)" },
    { value: "(tl)", label: "(tl)" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#7c4dff" : "#191919",
      fontWeight: state.isSelected ? "bold" : "normal",
    }),
  };
  return (
    <div id="top_root">
      <header id="header">
        {/* left */}
        <div>
          <SVGLogo className="logoIcon" />
        </div>
        {/* right */}
        <div className="right">
          <ul className="list nav">
            <li>애니챗 HOME</li>
            <li>월드 미스 유니버시티 HOME</li>
            <li>
              <Select
                placeholder="언어 설정"
                options={options}
                isSearchable={false}
                className="dropdown"
                styles={customStyles}
                theme={(theme) => ({
                  ...theme,
                  border: "none",
                  colors: {
                    ...theme.colors,
                    primary: "#ffffff",
                  },
                })}
              />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
