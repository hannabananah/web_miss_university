import React from "react";

import "../Assets/css/banner.css";
import "../Assets/css/responsive/banner1.css";
import "../Assets/css/responsive/banner2.css";
import "../Assets/css/responsive/banner3.css";
import { ReactComponent as SVGLogo } from "../Assets/images/ic_wmu.svg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const Banner = ({ selectLangVal }) => {
  const { t } = useTranslation();
  // function highlight(firstLetter) {
  //   const highlight = document.getElementById("highlight");
  //   const highlightTxt = highlight.innerText;
  //   const highlightWords = highlightTxt.split(/[ \t]+/); //regex matches any number of spaces
  //   highlight.innerHTML = highlightWords
  //     .map((word) => {
  //       const firstLetter = word.substring(0, 1);
  //       const restOfWord = word.substring(1, word.length);
  //       return `<span style="color: red">${firstLetter}</span>${restOfWord}`;
  //     })
  //     .join("");
  // }
  return (
    <div id="banner_root">
      <div id="banner_container">
        <div className="banner_left">
          <SVGLogo
            className="logoImg"
            width="320px"
            height="190px"
            alt="world miss uni official logo"
          />
        </div>
        <div className="banner_right">
          {selectLangVal == "en" && (
            <div
              // id="highlight"
              className="banner_top_text"
            >
              <span className="banner_highlight">W</span>ORLD&nbsp;
              <span className="banner_highlight">U</span>NIVERSITY&nbsp;
              <span className="banner_highlight">P</span>EACE&nbsp;
              <span className="banner_highlight">S</span>ERVICE&nbsp;
              <span className="banner_highlight">C</span>ORPS
            </div>
          )}
          {selectLangVal == "ko" && (
            <div className="banner_top_text">
              <span className="banner_highlight">세</span>계&nbsp;
              <span className="banner_highlight">대</span>학생&nbsp;
              <span className="banner_highlight">평</span>화&nbsp;
              <span className="banner_highlight">봉</span>사&nbsp;
              <span className="banner_highlight">사</span>절단
            </div>
          )}
          <div className="banner_mid_text">
            <span className="banner_highlight">W</span>ORLD&nbsp;
            <span className="banner_highlight">M</span>ISS&nbsp;
            <span className="banner_highlight">U</span>NIVERSITY
          </div>
          <div className="banner_bottom_text">
            <div className="titleText">{t("contest_participant_info")}</div>
            <div className="bannerLink">
              <a
                href="https://play.google.com/store/search?q=anystory&c=apps"
                className="subText"
                target="_blank"
              >
                {t("link_to_her_sns")}&nbsp;
                <span className="arrowMark">&#8250;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
