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

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [currentList, setCurrentList] = useState(ParticipantsList.slice(0, 12));
  const [lastMuidx, setLastMuidx] = useState(0);

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

  const fetchData = async (page,last_idx) => {
    const response = await axios.post(
      "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list",
    {
      page : page,
      language : "ko",
      last_muidx : last_idx,
      search_result : "",
    },
    ).then((response)=>{
      setUserData(response.data.data.user_data)

    }).catch(error =>{
      console.log(error)
    })
  };

  useEffect(()=>{
    fetchData(1,0);
  },[])

  //페이지네이션
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // setList(page);

    fetchData(page, userData[userData.length-1].muidx);
  };
  // console.log(currentPage,userData[userData.length-1].muidx)
 

  const fetchDetailsData = async (userIdx, userCountry) => {
    const response = await axios.post(
      "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_detail",
    {
      muidx : userIdx,
      language : userCountry,
    },
    ).then((response)=>{
      setUser(response.data.data)
    }).catch(error =>{
      console.log(error)
    })
  };

  console.log(userData)

  const onClickDetails = (muidx,country) =>{
    setIsOpen(true);
    fetchDetailsData(muidx, country);
    console.log(muidx)
  }
  const onCloseModal = () => {
    if (isOpen) {
      setIsOpen(false)
    }
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
          {userData.map((user, index) => {
            return (
              <Posts
                key={index}
                user={user}
                popupmodal={popupmodal}
                onClick={()=>onClickDetails(user.muidx, user.country)}
              />
            );
          })}
        </div>
        <Pagination
          activePage={currentPage}
          totalItemsCount={ParticipantsList.length}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
        {/* <button onClick={goSecond}>ddd</button> */}

        <DetailModal isOpen={isOpen} onCloseModal={onCloseModal} onClickDetails={onClickDetails} user={user} />
      </section>
    </div>
  );
};
