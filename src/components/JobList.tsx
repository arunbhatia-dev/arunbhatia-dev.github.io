import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import "../styles/JobList.css";

interface Experience {
    jobTitle: string;
    company: string;
    duration: string;
    year: string;
    description: string[];
    icon: "work" | "school" | "research";
    current?: boolean;
}

interface JobListState {
    isVisible: boolean;
    selectedIndex: number;
}

class JobList extends React.Component<{}, JobListState> {
    private sectionRef: React.RefObject<HTMLDivElement | null>;

    constructor(props: {}) {
        super(props);
        this.state = {
            isVisible: false,
            selectedIndex: 4
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
                jobTitle: "Research Assistant",
                company: "Aalto University",
                duration: "May 2022 - August 2022",
                year: "05/2022",
                description: [
                    "Analyzed RGB and thermal images for research purposes",
                    "Compared image processing and registration algorithms in both RGB and thermal cases",
                    "Developed Python-based tools for image analysis and processing"
                ],
                icon: "research"
            },
            {
                jobTitle: "Teaching Assistant",
                company: "Aalto University",
                duration: "January 2022 - May 2023",
                year: "01/2022",
                description: [
                    "Teaching assistant for 'Use of Computer Science in Applications' course",
                    "Conducted weekly exercise sessions and provided support to students",
                    "Topics covered: Python, SQL, Databases, HTML, CSS, JavaScript"
                ],
                icon: "school"
            },
            {
                jobTitle: "ML Engineer Trainee",
                company: "Savox Communications",
                duration: "May 2023 - September 2023",
                year: "05/2023",
                description: [
                    "Built prototype intelligent audio classification device using Raspberry Pi",
                    "Led audio classification component using machine learning techniques",
                    "Implemented SPI communication for hardware integration"
                ],
                icon: "work"
            },
            {
                jobTitle: "Data Scientist",
                company: "Kelluu",
                duration: "September 2023 - August 2024",
                year: "09/2023",
                description: [
                    "Analyzed large image datasets using computer vision techniques",
                    "Developed Machine Learning algorithms for object detection",
                    "Improved data processing pipeline, reducing processing time significantly"
                ],
                icon: "work"
            },
            {
                jobTitle: "Software Developer",
                company: "Digia",
                duration: "August 2024 - Present",
                year: "08/2024",
                description: [
                    "Working on AI and Data Driven projects, developing scalable solutions",
                    "Contributing to system design and architecture decisions",
                    "Improving user experience for thousands of daily users"
                ],
                icon: "work",
                current: true
            }
        ];

        const { selectedIndex } = this.state;
        const selectedExp = experiences[selectedIndex];

        return (
            <div
                id="experience"
                ref={this.sectionRef}
                className={`experience-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="experience-content">
                    <h2 className="experience-title">/ experience</h2>

                    {/* Horizontal Timeline */}
                    <div className="h-timeline">
                        <div className="h-timeline-track">
                            <div className="h-timeline-line" />
                            <div
                                className="h-timeline-progress"
                                style={{ width: `${(selectedIndex / (experiences.length - 1)) * 100}%` }}
                            />
                        </div>

                        <div className="h-timeline-items">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`h-timeline-item ${selectedIndex === index ? 'active' : ''} ${exp.current ? 'current' : ''}`}
                                    onClick={() => this.setState({ selectedIndex: index })}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`h-timeline-dot ${selectedIndex === index ? 'active' : ''} ${exp.current ? 'current' : ''}`}>
                                        {this.getIcon(exp.icon)}
                                    </div>
                                    <div className="h-timeline-label">
                                        <span className="h-timeline-year">{exp.year}</span>
                                        <span className="h-timeline-company">{exp.company}</span>
                                        <span className="h-timeline-role">{exp.jobTitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detail Card */}
                    <div className="h-timeline-detail" key={selectedIndex}>
                        <div className="detail-header">
                            <div className="detail-icon">
                                {this.getIcon(selectedExp.icon)}
                            </div>
                            <div className="detail-title-group">
                                <h3 className="detail-role">{selectedExp.jobTitle}</h3>
                                <h4 className="detail-company">{selectedExp.company}</h4>
                                <span className="detail-duration">{selectedExp.duration}</span>
                            </div>
                            {selectedExp.current && <span className="current-badge">Current</span>}
                        </div>
                        <ul className="detail-description">
                            {selectedExp.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobList;
