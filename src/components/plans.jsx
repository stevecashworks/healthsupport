import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./plans.css"; // Import custom CSS for additional styling

const plansData = [
  {
    title: "Starter Plan",
    roi: "15% ROI",
    minDeposit: "50 USD",
    maxDeposit: "499 USD",
    duration: "24 Hours Plan",
    reinvestment: "Reinvestment Not Supported",
  },
  {
    title: "Premium Plan",
    roi: "40% ROI",
    minDeposit: "1000 USD",
    maxDeposit: "4999 USD",
    duration: "48 Hours Plan",
    reinvestment: "Reinvestment Supported",
  },
  {
    title: "Ultimate Plan",
    roi: "65% ROI",
    minDeposit: "10000 USD",
    maxDeposit: "49999 USD",
    duration: "72 Hours Plan",
    reinvestment: "Reinvestment Supported",
  },
  {
    title: "Standard Plan",
    roi: "25% ROI",
    minDeposit: "500 USD",
    maxDeposit: "999 USD",
    duration: "48 Hours Plan",
    reinvestment: "Reinvestment Supported",
  },
  {
    title: "Exclusive Plan",
    roi: "50% ROI",
    minDeposit: "5000 USD",
    maxDeposit: "9999 USD",
    duration: "72 Hours Plan",
    reinvestment: "Reinvestment Supported",
  },
  {
    title: "Corporate Plan",
    roi: "80% ROI",
    minDeposit: "50000 USD",
    maxDeposit: "Unlimited USD",
    duration: "72 Hours Plan",
    reinvestment: "Reinvestment Supported",
  },
];

const InvestmentPlans = () => {
  return (
    <Container className="my-5">
      <p className="my-6 text-center text-gray h1">Investment Plans</p>
      <Row>
        {plansData.map((plan, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Header
                className="bg-dark text-white text-center d-flex align-items-center justify-content-center"
                style={{ height: "60px" }}
              >
                <h5 className="m-0">{plan.title}</h5>
              </Card.Header>
              <Card.Body className="text-center rounded">
                <Card.Title className="mb-4 teal-text">{plan.roi}</Card.Title>
                <Card.Text className="mb-3">
                  <strong>Min Deposit:</strong> {plan.minDeposit}
                </Card.Text>
                <Card.Text className="mb-3">
                  <strong>Max Deposit:</strong> {plan.maxDeposit}
                </Card.Text>
                <Card.Text className="mb-3">
                  <strong>Duration:</strong> {plan.duration}
                </Card.Text>
                <Card.Text className="mb-4">
                  <strong>{plan.reinvestment}</strong>
                </Card.Text>
                <Button
                  href="./register.html"
                  style={{ backgroundColor: "#1abc9c", border: "none" }}
                  className="px-4 py-2"
                >
                  Invest Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InvestmentPlans;
