import React from "react";
import { Link } from "react-router-dom";
import * as routes from "@/main/constants/routes";

const SingnUpLink = () => {
  return (
    <div className="sing-in-page__additional__up">
      <span>Don't have account ? </span>
      <Link to={routes.SIGN_UP}> Sing Up</Link>
    </div>
  );
};

export default SingnUpLink;
