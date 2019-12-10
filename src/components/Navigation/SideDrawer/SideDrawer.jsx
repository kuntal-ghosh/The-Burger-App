import React from "react";
import Logo from "../Toolbar/logo/logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from "./SideDrawer.module.css";
import Aux from "../../../hoc/Auxulary";
import BackDrop from "../../common/BrackDrop/BackDrop";
const siderDrawer = props => {
  let attachedClasses = [style.SideDrawer, style.Close];
  if (props.show) {
    attachedClasses = [style.SideDrawer, style.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.closed}></BackDrop>
      <div className={attachedClasses.join(" ")}>
        <div className={style.Logo}>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default siderDrawer;
