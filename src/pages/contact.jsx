import React from "react";

const Contact = () => {
  const sectionStyle = {
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    padding: "50px 20px",
   
    fontFamily: "sans-serif",
  };

  const headingStyle = {
    color: "#38bdf8",
    textAlign: "center",
    fontSize: "30px",
    marginBottom: "10px",
  };

  const subTextStyle = {
    color: "#94a3b8",
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "40px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const boxStyle = {
    flex: "1 1 300px",
    padding: "20px",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    minWidth: "300px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    marginBottom: "15px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(to right, #0ea5e9, #22d3ee)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  };

  const contactItem = {
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    padding: "10px 15px",
    borderRadius: "10px",
    marginBottom: "12px",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
  };

  const bottomCall = {
    marginTop: "50px",
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "14px",
  };

  const callBtn = {
    marginTop: "10px",
    backgroundColor: "#1e293b",
    color: "#e2e8f0",
    padding: "10px 20px",
    borderRadius: "8px",
    display: "inline-block",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Get In Touch</h2>
      <p style={subTextStyle}>
        Ready to start your next project? Let's discuss how we can work together
      </p>

      <div style={containerStyle}>
        {/* Left Box */}
        <div style={boxStyle}>
          <h3 style={{ marginBottom: "10px", color: "#38bdf8" }}>Let's Connect</h3>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "20px" }}>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or want to say hi, feel free to reach out!
          </p>

          <div style={contactItem}>
            <strong>Phone</strong>
            <span>+91 7718092959</span>
          </div>

          <div style={contactItem}>
            <strong>Email</strong>
            <span>ghanshyamjaid2959@gmail.com</span>
          </div>

          <div style={contactItem}>
            <strong>Location</strong>
            <span>Pune, Maharashtra, India</span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p style={{ marginBottom: "10px", color: "#e2e8f0" }}>Follow Me</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://github.com/Ghanshyam2959" target="_blank" rel="noopener noreferrer" style={{ color: "#e2e8f0" }}>🔗</a>
              <a href="#" style={{ color: "#e2e8f0" }}>💼</a>
              <a href="#" style={{ color: "#e2e8f0" }}>📸</a>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div style={boxStyle}>
          <h3 style={{ marginBottom: "10px", color: "#38bdf8" }}>Send a Message</h3>
          <form>
            <input style={inputStyle} type="text" placeholder="Enter your full name" />
            <input style={inputStyle} type="email" placeholder="your.email@example.com" />
            <textarea
              style={{ ...inputStyle, height: "100px", resize: "none" }}
              placeholder="Tell me about your project or just say hello..."
            ></textarea>
            <button style={buttonStyle}>📨 Send Message</button>
          </form>
        </div>
      </div>

      <div style={bottomCall}>
        <p>Prefer a Quick Call?</p>
        <p>Sometimes it's easier to just talk. Give me a call for immediate assistance.</p>
        <a href="tel:+917718092959" style={callBtn}>📞 Call Now: +91 7718092959</a>
      </div>
    </section>
  );
};

export default Contact;
