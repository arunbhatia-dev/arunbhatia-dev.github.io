import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contact.css";

interface ContactState {
    isVisible: boolean;
}

class Contact extends React.Component<{}, ContactState> {
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
        return (
            <div
                id="contact"
                ref={this.sectionRef}
                className={`contact-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="contact-content">
                    <p className="contact-overline">05. What's Next?</p>
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-description">
                        I'm currently open to new opportunities and collaborations. Whether you have a
                        question, a project idea, or just want to say hi, feel free to reach out.
                        I'll do my best to get back to you!
                    </p>

                    <a
                        href="mailto:arun.bhatia@aalto.fi"
                        className="contact-button"
                    >
                        Say Hello
                    </a>

                    <div className="social-links">
                        <a
                            href="mailto:arun.bhatia@aalto.fi"
                            className="social-link"
                            aria-label="Email"
                        >
                            <EmailIcon />
                        </a>
                        <a
                            href="https://github.com/arunbhatia-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://fi.linkedin.com/in/arun-bhatia-807043204"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>

                <footer className="footer">
                    <div className="footer-content">
                        <a
                            href="https://github.com/arunbhatia-dev/arunbhatia-dev.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <p>Designed & Built by Arun Bhatia</p>
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Contact;
