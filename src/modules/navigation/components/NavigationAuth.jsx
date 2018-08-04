import React from "react";
import NavigationAuthAdmin from "./NavigationAuthAdmin";
import NavigationAuthUser from "./NavigationAuthUser";
import admin from "@/main/constants/hardCodedAdmin";

const NavigationAuth = ({ authUser }) =>
  authUser.email === admin.email ? (
    <NavigationAuthAdmin />
  ) : (
    <NavigationAuthUser />
  );

export default NavigationAuth;
