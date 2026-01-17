import React from "react";
import Typist from "react-typist-component";
import Laptop from "./Laptop";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../styles/Intro.css";


class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
              <div className="intro-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
              </div>

              <div className="intro-content">
                <div className="intro-left">
                  <div id="intro-desc">
                    <div className="intro-greeting">
                      <Typist
                        typingDelay={100}
                        cursor={<span className="cursor">|</span>}
                      >
                        hi, <span className="intro-name">arun</span> here.
                      </Typist>
                    </div>
                    <h2 className="intro-tagline">
                      Software Engineer & <br/>
                      <span className="highlight">Technical Leader in AI</span>
                    </h2>
                    <div className="intro-description">
                      <p className="fade-in-text">
                        I'm a software engineer from Helsinki, Finland. I'm fascinated by
                        high-impact products and technologies that make a difference.
                      </p>
                    </div>
                    <div className="intro-cta">
                      <a href="#projects" className="cta-button primary">
                        View Projects
                      </a>
                      <a href="#contact" className="cta-button secondary">
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>

                <div className="intro-right">
                  <div className="laptop-container">
                    <Laptop />
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
