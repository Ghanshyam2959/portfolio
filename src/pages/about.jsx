import React, { useState } from 'react';
import {
  FaUser,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
} from 'react-icons/fa';

export default function About() {
  const containerStyle = {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '40px 20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#22d3ee',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#cbd5e1',
    marginBottom: '50px',
  };

  const contentGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '300px',
  };

  const sectionStyle = {
    marginBottom: '30px',
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '10px',
  };

  const iconBox = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
    color: '#22d3ee',
    fontSize: '20px',
  };

  const badgeStyle = {
    backgroundColor: '#1e293b',
    padding: '10px 15px',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: '500',
    textAlign: 'center',
    margin: '5px',
    flex: '1 1 40%',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const strengthGrid = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '30px',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    lineHeight: '1.8',
    color: '#cbd5e1',
  };

  const HoverableBadge = ({ text }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        style={{
          ...badgeStyle,
          backgroundColor: hovered ? '#22d3ee' : '#1e293b',
          color: hovered ? '#0f172a' : '#ffffff',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}
      </div>
    );
  };

  return (
    <section id="about" style={containerStyle}>
      <h2 style={titleStyle}>About Me</h2>
      <p style={subtitleStyle}>
        Passionate developer with a strong foundation in full-stack technologies
      </p>

      <div style={contentGridStyle}>
        {/* Left Column */}
        <div style={columnStyle}>
          {/* Who I Am */}
          <div style={sectionStyle}>
            <div style={iconBox}><FaUser /> <strong>Who I Am</strong></div>
            <p>
              I'm Ghanshyam Jaid, an aspiring Java Full Stack Developer from Pune, India.
              My journey in technology is driven by curiosity and a passion for creating
              efficient, secure applications that solve real-world problems.
            </p>
          </div>

          {/* Education */}
          <div style={sectionStyle}>
            <div style={iconBox}><FaGraduationCap /> <strong>Education</strong></div>
            <p><strong>Bachelor of Computer Science</strong></p>
            <p>MIT Arts, Commerce & Science College, Pune</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', color: '#94a3b8' }}>
              <FaCalendarAlt /> 2018 - 2021 &nbsp; | &nbsp; <FaMapMarkerAlt /> Pune, Maharashtra
            </div>
          </div>

          {/* Certifications */}
          <div style={sectionStyle}>
            <div style={iconBox}><FaCertificate /> <strong>Certifications</strong></div>
            <p><strong>Full Stack Development Program</strong></p>
            <p>Felix IT Systems, Pune</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', color: '#94a3b8' }}>
              <FaCalendarAlt /> Nov 2024 – July 2025 &nbsp; | &nbsp; <FaMapMarkerAlt /> Pune, India
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={columnStyle}>
          {/* Core Strengths */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Core Strengths</h3>
            <div style={strengthGrid}>
              {[
                'Team Collaboration', 'Problem Solving', 'Quick Learning', 'Attention to Detail',
                'Code Quality', 'Performance Focus', 'Security Minded', 'User Experience',
              ].map((skill, index) => (
                <HoverableBadge key={index} text={skill} />
              ))}
            </div>
          </div>

          {/* What Drives Me */}
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>What Drives Me</h3>
            <ul style={listStyle}>
              <li>Building scalable applications that make a difference</li>
              <li>Continuous learning and staying updated with tech trends</li>
              <li>Writing clean, maintainable code that others can understand</li>
              <li>Collaborating with teams to deliver exceptional results</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
