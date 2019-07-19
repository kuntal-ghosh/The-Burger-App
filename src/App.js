import React from "react";
import styles from "./App.module.css";
import globalStyles from "../src/assets/global-style/bootstrap.module.css";
//import globalStyles from "bootstrap/dist/css/bootstrap.css";
//import globalStyles from "../src/assets/global-style/bootstrap.module.css";
import cn from "classnames";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <div className={cn("container", styles.App)}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
