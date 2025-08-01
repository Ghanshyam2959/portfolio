import React from "react";

const Services = () => {
  const section = {
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    padding: "60px 20px",
   
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  const heading = {
    color: "#38bdf8",
    fontSize: "32px",
    marginBottom: "10px",
  };

  const subHeading = {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "40px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "left",
  };

  const card = {
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    padding: "25px",
    transition: "transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardHover = {
    ...card,
    ":hover": {
      transform: "translateY(-10px)",
    },
  };

  const title = {
    color: "#e2e8f0",
    fontSize: "18px",
    marginBottom: "10px",
  };

  const desc = {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "15px",
  };

  const list = {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  };

  const listItem = {
    marginBottom: "6px",
    color: "#cbd5e1",
    fontSize: "14px",
  };

  const button = {
    marginTop: "auto",
    padding: "10px 15px",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    border: "1px solid #334155",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    width: "fit-content",
  };

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      desc: "Creating responsive, modern user interfaces with React.js and latest web technologies.",
      list: [
        "React.js Applications",
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
      ],
    },
    {
      icon: "🧩",
      title: "Backend Development",
      desc: "Building robust server-side applications with Spring Boot and secure APIs.",
      list: [
        "Spring Boot APIs",
        "Database Integration",
        "Authentication & Security",
        "RESTful Services",
      ],
    },
    {
      icon: "🔄",
      title: "Full Stack Web Apps",
      desc: "Complete web application development from concept to deployment.",
      list: [
        "End-to-End Development",
        "Database Design",
        "API Integration",
        "Testing & Deployment",
      ],
    },
    {
      icon: "🌐",
      title: "Web Hosting & Deployment",
      desc: "Deploying applications with Firebase and modern hosting solutions.",
      list: [
        "Firebase Hosting",
        "Domain Configuration",
        "SSL Certificates",
        "Performance Monitoring",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Creating intuitive and visually appealing user experiences.",
      list: [
        "User Interface Design",
        "User Experience Planning",
        "Prototyping",
        "Design Systems",
      ],
    },
  ];

  return (
    <section id="services" style={section}>
      <h2 style={heading}>Services</h2>
      <p style={subHeading}>
        Comprehensive web development services to bring your ideas to life
      </p>
      <div style={grid}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              ...card,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "32px", marginBottom: "10px" }}>
              {service.icon}
            </div>
            <h3 style={title}>{service.title}</h3>
            <p style={desc}>{service.desc}</p>
            <ul style={list}>
              {service.list.map((item, i) => (
                <li key={i} style={listItem}>
                  ✅ {item}
                </li>
              ))}
            </ul>
            <a href="#" style={button}>
              Get Started →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
