import React from "react";
import "../assets/css/ranked.css";
import { useTranslation, initReactI18next } from "react-i18next";
import { ReactComponent as SVGBird } from "../assets/images/ic_wmu_white.svg";

const Ranked = ({ user }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        user.rank === 1
          ? "rankMedalLayout1"
          : user.rank === 2
          ? "rankMedalLayout2"
          : "rankMedalLayout3"
      }
    >
      <div
        style={{}}
        // className={
        //   user.rank === 1
        //     ? "rankMedalText1"
        //     : user.rank === 2
        //     ? "rankMedalText2"
        //     : "rankMedalText3"
        // }
      >
        {/* {t("real_time")} */}
        {/* <span className="rankMedalNum">
          {user.rank === 1
            ? t("mu_ranking_1st")
            : user.rank === 2
            ? t("mu_ranking_2nd")
            : t("mu_ranking_3rd")}
          {}
        </span> */}
        <SVGBird alt="월드미스유니버시티 비둘기 아이콘"/>
      </div>
    </div>
  );
};
export default Ranked;
