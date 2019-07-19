import React from "react";
import style from "./Modal.module.css";
import BackDrop from "../BrackDrop/BackDrop";
import aux from "../../../hoc/Auxulary";
const Modal = props => {
  return (
    <aux>
      <div
        className={style.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
      <BackDrop show={props.show} clicked={props.cancelModal} />
    </aux>
  );
};

export default Modal;
