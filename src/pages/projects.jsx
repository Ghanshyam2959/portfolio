import React, { useState } from 'react';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  const sectionStyle = {
    backgroundColor: "#0f172a",
    color: "#fff",
  
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#0ea5e9",
    marginBottom: "10px"
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#94a3b8",
    marginBottom: "40px"
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "40px"
  };

  const baseCardStyle = {
    backgroundColor: "#1e293b",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "left",
    flex: "1 1 300px",
    transition: "all 0.3s ease",
    transform: "scale(1)",
    cursor: "pointer"
  };

  const hoveredCardStyle = {
    backgroundColor: "#334155",
    transform: "scale(1.03)"
  };

  const projectTitle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#fff"
  };

  const description = {
    color: "#cbd5e1",
    fontSize: "14px",
    marginBottom: "10px"
  };

  const featureList = {
    paddingLeft: "20px",
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "10px"
  };

  const badge = {
    display: "inline-block",
    backgroundColor: "#334155",
    color: "#e2e8f0",
    borderRadius: "6px",
    padding: "4px 8px",
    fontSize: "12px",
    marginRight: "5px",
    marginBottom: "5px"
  };

  const linkGroup = {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  };

  const btn = {
    backgroundColor: "#0ea5e9",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px"
  };

  const viewMore = {
    marginTop: "40px"
  };

  const githubLink = "https://github.com/Ghanshyam2959";

  // List of projects
  const projects = [
    {
      title: "Book App Store",
      description: "A CRUD app built with Spring Boot and Thymeleaf. Includes user authentication and role-based admin panel.",
      features: [
        "User Authentication & Authorization",
        "CRUD Operations for Books",
        "Secure Admin Panel"
      ],
      tech: ["Spring Boot", "Thymeleaf", "Spring Security", "MySQL"],
      link: "https://github.com/Ghanshyam2959/book_store_app"
    },
    {
      title: "Student Portal",
      description: "Student management system using Hibernate ORM and Servlets for complete CRUD operations.",
      features: [
        "Student Registration System",
        "Grade Management",
        "Admin Dashboard"
      ],
      tech: ["Java", "Hibernate", "Servlets", "MySQL"],
      link: "https://github.com/Ghanshyam2959/student-portal-hibernate"
    },
    {
      title: "Gym Registration Form",
      description: "React + Firebase app for user registration, real-time database sync, and cloud deployment.",
      features: [
        "Member Registration",
        "Real-time Data Sync",
        "Cloud Hosting"
      ],
      tech: ["React.js", "Firebase", "JavaScript", "CSS"],
      link: "https://gym-registration-form.web.app/"
    }
  ];

  return (
    <section  id="projects" style={sectionStyle}>
      <h2 style={titleStyle}>Featured Projects</h2>
      <p style={subtitleStyle}>Showcasing my expertise in full-stack development with real-world applications</p>

      <div style={cardContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              ...baseCardStyle,
              ...(hovered === index ? hoveredCardStyle : {})
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={projectTitle}>{project.title}</h3>
            <p style={description}>{project.description}</p>
            <ul style={featureList}>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div>
              {project.tech.map((t, i) => (
                <span key={i} style={badge}>{t}</span>
              ))}
            </div>
            <div style={linkGroup}>
              <a style={btn} href={project.link} target="_blank" rel="noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>

      <div style={viewMore}>
        <p style={{ color: "#94a3b8", marginBottom: "10px" }}>Want to see more?</p>
        <a href={githubLink} style={btn} target="_blank" rel="noreferrer">View All Projects</a>
      </div>
    </section>
  );
}
