import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Carousel from "./carousel";
import { useStyles } from "../Assets/js/popup";

const popupStyle = {
  content: {
    top: "45%",
    left: "35%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #666",
    textAlign: "center",
    maxWidth: "450px",
    width: "80vw",
    maxHeight: "720px",
    height: "80vh",
    boxSizing: "border-box",
  },
};

export const Popup = ({ modalIsOpen, setModalIsOpen, handleClose }) => {
  const classes = useStyles();
  const popupCheck = useRef(null);
  const onButtonClick = () => {
    popupCheck.current.click();
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      style={popupStyle}
      contentLabel="WMU Temporary Popup"
      onRequestClose={() => setModalIsOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <div className={classes.buttons}>
        {/* 오늘 하루 안보기 */}
        {/* <div className={classes.popupButton1Style}>
          <button className={classes.popupButton} onClick={onButtonClick}>
            오늘 하루 안보기
          </button>
          <input
            type="checkbox"
            id="check"
            ref={popupCheck}
            onClick={handleClose}
          />
        </div> */}
        <button
          className={classes.popupButton}
          onClick={() => setModalIsOpen(false)}
        >
          close
        </button>
      </div>
      <h2>
        31st WORLD MISS UNIVERSITY
        <br />
        is upcoming now
      </h2>
      <p className={classes.date}>December 21, 2022</p>
      <Carousel />
    </Modal>
  );
};
