import React from "react";
import "../Assets/css/ranked.css";

const Ranked = ({user}) => {
  return (
    <div className={user.rank === 1? "rankMedalLayout1" : user.rank === 2? "rankMedalLayout2" : "rankMedalLayout3"}>
      <span className={user.rank === 1? "rankMedalText1": user.rank === 2? "rankMedalText2": "rankMedalText3"}>
        실시간
        <br />
        <span className="rankMedalNum">{user.rank === 1? "1": user.rank === 2? "2" : "3"}위</span>
      </span>
    </div>
  );
};
export default Ranked;
