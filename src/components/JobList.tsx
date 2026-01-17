import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import "../styles/JobList.css";

interface Experience {
    jobTitle: string;
    company: string;
    duration: string;
    description: string[];
    icon: "work" | "school" | "research";
    current?: boolean;
}

interface JobListState {
    isVisible: boolean;
}

class JobList extends React.Component<{}, JobListState> {
    private sectionRef: React.RefObject<HTMLDivElement | null>;

    constructor(props: {}) {
        super(props);
        this.state = {
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

    getIcon(type: string) {
        switch (type) {
            case "school":
                return <SchoolIcon />;
            case "research":
                return <ScienceIcon />;
            default:
                return <WorkIcon />;
        }
    }

    render() {
        const experiences: Experience[] = [
            {
                jobTitle: "Software Developer",
                company: "Digia",
                duration: "August 2024 - Present",
                description: [
                    "Working on AI and Data Driven projects, developing and deploying scalable software solutions",
                    "Contributing to system design and architecture decisions",
                    "Improving user experience for thousands of daily users"
                ],
                icon: "work",
                current: true
            },
            {
                jobTitle: "Data Scientist",
                company: "Kelluu",
                duration: "September 2023 - August 2024",
                description: [
                    "Analyzed large image datasets using computer vision techniques",
                    "Developed Machine Learning algorithms for object detection",
                    "Improved data processing pipeline efficiency"
                ],
                icon: "work"
            },
            {
                jobTitle: "ML Engineer Trainee",
                company: "Savox Communications",
                duration: "May 2023 - September 2023",
                description: [
                    "Built prototype intelligent audio classification device on Raspberry Pi",
                    "Led audio classification component using machine learning techniques"
                ],
                icon: "work"
            },
            {
                jobTitle: "Teaching Assistant",
                company: "Aalto University",
                duration: "January 2022 - May 2023",
                description: [
                    "TA for 'Use of Computer Science in Applications' course",
                    "Conducted weekly sessions covering Python, SQL, HTML, CSS, JavaScript"
                ],
                icon: "school"
            },
            {
                jobTitle: "Research Assistant",
                company: "Aalto University",
                duration: "May 2022 - August 2022",
                description: [
                    "Analyzed RGB and thermal images for research",
                    "Developed Python tools for image analysis and processing"
                ],
                icon: "research"
            }
        ];

        return (
            <div
                id="experience"
                ref={this.sectionRef}
                className={`experience-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="experience-content">
                    <h2 className="experience-title">/ experience</h2>

                    <div className="timeline">
                        <div className="timeline-line" />

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className={`timeline-dot ${exp.current ? 'current' : ''}`}>
                                    {this.getIcon(exp.icon)}
                                </div>

                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <span className="timeline-duration">{exp.duration}</span>
                                        {exp.current && <span className="current-badge">Current</span>}
                                    </div>
                                    <h3 className="timeline-role">{exp.jobTitle}</h3>
                                    <h4 className="timeline-company">{exp.company}</h4>
                                    <ul className="timeline-description">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default JobList;
