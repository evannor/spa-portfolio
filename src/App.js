import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import calc from "./images/calculator.jpg";
import pomo from "./images/pomodoro.jpg";
import spa from "./images/spa.jpg";
import secrets from "./images/secrets.jpg";
import api from "./images/api.jpg";
import blog from "./images/blog.jpg";
import simon from "./images/simon-says.PNG";
import sassPort from "./images/sass-port.JPG";

function App() {
  return (
    <div>
      <Header />
      <section className="about-me">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor
          morbi non arcu risus quis varius quam quisque. Pharetra massa massa
          ultricies mi quis hendrerit dolor magna eget. Urna cursus eget nunc
          scelerisque viverra mauris in aliquam. Et pharetra pharetra massa
          massa ultricies mi quis hendrerit dolor. Nisi vitae suscipit tellus
          mauris a diam. Donec enim diam vulputate ut pharetra sit. Aliquam
          faucibus purus in massa tempor. Accumsan tortor posuere ac ut. At
          lectus urna duis convallis convallis tellus id. At auctor urna nunc id
          cursus metus aliquam eleifend. Sagittis purus sit amet volutpat
          consequat. Enim sit amet venenatis urna cursus eget nunc. Tellus
          integer feugiat scelerisque varius morbi. Sit amet volutpat consequat
          mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis
          viverra nibh cras. Commodo viverra maecenas accumsan lacus. Porta nibh
          venenatis cras sed felis. Venenatis a condimentum vitae sapien
          pellentesque habitant morbi tristique. Est ante in nibh mauris cursus
          mattis molestie a iaculis. Eget velit aliquet sagittis id. Mauris in
          aliquam sem fringilla. Fusce id velit ut tortor pretium viverra
          suspendisse. Orci phasellus egestas tellus rutrum tellus pellentesque
          eu tincidunt. Aliquet nibh praesent tristique magna sit. Urna nunc id
          cursus metus aliquam eleifend. Mi proin sed libero enim sed faucibus.
          Netus et malesuada fames ac turpis egestas maecenas pharetra. Gravida
          quis blandit turpis cursus. Accumsan sit amet nulla facilisi morbi
          tempus iaculis. Dui faucibus in ornare quam. Dis parturient montes
          nascetur ridiculus mus. Vel pretium lectus quam id leo in vitae
          turpis. Faucibus scelerisque eleifend donec pretium vulputate sapien
          nec sagittis aliquam. Feugiat in ante metus dictum at tempor commodo.
          Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.
          Velit ut tortor pretium viverra suspendisse. Lacus sed turpis
          tincidunt id aliquet risus.
        </p>
      </section>
      <section>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">Current Projects</span>
          </div>
        </div>
      </section>
      <section id="cur-projs" className="py-2">
        <div className="container">
          <div className="project-container">
            <Card
              src={calc}
              alt="White calculator with white background"
              categoryClass="category category-js"
              category="Javascript"
              title="Basic Calculator"
              desc="This will be the about for the Basic Calculator. Must add link
                to this card to see full detail about project"
            />
            <Card
              src={pomo}
              alt="Pomodoro with laptop and headphones in background"
              categoryClass="category category-react"
              category="React"
              title="React Pomodoro Timer"
              desc="This will be the about for the React Pomodoro Timer. Must add
                link to this card to see full detail about project"
            />
            <Card
              src={spa}
              alt="Website Mock-up"
              categoryClass="category category-spa"
              category="SPA"
              title="SPA Portfolio"
              desc="This will be the about for the SPA Portfolio. Must add link to
                this card to see full detail about project"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="pimg2">
          <div className="ptext">
            <span className="border">Completed Projects</span>
          </div>
        </div>
      </section>
      <section id="cur-projs" className="py-2">
        <div className="container">
          <div className="project-container">
            <Card
              src={secrets}
              alt="Finger on lips gesturing for quiet"
              categoryClass="category category-backend"
              category="Backend"
              title="Secrets"
              desc="This app utilizies SSR and Google OAuth to create a social media site where users can post and share secrets with each other"
            />
            <Card
              src={api}
              alt="Large server room surrounded by glass walls"
              categoryClass="category category-api"
              category="API"
              title="WikiAPI"
              desc="Creates structure to perform CRUD operations on a database containing Wikipedia-like articles"
            />
            <Card
              src={blog}
              alt="Notebook and fountain pen"
              categoryClass="category category-mpa"
              category="MPA"
              title="Blog Template"
              desc="Blog template with an hidden login (no way to reach it in window, but available via file-path)"
            />
            <Card
              src={simon}
              alt="Screen capture of Simon Says game"
              categoryClass="category category-js"
              category="Javascript"
              title="Simon Says"
              desc="User replicates pattern show on the screen for as many levels as possible. Shows a failure page if the pattern is incorrect"
            />
            <Card
              src={sassPort}
              alt="Screen capture of SASS Portfolio"
              categoryClass="category category-mpa"
              category="MPA"
              title="SASS Portfolio"
              desc="Dummy portfolio created to learn SASS. It is a static multi-page app"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="pimg3">
          <div className="ptext">
            <span className="border">Contact</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
