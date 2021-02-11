import React from "react";
import "./Typewriter";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <header id="header-home">
      <Navbar />
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
