import React from "react";
import "./Footer.css";

function Footer() {
  const copyDate = new Date().getFullYear();
  return (
    <footer id="main-footer" className="py-2">
      <div className="footer-container">
        <div className="personal p-2">
          <i className="fas fa-mountain fa-3x"></i>
          <p>Erica VanNorman</p>
          <p>Seattle, WA</p>
          <p>erica.vannorman@gmail.com</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Enter Email" />
            <textarea rows="4" cols="50" placeholder="Write message here..." />
            <input
              type="submit"
              value="Subscribe"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <h2>Keep Up With My Work</h2>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
          <a href="#" className="btn btn-secondary">
            Follow Me Now!
          </a>
        </div>
        <div>
          <p>Copyright &copy; {copyDate}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
