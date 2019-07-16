import React from "react";
import aux from "./../../hoc/Auxulary";
const Layout = props => {
  return (
    <aux>
      <div>Toolbar,sidebar,backdrop</div>
      <main>{props.children}</main>
    </aux>
  );
};

export default Layout;
