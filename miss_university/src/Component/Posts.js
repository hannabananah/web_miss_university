import React, { useState } from "react";
import "../Assets/css/posts.css";
import { ReactComponent as SVGCard } from "../Assets/images/sideCard.svg";
import { ReactComponent as SVGArrow } from "../Assets/images/arrow.svg";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";

const Posts = ({ participant, popupmodal }) => {
  return (
    <div className="cardContainer">
      <div className="mainCard">
        <span className="decoText1">WORLD</span>
        <span className="decoText2">MISS UNIVERSITY</span>
        {/* 프로필 이미지 삽입 필요 */}
        <div className="photo">{participant.profileImg}</div>
        <div className="detailContainer">
          {/* 국가 관련 디테일 */}
          <div className="details">
            {/* 국기 이미지 삽입 필요 */}
            <div className="flag">{participant.nationFlag}</div>
            <span className="detailText">{participant.nationality}</span>
          </div>
          {/* 팔로워 관련 디테일 */}
          <div className="details">
            <SVGPeople className="peopleIcon" />
            <span className="detailText">{participant.fallowerNum}</span>
          </div>
          {/* 프로필 자세히 보기 */}
          <p className="seeMoreText1" onClick={popupmodal}>
            프로필 자세히 보기
            <SVGArrow className="arrowIcon1" />
          </p>
          {/* SNS 보러 가기 */}
          <p className="seeMoreText2">
            SNS 보러 가기
            <SVGArrow className="arrowIcon2" />
          </p>
        </div>
      </div>
      <div>
        <SVGCard className="sideCardImage" />
        <span className="name">{participant.name}</span>
      </div>
    </div>
  );
};
export default Posts;
