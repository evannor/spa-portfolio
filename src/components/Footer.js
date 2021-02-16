import React from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

function Footer() {
  const copyDate = new Date().getFullYear();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Thank you so much for your message! I hope to speak with you soon!"
          );
        },
        (error) => {
          console.log(error.text);
          alert(
            "I'm sorry! There was an issue sending the email. Please email me at: erica.vannorman@gmail.com"
          );
        }
      );
    e.target.reset();
  }

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
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="full-name" />
            <input type="email" placeholder="Enter Email" name="email" />
            <textarea
              rows="4"
              cols="50"
              placeholder="Write message here..."
              name="message"
            />
            <input
              type="submit"
              value="Send The Message"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div className="site-list">
          <h3>Site Links</h3>
          <ul className="list">
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
              <a href="#main-footer">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <h2>Keep Up With Me</h2>
          <div className="social-icons">
            <a href="https://github.com/evannor" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erica-vannorman/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://twitter.com/CodesErica" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright &copy; {copyDate}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
