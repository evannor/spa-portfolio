import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li>
            <a href="#navbar">Home</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            Projects <i className="far fa-caret-square-down"></i>
            <ul>
              <li>
                <a href="#cur-projs">Current</a>
              </li>
              <li>
                <a href="#complete-projs">Completed</a>
              </li>
            </ul>
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
      </nav>
    </div>
  );
}

export default Navbar;
