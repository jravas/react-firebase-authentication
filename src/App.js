import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// routes
import * as routes from "./constants/routes";
// components
import {
  Navigation,
  LandingPage,
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  HomePage,
  AccountPage
} from "./views";
// authentication hoc
import withAuthentication from "./components/withAuthentication";
const App = () => {
  return (
    <Router>
      <main>
        <Navigation />
        <br />
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route exact path={routes.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={routes.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.ACCOUNT} component={AccountPage} />
      </main>
    </Router>
  );
};

export default withAuthentication(App);
