import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormActionURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScm1W5-f1oORCgoCNhngAfjRxF4c0we6n5ws4LYnaFw-GwGWQ/formResponse";
    const formBody = new URLSearchParams({
      "entry.97404474": formData.name,
      "entry.1378458020": formData.mobile,
      "entry.93585169": formData.message,
    });

    fetch(googleFormActionURL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    })
      .then(() => {
        setSuccessMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", mobile: "", message: "" });
      })
      .catch(() => {
        setSuccessMessage("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
      {/* Title Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Contact Us</h1>
      </div>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#eaeaea",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Left Section: Contact Form */}
        <div
          style={{
            flex: "1",
            padding: "40px",
            minWidth: "300px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "20px" }}>Online Inquiry</h2>
          {successMessage && (
            <Alert
              color="success"
              className="text-center rounded-3"
              style={{ fontWeight: "bold" }}
            >
              {successMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name" className="fw-bold">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-3"
              />
            </FormGroup>
            <FormGroup>
              <Label for="mobile" className="fw-bold">
                Mobile Number
              </Label>
              <Input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="rounded-3"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message" className="fw-bold">
                Message
              </Label>
              <Input
                type="textarea"
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="rounded-3"
              />
            </FormGroup>
            <Button
              color="primary"
              type="submit"
              className="w-100 rounded-3"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                padding: "12px 0",
                fontSize: "16px",
              }}
            >
              Send Message
            </Button>
          </Form>
        </div>

        {/* Right Section: Contact Details */}
        <div
          style={{
            flex: "1",
            padding: "40px",
            backgroundColor: "#eaeaea",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Contact Details</h2>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>Pune Address</h3>
            <p style={{ fontSize: "1.2rem" }}>
              6/b, Near Talathi Office, Ghandhi Chowk, Hadapsar, Pune-411028
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>Karad Address</h3>
            <p style={{ fontSize: "1.2rem" }}>
              Ground Floor Of Lokmanya Bank, Krishna Naka, Karad-415110
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "1.2rem" }}>
              <strong>Mobile:</strong> 9371507666, 7767977177
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              <strong>Email:</strong> Strucproof666@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
