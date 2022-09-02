import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// 0201,0202 (<" "의 프로필 사진>텍스트 디폴트 크기 32px)
import "../Assets/css/modal.css";
import axios from "axios";

// 0203(이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우:<" "의 프로필 사진>텍스트 크기를 24px로 변경)
// import "../Assets/css/modalLongName.css";

// 0203(폰트 크기를 24로 줄였음에도 우측 텍스트와의 여백이 40px이 안될 경우 이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우 폰트 사이즈 22px로 변경)
// import "../Assets/css/modalTooLongName.css";

// 순위권 표시
import Raking from "../Component/ModalRanked";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";
Modal.setAppElement("#root");

const DetailModal = ({ onClickDetails, isOpen, user }) => {

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClickDetails}
        contentLabel="participant details"
        className="modalLayout"
      >
        <div className="modalContainer">
          {/* 모달 왼쪽 */}
          <div className="modalLeft">
            <div className="modalImgContainer">
              <img src="#" className="modalImg" />
              {/* 순위권 표시 */}
              <Raking />
            </div>
            <div className="modalName">{user.name}</div>
            <div className="modalDetails">
              <div className="modalDetail">
                <div className="modalFlag"></div>
                <span className="modaltext">{user.country}</span>
              </div>
              <div className="modalDetail">
                <SVGPeople className="modalIcon" />
                <span className="modaltext">1,050</span>
              </div>
            </div>
            <div className="modalAmbition">
              {user.vision}
            </div>
            <div className="modalInfoContainer">
              <div className="modalInfo">
                <div className="modalsubjectText">참가번호</div>
                <div className="modaldetailText">{user.participantion_number}</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">교육</div>
                <div className="modaldetailText">
                  {user.education}
                </div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">전공</div>
                <div className="modaldetailText">{user.major}</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">취미</div>
                <div className="modaldetailText">
                  {user.hobby}
                </div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">특기</div>
                <div className="modaldetailText">{user.specialty}</div>
              </div>
            </div>
          </div>
          {/* 모달 오른쪽 */}
          <div className="modalRight">
            <div className="modalTextContainer">
              {/* 해당 팜가자의 이름이 길어질 경우 폰트 사이즈가 바뀌는 영역 */}
              <div className="modalTitle">
                <span>{user.name}</span>의 프로필 사진
              </div>
              <a href="#" className="modalsubText">
                SNS 게시물 보러 가기&nbsp;
                <span className="arrowMark">&#8250;</span>
              </a>
            </div>
            {/* 모달 이미지 리스트 */}
            <div className="modalImgsContainer">
              {user.image_data?.map((u,idx)=>{
                return (
                  <div 
                    key={idx} 
                    className="modalImagesList"
                    >
                    <img src={u.file_url} className="modalImg" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default DetailModal;
