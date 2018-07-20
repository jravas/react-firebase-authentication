import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store, persistor } from "./main/store";
import { PersistGate } from "redux-persist/integration/react";
import registerServiceWorker from "./registerServiceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
