import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";

class Experience extends React.Component {
    render() {
        return (
            <div id="experience-wrapper">
                <JobList />
            </div>
        );
    }
}

export default Experience;
