import React, { useState, useEffect } from "react";
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
export const Popup = ({ modalIsOpen, setModalIsOpen }) => {
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
      <p class={classes.date}>December 21, 2022</p>
      <Carousel />
      <div class={classes.buttons}>
        <div class={classes.popupButton1Style}>
          <button class={classes.popupButton}>오늘 하루 안보기</button>
          <input type="checkbox" id="check" />
        </div>
        <button
          class={classes.popupButton}
          onClick={() => setModalIsOpen(false)}
        >
          close
        </button>
      </div>
    </Modal>
  );
};
