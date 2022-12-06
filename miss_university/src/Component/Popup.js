import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Carousel from "./carousel";
import { useStyles } from "../Assets/js/popup";

const popupStyle = {
  content: {
    top: "40%",
    left: "28%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #666",
    textAlign: "center",
    width: "450px",
    boxSizing: "border-box",
  },
};
const popupCheck = useRef();

export const Popup = ({ modalIsOpen, setModalIsOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      isOpen={modalIsOpen}
      style={popupStyle}
      contentLabel="WMU Temporary Popup"
      onRequestClose={() => setModalIsOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <h2>
        31st WORLD MISS UNIVERSITY
        <br />
        is upcoming now
      </h2>
      <p className={classes.date}>December 21, 2022</p>
      <Carousel />
      <div className={classes.buttons}>
        <div className={classes.popupButton1Style} onClick={handleClose}>
          <button className={classes.popupButton}>오늘 하루 안보기</button>
          <input type="checkbox" id="check" />
        </div>
        <button
          className={classes.popupButton}
          onClick={() => setModalIsOpen(false)}
        >
          close
        </button>
      </div>
    </Modal>
  );
};
