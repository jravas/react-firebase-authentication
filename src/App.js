import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// authentication hoc
import withAuthentication from "./main/components/withAuthentication";
// toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// router routes
import Main from "./main/components/Main";
import { Navigation } from "./modules";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Main />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
