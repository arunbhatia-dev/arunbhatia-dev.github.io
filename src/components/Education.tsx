import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Education.css";

interface EducationItem {
    degree: string;
    period: string;
}

interface EducationData {
    [key: string]: EducationItem[];
}

interface EducationState {
    isVisible: boolean;
}

class Education extends React.Component<{}, EducationState> {
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

    render() {
        const education: EducationData = {
            "Aalto University": [
                {
                    degree: "M.Sc. in Machine Learning, Data Science and Artificial Intelligence",
                    period: "2022 - 2025",
                },
                {
                    degree: "B.Sc. in Computer Science",
                    period: "2019 - 2022",
                },
            ],
        };

        return (
            <div
                id="education"
                ref={this.sectionRef}
                className={`education-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="education-content">
                    <h2 className="education-title">/ education</h2>

                    <div className="education-container">
                        {Object.keys(education).map((school, index) => (
                            <div key={index} className="education-school">
                                <div className="school-header">
                                    <SchoolIcon className="school-icon" />
                                    <h3 className="school-name">{school}</h3>
                                </div>
                                <div className="degrees-list">
                                    {education[school].map((item, idx) => (
                                        <div key={idx} className="degree-item">
                                            <h4 className="degree-name">{item.degree}</h4>
                                            <p className="degree-period">{item.period}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
