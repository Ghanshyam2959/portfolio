import React from 'react';

const Documents = () => {
  const sectionStyle = {
    padding: "80px 20px",
    backgroundColor: "#0f172a",
    color: "#22d3ee",
    fontFamily: "sans-serif",
  };

  const heading = {
    fontSize: "36px",
    color: "#22d3ee",
   
    paddingBottom: "10px",
    marginBottom: "40px",
    textAlign: "center",
  };

  const grid = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  };

  const card = {
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    padding: "20px",
    width: "260px",
    textAlign: "center",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  };

  const cardHover = {
    transform: "scale(1.03)",
    backgroundColor: "#dde7e9ff",
    color: "#0f172a",
  };

  const button = {
    marginTop: "15px",
    padding: "10px 16px",
    backgroundColor: "#22d3ee",
    color: "#0f172a",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const docItems = [
    {
      title: "Java Certificate",
      link: "https://drive.google.com/file/d/1NP8X9mqbM_5Nx-22duOy3w3AfBbpFPb1/view?usp=sharing", // Replace with actual URL
    },
    {
      title: "Internship Letter",
      link: "https://drive.google.com/file/d/18TzCPTzJQ5lwflGnDzpzuxaG_3k9GrZs/view?usp=sharing", // Replace with actual URL
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1KZDKg6tLcChfTogXCBPgVJc92RvJ1cgR/view?usp=sharing", // Replace with actual URL
    },
  ];

  return (
    <section id="documents" style={sectionStyle}>
      <h2 style={heading}>DOCUMENTS</h2>
      <div style={grid}>
        {docItems.map((doc, index) => (
          <div
            key={index}
            style={card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, card)
            }
          >
            <h3>{doc.title}</h3>
            <a href={doc.link} target="_blank" rel="noopener noreferrer">
              <button style={button}>View / Download</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documents;
