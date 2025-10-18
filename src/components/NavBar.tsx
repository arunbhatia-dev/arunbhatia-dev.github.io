import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/NavBar.css";


class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#intro" className="navbar-brand">Arun Bhatia</a>
        </div>

        <div className="navbar-center">
          <a href="#intro" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>

        <div className="navbar-right">
          <a href="https://github.com/arunbhatia-dev" target="_blank" rel="noopener noreferrer" className="icon-link">
            <GitHubIcon />
          </a>
          <a href="https://fi.linkedin.com/in/arun-bhatia-807043204" target="_blank" rel="noopener noreferrer" className="icon-link">
            <LinkedInIcon />
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
