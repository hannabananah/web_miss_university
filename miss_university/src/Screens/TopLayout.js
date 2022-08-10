import React, { useEffect } from "react";
import Select from "react-select";

import "../Assets/css/topLayout.css";
import "react-dropdown/style.css";
import { ReactComponent as SVGLogo } from "../Assets/images/logo.svg";
export const TopLayout = () => {
  const options = [
    { value: "한국어 (ko)", label: "한국어 (ko)" },
    { value: "Englilsh (en)", label: "Englilsh (en)" },
    { value: "简体中文 (zh-CN)", label: "简体中文 (zh-CN)" },
    { value: "繁體中文 (zh-TW)", label: "繁體中文 (zh-TW)" },
    { value: "日本語 (ja)", label: "日本語 (ja)" },
    { value: "русский (ru)", label: "русский (ru)" },
    { value: "Deutsch (de)", label: "Deutsch (de)" },
    { value: "français (fr)", label: "français (fr)" },
    { value: "español (es)", label: "español (es)" },
    { value: "العربية (ar)", label: "العربية (ar)" },
    { value: "Indonesia (id)", label: "Indonesia (id)" },
    { value: "Tiếng Việt (vi)", label: "Tiếng Việt (vi)" },
    { value: "ไทย (th)", label: "ไทย (th)" },
    { value: "Tagalog (tl)", label: "Tagalog (tl)" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#7c4dff" : "#191919",
      fontWeight: state.isSelected ? "bold" : "normal",
    }),
  };

  // Sticky TopLayout Area
  useEffect(() => {
    window.addEventListener("scroll", shadow);
    return () => {
      window.removeEventListener("scroll", shadow);
    };
  });

  // 스크롤 시 그림자 효과 생성
  const shadow = (e) => {
    const header = document.querySelector(".scrollShadow");
    const scrollTop = window.scrollY;
    scrollTop >= 320
      ? header.classList.add("shadow")
      : header.classList.remove("shadow");
  };

  return (
    <div id="top_root" className="scrollShadow">
      <header id="header">
        {/* left */}
        <div>
          <SVGLogo className="logoIcon" />
        </div>
        {/* right */}
        <nav className="right">
          <ul className="nav">
            <li>
              <a href="#" target="_blank">
                애니챗 HOME
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                월드 미스 유니버시티 HOME
              </a>
            </li>
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
        </nav>
      </header>
    </div>
  );
};
