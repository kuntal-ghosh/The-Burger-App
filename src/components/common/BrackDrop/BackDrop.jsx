import React from "react";
import classes from "./BackDrop.module.css";
const BacDrop = props => {
  return props.show ? (
    <div className={classes.BackDrop} onClick={props.clicked} />
  ) : null;
};

export default BacDrop;
