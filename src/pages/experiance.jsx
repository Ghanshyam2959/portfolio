import React, { useState } from "react";

const Experience = () => {
  const container = {
    padding: "80px 20px",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    fontFamily: "sans-serif",
  };

  const heading = {
    fontSize: "36px",
    color: "#22d3ee",
   
    paddingBottom: "10px",
    marginBottom: "40px",
    textAlign: "center",
  };

  const contentWrapper = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const cardBase = {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const roleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#60a5fa",
  };

  const companyStyle = {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "12px",
  };

  const listStyle = {
    listStyle: "disc",
    paddingLeft: "20px",
    lineHeight: "1.8",
    fontSize: "14px",
    color: "#cbd5e1",
  };

  const HoverCard = ({ role, company, date, points }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        style={{
          ...cardBase,
          backgroundColor: hovered ? "#7d9497ff" : "#1e293b",
          color: hovered ? "#0f172a" : "#e2e8f0",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ ...roleStyle, color: hovered ? "#0f172a" : "#60a5fa" }}>{role}</div>
        <div style={{ ...companyStyle, color: hovered ? "#1e293b" : "#94a3b8" }}>
          {company} <br />
          {date}
        </div>
        <ul style={listStyle}>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="experience" style={container}>
      <h2 style={heading}>EXPERIENCE</h2>
      <div style={contentWrapper}>
        <HoverCard
          role="Java Full Stack Developer Intern"
          company="Felix IT Systems, Pune"
          date="Nov 2024 – July 2025"
          points={[
            "Participated in full software development lifecycle of multiple web-based applications",
            "Built frontend components using React.js and integrated REST APIs",
            "Developed backend features using Spring Boot and Hibernate for database operations",
            "Used Git for version control and followed Agile/Scrum methodologies",
            "Worked with MySQL and performed CRUD operations using JDBC and ORM",
          ]}
        />

        <HoverCard
          role="Knowledge Specialist"
          company="Mphasis, Pune"
          date="Feb 2024 – Oct 2024"
          points={[
            "Reviewed and understood client requests. Managed the account opening and documentation workflow",
            "Reviewed and validated core legal documents",
            "Verified risk ratings as per approved risk matrix",
            "Managed internal portals, coordinated with clients and business partners",
          ]}
        />

        <HoverCard
          role="KYC Analyst"
          company="IBM, Pune"
          date="Nov 2022 – Dec 2023"
          points={[
            "Performed KYC due diligence on customer accounts and onboarding",
            "Validated client data through documents and non-document methods",
            "Conducted periodic reviews for high, medium, and low-risk accounts",
            "Updated mandate forms, ownership proofs, and director records",
            "Verified companies using internal databases",
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
