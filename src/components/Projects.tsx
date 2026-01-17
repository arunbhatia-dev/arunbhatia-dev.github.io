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
                title: "AI-Powered Code Assistant",
                description: "Built an intelligent code assistant using LLMs with RAG (Retrieval Augmented Generation) for context-aware code suggestions. Integrated with multiple IDE extensions and supports various programming languages.",
                technologies: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL", "Docker"],
                github: "https://github.com/arunbhatia-dev",
                featured: true,
            },
            {
                title: "Real-time Object Detection System",
                description: "Developed a computer vision system for real-time object detection and tracking using deep learning. Optimized for edge deployment on single-board computers with TensorRT acceleration.",
                technologies: ["Python", "PyTorch", "OpenCV", "TensorRT", "ONNX", "Raspberry Pi"],
                github: "https://github.com/arunbhatia-dev",
                featured: true,
            },
            {
                title: "Scalable Data Pipeline",
                description: "Architected and implemented a scalable ETL pipeline processing millions of records daily. Built with event-driven architecture and real-time analytics dashboards.",
                technologies: ["PySpark", "AWS Glue", "Kafka", "Airflow", "Redshift", "Grafana"],
                github: "https://github.com/arunbhatia-dev",
                featured: true,
            },
        ];

        const otherProjects: Project[] = [
            {
                title: "NLP Text Summarizer",
                description: "Automatic text summarization tool using transformer models for document processing.",
                technologies: ["Python", "HuggingFace", "Flask"],
                github: "https://github.com/arunbhatia-dev",
            },
            {
                title: "Portfolio Website",
                description: "Personal portfolio built with React and TypeScript featuring 3D animations.",
                technologies: ["React", "TypeScript", "Three.js"],
                github: "https://github.com/arunbhatia-dev/arunbhatia-dev.github.io",
                live: "https://arunbhatia-dev.github.io",
            },
            {
                title: "ML Model Deployment Platform",
                description: "Self-service platform for deploying and monitoring ML models with A/B testing.",
                technologies: ["Python", "FastAPI", "Docker", "Kubernetes"],
                github: "https://github.com/arunbhatia-dev",
            },
            {
                title: "Sentiment Analysis API",
                description: "REST API for real-time sentiment analysis of social media content.",
                technologies: ["Python", "TensorFlow", "Redis", "AWS Lambda"],
                github: "https://github.com/arunbhatia-dev",
            },
            {
                title: "Image Registration Tool",
                description: "Tool for aligning and registering RGB and thermal images for analysis.",
                technologies: ["Python", "OpenCV", "NumPy", "Scikit-image"],
                github: "https://github.com/arunbhatia-dev",
            },
            {
                title: "Audio Classification System",
                description: "Edge-based audio classification for intelligent sound source detection.",
                technologies: ["Python", "TensorFlow Lite", "librosa", "SBC"],
                github: "https://github.com/arunbhatia-dev",
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
