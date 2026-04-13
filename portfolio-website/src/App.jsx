import psyduck from "./assets/psyduck.png"
import linkedIn from "./assets/linkedin.png"
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
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Projects</h2>
          <p>Currently deployed software projects</p>
          <ul>
            <li>
              <a href="/Pokedex" target="_blank">
                <img className="logo" src={psyduck} alt="" />
                Pokedex
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>Check out my Github or say hi on LinkedIn!</p>
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
                GitHub
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
