import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import doctorBG from "../assets/bg-doctor.png";
import Services from "./services";
// Animation for fade-in effect
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const Highlight = styled.span`
  color: #1abc9c; /* Teal highlight */
  font-weight: bold;
`;
const StyledCard = styled.div`
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.8s ease forwards;
  .circle-shape {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  span {
    font-size: 24px;
  }
  p {
    margin: 0;
    font-size: 18px;
    span {
      font-weight: bold;
    }
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #1abc9c;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 40px;
  display: block;
  width: fit-content;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #16a085;
  }
`;
const Description = styled.p`
  color: grey;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  animation: ${fadeInRight} 0.8s ease forwards;
`;

const PageSection = styled.div`
  padding: 3rem 0;
  background: ${(props) => (props.light ? "#f8f9fa" : "#fff")};
`;

const HealthCenter = () => {
  return (
    <>
      <PageSection light>
        <Container>
          <Services />
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="py-3">
              <SectionTitle>About Us</SectionTitle>
              <Description className="mb-6">
                At <Highlight>HealthSupport</Highlight>, we are dedicated to
                enhancing your well-being and financial stability. Our wide
                range of services, including{" "}
                <Highlight>medical support</Highlight>,{" "}
                <Highlight>investment plans</Highlight>, and{" "}
                <Highlight>health insurance</Highlight>, ensures that you are
                covered in every aspect of life.
              </Description>
              <Button href="#services">Learn More</Button>
            </Col>
            <Col lg={6}>
              <ImageContainer id="aboutImage">
                <img src={doctorBG} alt="Health Center" className="img-fluid" />
              </ImageContainer>
            </Col>
          </Row>
        </Container>
      </PageSection>
    </>
  );
};

export default HealthCenter;
