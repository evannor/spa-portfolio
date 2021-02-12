import React from "react";
import "./Footer.css";

function Footer() {
  const copyDate = new Date().getFullYear();
  return (
    <footer id="main-footer" className="py-2">
      <div className="footer-container">
        <div>
          <i className="fas fa-mountain fa-5x"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit repudiandae debitis vitae culpa sequi earum harum
            rerum, minima repellendus voluptatum aspernatur ea vel. Nostrum,
            fuga.
          </p>
        </div>
        <div>
          <h3>Email Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit repudiandae debitis vitae
          </p>
          <form>
            <input type="email" placeholder="Enter Email" />
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
        <div>
          <h2>Keep Up With My Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum
            ipsam necessitatibus.
          </p>
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
