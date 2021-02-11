import React from "react";
import "./Typewriter";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import "./Header.css";
import { logDOM } from "@testing-library/react";

function Header() {
  const x = window.matchMedia("(max-width: 1030px)");

  return (
    <header id="header-home">
      {console.log(x.matches)}
      {x.matches ? <MobileNav /> : <Navbar />}
      {/* <Navbar /> */}
      {/* {x.addEventListener("change", setNavbar(x))} */}
      <div className="header-content">
        <h1 className="border">
          I Am Erica The
          <span
            className="txt-type"
            datawait="3000"
            datawords='[" Full Stack Developer", " Traveller", " Animal Lover", " Outdoor Enthusiast"]'
          ></span>
        </h1>
        <p className="lead border">
          I specialize in creating understandable, dynamic, single and
          multi-page applications via HTML, CSS, and Javascript
        </p>
      </div>
    </header>
  );
}

export default Header;
