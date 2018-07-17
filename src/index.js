import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./main/store";
import registerServiceWorker from "./registerServiceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
