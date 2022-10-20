import React from "react";

import "../Assets/css/modalRanked.css";
import { ReactComponent as SVGRaking } from "../Assets/images/ranking.svg";

const ModalRanked = () => {
  const rank1 = "1";
  const rank2 = "2";
  const rank3 = "3";
  return (
    <div className="modalRankingLayout">
      <SVGRaking className="modalRankingImage" alt="lanking background style" />
      <span className="modalRankingText">
        실시간 <span className="modalRankingNum">{rank1}위</span>
      </span>
    </div>
  );
};
export default ModalRanked;
