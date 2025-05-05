import React, { useState } from "react";
import { Container } from "reactstrap";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "Do you offer free site visits?",
      answer: "Yes. We provide free inspection and consultation across Maharashtra.",
    },
    {
      id: 2,
      question: "Is your waterproofing work guaranteed?",
      answer: "Absolutely. All services come with a 10-year written warranty.",
    },
    {
      id: 3,
      question: "Can you handle government or industrial contracts?",
      answer:
        "Yes. We are fully equipped, experienced, and compliant for government tenders and industrial scale projects.",
    },
    {
      id: 4,
      question: "How long does waterproofing take?",
      answer:
        "Depending on the site, small jobs can take 1–3 days, while large sites may take 1–2 weeks.",
    },
    {
      id: 5,
      question: "What materials do you use?",
      answer:
        "We use high-grade chemical coats, PU coatings, rubber-based materials, and cementitious solutions as per site condition.",
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="faq-section"
      style={{
        padding: "10px 0",
        backgroundColor: "#ffffff",
        paddingBottom: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            marginTop: "30px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Here are some frequently asked questions to help you find the information you need.
        </p>
        <div
          style={{
            maxWidth: "900px", // Increased width for more spacious layout
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {questions.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "15px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
                onClick={() => toggleQuestion(item.id)}
              >
                {item.question}
                <span style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                  {openQuestion === item.id ? "−" : "+"}
                </span>
              </div>
              {openQuestion === item.id && (
                <p
                  style={{
                    color: "#555",
                    fontSize: "1rem",
                    marginTop: "10px",
                  }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
