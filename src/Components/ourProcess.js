import React from "react";
import { Container } from "reactstrap";

const OurProcess = () => {
  const steps = [
    {
      title: "Site Visit & Analysis",
      description: "We inspect and diagnose root problems.",
      color: "#00C1A6", // Bright Mint
    },
    {
      title: "Custom Proposal",
      description: "Based on site needs, budget & structure.",
      color: "#FF6B6B", // Warm Coral
    },
    {
      title: "Material Selection",
      description: "Industry-certified products.",
      color: "#FF9F1C", // Tangerine
    },
    {
      title: "Execution by Experts",
      description: "Trained teams using proper methods.",
      color: "#0099B7", // Ocean Blue
    },
    {
      title: "Quality Check & Testing",
      description: "Leak check and assurance.",
      color: "#B39DDB", // Soft Lavender
    },
    {
      title: "Warranty & After-Support",
      description: "10-year warranty + service backup.",
      color: "#A8E06E", // Lemon Green
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#FDFDFD", // Clean white background
        padding: "60px 0",
      }}
    >
      <Container>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "40px",
            color: "#333", // Neutral dark color for heading
          }}
        >
          Our Process
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              {/* Step Circle */}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: step.color,
                  color: "#fff", // White text for contrast
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", // Clean shadow
                }}
              >
                {step.title}
              </div>
              {/* Step Description */}
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "0.95rem",
                  color: "#555", // Neutral text color
                  maxWidth: "140px",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
