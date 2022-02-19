import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { useRef } from "react";

import projects from "./content/projects";
import statements from "./content/about-me";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About statements={statements} />
      <h2 id="projects" className="section-title" data-reactid="49">
        Projects
      </h2>
      <Projects projects={projects} />
    </div>
  );
}

export default App;
