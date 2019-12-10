import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "./logo/logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle
        className={classes.DesktopOnly}
        clicked={props.toggle}
      ></DrawerToggle>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;
