import "./App.css";
import Header from "./components/Header";

import calc from "./images/calculator.jpg";
import pomo from "./images/pomodoro.jpg";
import spa from "./images/spa.jpg";

function App() {
  const copyDate = new Date().getFullYear();
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
            <article className="card">
              <img src={calc} alt="White calculator with white background" />
              <div className="category category-js">Javascript</div>
              <h3>Basic Calculator</h3>
              <p>
                This will be the about for the Basic Calculator. Must add link
                to this card to see full detail about project
              </p>
            </article>
            <article className="card">
              <div className="category category-react">React</div>
              <h3>React Pomodoro Timer</h3>
              <p>
                This will be the about for the React Pomodoro Timer. Must add
                link to this card to see full detail about project
              </p>
              <img
                src={pomo}
                alt="Pomodoro with laptop and headphones in background"
              />
            </article>
            <article className="card">
              <img src={spa} alt="Website Mock-up" />
              <div className="category category-spa">SPA</div>
              <h3>SPA Portfolio</h3>
              <p>
                This will be the about for the SPA Portfolio. Must add link to
                this card to see full detail about project
              </p>
            </article>
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
      <section>
        <h1>Completed Projects</h1>
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
        <div className="pimg3">
          <div className="ptext">
            <span className="border">Contact</span>
          </div>
        </div>
      </section>
      <section>
        <h1>Contact Me</h1>
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
    </div>
  );
}

export default App;
