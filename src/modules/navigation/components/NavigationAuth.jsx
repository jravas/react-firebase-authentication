import React from "react";
import NavigationAuthAdmin from "./NavigationAuthAdmin";
import NavigationAuthUser from "./NavigationAuthUser";

const NavigationAuth = user =>
  user.authUser.email === "josip.ravas.broj@gmail.com" ? (
    <NavigationAuthAdmin />
  ) : (
    <NavigationAuthUser />
  );

export default NavigationAuth;
