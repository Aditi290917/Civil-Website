import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        backgroundColor: "#ffffff",
        textAlign: "left",
        gap: "20px",
      }}
    >
      {/* Image */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src="aboutus.jpg"
          alt="About Us"
          style={{
            maxWidth: "70%",
            maxHeight: "70rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#0066cc",
            textTransform: "uppercase",
          }}
        >
          About Us
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Welcome to <strong>StrucProof</strong>, your trusted partner in
          building waterproofing solutions. We specialize in providing
          top-notch services to protect your structures from water damage. Our
          team of experts uses cutting-edge technology to ensure your buildings
          remain safe, secure, and dry.
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          At <strong>StrucProof</strong>, our mission is to deliver exceptional
          waterproofing solutions that exceed our clients' expectations. We
          value quality, reliability, and customer satisfaction, and strive to
          be the go-to waterproofing experts in the industry.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
