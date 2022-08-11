import React from "react";
import "../Assets/css/ranked.css";
const Ranked = () => {
  const rank1 = "1";
  const rank2 = "2";
  const rank3 = "3";
  return (
    <div className="rankMedalLayout1">
      <span className="rankMedalText1">
        실시간
        <br />
        <span className="rankMedalNum">{rank1}위</span>
      </span>
    </div>
  );
};
export default Ranked;
