import React, { useState, useEffect, useRef } from "react";
import "../assets/css/modal.css";
import axios from "axios";
import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/imageModal.css";

const ImageModal = ({ isOpenImage, onCloseImageModal, user, targetIdx }) => {
  console.log("targetIdx========================", targetIdx);

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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
                <SwiperSlide key={idx} className="swiper-slide-video">
                  <video src={u.file_url} className="bigVideo" controls></video>
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
