import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Test = () => {
  return (
    <div className='mt-5'>
      <Container fluid>
        <div className='test_title'>
          <h2 className='text-center'>
            Intelligent Websites That Work Overtime For Marketing Results{" "}
          </h2>
        </div>
        <Row className='test_bg p-5 text-white text-center'>
          <Col>
            <h2 className="test_number">25+</h2>
            <p className="num_details">Years of Experience</p>
          </Col>
          <Col>
            {" "}
            <h2 className="test_number">38+</h2>
            <p className="num_details">Expert Team Member</p>
          </Col>
          <Col>
            {" "}
            <h2 className="test_number">3K+</h2>
            <p className="num_details">Project Complete</p>
          </Col>
          <Col>
            {" "}
            <h2 className="test_number">99%</h2>
            <p className="num_details">Clients Satisfied</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Test;
