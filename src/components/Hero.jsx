import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import heroImg from "../images/hero1.svg";
import Button from "react-bootstrap/Button";
import "../components/Hero.css";

const Hero = () => {
  return (
    <div>
      <Container className="d-block d-sm-none">
        <Row className='bg-img'>
          <Col sm className='mt-5'>
            <div className='content'>
              <h2>Web Design And Development Company</h2>
              <p>
                We create clean and creative websites that are professional and
                help you generate more visitors and revenue.
              </p>
              <Button variant='primary' className='nav-btn'>
                Get Started
              </Button>
            </div>
          </Col>
          <Col sm>
            <Image src={heroImg} fluid/>
          </Col>
        </Row>
      </Container>
        <div className='bg-img position-relative d-none d-md-block'>
          <div className='content position-absolute top-50 end-50 translate-middle-y ms-5 ps-4'>
            <h2>Web Design And Development Company</h2>
            <p>
              We create clean and creative websites that are professional and
              help you generate more visitors and revenue.
            </p>
            <Button variant='primary' className='nav-btn'>
              Get Started
            </Button>
          </div>
        </div>
    </div>
  );
};

export default Hero;
