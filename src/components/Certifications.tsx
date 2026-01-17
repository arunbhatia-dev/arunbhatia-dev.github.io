import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/Certifications.css";

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    badge?: string;
}

interface CertificationsState {
    isVisible: boolean;
}

class Certifications extends React.Component<{}, CertificationsState> {
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
        const certifications: Certification[] = [
            {
                name: "AWS Certified Cloud Practitioner",
                issuer: "Amazon Web Services",
                date: "2025",
                credentialUrl: "https://www.credly.com/badges/83dea30c-f1e3-4204-a647-ac5b30249519/public_url",
            },
        ];

        return (
            <div
                id="certifications"
                ref={this.sectionRef}
                className={`certifications-section ${this.state.isVisible ? 'fade-in' : ''}`}
            >
                <div className="certifications-content">
                    <h2 className="certifications-title">/ certifications</h2>

                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="certification-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="cert-icon">
                                    <VerifiedIcon />
                                </div>
                                <div className="cert-details">
                                    <h3 className="cert-name">{cert.name}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <p className="cert-date">{cert.date}</p>
                                </div>
                                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        <OpenInNewIcon />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Certifications;
