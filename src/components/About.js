import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about-me">
      <h1>About Me</h1>
      <div className="about-skills">
        <div className="about">
          <h2>Erica VanNorman</h2>
          <p>
            Having lived in New York, Arizona, and Georgia, the Pacific
            Northwest began calling my name in the mid 2010's. My two cats,
            April and Mickey, and myself arrived in Washington State in the
            summer of 2015. I've enjoyed spending the last few years working in
            the hospitality and outdoor industry, allowing me the ability to
            explore and become enthralled with this state and region.
          </p>
          <p>
            I have decided to pivot my career focus back into science and
            technology by gaining knowledge about web development. This
            portfolio is a showcase of what I've created and culmination of what
            I've learned.
          </p>
          <p>
            I am currently accepting clients, and seeking employment in this
            field. Please feel free to{" "}
            <a href="mailto:erica.vannorman@example.com">email me</a> or fill
            out the <a href="#contact">contact form below</a>.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="tools">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Authentication &amp; Security</li>
            </ul>
          </div>
          <div className="frontend">
            <h3>Front-End</h3>
            <ul>
              <li>
                <i className="fab fa-html5"></i>HTML5
              </li>
              <li>
                <i className="fab fa-css3"></i>CSS
              </li>
              <li>
                <i className="fab fa-sass"></i>SASS
              </li>
              <li>
                <i className="fab fa-bootstrap"></i>Bootstrap
              </li>
              <li>
                <i className="fab fa-js"></i>JavaScript
              </li>
              <li>
                <i className="fab fa-react"></i>React
              </li>
            </ul>
          </div>
          <div className="backend">
            <h3>Back-End</h3>
            <ul>
              <li>
                <i className="fab fa-node-js"></i>Node.js
              </li>
              <li>
                <i className="fas fa-exchange-alt"></i>REST API
              </li>
              <li>
                <i className="fas fa-percentage"></i>EJS
              </li>
              <li>
                <i className="fas fa-database"></i>MongoDB
              </li>
              <li>
                <i className="fas fa-exchange-alt"></i>Express.js
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
