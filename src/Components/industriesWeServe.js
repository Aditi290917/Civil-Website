import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaBuilding, FaStore, FaHome, FaIndustry, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Make sure you have framer-motion installed

const IndustriesWeServe = () => {
  const industries = [
    {
      title: 'Construction & Builders',
      description: 'Reliable, long-lasting protection',
      icon: <FaBuilding style={{ fontSize: '3.5rem', color: '#007bff' }} />,
      backgroundColor: '#e0f7fa',
    },
    {
      title: 'Commercial Complexes & Malls',
      description: 'Hassle-free execution',
      icon: <FaStore style={{ fontSize: '3.5rem', color: '#28a745' }} />,
      backgroundColor: '#f0f8ff',
    },
    {
      title: 'Housing Societies & Apartments',
      description: 'Safe, quick, effective',
      icon: <FaHome style={{ fontSize: '3.5rem', color: '#ffc107' }} />,
      backgroundColor: '#ffe0b2',
    },
    {
      title: 'Factories & Industrial Sheds',
      description: 'Heavy-duty waterproofing',
      icon: <FaIndustry style={{ fontSize: '3.5rem', color: '#ff5722' }} />,
      backgroundColor: '#fff3e0',
    },
    {
      title: 'Government Buildings',
      description: 'Compliant & audit-ready work',
      icon: <FaUniversity style={{ fontSize: '3.5rem', color: '#9c27b0' }} />,
      backgroundColor: '#f3e5f5',
    }
  ];

  return (
    <div
      id="industries"
      className="industries-section"
      style={{ backgroundColor: "#ffffff", padding: "60px 0" }}
    >
      <Container>
        <h1
          className="text-center"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Industries We Serve
        </h1>
        <p
          className="text-center"
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          We understand that different industries require tailored solutions. Our services are
          designed to meet your industry's unique needs.
        </p>
        <Row className="text-center">
          {industries.map((industry, index) => (
            <Col lg="4" md="6" sm="12" key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ textAlign: "center", position: "relative" }}
              >
                {/* SVG Background */}
                <svg
                  style={{
                    position: "absolute",
                    width: "120px",
                    height: "120px",
                    top: "20%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "0", // Ensure the SVG stays behind the icon
                  }}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                    transform="translate(100 100)"
                    fill={industry.backgroundColor}
                  />
                </svg>

                {/* Icon */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: '2', // Ensure the icon stays on top of the SVG
                  }}
                >
                  {industry.icon}
                </div>

                {/* Title */}
                <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>
                  {industry.title}
                </h5>
                {/* Description */}
                <p style={{ color: "#555", fontSize: "0.9rem" }}>
                  {industry.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default IndustriesWeServe;
