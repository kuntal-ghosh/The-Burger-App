import React from "react";
import Style from "./DrawerToggle.module.css";

const drawerToggle = props => {
  return (
    <div className={Style.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
