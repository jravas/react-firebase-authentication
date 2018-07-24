import React from "react";
import NavigationAuthAdmin from "./NavigationAuthAdmin";
import NavigationAuthUser from "./NavigationAuthUser";
import admin from "@/main/constants/hardCodedAdmin";

const NavigationAuth = user =>
  user.authUser.email === admin.mail ? (
    <NavigationAuthAdmin />
  ) : (
    <NavigationAuthUser />
  );

export default NavigationAuth;
