import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';

const testimonials = [
  {
    text: "StrucProof handled our society’s terrace waterproofing with professionalism. No leakage since 3 years!",
    author: "Mr. Mahajan",
    role: "Society Chairman, Pune",
  },
  {
    text: "Reliable partner for our commercial projects. Always on time, and always within budget.",
    author: "Prashant Builders",
    role: "Karad",
  },
  {
    text: "I was impressed by their expertise. The team explained every step clearly and gave us complete confidence.",
    author: "Mrs. Shinde",
    role: "Homeowner, Satara",
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
        
          <h2 className="font-weight-bold">What Our Clients Say</h2>
        </div>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md="6" lg="4" key={index}>
              <Card className="shadow-sm h-100 border-0">
                <CardBody className="d-flex flex-column justify-content-between">
                  <div className="mb-4">
                    
                    <CardText className="text-muted">{testimonial.text}</CardText>
                  </div>
                  <div>
                    <CardTitle tag="h5" className="mb-0">{testimonial.author}</CardTitle>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
