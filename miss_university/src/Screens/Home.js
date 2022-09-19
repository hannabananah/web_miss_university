import React, { useState, useEffect } from "react";
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

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


import ko from '../Util/i18n/ko/trans.json';
import en from '../Util/i18n/en/trans.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: 'en',
    debug: true,

    
    lng: "en", // if you're using a language detector, do not define the lng option
 
    resources: {
      en: {
        lang: en
        // translation: {
        //   "Welcome to React": "Welcome to React and react-i18next"
        // }
      },
      ko: {
        lang: ko
      },
    },
    ns: ['lang'],

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

const postsPerPage = 12;

export const Home = ({ popupmodal }) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("en");
  // const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  // const [lang, setLang] = useState();
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
  const fetchData = async (page, last_idx) => {
    const response = await axios
      .post("https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list", {
        page: page,
        language: language,
        last_muidx: last_idx,
        search_result: "",
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

  useEffect(() => {
    fetchData(1, 0);
  }, []);

  //페이지네이션
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page, userData[userData.length - 1].muidx); //현재 보고 있는 페이지의 마지막 참가자 muidx 넘겨주기
  };
  // console.log(userData);

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

  //참가자 검색
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      fetchData(1, 0);
    }
  }
  // 페이지 네이션이랑 중복되니까 나중에 수정해야함
  const searchData = async (page, last_idx) => {
    const response = await axios
    .post(
      "https://anystorydev.anychat.com:3030/v1/login/get_web_miss_list",
      {
        page: currentPage,
        language: language,
        last_muidx: last_idx,
        search_result: search,
      },
    )
    .then((response) => {
      console.log(response);
      setUserData(response.data.data.user_data);
      setTotalPage(response.data.data.total_page)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const onkeydown = async(e) => {
    if(e.keyCode === 13){
      searchData(currentPage, userData[userData.length - 1].muidx); //현재 보고 있는 페이지의 마지막 참가자 muidx 넘겨주기
    } //if 끝
  } //onkeydown 끝
  
  const onClickClear = () => {
    setSearch('')
    fetchData(1, 0);
  }

  return (
    <div id="home_root">
      <section id="main_container">
        <h1 className="headText">참가자 소개</h1>

        <h2>{t('Welcome to React')}</h2>

        <div className="textArea">
          <p className="alignText">
            {/* 참가자 실시간 정렬 순서: 애니스토리 팔로워 순서 */}
          </p>
          <div className="searchInput">
            <SVGSearch className="searchIcon" />
            <input
              value={search}
              onChange={onChangeSearch}
              onKeyDown={onkeydown}
              type="text"
              name="seraching participants"
              className="searchText"
              placeholder="참가자 이름 및 국적으로 검색하실 수 있습니다."
              color="#7c4dff"
            />
            {search !== "" && <button onClick={onClickClear} className="clearBtn">clear</button>}
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
