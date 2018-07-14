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
// product admin pages
import ProductsPage from "./modules/product";
import ProductEdit from "./modules/product/views/ProductEdit";
// categories admin pages
import CategoriesPage from "./modules/category";
import CategoryEdit from "./modules/category/views/CategoryEdit";

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
        <Route exact path={routes.CATEGORIES} component={CategoriesPage} />
        <Route exact path={routes.CATEGORY_EDIT} component={CategoryEdit} />
        <Route exact path={routes.PRODUCTS} component={ProductsPage} />
        <Route exact path={routes.PRODUCT_EDIT} component={ProductEdit} />
      </main>
    </Router>
  );
};

export default withAuthentication(App);
