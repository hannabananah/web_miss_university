import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

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

  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  //참가자 언어 설정
  const langData = async (page, last_idx) => {
    const response = await axios
      .post("https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list", {
        page: page,
        language: "en",
        last_muidx: last_idx,
        search_result: "",
      })
      .then((response) => {
        console.log(response.data.data);
        options(response.data.data.user_data);
        setTotalPage(response.data.data.total_page);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    langData(1, 0);
  }, []);
  console.log(Select);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#7c4dff" : "#191919",
      fontWeight: state.isSelected ? "bold" : "normal",
      boxSizing: "border-box",
      width: "140px",
      display: "flex",
      justifyContent: "center",
      rowGap: "20px",
      paddingRight: "28px",
      paddingLeft: "28px",
      fontSize: "14px",
      lineHeight: "14px",
      letterSpacing: "-0.42px",
      "&:hover": {
        backgroundColor: "transparent",
      },
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
              <a href="https://www.anychat.com/main/" target="_blank">
                애니챗 HOME
              </a>
            </li>
            <li>
              <a href="http://wmu.or.kr/" target="_blank">
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
