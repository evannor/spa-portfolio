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
            summer of 2015. I've enjoyed spending the last few years working the
            hospitality and outdoor industry, allowing me the ability to explore
            and become enthralled with this state and region.
          </p>
          <p>
            I have decided to pivot my career focus back into science and
            technology by gaining knowledge about web development. This
            portfolio is a showcase of what I've created and culmination of what
            I've learned.
          </p>
          <p>
            I am currently accepting clients, and seeking employment in this
            field. Please feel free to <a href="#">email me</a> or fill out the{" "}
            <a href="#">contact form below</a>.
          </p>
        </div>
        <div className="skills">
          <div>
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Authentication &amp; Security</li>
            </ul>
          </div>
          <div>
            <h3>Front-End</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h3>Back-End</h3>
            <ul>
              <li>Node.js</li>
              <li>REST API</li>
              <li>EJS</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
