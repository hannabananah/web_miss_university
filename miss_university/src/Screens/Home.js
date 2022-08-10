import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/css/homeLayout.css";
import "../Assets/css/pagination.css";
import { ReactComponent as SVGSearch } from "../Assets/images/search.svg";
import ParticipantsList from "../Component/ParticipantsList";
import Posts from "../Component/Posts";
import DetailModal from "../Component/DetailModal";

export const Home = ({ popupmodal }) => {
  const navigate = useNavigate();
  // const goSecond = () => {
  //   navigate("/second");
  // };

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentList, setCurrentList] = useState(ParticipantsList.slice(0, 12));

  const setList = (page) => {
    const newList = ParticipantsList.slice(12 * (page - 1), 12 * page);
    setCurrentList(newList);
  };

  const handlePageChange = (page) => {
    setPage(page);
    setList(page);
  };

  // 모달 팝업
  const [isOpen, setIsOpen] = useState(false);

  function popupmodal() {
    setIsOpen(!isOpen);
  }

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
        <div className="listContainer">
          {currentList.map((participant, index) => {
            return (
              <Posts
                key={index}
                participant={participant}
                popupmodal={popupmodal}
              />
            );
          })}
        </div>
        <Pagination
          activePage={page}
          totalItemsCount={151}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
        {/* <button onClick={goSecond}>ddd</button> */}

        <DetailModal isOpen={isOpen} popupmodal={popupmodal} />
      </section>
    </div>
  );
};
