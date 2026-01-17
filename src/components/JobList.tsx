import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "../styles/JobList.css";

interface Experience {
    jobTitle: string;
    duration: string;
    description: string[];
    displayName?: string;
}

interface Experiences {
    [key: string]: Experience;
}

interface JobListState {
    value: number;
    isVisible: boolean;
}

class JobList extends React.Component<{}, JobListState> {
    private sectionRef: React.RefObject<HTMLDivElement | null>;

    constructor(props: {}) {
        super(props);
        this.state = {
            value: 0,
            isVisible: false
        };
        this.sectionRef = React.createRef<HTMLDivElement>();
    }

    componentDidMount() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.setState({ isVisible: true });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (this.sectionRef.current) {
            observer.observe(this.sectionRef.current);
        }
    }

    handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        this.setState({ value: newValue });
    };

    render() {
        const experiences: Experiences = {
            Digia: {
                jobTitle: "Software Developer @",
                duration: "August 2024 - Present",
                description: [
                    "Worked on AI and Data Driven projects. Responsible for developing and deploying scalable software solutions using modern technologies",
                    "Contributed heavily to system design and architecture decisions",
                    "Provided a better user experience to thousands of daily users"
                ]
            },
            Kelluu: {
                jobTitle: "Data Scientist @",
                duration: "September 2023 - August 2024",
                description: [
                    "Analyzed large image datasets to find anomalies and patterns using computer vision techniques",
                    "Developed Machine Learning algorithms for object detection",
                    "Improved the data processing pipeline, reducing processing time"
                ]
            },
            "Savox Communications": {
                jobTitle: "Machine Learning Engineer Trainee @",
                duration: "May 2023 - September 2023",
                description: [
                    "Used small single-board computers (SBCs) to make a prototype of " + 
                    "an intelligent audio classification device",
                    "Led the audio classification component of the project, ensuring accurate and efficient " + 
                    "sound source classification using machine learning techniques",
                ]
            },
            "Aalto University (TA)": {
                jobTitle: "Teaching Assistant @",
                duration: "January 2022 - May 2023",
                description: [
                    "Teaching assistant in the course: Use of computer science in applications",
                    "Conducted weekly exercise sessions and provided support to students",
                    "Topics/technologies covered: Python, SQL, Databases, HTML, CSS, JavaScript"
                ],
                displayName: "Aalto University"
            },
            "Aalto University (RA)": {
                jobTitle: "Research Assistant @",
                duration: "May 2022 - August 2022",
                description: [
                    "Analyzed RGB and thermal images for research purposes",
                    "Compared image processing and registration algorithms in both RGB and thermal cases",
                    "Developed Python-based tools for image analysis and processing"
                ],
                displayName: "Aalto University"
            }
        };

        const isHorizontal = window.innerWidth < 900;
        const companies = Object.keys(experiences);
        const { value } = this.state;

        return (
            <div
                id="experience"
                ref={this.sectionRef}
                className={`experience-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="experience-content">
                    <h2 className="experience-title">/ experience</h2>

                    <div className="job-container">
                        <Tabs
                            orientation={isHorizontal ? "horizontal" : "vertical"}
                            variant={isHorizontal ? "scrollable" : "standard"}
                            value={value}
                            onChange={this.handleChange}
                            className="job-tabs"
                            TabIndicatorProps={{
                                style: { backgroundColor: "var(--green)" }
                            }}
                        >
                            {companies.map((company, index) => (
                                <Tab
                                    key={index}
                                    label={experiences[company].displayName || company}
                                    className="job-tab"
                                    sx={{
                                        color: "var(--slate)",
                                        "&.Mui-selected": {
                                            color: "var(--green)"
                                        },
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        fontFamily: "Poppins"
                                    }}
                                />
                            ))}
                        </Tabs>

                        <div className="job-details">
                            {companies.map((company, index) => (
                                <div
                                    key={index}
                                    role="tabpanel"
                                    hidden={value !== index}
                                    className="job-panel"
                                >
                                    {value === index && (
                                        <div className="job-description">
                                            <h3 className="job-title">
                                                {experiences[company].jobTitle}
                                                <span className="company-name">
                                                    {experiences[company].displayName || company}
                                                </span>
                                            </h3>
                                            <p className="job-duration">
                                                {experiences[company].duration}
                                            </p>
                                            <ul className="job-description-list">
                                                {experiences[company].description.map((item, idx) => (
                                                    <li key={idx} className="job-description-item">
                                                        <FiberManualRecordIcon className="bullet-icon" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobList;
