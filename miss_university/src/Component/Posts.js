import React, { useState } from "react";
import "../Assets/css/posts.css";
import flags from "../Assets/js/flags";

// 순위권 표시
import Raking from "./Ranked.js";
import { ReactComponent as SVGCard } from "../Assets/images/sideCard.svg";
import { ReactComponent as SVGArrow } from "../Assets/images/arrow.svg";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";
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
              require("../Assets/images/flags/Albania.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Algeria":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Algeria.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Argentina":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Argentina.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Armenia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Armenia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Azerbaijan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Azerbaijan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Bangladesh":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Bangladesh.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Belarus":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Belarus.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Bolivia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Bolivia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Botswana":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Botswana.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Brazil":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Brazil.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Bulgaria":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Bulgaria.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Cameroon":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Cameroon.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Canada":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Canada.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Chile":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Chile.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Colombia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Colombia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Costa Rica":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Costa_Rica.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Cote D'Ivoire":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Cote_d_Ivoire.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Croatia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Croatia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Czech Republic":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Czech_Republic.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Dominican Republic":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Dominican_Republic.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "El Salvador":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/El_Salvador.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Ecuador":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Ecuador.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Estonia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Estonia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "France":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/France.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Georgia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Georgia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Germany":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Germany.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Ghana":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Ghana.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Guatemala":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Guatemala.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Hungary":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Hungary.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Indonesia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Indonesia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Japan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/japan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Kazakhstan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Kazakhstan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Kenya":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Kenya.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Kosovo":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Kosovo.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Kyrgyzstan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Kyrgyzstan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Lesotho":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Lesotho.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Macedonia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Macedonia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Malawi":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Malawi.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Malaysia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Malaysia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Mexico":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Mexico.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Moldova":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Moldova.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Monaco":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Monaco.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Mongolia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Mongolia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Montenegro":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Montenegro.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Namibia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Namibia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "New Zealand":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/New_Zealand.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Nicaragua":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Nicaragua.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Nigeria":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Nigeria.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Palestine":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Palestine.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Panama":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Panama.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Paraguay":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Paraguay.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Peru":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Peru.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Philippines":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Philippines.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Poland":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Poland.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Portugal":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Portugal.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Romania":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Romania.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Russia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Russian_Federation.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Serbia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Serbia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Sierra Leone":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Sierra_Leone.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Singapore":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Singapore.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Slovenia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Slovenia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "South Korea":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/South_Korea.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Spain":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Spain.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Taiwan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Taiwan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Tajikistan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Tajikistan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Tanzania":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Tanzania.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Thailand":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Thailand.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Trinidad Tobago":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Trinidad_Tobago.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Turkmenistan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Turkmenistan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Uganda":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Uganda.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Ukraine":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Ukraine.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Uruguay":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Uruguay.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "USA":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/USA.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Uzbekistan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Uzbekistan.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Venezuela":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Venezuela.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Vietnam":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Viet_Nam.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Zambia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Zambia.png")
            }
            alt="flag Img"
          />
        );
        break;
      case "Zimbabwe":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Zimbabwe.png")
            }
            alt="flag Img"
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
            <div className="countryWrap">
              <p className="userCountry">{user.name}</p>
            </div>
            {/* <span className="detailText">{user.nationality}</span> */}
          </div>
          {/* 팔로워 관련 디테일 */}
          <div className="details">
            {/* <SVGPeople className="peopleIcon" alt="팔로워 명수 알림 아이콘"/>
            <span className="detailText">{user.follower_count}</span> */}
          </div>
          {/* 프로필 자세히 보기 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="seeMoreText1" onClick={onClick}>
              {/* 프로필 자세히 보기 */}
              {t("see_more_detail")}
              <SVGArrow className="arrowIcon1" alt="오른쪽 화살표" />
            </p>
            {/* SNS 보러 가기 */}
            <a
              href="https://play.google.com/store/search?q=anystory&c=apps"
              className="seeMoreText2"
              target="_blank"
            >
              {/* SNS 보러 가기 */}
              {t("link_to_sns")}
              <SVGArrow className="arrowIcon2" alt="오른쪽 화살표" />
            </a>
          </div>
        </div>
      </div>
      <div className="sideArea">
        {user.rank < 6 && <Raking user={user} />}
        <div className="sideCardLayout" onClick={onClick}>
          {user.rank === 1 ? (
            <SVGCard
              className="sideCardImage1"
              alt="참가자 정보 사이드카드 이미지"
            />
          ) : user.rank === 2 ? (
            <SVGCard
              className="sideCardImage2"
              alt="참가자 정보 사이드카드 이미지"
            />
          ) : user.rank < 6 ? (
            <SVGCard
              className="sideCardImage3"
              alt="참가자 정보 사이드카드 이미지"
            />
          ) : (
            <SVGCard
              className="sideCardImage"
              alt="참가자 정보 사이드카드 이미지"
            />
          )}
          {user.rank === 1 ? (
            <span className="name1">
              <span className="flag">{renderImage(user.country)}</span>
              {user.country}
            </span>
          ) : user.rank === 2 ? (
            <span className="name2">
              <span className="flag">{renderImage(user.country)}</span>
              {user.country}
            </span>
          ) : user.rank < 6 ? (
            <span className="name3">
              <span className="flag">{renderImage(user.country)}</span>
              {user.country}
            </span>
          ) : (
            <span className="name">
              <span className="flag">{renderImage(user.country)}</span>
              {user.country}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Posts;
