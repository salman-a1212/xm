import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const How = () => {
  return (
    <div className='mt-5 pt-5'>
      <Container>
        <div className='how_title text-center'>
          <h2>How it is going?</h2>
          <p>
            We offer professional web design services at affordable rates to
            help your business attract more visitors and keep them on your site!
          </p>
        </div>
        <Row>
          <Col className='p-5 m-2 bg_1'>
            <p className="how_col_p1">Info Gathering</p>
            <p className="how_col_p2">
              Need a good understanding of what are your business goals and
              dreams.
            </p>
          </Col>
          <Col className='p-5 m-2 bg_2'>
            <p className="how_col_p1">Planning</p>
            <p className="how_col_p2">
              We will help you to decide what technologies should be
              implemented.
            </p>
          </Col>
          <Col className='p-5 m-2 bg_3'>
            <p className="how_col_p1">Design</p>
            <p className="how_col_p2">It’s time to determine the look and feel of your site.</p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col className='p-5 m-2 bg_4 col-lg-4'>
            <p className="how_col_p1">Development</p>
            <p className="how_col_p2">
              Writing valid HTML / CSS code that complies to current web
              standards.
            </p>
          </Col>
          <Col className='p-5 m-2 bg_5 col-lg-4'>
            <p className="how_col_p1">Testing and Launch</p>
            <p className="how_col_p2">
              Testing of the complete functionality of forms and scripts etc.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default How;
