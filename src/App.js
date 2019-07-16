import React from "react";
import styles from "./App.module.css";
import globalStyles from "../src/assets/global-style/bootstrap.module.css";
//import globalStyles from "bootstrap/dist/css/bootstrap.css";
//import globalStyles from "../src/assets/global-style/bootstrap.module.css";
import cn from "classnames";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className={cn("container", styles.App)}>
      <Layout>test</Layout>
    </div>
  );
}

export default App;
