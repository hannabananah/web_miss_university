import React from "react";
import "../Assets/css/homeLayout.css";
import ParticipantsList from "../Component/ParticipantsList";
import { ReactComponent as SVGCard } from "../Assets/images/sideCard.svg";
import { ReactComponent as SVGArrow } from "../Assets/images/arrow.svg";
import { ReactComponent as SVGDoubleArrow } from "../Assets/images/doubleArrow.svg";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";

const Posts = ({ item, id, posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="listContainer">
      {ParticipantsList.map((item, id) => {
        <div className="cardContainer" key={id}>
          <div className="mainCard">
            <span className="decoText1">WORLD</span>
            <span className="decoText2">MISS UNIVERSITY</span>
            {/* 프로필 이미지 삽입 필요 */}
            <div className="photo">{item.profileImg}</div>
            <div className="detailContainer">
              {/* 국가 관련 디테일 */}
              <div className="details">
                {/* 국기 이미지 삽입 필요 */}
                <div className="flag">{item.nationFlag}</div>
                <span className="detailText">{item.nationality}</span>
              </div>
              {/* 팔로워 관련 디테일 */}
              <div className="details">
                <SVGPeople className="peopleIcon" />
                <span className="detailText">{item.fallowerNum}</span>
              </div>
              {/* 프로필 자세히 보기 */}
              <p className="seeMoreText1">
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
            <span className="name">{item.name}</span>
          </div>
        </div>;
      })}
    </div>
  );
};
export default Posts;
