import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false); // Close mobile menu on resize to desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbar = {
    backgroundColor: "#0f172a",
    borderBottom: "1px solid #1e293b",
    position: "fixed",
    top: 0,
    width: "98%",
    zIndex: 1000,
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logo = {
    fontSize: "20px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #0ea5e9, #06b6d4, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  };

  const navGroup = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "start" : "center",
    gap: isMobile ? "16px" : "20px",
    backgroundColor: isMobile ? "#0f172a" : "transparent",
    position: isMobile ? "absolute" : "static",
    top: "80px",
    right: 0,
    width: isMobile ? "100%" : "auto",
    padding: isMobile ? "20px" : 0,
  };

  const navLink = {
    color: "#cbd5e1",
    fontSize: "14px",
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: "10px",
    transition: "0.3s ease",
  };

  const navLinkActive = {
    ...navLink,
    backgroundColor: "#1e3a8a",
    color: "#60a5fa",
  };

  const icons = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    gap: "16px",
    color: "#94a3b8",
    fontSize: "16px",
    flexDirection: "row",
  };

  const iconStyle = {
    color: "#94a3b8",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const hamburger = {
    display: isMobile ? "block" : "none",
    fontSize: "24px",
    color: "#cbd5e1",
    cursor: "pointer",
    marginLeft: "auto",
  };

  return (
    <nav style={navbar}>
      <div style={container}>
        <div style={logo}>GHANSHYAM PORTFOLIO</div>

        <div onClick={() => setMenuOpen(!menuOpen)} style={hamburger}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div style={navGroup}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "10px" : "20px" }}>
            <li><a href="#home" style={navLinkActive}>Home</a></li>
            <li><a href="#about" style={navLink}>About</a></li>
            <li><a href="#projects" style={navLink}>Projects</a></li>
            <li><a href="#skills" style={navLink}>Skills</a></li>
             <li><a href="#experience" style={navLink}>Experience</a></li>
            <li><a href="#services" style={navLink}>Services</a></li>
            <li><a href="#documents" style={navLink}>Documents</a></li>
            <li><a href="#contact" style={navLink}>Contact</a></li>
          </ul>

          <div style={icons}>
            <a href="https://github.com/Ghanshyam2959" target="_blank" rel="noopener noreferrer">
              <FaGithub style={iconStyle} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn style={iconStyle} />
            </a>
            <a href="mailto:ghanshyam@example.com">
              <FaEnvelope style={iconStyle} />
            </a>
            <a href="tel:+91 7718092959">
              <FaPhone style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
