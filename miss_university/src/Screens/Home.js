import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/css/homeLayout.css";
import { ReactComponent as SVGSearch } from "../Assets/images/search.svg";
import { ReactComponent as SVGCard } from "../Assets/images/sideCard.svg";
import { ReactComponent as SVGArrow } from "../Assets/images/arrow.svg";
import { ReactComponent as SVGDoubleArrow } from "../Assets/images/doubleArrow.svg";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";

function Home() {
  const navigate = useNavigate();
  const goSecond = () => {
    navigate("/second");
  };

  return (
    <div id="home_root">
      <section id="main_container">
        <h1 className="headText">참가자 소개</h1>
        <div className="textArea">
          <p className="alignText">
            참가자 실시간 정렬 순서: 애니스토리 팔로워 순서
          </p>
          <div className="searchInput">
            <SVGSearch className="searchIcon" />
            <input
              type="search"
              name="seraching participants"
              className="searchText"
              placeholder="참가자 이름 및 국적으로 검색하실 수 있습니다."
              color="#7c4dff"
            />
          </div>
        </div>
        {/* 참가자 리스트 */}
        <div className="listContainer">
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">MARITE ATAH EFAMBA</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">EDYTHA ALEXANDRA ALFARO MARTINEZ</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
          {/* 카드 하나*/}
          <div className="cardContainer">
            <div className="mainCard">
              <span className="decoText1">WORLD</span>
              <span className="decoText2">MISS UNIVERSITY</span>
              {/* 프로필 이미지 삽입 필요 */}
              <div className="photo"></div>
              <div className="detailContainer">
                {/* 국가 관련 디테일 */}
                <div className="details">
                  {/* 국기 이미지 삽입 필요 */}
                  <div className="flag"></div>
                  <span className="detailText">ALGERIA</span>
                </div>
                {/* 팔로워 관련 디테일 */}
                <div className="details">
                  <SVGPeople className="peopleIcon" />
                  <span className="detailText">1,050</span>
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
              <span className="name">AMEL AGUINI</span>
            </div>
          </div>
        </div>
        <div className="pagination">
          <a className="marks" href="#">
            <SVGDoubleArrow className="pageIcon1" />
          </a>
          <a className="marks" href="#">
            <SVGArrow className="pageIcon2" />
          </a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">7</a>
          <a href="#">8</a>
          <a href="#">9</a>
          <a href="#">10</a>
          <a className="marks" href="#">
            <SVGArrow className="pageIcon3" />
          </a>
          <a className="marks" href="#">
            <SVGDoubleArrow className="pageIcon4" />
          </a>
        </div>
        {/* <button onClick={goSecond}>ddd</button> */}
      </section>
    </div>
  );
}
export default Home;
