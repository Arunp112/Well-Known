import React from "react";
// import BurgerMenu from '../Image/Burger menu.png'
import "../Style/Global.css";
import { useState } from "react";
import { BurgerMenu } from "../Image/Icons";
import { IoMenu } from "react-icons/io5";
import Icon1 from "../Image/WellKnownIcon1.png"
import Icon2 from "../Image/WellKnownMiddleIcon.png";
import Icon3 from "../Image/WellKnownIcon3.png"
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className=" ps-3   bottom-shadow bg-white header">
      <div className="d-flex justify-content-start align-items-center gap-4 ">
        <span className="dot-icon cursor-pointer">
          <BurgerMenu width="23px" className="text-blue cursor-pointer" />
        </span>
        <span className="burger-menu" onClick={toggleMenu}>
          <IoMenu />
        </span>

        <span className="text-blue fw-semibold text-md">Well Known</span>
      </div>
      <div className="nav-list">
        <ul className={!isMenuOpen ? "nav-links active" : "nav-links"}>
          <Link to={"/dashboard"} onClick={toggleMenu}>Home</Link>
          <Link to={"/inquiryList"} onClick={toggleMenu}>Inquiry List</Link>
        </ul>
      </div>
      <div className='d-flex gap-2'>
        <span className="wellknown-header-icons">

        <img src={Icon1} height="52px"/>
        <img src={Icon2} height="52px"/>
        </span>
        <img src={Icon3} height="52px"/>
      </div>
    </header>
  );
}

export default Header;
