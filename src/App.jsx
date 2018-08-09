import React from "react";
import { Router } from "react-router-dom";
// authentication hoc
import { withAuthentication } from "./main/components/withAuthentication";
// toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// router routes
import { Main } from "./main/components/Main";
import { Navigation } from "./modules";
// loading bar
import LoadingBar from "react-redux-loading-bar";
import history from "./main/constants/history";
import { Footer } from "./main/components/Footer";

const App = () => {
  return (
    <Router history={history}>
      <div className="main-wrapper">
        <Navigation />
        <LoadingBar
          updateTime={100}
          maxProgress={100}
          style={{
            position: "absolute",
            width: "100%",
            top: 0,
            backgroundColor: "rgb(66, 183, 42)",
            height: "2px"
          }}
        />
        <Main />
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
