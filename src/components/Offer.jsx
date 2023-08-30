import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import offer_img from "../images/offer.svg";

const Offer = () => {
  return (
    <div className='mt-5 pt-5'>
        <div className="offer_title">
            <p className="text-center">OUR SERVICES</p>
            <h2 className="text-center">What We Offer</h2>
        </div>
      <Container>
        <Row className="d-flex align-items-center justify-content-center flex-column flex-lg-row flex-md-row">
          <Col>
            <Row>
              <Col>
                <p className="text-end offer_col_p1">Awesome Ideas</p>
                <p className="text-end offer_col_p2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-end offer_col_p1">Web Solution</p>
                <p className="text-end offer_col_p2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Image src={offer_img} fluid />
          </Col>
          <Col>
            {" "}
            <Row>
              <Col>
                <p className="offer_col_p1">Planning Settings</p>
                <p className="offer_col_p2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offer_col_p1">Client Market</p>
                <p className="offer_col_p2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
