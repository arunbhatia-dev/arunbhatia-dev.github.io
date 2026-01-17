import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import "../styles/Projects.css";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    live?: string;
    featured?: boolean;
    image?: string;
}

interface ProjectsState {
    isVisible: boolean;
    showAll: boolean;
}

class Projects extends React.Component<{}, ProjectsState> {
    private sectionRef: React.RefObject<HTMLDivElement | null>;

    constructor(props: {}) {
        super(props);
        this.state = {
            isVisible: false,
            showAll: false
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
        const featuredProjects: Project[] = [
            {
                title: "Intelligent Audio Listener",
                description: "A prototype device that classifies sound sources and determines their directional location relative to the user. Built for Raspberry Pi with a pre-trained ML sound classification algorithm and SPI communication for hardware integration.",
                technologies: ["Python", "C", "Machine Learning", "Raspberry Pi", "SPI", "GPIO"],
                github: "https://github.com/arunbhatia-dev/Savox2---Prototype",
                featured: true,
            },
            {
                title: "Federated Learning - Water Quality",
                description: "Implementation of federated learning for water potability prediction. Enables distributed machine learning across multiple data sources while preserving data privacy, with comprehensive analysis and project report.",
                technologies: ["Python", "Jupyter", "Federated Learning", "TensorFlow", "Pandas"],
                github: "https://github.com/arunbhatia-dev/Federated-Learning",
                featured: true,
            },
            {
                title: "Delivery Time Weather Analysis",
                description: "Predictive modeling project investigating the impact of weather conditions on delivery times. Uses machine learning to unlock insights from delivery order data and weather patterns.",
                technologies: ["Python", "Jupyter", "Scikit-learn", "Pandas", "Data Analysis"],
                github: "https://github.com/arunbhatia-dev/Data-science-and-ML-project",
                featured: true,
            },
        ];

        const otherProjects: Project[] = [
            {
                title: "Bayesian Data Analysis",
                description: "Statistical analysis of heart failure clinical records using Bayesian methods. Comprehensive R-based analysis with detailed report.",
                technologies: ["R", "Bayesian Statistics", "RMarkdown", "Data Analysis"],
                github: "https://github.com/arunbhatia-dev/Bayesian-Data-Analysis",
            },
            {
                title: "Aalto Campus Adventure Game",
                description: "Text-based adventure game set at Aalto University campus. Navigate through locations, complete objectives, and solve challenges.",
                technologies: ["Scala", "Functional Programming", "OOP"],
                github: "https://github.com/arunbhatia-dev/Aalto-Game---O2",
            },
            {
                title: "Portfolio Website",
                description: "Personal portfolio built with React and TypeScript featuring interactive 3D laptop animation and modern design.",
                technologies: ["React", "TypeScript", "Three.js", "CSS"],
                github: "https://github.com/arunbhatia-dev/arunbhatia-dev.github.io",
                live: "https://arunbhatia-dev.github.io",
            },
        ];

        const displayedProjects = this.state.showAll ? otherProjects : otherProjects.slice(0, 6);

        return (
            <div
                id="projects"
                ref={this.sectionRef}
                className={`projects-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="projects-content">
                    <h2 className="projects-title">/ projects</h2>

                    {/* Featured Projects */}
                    <div className="featured-projects">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={index}
                                className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="project-image">
                                    <div className="project-image-overlay" />
                                </div>
                                <div className="project-info">
                                    <p className="project-overline">Featured Project</p>
                                    <h3 className="project-title-featured">{project.title}</h3>
                                    <div className="project-description-box">
                                        <p>{project.description}</p>
                                    </div>
                                    <ul className="project-tech-list">
                                        {project.technologies.map((tech, idx) => (
                                            <li key={idx}>{tech}</li>
                                        ))}
                                    </ul>
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <GitHubIcon />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <OpenInNewIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    <h3 className="other-projects-title">Other Noteworthy Projects</h3>
                    <div className="other-projects-grid">
                        {displayedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-card-header">
                                    <FolderOpenIcon className="folder-icon" />
                                    <div className="project-card-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <GitHubIcon />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <OpenInNewIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h4 className="project-card-title">{project.title}</h4>
                                <p className="project-card-description">{project.description}</p>
                                <ul className="project-card-tech">
                                    {project.technologies.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {otherProjects.length > 6 && (
                        <button
                            className="show-more-btn"
                            onClick={() => this.setState({ showAll: !this.state.showAll })}
                        >
                            {this.state.showAll ? 'Show Less' : 'Show More'}
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;
