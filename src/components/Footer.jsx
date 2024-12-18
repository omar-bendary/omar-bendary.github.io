import React from "react";
import Icons from "./Skills/Icons";
import logo from "../assets/media/Frame 1026.png";
const Footer = ({ socialMediaData }) => {
  return (
    <footer className="footer footer-center text-base-content rounded p-10 md:p-6 sm:p-4 ">
      <nav className="grid grid-flow-col gap-4">
        <a className="#">
          <img src={logo} />
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Icons socialMediaData={socialMediaData} />
        </div>
      </nav>
      <aside>
        <p className="font-normal md:text-xl text-xs">
          Copyright © {new Date().getFullYear()} Omar Bendary - All right
          reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
