import React from "react";

import "../Assets/css/banner.css";
import { ReactComponent as SVGBanner1 } from "../Assets/images/text_miss.svg";
import { ReactComponent as SVGBanner2 } from "../Assets/images/text_university.svg";
import { ReactComponent as SVGBanner3 } from "../Assets/images/text_world.svg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <div id="banner_root">
      <div id="banner_container">
        <div className="left">
          <SVGBanner1 className="bannerImage1" />
          <SVGBanner2 className="bannerImage2" />
          <SVGBanner3 className="bannerImage1" />
          <span className="titleText">{t("contest_participant_info")}</span>
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
  );
};
