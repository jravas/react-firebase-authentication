import React from "react";
import { Router } from "react-router-dom";
// authentication hoc
import withAuthentication from "./main/components/withAuthentication";
// toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// router routes
import { Main } from "./main/components/Main";
import { Navigation } from "./modules";
// loading bar
import LoadingBar from "react-redux-loading-bar";
//
import history from "./main/constants/history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Navigation />
        <LoadingBar
          updateTime={100}
          maxProgress={100}
          style={{
            position: "absolute",
            width: "100%",
            top: 0,
            backgroundColor: "#33691E",
            height: "5px"
          }}
        />
        <Main />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
