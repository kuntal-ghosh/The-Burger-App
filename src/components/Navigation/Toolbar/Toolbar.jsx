import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "./logo/logo";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Drawer</div>
      <Logo />
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;
