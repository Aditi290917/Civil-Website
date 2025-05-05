import React from "react";
import { Container } from "reactstrap";

const WhyChoose = () => {
  const reasons = [
    { title: "35+ Years of Real Experience", icon: "📅" },
    { title: "1500+ Projects Done Right", icon: "🏗️" },
    { title: "10-Year Warranty on All Work", icon: "🔒" },
    { title: "Site-Specific Engineering", icon: "📐" },
    { title: "Trusted by Builders, Govt., and Businesses", icon: "🤝" },
    { title: "Fully Equipped Teams & Modern Tools", icon: "🛠️" },
    { title: "Affordable Pricing with No Compromise", icon: "💰" },
    { title: "Family Values + Professional Execution", icon: "❤️" },
  ];

  return (
    <div
      className="why-choose-us-section"
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#f1f5f9",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            color: "#1a202c",
            fontSize: "2.5rem",
            textTransform: "uppercase",
          }}
        >
          Why Choose StrucProof?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  color: index % 2 === 0 ? "#1E90FF" : "#FF69B4",
                }}
              >
                {reason.icon}
              </div>
              <h4
                style={{
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "0.5rem",
                }}
              >
                {reason.title}
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                {index % 2 === 0
                  ? "Innovating excellence for decades."
                  : "Quality and trust you can rely on."}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
