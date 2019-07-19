import React from "react";
import aux from "./../../hoc/Auxulary";
//import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
const Layout = props => {
  return (
    <aux>
      <div>Toolbar,sidebar,backdrop</div>
      <main className={styles.container}>{props.children}</main>
    </aux>
  );
};

export default Layout;
