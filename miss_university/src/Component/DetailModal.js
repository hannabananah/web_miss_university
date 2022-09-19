import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// 0201,0202 (<" "의 프로필 사진>텍스트 디폴트 크기 32px)
import "../Assets/css/modal.css";
import axios from "axios";
import ImageModal from "../Component/ImageModal";

// 0203(이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우:<" "의 프로필 사진>텍스트 크기를 24px로 변경)
// import "../Assets/css/modalLongName.css";

// 0203(폰트 크기를 24로 줄였음에도 우측 텍스트와의 여백이 40px이 안될 경우 이름의 길이가 너무 길어서 최대 가로 길이를 넘어갈 경우 폰트 사이즈 22px로 변경)
// import "../Assets/css/modalTooLongName.css";

// 순위권 표시
import Raking from "../Component/ModalRanked";
import { ReactComponent as SVGPeople } from "../Assets/images/people.svg";
Modal.setAppElement("#root");

const DetailModal = ({ onCloseModal, isOpen, user, loaded }) => {

  const [isOpenImage, setIsOpenImage] = useState(false);
  const [targetIdx, setTargetIdx] = useState(0);

  const onClickImage = (idx) => {
    setIsOpenImage(true)
    setTargetIdx(idx)
  }
  const onCloseImageModal = () => {
    if (isOpenImage) {
      setIsOpenImage(false)
    }
  }

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
                <div className="modalFlag"></div>
                <span className="modaltext">{user.country}</span>
              </div>
              {/* <div className="modalDetail">
                <SVGPeople className="modalIcon" />
                <span className="modaltext">1,050</span>
              </div> */}
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
              {/* 해당 참가자의 이름이 길어질 경우 폰트 사이즈가 바뀌는 영역 */}
              <div className="modalTitle">
                <span>{user.name}</span>의 프로필 사진
              </div>
              <a href="#" className="modalsubText">
                SNS 게시물 보러 가기&nbsp;
                <span className="arrowMark">&#8250;</span>
              </a>
            </div>
            {/* 모달 이미지 리스트 */}
            <div className="modalImgsContainer" style={{display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex", gap:"6px"}}>
              {
                loaded && 
                user.content_data?.map((u,idx)=>{

                  if (u.content_type === 2) { // 영상
                    return (
                      <div key={idx} className="modalImagesList">
                        <video 
                          src={u.file_url} 
                          onClick={()=>onClickImage(idx)} 
                          className="modalImg" 
                          controls>
                        </video>
                      </div>  
                    )
                  } else if (u.content_type === 1) { // 사진
                    return (
                      <div 
                        key={idx} 
                        className="modalImagesList"
                        >
                        <img src={u.file_url} onClick={()=>onClickImage(idx)} className="modalImg" alt={`image-${idx}`} />
                      </div>
                    )
                  }
                })
              }
              </div>
              

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
