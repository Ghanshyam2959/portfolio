import React from 'react';

export default function Home() {
  // Responsive styles using media queries
  const containerStyle = {
    backgroundColor: '#0f172a',
    minHeight: '100vh',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  margin: '0px',
   
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #3b82f6, #00ffc3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem'
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    color: '#ccc',
    marginBottom: '1rem'
  };

  const descriptionStyle = {
    maxWidth: '600px',
    marginBottom: '2rem',
    color: '#aaa',
    fontSize: '1rem'
  };

  const badgeStyle = {
    display: 'inline-block',
    backgroundColor: '#1f2937',
    color: '#fff',
    borderRadius: '20px',
    padding: '0.4rem 1rem',
    margin: '0.25rem',
    fontSize: '0.875rem'
  };

  const buttonPrimaryStyle = {
    textDecoration: 'none',
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    marginRight: '1rem',
    display: 'inline-block',
    marginBottom: '1rem'
  };

  const buttonSecondaryStyle = {
    textDecoration: 'none',
    border: '1px solid #444',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    display: 'inline-block'
  };

  return (
    <section  id="home" style={containerStyle} margin="0px">
      <p style={{ color: '#00FFFF', marginTop:' 50px' ,marginBottom: '1rem' }}>👋 Hello, I'm</p>

      <h1 style={{ ...headingStyle, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
        GHANSHYAM JAID
      </h1>

      <h2 style={{ ...subheadingStyle, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
        Java FullStack Developer
      </h2>

      <p style={{ ...descriptionStyle, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
        Aspiring Java Full Stack Developer with hands-on experience building responsive web applications using React.js, Core Java, Spring Boot, and MySQL. Strong foundation in frontend and backend technologies, including REST API integration and MVC architecture. Detail-oriented and motivated to contribute to Agile development teams while continuously enhancing skills in modern full-stack development.
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Tech Stack</p>
        {['Java', 'React', 'Spring Boot', 'MySQL', 'JavaScript'].map((tech) => (
          <span key={tech} style={badgeStyle}>{tech}</span>
        ))}
      </div>

      <div>
        <a href="#projects" style={buttonPrimaryStyle}>
          🚀 EXPLORE MY WORK
        </a>
        <a
          href="https://drive.google.com/file/d/1KZDKg6tLcChfTogXCBPgVJc92RvJ1cgR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonSecondaryStyle}
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
}
