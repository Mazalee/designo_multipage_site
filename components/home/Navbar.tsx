import React from "react";
import Logo from "../../public/shared/desktop/logo-dark.png";
import Image from "next/image";
import NavRight from "./NavRight";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-div">
      <nav className="wrapper">
        <div className="nav-div-inner">
          <div className="nav-left">
            <Link href="/">
              <Image className="logo-image" src={Logo} alt="logo" />
            </Link>
          </div>
          <NavRight />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
