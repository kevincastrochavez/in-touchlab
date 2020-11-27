import React from "react";
import LogoHome from "../svgs/LogoHome";
import NavItems from "./NavItems";

function NavContainer() {
  return (
    <div className="navContainer">
      <LogoHome className="navContainer__logo" />
      <NavItems />
    </div>
  );
}

export default NavContainer;
