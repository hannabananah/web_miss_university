import React, { useState, useEffect } from "react";
// import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/topLayout.css";
import "react-dropdown/style.css";
import { ReactComponent as SVGLogo } from "../assets/images/logo.svg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

export const TopLayout = ({
  selectLangVal,
  onChangeLang,

  number, onIncrease, onDecrease 
}) => {
  const { t } = useTranslation();
  const currLang = useSelector((state) => state.langData);

  console.log('currLang:::::::::::::::::::::::',currLang);

  const options = [
    { value: "ko", label: "한국어 (ko)" },
    { value: "en", label: "Englilsh (en)" },
    // { value: "zh-CN", label: "简体中文 (zh-CN)" },
    // { value: "zh-TW", label: "繁體中文 (zh-TW)" },
    // { value: "ja", label: "日本語 (ja)" },
    // { value: "ru", label: "русский (ru)" },
    // { value: "de", label: "Deutsch (de)" },
    // { value: "fr", label: "français (fr)" },
    // { value: "es", label: "español (es)" },
    // { value: "ar", label: "العربية (ar)" },
    // { value: "id", label: "Indonesia (id)" },
    // { value: "vi", label: "Tiếng Việt (vi)" },
    // { value: "th", label: "ไทย (th)" },
    // { value: "tl", label: "Tagalog (tl)" },
  ];

  // console.log(Select);

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     color: state.isSelected ? "#7c4dff" : "#191919",
  //     fontWeight: state.isSelected ? "bold" : "normal",
  //     boxSizing: "border-box",
  //     width: "150px",
  //     display: "flex",
  //     justifyContent: "center",
  //     rowGap: "20px",
  //     paddingRight: "28px",
  //     paddingLeft: "28px",
  //     fontSize: "14px",
  //     lineHeight: "14px",
  //     letterSpacing: "-0.42px",
  //     "&:hover": {
  //       fontWeight: "bold",
  //       backgroundColor: "#7c4dff",
  //       color: "#fff",
  //     },
  //   }),
  // };

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
          <a href="http://15.165.203.122/WMU/">
            <SVGLogo className="logoIcon" />
          </a>
        </div>
        {/* right */}
        <nav className="right">

          {/* 카운터 예제 */}
          {/* <div>
            <h3>{number}</h3>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
          </div> */}

          <ul className="nav">
            <li>
              <a href="https://www.anychat.com/main/" target="_blank">
                {t("link_to_anychat_homepage")}
              </a>
            </li>
            <li>
              <a href="http://wmu.or.kr/" target="_blank">
                {t("link_to_worldmissuniversity_homepage")}
              </a>
            </li>
            {/* <li>
              <a href="#" target="_blank">
                월드 미스 유니버시티 소식통
              </a>
            </li> */}
            
            <li>
              {/* <Select
                placeholder={t("link_to_worldmissuniversity_homepage")}
                options={options}
                isSearchable={false}
                className="dropdown"
                styles={customStyles}
                value={options.filter((obj) => obj.value === selectedValue)}
                onChange={handleChange}
                theme={(theme) => ({
                  ...theme,
                  border: "none",
                  colors: {
                    ...theme.colors,
                    primary: "#ffffff",
                  },
                })}
              /> */}
            </li>
          </ul>

          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={selectLangVal}
              onChange={onChangeLang}
              // displayEmpty
            >
              {options.map((option,index)=>{
                return (
                  <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </nav>
      </header>
    </div>
  );
};
