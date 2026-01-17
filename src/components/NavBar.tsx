import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#intro", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-left">
        <a href="#intro" className="navbar-brand">
          <span className="brand-bracket">&lt;</span>
          AB
          <span className="brand-bracket">/&gt;</span>
        </a>
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`navbar-center ${isMenuOpen ? 'menu-open' : ''}`}>
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={closeMenu}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="nav-number">0{index + 1}.</span>
            {link.label}
          </a>
        ))}
      </div>

      <div className="navbar-right">
        <a href="https://github.com/arunbhatia-dev" target="_blank" rel="noopener noreferrer" className="icon-link">
          <GitHubIcon />
        </a>
        <a href="https://fi.linkedin.com/in/arun-bhatia-807043204" target="_blank" rel="noopener noreferrer" className="icon-link">
          <LinkedInIcon />
        </a>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default NavBar;
