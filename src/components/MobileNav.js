import React from "react";
import "./MobileNav.css";

function MobileNav() {
  // close the MobileNav menu when you click anywhere in the menu that isn't a selection
  const menu = document.getElementsByClassName("toggler");
  function menuHandler() {
    menu[0].checked = false;
  }
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu" onClick={menuHandler}>
        <div>
          <div>
            <ul>
              <li>
                <a href="#navbar">Home</a>
              </li>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#cur-projs">Projects</a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/13pvpkiQYp9czOopstEWONIqYmRB1KpNk/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="#main-footer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
