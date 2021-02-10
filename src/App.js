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
      <p>Happy New Portfolio!!</p>
    </div>
  );
}

export default App;
