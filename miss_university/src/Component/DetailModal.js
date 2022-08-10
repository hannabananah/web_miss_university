import React, { useState } from "react";
import Modal from "react-modal";
import "../Assets/css/modal.css";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";
Modal.setAppElement("#root");

const DetailModal = ({ popupmodal, isOpen }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={popupmodal}
        contentLabel="participant details"
        className="modalLayout"
      >
        <div className="modalContainer">
          {/* 모달 왼쪽 */}
          <div className="modalLeft">
            <div className="modalImgContainer">
              <img src="#" className="modalImg" />
            </div>
            <div className="modalName">ZABELO HILABISA</div>
            <div className="modalDetails">
              <div className="modalDetail">
                <div className="modalFlag"></div>
                <span className="modaltext">ALGERIA</span>
              </div>
              <div className="modalDetail">
                <SVGPeople className="modalIcon" />
                <span className="modaltext">1,050</span>
              </div>
            </div>
            <div className="modalAmbition">
              나라를 성공적으로 대표하고, 아프리카 문화를 전세계에 널리
              홍보하겠습니다.
            </div>
            <div className="modalInfoContainer">
              <div className="modalInfo">
                <div className="modalsubjectText">참가번호</div>
                <div className="modaldetailText">01</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">교육</div>
                <div className="modaldetailText">
                  Mouloud Mammeri Mouloud Mammeri university
                </div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">전공</div>
                <div className="modaldetailText">지질학</div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">취미</div>
                <div className="modaldetailText">
                  해변가기, 여행가기, 수영하기, 서핑하기, 쇼핑하기, 독서하기,
                  명상하기, 음악듣기
                </div>
              </div>
              <div className="modalInfo">
                <div className="modalsubjectText">특기</div>
                <div className="modaldetailText">연기</div>
              </div>
            </div>
          </div>
          {/* 모달 오른쪽 */}
          <div className="modalRight">
            <div className="modalTextContainer">
              <h3 className="modalTitle">ZABELO HILABISA의 프로필 사진</h3>
              <div className="modalsubText">
                참가자 SNS 게시물 보러 가기&nbsp;
                <span className="arrowMark">&#8250;</span>
              </div>
            </div>
            {/* 모달 이미지 리스트 */}
            <div className="modalImgsContainer">
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
              <div className="modalImagesList">
                <img src="#" className="modalImg" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default DetailModal;
