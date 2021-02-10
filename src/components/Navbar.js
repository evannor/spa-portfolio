import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            Projects <i className="far fa-caret-square-down"></i>
            <ul>
              <li>
                <a href="#">Current</a>
              </li>
              <li>
                <a href="#">Completed</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
