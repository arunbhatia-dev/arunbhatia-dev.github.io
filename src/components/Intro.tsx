import React from "react";
import Typist from "react-typist-component";
import Laptop from "./Laptop";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../styles/Intro.css";


class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
              <div className="intro-content">
                <div className="laptop-container">
                  <Laptop />
                </div>
                <div id="intro-desc">
                  <p className="intro-hello">Hi, my name is</p>
                  <div className="intro-greeting">
                    <Typist
                      typingDelay={100}
                      cursor={<span className="cursor">|</span>}
                    >
                      <span className="intro-name">Arun Bhatia.</span>
                    </Typist>
                  </div>
                  <h2 className="intro-tagline">I build things with AI & data.</h2>
                  <div className="intro-description">
                    <p className="fade-in-text">
                      I'm a software engineer from Helsinki, Finland, specializing in
                      AI, Machine Learning, and scalable software solutions. Currently,
                      I'm focused on building intelligent systems that make a real difference.
                    </p>
                  </div>
                  <div className="intro-cta">
                    <a href="#projects" className="cta-button">
                      Check out my work
                    </a>
                  </div>
                </div>
              </div>
              <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
                <KeyboardArrowDownIcon />
              </a>
            </div>
        );
    }
}

export default Intro;
