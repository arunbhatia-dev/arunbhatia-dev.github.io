import React from "react";
import "../styles/about.css";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";

interface AboutState {
    isVisible: boolean;
    openDropdowns: Set<number>;
}

class About extends React.Component<{}, AboutState> {
    private sectionRef: React.RefObject<HTMLDivElement | null>;

    constructor(props: {}) {
        super(props);
        this.state = {
            isVisible: false,
            openDropdowns: new Set()
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

    toggleDropdown = (index: number) => {
        this.setState((prevState) => {
            const newOpenDropdowns = new Set(prevState.openDropdowns);
            if (newOpenDropdowns.has(index)) {
                newOpenDropdowns.delete(index);
            } else {
                newOpenDropdowns.add(index);
            }
            return { openDropdowns: newOpenDropdowns };
        });
    };

    renderTechStack = () => {
        const tech_stack = [
            { name: "TypeScript", items: [], icon: <CodeIcon />, color: "#3178c6" },
            { name: "JavaScript ES6+", items: ["React", "Node.js"], icon: <JavascriptIcon />, color: "#f7df1e" },
            { name: "Python", items: [
                "Scikit-learn",
                "TensorFlow",
                "PyTorch",
                "HuggingFace",
                "Pydantic",
                "LangChain",
                "LangGraph",
                "LlamaIndex",
                "FastAPI",
                "Flask",
                "PySpark"
            ], icon: <CodeIcon />, color: "#3776ab" },
            { name: "Scala", items: [], icon: <CodeIcon />, color: "#dc322f" },
            { name: "C", items: [], icon: <CodeIcon />, color: "#a8b9cc" },
            { name: "AI/ML", items: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Reinforcement Learning",
                "Retrieval Augmented Generation (RAG)",
                "Model Context Protocol (MCP)",
            ], icon: <PsychologyIcon />, color: "#a855f7" },
            { name: "Databases", items: [
                "PostgreSQL",
                "MongoDB",
                "Redis",
            ], icon: <StorageIcon />, color: "#336791" },
            { name: "AWS", items: [
                "Application Load Balancer",
                "EC2",
                "Elastic Beanstalk",
                "Batch",
                "Fargate",
                "ECS",
                "ECR",
                "Lambda",
                "S3",
                "RDS",
                "DynamoDB",
                "SageMaker",
                "Bedrock",
                "API Gateway",
                "EventBridge",
                "CloudFront",
                "CloudWatch",
                "IAM",
                "Secrets Manager",
            ], icon: <CloudIcon />, color: "#ff9900" },
            { name: "Azure", items: [
                "App Services",
                "Functions",
                "Blob Storage",
                "Azure AI",
                "Table Storage",
                "Virtual Machines",
                "Container Instances",
                "Container Registry",
                "Azure DevOps",
            ], icon: <CloudIcon />, color: "#0078d4" }
        ];

        return (
            <ul className="tech-stack-list">
                {tech_stack.map((tech, index) => (
                    <li key={index} className="tech-item">
                        <div
                            className={`tech-header ${tech.items.length > 0 ? 'has-dropdown' : ''}`}
                            onClick={() => tech.items.length > 0 && this.toggleDropdown(index)}
                        >
                            <span className="tech-name-with-icon">
                                <span className="tech-icon" style={{ color: tech.color }}>{tech.icon}</span>
                                <span>{tech.name}</span>
                            </span>
                            {tech.items.length > 0 && (
                                <span className={`dropdown-arrow ${this.state.openDropdowns.has(index) ? 'open' : ''}`}>
                                    ▼
                                </span>
                            )}
                        </div>
                        {tech.items.length > 0 && this.state.openDropdowns.has(index) && (
                            <ul className="tech-dropdown">
                                {tech.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="tech-dropdown-item">{item}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    render(): React.ReactNode {
        const currently = (
            <p>
                I am currently a <b>Software Engineer</b> at
                <a href="https://digia.com/en/"> Digia</a>, working on projects related to
                AI, Machine Learning and Big Data. My role involves developing scalable software solutions that
                solve complex problems. I also hold a <b>Master's of Science</b> degree
                from <a href="https://www.aalto.fi/en"> Aalto University</a>.
            </p>
        );

        const outside = (
            <p>
              Outside of work, I enjoy sports, science, and exploring new technologies.
              I am passionate about continuous learning and always looking for opportunities to grow both
              personally and professionally.
            </p>
        );

        return (
            <div
                id="about"
                ref={this.sectionRef}
                className={`about-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="about-content">
                    <h3 className="about-title">/ about Me</h3>
                    <div className="about-text">
                        {currently}
                        {outside}
                    </div>
                    <div className="tech-stack-section">
                        <h4 className="tech-stack-title">Tech Stack</h4>
                        {this.renderTechStack()}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
