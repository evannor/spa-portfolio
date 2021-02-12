import React, { useState } from "react";
import "./Typewriter";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import "./Header.css";

function Header() {
  let screen = window.matchMedia("(max-width: 1030px)");
  // create state var for screen size
  const [screenWidth, setScreenWidth] = useState(screen.matches);

  const renderNavHandler = () => {
    setScreenWidth(screen.matches);
  };

  screen.addEventListener("change", renderNavHandler);
  return (
    <header id="header-home">
      {/* Render component based upon screen size */}
      {screenWidth ? <MobileNav /> : <Navbar />}
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
