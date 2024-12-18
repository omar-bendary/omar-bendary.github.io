import React from "react";
import logo from "../../assets/media/Frame 1026.png";

{
  /* HEADER-LOGO */
}
const Logo = () => {
  return (
    <div className="flex-[0.25]">
      <a className="btn btn-ghost text-xl">
        <img src={logo} />
      </a>
    </div>
  );
};

export default Logo;
