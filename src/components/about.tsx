import React from "react";
import "../styles/about.css";

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
            { name: "Typescript", items: [] },
            { name: "JavaScript ES6+", items: ["React", "Node.js"] },
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
            ]},
            { name: "Scala", items: [] },
            { name: "C", items: [] },
            { name: "AI/ML", items: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Reinforcement Learning",
                "Retrieval Augmented Generation (RAG)",
                "Model Context Protocol (MCP)",
            ]},
            { name: "Databases", items: [
                "PostgreSQL",
                "MongoDB",
                "Redis",
            ]},
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
            ]},
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
            ]}
        ];

        return (
            <ul className="tech-stack-list">
                {tech_stack.map((tech, index) => (
                    <li key={index} className="tech-item">
                        <div
                            className={`tech-header ${tech.items.length > 0 ? 'has-dropdown' : ''}`}
                            onClick={() => tech.items.length > 0 && this.toggleDropdown(index)}
                        >
                            <span>{tech.name}</span>
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
