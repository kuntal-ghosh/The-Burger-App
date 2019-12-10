import React, { Component } from "react";
import aux from "./../../hoc/Auxulary";
//import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
// import sideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  toggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <aux>
        <Toolbar toggle={this.toggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.sideDrawerOpenHandler}
        ></SideDrawer>
        {/* <sideDrawer></sideDrawer> */}
        <main className={styles.container}>{this.props.children}</main>
      </aux>
    );
  }
}

export default Layout;
