import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// routes
import * as routes from "./main/constants/routes";
// admin pages
import {
  ProductsPage,
  ProductEdit,
  CategoriesPage,
  CategoryEdit,
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  AccountPage,
  Navigation,
  HomePage
} from "./modules";
// authentication hoc
import withAuthentication from "./main/components/withAuthentication";

const App = () => {
  return (
    <Router>
      <main>
        <Navigation />
        <br />
        <section className="container">
          {/* <Route exact path={routes.LANDING} component={LandingPage} /> */}
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.ACCOUNT} component={AccountPage} />
          <Route exact path={routes.CATEGORIES} component={CategoriesPage} />
          <Route exact path={routes.CATEGORY_EDIT} component={CategoryEdit} />
          <Route exact path={routes.ADMIN_PRODUCTS} component={ProductsPage} />
          <Route
            exact
            path={routes.ADMIN_PRODUCT_EDIT}
            component={ProductEdit}
          />
          <Route exact path={routes.PRODUCTS} component={ProductsPage} />
        </section>
      </main>
    </Router>
  );
};

export default withAuthentication(App);
