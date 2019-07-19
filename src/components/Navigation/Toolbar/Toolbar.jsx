import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "./logo/logo";
const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>.......hi</nav>
    </header>
  );
};

export default Toolbar;
