import React from "react";
import { Switch, Route } from "react-router-dom";
// routes
import * as routes from "@/main/constants/routes";
import {
  HomePage,
  AdminProductsPage,
  ProductEdit,
  ProductSingle,
  ProductPagePublic,
  AdminCategoryPage,
  CategoryEdit,
  SignUpPage,
  SignInPage,
  PasswordForgetPage,
  AccountPage,
  Admin,
  Cart
} from "@/modules";
// publc
import { NotFound } from "@/main/views/NotFound";

export const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.PRODUCTS} component={ProductPagePublic} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.ADMIN} component={Admin} />
      <Route
        exact
        path={routes.ADMIN_CATEGORIES}
        component={AdminCategoryPage}
      />
      <Route exact path={routes.ADMIN_CATEGORY_EDIT} component={CategoryEdit} />
      <Route exact path={routes.ADMIN_PRODUCTS} component={AdminProductsPage} />
      <Route exact path={routes.ADMIN_PRODUCT_EDIT} component={ProductEdit} />
      <Route exact path={routes.SINGLE_PRODUCT} component={ProductSingle} />
      <Route exact path={routes.CART} component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </main>
);
