import React from "react";
import { Link } from "react-router-dom";
import * as routes from "@/main/constants/routes";

export const SignUpLink = () => {
  return (
    <div>
      <span>Don't have account ? </span>
      <Link to={routes.SIGN_UP}> Sing Up</Link>
    </div>
  );
};
