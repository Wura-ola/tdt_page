import React from "react";
// import Logo from "../assets/Logo.png";
import logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.jpg";

import { useState } from "react";
import Button from "../Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div>
      <nav className="  bg-[#000000] py-4 px-10 flex justify-between  ">
        <div className="lg:flex items-center justify-between   lg:w-full">
          <div>
            <img src={logo} alt="Logo" className="w-16 md:w-40" />
          </div>

          <li
            className={`mobile_menu list-none text-sm ${
              isOpen ? "is-open" : ""
            }`}
          >
            <ul className="  flex  lg:items-center items-start lg: gap-6 ">
              <li className="md:mt-0 mt-10 ">
                <a
                  href="#"
                  className="  transition ease-in duration-300 hover:ease-out text-[#FFFFFF]"
                >
                  Who we are
                </a>
              </li>
              <li className="md:mt-0 mt-6 ">
                <a
                  href="#about"
                  className="transition ease-in duration-300 hover:ease-out text-[#FFFFFF] "
                >
                  What we do
                </a>
              </li>
              <li className="md:mt-0 mt-6 ">
                <a href="#projects" className="text-[#FFFFFF]">
                  Our Projects
                </a>
              </li>
              <li className="md:mt-0 mt-6 ">
                <a href="#contact" className="text-[#FFFFFF]">
                  Scholarship
                </a>
              </li>
              <li className="md:mt-0 mt-6 ">
                <a href="#contact" className="text-[#FFFFFF]">
                  Shop for Good
                </a>
              </li>
            </ul>
          </li>

          <button className="    bg-[#FFB400] py-2 px-5 text-[#ffffff]">
            Donate Now
          </button>
        </div>

        <div className="toggle_bar lg:hidden  w-10 ">
          <img src={Hamburger} alt="" onClick={toggleMenu} />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
