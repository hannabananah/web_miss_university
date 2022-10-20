import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Assets/css/homeLayout.css";
import "../Assets/css/responsive/home1.css";
import "../Assets/css/responsive/home2.css";
import "../Assets/css/pagination.css";
import "../Assets/css/responsive/pagination.css";
import { ReactComponent as SVGSearch } from "../Assets/images/search.svg";
// 페이징 처리되면 콘텐츠 넘어가는 영역
import Posts from "../Component/Posts";
// 프로필 카드 하나에 대한 참가자 정보
import ParticipantsList from "../Component/ParticipantsList";
// 프로필 자세히 보기 모달 팝업
import DetailModal from "../Component/DetailModal";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const postsPerPage = 12;

export const Home = ({ popupmodal, selectedValue }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [loaded, setLoaded] = useState(false);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentList, setCurrentList] = useState(ParticipantsList.slice(0, 12));
  // const [lastMuidx, setLastMuidx] = useState(0);

  // 모달 팝업
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  // const goSecond = () => {
  //   navigate("/second");
  // };

  // const setList = (page) => {
  //   const newList = ParticipantsList.slice(12 * (page - 1), 12 * page);
  //   setCurrentList(newList);
  // };

  //참가자 리스트 데이터
  const fetchData = async (last_idx) => {
    const response = await axios
      .post("https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list", {
        page: currentPage,
        language: selectedValue,
        last_muidx: last_idx,
        search_result: search,
      })
      .then((response) => {
        console.log(response.data.data);
        setUserData(response.data.data.user_data);
        setTotalPage(response.data.data.total_page);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const resultData = () => {
    if (currentPage == 1) {
      fetchData(0);
    } else {
      fetchData(userData[userData.length - 1].muidx); //현재 보고 있는 페이지의 마지막 참가자 muidx 넘겨주기
    }
  } 
  useEffect(() => {
    resultData();
  }, [currentPage, selectedValue]);
  //페이지네이션
  const handlePageChange = (page) => {
    setCurrentPage(page);   
  };
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onkeydown = (e) => {
    if (e.keyCode === 13) {
      resultData();
    }
  };
  const onClickClear = () => {
    setSearch("");
  };

  //모달 데이터
  const fetchDetailsData = async (userIdx, userCountry) => {
    const response = await axios
      .post(
        "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_detail",
        {
          muidx: userIdx,
          language: userCountry,
        }
      )
      .then((response) => {
        setUser(response.data.data);
        console.log("user:::::::", response.data.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setLoaded(false);
      });
  };
  const onClickDetails = (muidx, country) => {
    setIsOpen(true);
    fetchDetailsData(muidx, country);
    console.log(muidx);
  };
  const onCloseModal = () => {
    if (isOpen) {
      setIsOpen(false);
      setLoaded(false);
    }
  };

  return (
    <div id="home_root">
      <section id="main_container">
        <h1 className="headText">{t("participant_info")}</h1>
        <div className="textArea">
          <p className="alignText">
            {/* 참가자 실시간 정렬 순서: 애니스토리 팔로워 순서 */}
            {/* {t("sequance_participants")} */}
            {/* {t("sequance_follower")} */}
          </p>
          <div className="searchInput">
            <SVGSearch className="searchIcon" alt="search Icon" />
            <input
              value={search}
              onChange={onChangeSearch}
              onKeyDown={onkeydown}
              type="text"
              name="seraching participants"
              className="searchText"
              placeholder={t("search_from_name_nation")}
              color="#7c4dff"
            />
            {search !== "" && (
              <button onClick={onClickClear} className="clearBtn">
                clear
              </button>
            )}
          </div>
        </div>
        <div className="listContainer">
          {userData.map((user, index) => {
            return (
              <Posts
                key={index}
                user={user}
                popupmodal={popupmodal}
                onClick={() => onClickDetails(user.muidx, user.country)}
              />
            );
          })}
        </div>
        <Pagination
          activePage={currentPage}
          totalItemsCount={postsPerPage * totalPage} // 총 포스트 갯수
          itemsCountPerPage={postsPerPage} // 페이지당 보여줄 포스트 갯수
          pageRangeDisplayed={10} // 페이저 갯수
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
        {/* <button onClick={goSecond}>ddd</button> */}
        <DetailModal
          isOpen={isOpen}
          onCloseModal={onCloseModal}
          onClickDetails={onClickDetails}
          user={user}
          loaded={loaded}
        />
      </section>
    </div>
  );
};
