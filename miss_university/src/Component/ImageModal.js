import React, { useState, useEffect, useRef } from "react";
import "../assets/css/modal.css";
import axios from "axios";
import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/imageModal.css";

const ImageModal = ({ isOpenImage, onCloseImageModal, user, targetIdx, view, setView }) => {
  // console.log("targetIdx========================", targetIdx);
  const imageList =  document.querySelectorAll('.bigImage');
  
  console.log(view)

  useEffect(()=>{
    for (let i=0; i<imageList.length; i++) {
      const imageWidth = imageList[i].naturalWidth !== undefined ? imageList[i].naturalWidth : imageList[i].videoWidth;
      const imageHeight = imageList[i].naturalHeight !== undefined ? imageList[i].naturalHeight : imageList[i].videoHeight ;
      if ( imageWidth / imageHeight <= 1 ) { //세로가 긴 이미지
        imageList[i].classList.add("zoomHeight");
        imageList[i].classList.remove("zoomWidth");
      } else {
        imageList[i].classList.add("zoomWidth");
        imageList[i].classList.remove("zoomHeight");
      }
    }    
  },[view])


  return (
    <div>
      <Modal
        isOpen={isOpenImage}
        onRequestClose={onCloseImageModal}
        className="imageModal"
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={onCloseImageModal} className="closeBtn">
          close
        </button>
        <Swiper
          initialSlide={targetIdx}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="swiper-container"
          onSlideChange={(swiper) => setView(swiper.activeIndex)}
          onSwiper={(swiper) => setView(swiper.activeIndex)}
        >
          {user.content_data?.map((u, idx) => {
            // console.log('u=====================================',u)
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
                  className="bigImage" 
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
