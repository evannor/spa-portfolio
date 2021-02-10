import "./App.css";
import Navbar from "./components/Navbar";
import "./Typewriter";

function App() {
  return (
    <div>
      <header id="header-home">
        <Navbar />
        <div className="header-content">
          <h1>
            I Am Erica The
            <span
              className="txt-type"
              datawait="3000"
              datawords='[" Full Stack Developer", " Streamer", " Animal Lover", " Outdoor Enthusiast"]'
            ></span>
          </h1>
          <p className="lead">
            I specialize in creating understandable, dyanmic, single and
            multi-page applications via HTML, CSS, and Javascript
          </p>
        </div>
      </header>
      <section>
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
    </div>
  );
}

export default App;
