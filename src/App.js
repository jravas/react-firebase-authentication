import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// routes
import * as routes from "./main/constants/routes";
// admin pages
import {
  AdminProductsPage,
  ProductEdit,
  AdminCategoryPage,
  CategoryEdit,
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  AccountPage,
  Navigation,
  HomePage,
  Admin,
  Cart
} from "./modules";
// authentication hoc
import withAuthentication from "./main/components/withAuthentication";
// publc
import ProductSingle from "./main/components/ProductSingle";

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
          <Route exact path={routes.ADMIN} component={Admin} />
          <Route
            exact
            path={routes.ADMIN_CATEGORIES}
            component={AdminCategoryPage}
          />
          <Route
            exact
            path={routes.ADMIN_CATEGORY_EDIT}
            component={CategoryEdit}
          />
          <Route
            exact
            path={routes.ADMIN_PRODUCTS}
            component={AdminProductsPage}
          />
          <Route
            exact
            path={routes.ADMIN_PRODUCT_EDIT}
            component={ProductEdit}
          />
          <Route exact path={routes.SINGLE_PRODUCT} component={ProductSingle} />
          <Route exact path={routes.CART} component={Cart} />
        </section>
      </main>
    </Router>
  );
};

export default withAuthentication(App);
