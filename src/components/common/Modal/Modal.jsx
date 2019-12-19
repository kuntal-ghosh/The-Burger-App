import React, { Component } from "react";
import style from "./Modal.module.css";
import BackDrop from "../BrackDrop/BackDrop";
import aux from "../../../hoc/Auxulary";

class Modal extends Component {
  state = {};
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      this.props.children !== nextProps.children
    );
  }

  componentWillUpdate() {
    console.log("modal update");
  }
  render() {
    return (
      <aux>
        <div
          className={style.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
        <BackDrop show={this.props.show} clicked={this.props.cancelModal} />
      </aux>
    );
  }
}

export default Modal;
