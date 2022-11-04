import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// 0201,0202 (<" "의 프로필 사진>텍스트 디폴트 크기 32px)
import "../Assets/css/modal.css";
import "../Assets/css/responsive/modal1.css";
import "../Assets/css/responsive/modal2.css";
import "../Assets/css/responsive/modal3.css";
import "../Assets/css/responsive/modal4.css";
import "../Assets/css/responsive/modal5.css";
import "../Assets/css/responsive/modal6.css";
import axios from "axios";
import ImageModal from "./ImageModal";
import { useTranslation, initReactI18next } from "react-i18next";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// 0203(이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우:<" "의 프로필 사진>텍스트 크기를 24px로 변경)
// import "../Assets/css/modalLongName.css";

// 0203(폰트 크기를 24로 줄였음에도 우측 텍스트와의 여백이 40px이 안될 경우 이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우 폰트 사이즈 22px로 변경)
// import "../Assets/css/modalTooLongName.css";

// 순위권 표시
import Raking from "./ModalRanked";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";
import { Streetview } from "@mui/icons-material";
Modal.setAppElement("#root");

const DetailModal = ({ onCloseModal, isOpen, user, loaded }) => {
  const { t } = useTranslation();
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [targetIdx, setTargetIdx] = useState(-1);

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
              require("../Assets/images/flags/Albania.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Austria":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Austria.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Belgium":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Belgium.png")
            }
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Bosnia & Herzegovina":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Bosnia & Herzegovina.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
      case "Cyprus":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Cyprus.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "England":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/England.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Greece":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Greece.png")
            }
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Guinea":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Guinea.png")
            }
            alt="flag Image"
          />
        );
        break;
      case "Haiti":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Haiti.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Ireland":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Ireland.png")
            }
            alt="flag Image"
          />
        );
        break;
      case "Italy":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Italy.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Lebanon":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Lebanon.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Pakistan":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Pakistan.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "South_Africa":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/South_Africa.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
          />
        );
        break;
      case "Tunisia":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Tunisia.png")
            }
            alt="flag Image"
          />
        );
        break;
      case "Turkiye":
        return (
          <img
            src={
              // user.country ==
              require("../Assets/images/flags/Turkiye.png")
            }
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
            alt="flag Image"
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
                  <img src={`../Assets/images/flags/${user.country}.png`} alt={user.country}/>
                </span> */}
                <span className="modaltext">{user.country}</span>
              </div>
              {/* <div className="modalDetail">
                <SVGPeople className="modalIcon" alt="팔로워 명수 알림 아이콘"/>
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
                <span>{user.name}</span>
                {t("name_profile_pic")}
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
                            className="modalVideoPlayButton"
                          >
                            <PlayCircleOutlineIcon
                              style={{
                                backgroundColor: "white",
                                width: "60%",
                                height: "100%",
                                borderRadius: "50%",
                              }}
                            />
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
        user={user}
        targetIdx={targetIdx}
        // loaded={loaded}
      />
    </div>
  );
};
export default DetailModal;
