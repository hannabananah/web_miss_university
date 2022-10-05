import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// 0201,0202 (<" "의 프로필 사진>텍스트 디폴트 크기 32px)
import "../assets/css/modal.css";
import axios from "axios";
import ImageModal from "./ImageModal";
import { useTranslation, initReactI18next } from "react-i18next";

// 0203(이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우:<" "의 프로필 사진>텍스트 크기를 24px로 변경)
// import "../assets/css/modalLongName.css";

// 0203(폰트 크기를 24로 줄였음에도 우측 텍스트와의 여백이 40px이 안될 경우 이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우 폰트 사이즈 22px로 변경)
// import "../assets/css/modalTooLongName.css";

// 순위권 표시
import Raking from "./ModalRanked";
import { ReactComponent as SVGPeople } from "../assets/images/people.svg";
Modal.setAppElement("#root");

const DetailModal = ({ onCloseModal, isOpen, user, loaded }) => {
  const { t } = useTranslation();
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [targetIdx, setTargetIdx] = useState(0);

  const onClickImage = (idx) => {
    setIsOpenImage(true);
    setTargetIdx(idx);
  };
  const onCloseImageModal = () => {
    if (isOpenImage) {
      setIsOpenImage(false);
    }
  };
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
      case "Cote D'Ivoire":
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
      case "Czech Republic":
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
      case "DominiCan Republic":
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
      case "El Salvador":
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
      case "New Zealand":
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
      case "Russian Federation":
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
      case "South Korea":
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
      case "Trinidad Tobago":
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
      case "Vietnam":
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
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        contentLabel="participant details"
        className="modalLayout"
      >
        <div className="modalContainer">
          {/* 모달 왼쪽 */}
          <div className="modalLeft">
            <div className="modalImgContainer">
              <img src={user.profile_img} className="modalImg" />
              {/* 순위권 표시 */}
              {/* <Raking /> */}
            </div>
            <div className="modalName">{user.name}</div>
            <div className="modalDetails">
              <div className="modalDetail">
                <span className="modalFlag">{renderImage(user.country)}</span>
                {/* <span className="modalFlag">
                  <img src={`../assets/images/flags/${user.country}.png`} alt={user.country}/>
                </span> */}
                <span className="modaltext">{user.country}</span>
              </div>
              {/* <div className="modalDetail">
                <SVGPeople className="modalIcon" />
                <span className="modaltext">1,050</span>
              </div> */}
            </div>
            <div className="modalAmbition">{user.vision}</div>
            <div className="modalInfoContainer">
              <div className="modalInfo">
                <div className="modalsubjectText">{t("participant_num")}</div>
                <div className="modaldetailText">
                  {user.participantion_number}
                </div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">{t("detail_edu")}</div>
                <div className="modaldetailText">{user.education}</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">{t("detail_major")}</div>
                <div className="modaldetailText">{user.major}</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">{t("detail_hobby")}</div>
                <div className="modaldetailText">{user.hobby}</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">{t("detail_specialty")}</div>
                <div className="modaldetailText">{user.specialty}</div>
              </div>
            </div>
          </div>
          {/* 모달 오른쪽 */}
          <div className="modalRight">
            <div className="modalTextContainer">
              {/* 해당 참가자의 이름이 길어질 경우 폰트 사이즈가 바뀌는 영역 */}
              <div className="modalTitle">
                <span>{user.name}</span>의 프로필 사진
              </div>
              <a
                href="https://play.google.com/store/search?q=anystory&c=apps"
                className="modalsubText"
                target="_blank"
              >
                {t("link_to_sns")}&nbsp;
                <span className="arrowMark">&#8250;</span>
              </a>
            </div>
            {/* 모달 이미지 리스트 */}
            <div
              className="modalImgsContainer"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {loaded &&
                  user.content_data?.map((u, idx) => {
                    if (u.content_type === 2) {
                      // 영상
                      return (
                        <div key={idx} className="modalImagesList">
                          <video
                            src={u.file_url}
                            className="modalImg"
                            // controls
                          ></video>
                          <button
                            onClick={() => onClickImage(idx)}
                            style={{
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%,-50%)",
                            }}
                          >
                            play
                          </button>
                        </div>
                      );
                    } else if (u.content_type === 1) {
                      // 사진
                      return (
                        <div key={idx} className="modalImagesList">
                          <img
                            src={u.file_url}
                            onClick={() => onClickImage(idx)}
                            className="modalImg"
                            alt={`image-${idx}`}
                          />
                        </div>
                      );
                    }
                  })}

                {/* {loaded &&
                  user.content_data?.filter((i,index)=>i.content_type === 2).map((u, idx) => {
                    // 영상
                    return (
                      <div key={idx} className="modalImagesList">
                        <video
                          src={u.file_url}
                          // onClick={() => onClickImage(
                          //   user.content_data?.findIndex(file => file.content_type === 2)
                          // )}
                          // onClick={() => onClickImage(i.content_type === 2)}
                          onClick={() => console.log(idx)}
                          className="modalImg"
                          controls
                        ></video>
                      </div>
                    );
                  })} */}
              </div>
              {/* <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {loaded &&
                  user.content_data?.filter(i=>i.content_type === 1).map((u, idx) => {
                    // 사진
                    return (
                      <div key={idx} className="modalImagesList">
                        <img
                          src={u.file_url}
                          onClick={() => onClickImage(idx)}
                          className="modalImg"
                          alt={`image-${idx}`}
                        />
                      </div>
                    );
                  }
                  )}
              </div> */}
            </div>
          </div>
        </div>
      </Modal>
      <ImageModal
        isOpenImage={isOpenImage}
        onCloseImageModal={onCloseImageModal}
        // onClickDetails={onClickDetails}
        user={user}
        targetIdx={targetIdx}
        // loaded={loaded}
      />
    </div>
  );
};
export default DetailModal;
