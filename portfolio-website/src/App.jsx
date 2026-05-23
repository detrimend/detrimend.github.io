import psyduck from "./assets/psyduck.png"
import linkedIn from "./assets/linkedin.png"
import deployedCode from "./assets/deployed_code.svg"
import personHeart from "./assets/person_heart.svg"
import sep4 from "./assets/sep4_icon.svg"
import TechGrid from "./components/TechGrid"
import "./App.css"

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Rasmus Duus</h1>
          <p>Software Engineering student at VIA UC Horsens</p>
          <TechGrid></TechGrid>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <img className="icon" src={deployedCode} alt="" aria-hidden="true" />
          <h2>Projects</h2>
          <p>Currently deployed projects - check out my Github for more!</p>
          <ul>
            <li>
              <a href="/Pokedex" target="_blank">
                <img className="logo" src={psyduck} alt="" />
                Pokedex
              </a>
            </li>
            <li>
              <a href="/sep4" target="_blank">
                <img className="logo" src={sep4} alt="" />
                SEP4
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <img className="icon" src={personHeart} alt="" aria-hidden="true" />
          <h2>Connect with me</h2>
          <p>Check out more of what i'm doing, and say hi!</p>
          <ul>
            <li>
              <a href="https://github.com/detrimend" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rasmus-duus-kristensen/"
                target="_blank"
              >
                <img className="logo" src={linkedIn} alt="" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
