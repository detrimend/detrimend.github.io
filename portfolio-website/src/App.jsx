import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.svg"
import heroImg from "./assets/hero.png"
import psyduck from "./assets/psyduck.png"
import linkedIn from "./assets/linkedin.png"
import "./App.css"

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Rasmus Duus</h1>
          <p>Software Engineering student at VIA UC Horsens</p>
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
              <a href="/pokedex/" target="_blank" rel="noreferrer">
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
