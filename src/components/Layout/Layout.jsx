import React from "react";
import aux from "./../../hoc/Auxulary";
//import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout = props => {
  return (
    <aux>
      <Toolbar />
      <main className={styles.container}>{props.children}</main>
    </aux>
  );
};

export default Layout;
