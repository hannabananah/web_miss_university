import React from "react";

import "../Assets/css/banner.css";
import { ReactComponent as SVGBanner } from "../Assets/images/banner.svg";
export const Banner = () => {
  return (
    <div id="banner_root">
      <div id="banner_container">
        <div className="left">
          <SVGBanner className="bannerImage" />
          <span className="titleText">월드 미스 유니버시티 참가자 프로필 소개</span>
        </div>
        <div className="subText">
          참가자 SNS 게시물 보러 가기&nbsp;
          <span className="arrowMark">&#8250;</span>
        </div>
      </div>
    </div>
  );
};
