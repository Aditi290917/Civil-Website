import React from "react";

const AboutUs = () => {
  return (
    <section
      style={{
        // backgroundColor: "#f0f0f0",
        padding: "50px 20px",
        fontFamily: "'Roboto', sans-serif",
        marginTop: "50px", // Added for more space above
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left Section */}
        <div style={{ flex: 7, paddingRight: "40px" }}> {/* Set flex to 7 */}
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About Us</h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "10px",
              lineHeight: "1.8",
            }}
          >
            <strong>StrucProof – Protecting What You Build</strong>
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "20px",
              lineHeight: "1.8",
              color: "#333",
            }}
          >
            What began as Rasankar and Sons over three decades ago is now{" "}
            <strong>StrucProof</strong>, a professionally managed, fast-growing
            name in Maharashtra's waterproofing sector.
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            <strong>Founder:</strong> Chandrakant Rasankar
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            <strong>Managing Director:</strong> Ganesh Rasankar
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            <strong>Team:</strong> 50+ Trained Experts
          </p>
          <p style={{ fontSize: "1rem" }}>
            <strong>Presence:</strong> Pune | Karad | Serving All Maharashtra
          </p>
        </div>

        {/* Vertical Timeline */}
        <div
        className="timeline-container"
          style={{
            position: "relative",
            width: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Vertical Line */}
          <div
          className="timeline-line"
            style={{
              width: "2px",
              height: "300px",
              backgroundColor: "#000",
              position: "absolute",
              top: 0,
            }}
          ></div>

          {/* Circles */}
          <div
          className="timeline-circle"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#000",
              borderRadius: "50%",
              position: "relative",
              top: "0",
              marginBottom: "50px",
            }}
          ></div>
          <div
          className="timeline-circle"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#000",
              borderRadius: "50%",
              position: "relative",
              marginTop: "50px",
            }}
          ></div>
        </div>

        {/* Right Section */}
        <div style={{ flex: 3 }}> {/* Adjusted flex for balance */}
          <div style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
                color: "#000",
              }}
            >
              Our Mission
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
              To be India’s most trusted waterproofing solutions provider by
              delivering long-lasting results, honest service, and superior
              technology.
            </p>
          </div>
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
                color: "#000",
              }}
            >
              Our Vision
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
              A leak-free future — for homes, industries, and public
              infrastructure.
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            section > div {
              flex-direction: column !important; /* Stack sections vertically */
            }
            .timeline-container {
              display: none !important; /* Hide the timeline container on small screens */
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
