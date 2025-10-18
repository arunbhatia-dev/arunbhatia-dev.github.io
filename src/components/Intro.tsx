import React  from "react";
import Typist from "react-typist-component";

import "../styles/Intro.css";


class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
              <div id="intro-desc">
                <div className="intro-greeting">
                  <Typist
                    typingDelay={100}
                    cursor={<span className="cursor">|</span>}
                  >
                    hi, 
                    <span className="intro-name"> arun </span>
                    here.
                  </Typist>
                </div>
                <div className="intro-description">
                  <p className="fade-in-text">
                  I'm a software engineer from Helsinki, Finland. 
                  I'm fascinated by high-impact products and technologies that make a difference.
                  </p>
                </div>
              </div>
            </div>
        );

    }
}

export default Intro;
