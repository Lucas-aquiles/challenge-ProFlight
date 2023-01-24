import React from "react";
import "../style/LogoDiv.css";
import Logo from "../images/logo.png";

const LogoDiv = () => {
  return (
    <div className=" logoDiv ">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
};

export default LogoDiv;
