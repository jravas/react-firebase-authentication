import React from "react";
import { Switch, Route } from "react-router-dom";
// routes
import * as routes from "@/main/constants/routes";
import {
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
  Cart,
  CartCheckOut,
  UsersList
} from "@/modules";
// publc
import HomePage from "@/main/views/Home";
import { NotFound } from "@/main/views/NotFound";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.PRODUCTS} component={ProductPagePublic} />
      <Route exact path={routes.SINGLE_PRODUCT} component={ProductSingle} />
      <Route exact path={routes.CART} component={Cart} />
      <Route exact path={routes.CART_CHECKOUT} component={CartCheckOut} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <PrivateRoute exact path={routes.ACCOUNT} component={AccountPage} />
      <AdminRoute
        exact
        path={routes.ADMIN_CATEGORIES}
        component={AdminCategoryPage}
      />
      <AdminRoute
        exact
        path={routes.ADMIN_CATEGORY_EDIT}
        component={CategoryEdit}
      />
      <AdminRoute
        exact
        path={routes.ADMIN_PRODUCTS}
        component={AdminProductsPage}
      />
      <AdminRoute
        exact
        path={routes.ADMIN_PRODUCT_EDIT}
        component={ProductEdit}
      />
      <AdminRoute exact path={routes.ADMIN_USERS} component={UsersList} />
      <Route component={NotFound} />
    </Switch>
  </main>
);
