import React from "react";
import { Container } from "reactstrap";

const WhyChoose = () => {
  const reasons = [
    "35+ Years of Real Experience",
    "1500+ Projects Done Right",
    "10-Year Warranty on All Work",
    "Site-Specific Engineering",
    "Trusted by Builders, Govt., and Businesses",
    "Fully Equipped Teams & Modern Tools",
    "Affordable Pricing with No Compromise",
    "Family Values + Professional Execution",
  ];

  return (
    <div
      className="why-choose-us-section"
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#f8fafc",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            color: "#1f2937",
            fontSize: "2rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Why Choose StrucProof?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e5e7eb",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.05)";
              }}
            >
              <h4
                style={{
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {reason}
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#6b7280",
                }}
              >
                {index % 2 === 0
                  ? "Delivering unparalleled expertise and reliability."
                  : "Built on trust, quality, and innovation."}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
