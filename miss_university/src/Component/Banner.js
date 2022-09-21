import React from "react";

import "../assets/css/banner.css";
import { ReactComponent as SVGBanner1 } from "../assets/images/text_world.svg";
import { ReactComponent as SVGBanner2 } from "../assets/images/text_miss.svg";
import { ReactComponent as SVGBanner3 } from "../assets/images/text_university.svg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <div id="banner_root">
      <div id="banner_container">
        <div className="left">
          <div className="banner_top_text">
            <SVGBanner1 />
          </div>
          <div className="banner_mid_text">
            <SVGBanner2 />
            <SVGBanner3 />
          </div>
          <div className="banner_bottom_text">
            <div>
              <p className="titleText">{t("contest_participant_info")}</p>
            </div>
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
