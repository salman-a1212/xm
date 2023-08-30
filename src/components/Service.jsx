import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import service_icon1 from "../images/service_1.svg";
import service_icon2 from "../images/service_2.svg";
import service_icon3 from "../images/service_3.svg";
import service_icon4 from "../images/service_4.svg";
import Button from "react-bootstrap/Button";

const Service = () => {
  return (
    <div className='mt-5 pt-5'>
      <Container>
        <div className='how_title text-center'>
          <h2>Our Services</h2>
          <p>
            We offer professional web design services at affordable rates to
            help your business attract more visitors and keep them on your site!
          </p>
        </div>
        <Row>
          <Col className='p-5 m-2 text-center border border-1'>
            <Image src={service_icon1} fluid className='mb-3' />
            <p className='how_col_p1'>Web Development</p>
            <p className='how_col_p2'>
              Online impressions take time. It's exactly what you need. We build
              your dream website using Node, Angular, PHP, and Laravel.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
          <Col className='p-5 m-2 text-center border border-1'>
            <Image src={service_icon2} fluid className='mb-3' />
            <p className='how_col_p1'>Digital Marketing</p>
            <p className='how_col_p2'>
              By utilizing social media and paid advertising, we help small and
              medium businesses succeed online.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
          <Col className='p-5 m-2 text-center border border-1'>
            <Image src={service_icon3} fluid className='mb-3' />
            <p className='how_col_p1'>Application Development</p>
            <p className='how_col_p2'>
              React Native, Flutter, Native Android, Native iOS. Our team
              thrives on methodological and technical challenges.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className='p-5 m-2 text-center border border-1'>
            <Image src={service_icon3} fluid className='mb-3' />
            <p className='how_col_p1'>E-Commerce Solutions</p>
            <p className='how_col_p2'>
              Provide e-commerce websites and applications for companies to sell
              online. E-commerce websites with online payment solutions are our
              specialty.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
          <Col className='p-5 m-2 text-center border border-1'>
            <Image src={service_icon3} fluid className='mb-3' />
            <p className='how_col_p1'>Backup & Security</p>
            <p className='how_col_p2'>
              SMBs succeed online with us. Security and backup are included. Our
              daily backups give you 100% security.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
          <Col className='p-5 m-2 text-center border border-1'>
            <Image src={service_icon3} fluid className='mb-3' />
            <p className='how_col_p1'>Enterprise Software Services</p>
            <p className='how_col_p2'>
              Our goal is to launch enterprise or small business software
              worldwide. Our goal is to provide the best software service.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col className='p-5 m-2 text-center border border-1 col-lg-4'>
            <Image src={service_icon4} fluid className='mb-3' />
            <p className='how_col_p1'>IT Support</p>
            <p className='how_col_p2'>
              We maintain websites for small, medium, and large businesses. Your
              existing website is regularly updated.
            </p>
            <Button
              variant='outline-dark service_btn'
              className='text-uppercase rounded-0'
            >
              learn more
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
