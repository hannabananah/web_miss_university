import React, { useState } from "react";
import "../assets/css/posts.css";
import flags from "../assets/js/flags";

// 순위권 표시
import Raking from "./Ranked.js";
import { ReactComponent as SVGCard } from "../assets/images/sideCard.svg";
import { ReactComponent as SVGArrow } from "../assets/images/arrow.svg";
import { ReactComponent as SVGPeople } from "../assets/images/people.svg";
import { useTranslation, initReactI18next } from "react-i18next";

const Posts = ({ user, popupmodal, onClick }) => {
  const { t } = useTranslation();
  // 국기 이미지
  const renderImage = (country) => {
    switch (user.country) {
      case "Albania":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Albania.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Algeria":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Algeria.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Argentina":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Argentina.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Armenia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Armenia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Azerbaijan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Azerbaijan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Bangladesh":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Bangladesh.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Belarus":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Belarus.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Bolivia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Bolivia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Botswana":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Botswana.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Brazil":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Brazil.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Bulgaria":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Bulgaria.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Cameroon":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Cameroon.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Canada":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Canada.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Canada":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Canada.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Colombia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Colombia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Cote_d_Ivoire":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Cote_d_Ivoire.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Czech_Republic":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Czech_Republic.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Dominican_Republic":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Dominican_Republic.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "El_Salvador":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/El_Salvador.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Ecuador":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Ecuador.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Estonia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Estonia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "France":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/France.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Georgia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Georgia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Germany":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Germany.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Ghana":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Ghana.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Guatemala":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Guatemala.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Indonesia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Indonesia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Kazakhstan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Kazakhstan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Kenya":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Kenya.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Kosovo":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Kosovo.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Kyrgyzstan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Kyrgyzstan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Lesotho":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Lesotho.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Macedonia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Macedonia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Malawi":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Malawi.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Malaysia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Malaysia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Mexico":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Mexico.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Moldova":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Moldova.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Mongolia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Mongolia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Montenegro":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Montenegro.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Namibia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Namibia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "New_Zealand":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/New_Zealand.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Nicaragua":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Nicaragua.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Nigeria":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Nigeria.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Paraguay":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Paraguay.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Peru":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Peru.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Philippines":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Philippines.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Portugal":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Portugal.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Romania":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Romania.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Russian_Federation":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Russian_Federation.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Serbia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Serbia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Singapore":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Singapore.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "South_Korea":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/South_Korea.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Spain":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Spain.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Taiwan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Taiwan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Tajikistan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Tajikistan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Tanzania":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Tanzania.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Thailand":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Thailand.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Trinidad_Tobago":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Trinidad_Tobago.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Turkmenistan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Turkmenistan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Uganda":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Uganda.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "USA":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/USA.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Uruguay":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Uruguay.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Uzbekistan":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Uzbekistan.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Venezuela":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Venezuela.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Viet_Nam":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Viet_Nam.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Zambia":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Zambia.png")
            }
            alt="국기 이미지"
          />
        );
        break;
      case "Zimbabwe":
        return (
          <img
            src={
              // user.country ==
              require("../assets/images/flags/Zimbabwe.png")
            }
            alt="국기 이미지"
          />
        );
        break;
    }
  };

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
            <span className="flag">{renderImage(user.country)}</span>
            {user.country}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Posts;
