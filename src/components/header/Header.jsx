import React from "react";
import Nav from "./Nav";

import Hero from "./Hero";

function Header() {
  return (
    <div className="header text-[#ffffff]">
      <Nav />

      <Hero />
    </div>
  );
}

export default Header;
