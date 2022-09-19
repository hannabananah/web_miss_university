import React from "react";
import "../Assets/css/ranked.css";

const Ranked = ({rank, user}) => {
  // const rank1 = "1";
  // const rank2 = "2";
  // const rank3 = "3";
  console.log()
  return (
    <div className={user.rank === 1 ? "rankMedalLayout1" : user.rank === 2? "rankMedalLayout2" : "rankMedalLayout3"}>
      <span className={user.rank === 1 ? "rankMedalText1": user.rank === 2? "rankMedalText2": "rankMedalText3"}>
        실시간
        <br />
        <span className="rankMedalNum">{rank}위</span>
      </span>
    </div>
  );
};
export default Ranked;
