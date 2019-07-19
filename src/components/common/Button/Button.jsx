import React from "react";
import cn from "classnames";
import globalStyles from "../../../assets/global-style/bootstrap.module.css";
import classes from "./Button.module.css";

const Button = props => {
  const { clicked, type } = props;
  return (
    <div
      className={cn(globalStyles.btn, globalStyles[type], classes.Button)}
      onClick={clicked}
    >
      {props.children}
    </div>
  );
};

export default Button;
