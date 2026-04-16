import Nav from "./Components/Nav.jsx";
import "./index.css";
import Hero from "./Components/Hero.jsx";
import "./anim.css";
import Anchor from "./Components/Anchor.jsx";

const App = () => {
  return (
    <div className="landing-page">
      <div className="page1">
        <Anchor />
        <Nav />
        <Hero />
          </div>
    </div>

  )
}

export default App
