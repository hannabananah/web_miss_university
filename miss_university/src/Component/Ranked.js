import React from "react";
import "../Assets/css/ranked.css";
import { useTranslation, initReactI18next } from "react-i18next";

const Ranked = ({user}) => {
  const { t } = useTranslation();

  return (
    <div className={user.rank === 1? "rankMedalLayout1" : user.rank === 2? "rankMedalLayout2" : "rankMedalLayout3"}>
      <span className={user.rank === 1? "rankMedalText1": user.rank === 2? "rankMedalText2": "rankMedalText3"}>
        {t("real_time")}
        <br />
        <span className="rankMedalNum">{user.rank === 1? "1": user.rank === 2? "2" : "3"}{t("num_ranking")}</span>
      </span>
    </div>
  );
};
export default Ranked;
