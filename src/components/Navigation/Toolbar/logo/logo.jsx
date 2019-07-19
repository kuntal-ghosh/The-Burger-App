import React from "react";
import burgerLogo from "../../../../assets/image/burger-logo.png";
import classes from "./logo.module.css";
const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
