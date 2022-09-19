import React, { useState } from "react";
import "../Assets/css/posts.css";
// 순위권 표시
import Raking from "./Ranked.js";
import { ReactComponent as SVGCard } from "../Assets/images/sideCard.svg";
import { ReactComponent as SVGArrow } from "../Assets/images/arrow.svg";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";
import { useTranslation, initReactI18next } from "react-i18next";

const Posts = ({ user, popupmodal, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="cardContainer">
      <div className="mainCard">
        <span className="decoText1">WORLD</span>
        <span className="decoText2">MISS UNIVERSITY</span>
        <div className="photo" onClick={onClick}>
          {user.profile_url === null ? (
            "No Image"
          ) : (
            <img
              src={user.profile_url}
              alt={user.name + "profile image"}
              className="profileImage"
            />
          )}
        </div>
        <div className="detailContainer">
          {/* 국가 관련 디테일 */}
          <div className="details">
            {/* 국기 이미지 삽입 필요 */}
            <div className="countryWrap">
              <p className="userCountry">{user.name}</p>
            </div>
            {/* <span className="detailText">{user.nationality}</span> */}
          </div>
          {/* 팔로워 관련 디테일 */}
          <div className="details">
            {/* <SVGPeople className="peopleIcon" />
            <span className="detailText">{user.follower_count}</span> */}
          </div>
          {/* 프로필 자세히 보기 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="seeMoreText1" onClick={onClick}>
              {/* 프로필 자세히 보기 */}
              {t("see_more_detail")}
              <SVGArrow className="arrowIcon1" />
            </p>
            {/* SNS 보러 가기 */}
            <a
              href="https://play.google.com/store/search?q=anystory&c=apps"
              className="seeMoreText2"
              target="_blank"
            >
              {/* SNS 보러 가기 */}
              {t("link_to_sns")}
              <SVGArrow className="arrowIcon2" />
            </a>
          </div>
        </div>
      </div>
      <div className="sideArea">
        {user.rank < 4 && <Raking user={user} />}
        <div className="sideCardLayout" onClick={onClick}>
          <SVGCard className="sideCardImage" />
          <span className="name">
            <span className="flag"></span>
            {user.country}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Posts;
