import React from "react";
import { Scrollchor } from "react-scrollchor";
import "./_Navbar.scss";

class Navbar extends React.PureComponent {
  componentDidMount() {
    this.refs.navbar.addEventListener("click", (e) => {
      if (e.target.innerText === "Projects") {
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar" ref="navbar">
          <Scrollchor className="proj-scroll" to="#projects">
            Projects
          </Scrollchor>
        </nav>
      </div>
    );
  }
}

export default Navbar;
