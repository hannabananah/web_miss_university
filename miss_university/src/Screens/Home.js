import React, { useState,useEffect } from "react";
import Pagination from "react-js-pagination";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Assets/css/homeLayout.css";
import "../Assets/css/pagination.css";
import { ReactComponent as SVGSearch } from "../Assets/images/search.svg";
// 페이징 처리되면 콘텐츠 넘어가는 영역
import Posts from "../Component/Posts";
// 프로필 카드 하나에 대한 참가자 정보
import ParticipantsList from "../Component/ParticipantsList";
// 프로필 자세히 보기 모달 팝업
import DetailModal from "../Component/DetailModal";

export const Home = ({ popupmodal }) => {
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);
  // const [lang, setLang] = useState(); 

  const [userIdx, setUserIdx] = useState();
  const [userLan, setUserLan] = useState();

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentList, setCurrentList] = useState(ParticipantsList.slice(0, 12));

  // 모달 팝업
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  // const goSecond = () => {
  //   navigate("/second");
  // };

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.post(
        "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list",
      // "https://anystorydev.anychat.com:3030/v1/miss_university/get_web_miss_list",
      {
        page : page,
        language : "ko",
        last_muidx : 0,
        search_result : "",
      },
      ).then((response)=>{
        // console.log(response.data.data.user_data)
        setUserData(response.data.data.user_data)

      }).catch(error =>{
        console.log(error)
      })
    };
    fetchData();
  },[])

  
  // const setList = (page) => {
  //   const newList = ParticipantsList.slice(12 * (page - 1), 12 * page);
  //   setCurrentList(newList);
  // };

  //페이지네이션
  const handlePageChange = (page) => {
    setPage(page);
    // setList(page);

    const fetchData = async () => {
      const response = await axios.post(
        "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list",
      {
        page : page,
        language : "ko",
        last_muidx : 0,
        search_result : "",
      },
      ).then((response)=>{
        // console.log(response.data.data.user_data)
        setUserData(response.data.data.user_data)

      }).catch(error =>{
        console.log(error)
      })
    };
    fetchData();
  };


  function popupmodal(idx,lan) {
    setIsOpen(!isOpen);
    setUserIdx(idx)
    setUserLan(lan)
  }

  console.log(userData)

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
          {userData.map((user, index) => {
            return (
              <Posts
                key={index}
                user={user}
                popupmodal={popupmodal}
              />
            );
          })}
        </div>
        <Pagination
          activePage={page}
          totalItemsCount={ParticipantsList.length}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
        {/* <button onClick={goSecond}>ddd</button> */}

        <DetailModal isOpen={isOpen} popupmodal={popupmodal} userIdx={userIdx} userLan={userLan} />
      </section>
    </div>
  );
};
