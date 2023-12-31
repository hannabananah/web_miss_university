import React, { useState, useEffect, useRef } from "react";
import "../Assets/css/modal.css";
import axios from "axios";
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../Assets/css/imageModal.css";

const ImageModal = ({ isOpenImage, onCloseImageModal, user, targetIdx}) => {
  const [viewIdx ,setViewIdx] = useState();
  const [videoLoadCount, setVideoLoadCount] = useState(0)

  const onLoadedMetadata = () => {
    setVideoLoadCount(curr => curr + 1)
  }

  const imageList = document.querySelectorAll('.bigImage');

  const imgViewSize = () => {
    for (let i=0; i<imageList.length; i++) {
      const imageWidth = imageList[i].naturalWidth !== undefined ? imageList[i].naturalWidth : imageList[i].videoWidth;
      const imageHeight = imageList[i].naturalHeight !== undefined ? imageList[i].naturalHeight : imageList[i].videoHeight;
      if (imageWidth / imageHeight <= 1 ) { //세로가 긴 이미지
        imageList[i].classList.add("zoomHeight");
        imageList[i].classList.remove("zoomWidth");
      } else {
        imageList[i].classList.add("zoomWidth");
        imageList[i].classList.remove("zoomHeight");
      }
    }
  }

  useEffect( () => {
    // 영상이 있을수도 없을수도 있음. 비디오가 로드 전이라면 videoWidth, wideoHeight 는 0 
    if ( document.querySelectorAll('.video').length > 0 && 
      document.querySelectorAll('.video').length == videoLoadCount) {
      imgViewSize();
    } else {
      imgViewSize();
    }
  },[viewIdx,videoLoadCount])

  return (
    <div>
      <Modal
        isOpen={isOpenImage}
        onRequestClose={onCloseImageModal}
        className="imageModal"
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={onCloseImageModal} className="closeBtn">
          <CloseIcon style={{fontSize:"40px",color:"#fff"}}/>
        </button>
  
        <Swiper
          initialSlide={targetIdx}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="swiper-container"
          onSlideChange={(swiper) => setViewIdx(swiper.activeIndex)}
          onSwiper={(swiper) => setViewIdx(swiper.activeIndex)}
        >
          {user.content_data?.map((u, idx) => {
            if (u.content_type === 1) {
              // 사진
              return (
                <SwiperSlide key={idx} className="swiper-slide">
                  <img
                    src={u.file_url}
                    alt={`image-${idx}`}
                    className="bigImage"
                  />
                </SwiperSlide>
              );
            } else if (u.content_type === 2) {
              // 동영상
              return (
                <SwiperSlide key={idx} className="swiper-slide">
                  <video src={u.file_url} 
                  className="bigImage video"
                  onLoadedMetadata={onLoadedMetadata} 
                  controls></video>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </Modal>
    </div>
  );
};
export default ImageModal;
