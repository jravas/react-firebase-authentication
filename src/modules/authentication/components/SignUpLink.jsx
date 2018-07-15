import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../main/constants/routes";

const SingnUpLink = () => {
  return (
    <div>
      <p>Don't have account ?</p>
      <Link to={routes.SIGN_UP}>Singn Up</Link>
    </div>
  );
};

export default SingnUpLink;
