import React, { useState } from "react";

const HoverCard = ({ title, skills }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: isHovered ? "#1e293b" : "#0f172a",
    border: "1px solid #334155",
    borderRadius: "10px",
    padding: "15px 20px",
    margin: "10px",
    transition: "all 0.3s ease",
    color: "#e2e8f0",
  
    cursor: "pointer",
  };

  const skillStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
    borderBottom: "1px solid #1e293b",
    fontSize: "14px",
  };

  const iconStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#0ea5e9",
  };

  return (
    <div id="skills"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <h4 style={{ marginBottom: "10px", color: "#38bdf8" }}>{title}</h4>
      {skills.map((skill, index) => (
        <div key={index} style={skillStyle}>
          <span>{skill.name}</span>
          <span style={{ color: "#22d3ee" }}>●●●●</span>
        </div>
      ))}
    </div>
  );
};

const TechnicalSkills = () => {
  const technicalSkills = {
    Languages: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SQL" },
    ],
    Frontend: [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
      { name: "Axios" },
    ],
    Backend: [
      { name: "Spring Boot" },
      { name: "Spring MVC" },
      { name: "Spring Security" },
      { name: "Hibernate" },
      { name: "JSP" },
      { name: "Servlets" },
    ],
    Database: [
      { name: "MySQL" },
      { name: "JDBC" },
      { name: "Database Design" },
      { name: "SQL Optimization" },
    ],
    "Tools & IDEs": [
      { name: "Eclipse" },
      { name: "VS Code" },
      { name: "Maven" },
      { name: "Postman" },
      { name: "Git" },
    ],
    "Version Control & Deployment": [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Firebase Hosting" },
      { name: "CI/CD" },
    ],
  };

  return (
    <section style={{ backgroundColor: "#0f172a", padding: "40px" }}>
      <h2 style={{ color: "#38bdf8", textAlign: "center", fontSize: "28px" }}>
        Technical Skills
      </h2>
      <p
        style={{
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "14px",
        }}
      >
        Comprehensive expertise in modern web development technologies
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <HoverCard key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
