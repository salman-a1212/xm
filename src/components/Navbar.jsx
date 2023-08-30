import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/xm_logo.svg";
import Image from "react-bootstrap/Image";
import "../components/Navbar.css";
import Button from "react-bootstrap/Button";

const TopNav = () => {
  return (
    <div>
      <Navbar expand="lg" bg='#fff' data-bs-theme='light' className='border-bottom'>
        <Container>
          <Navbar.Brand href='#home'>
            <Image src={logo} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto d-flex align-items-center'>
              <Nav.Link href='#home' className='nav-link mx-2'>
                Home
              </Nav.Link>
              <Nav.Link href='#features' className='nav-link mx-2'>
                About Us
              </Nav.Link>
              <Nav.Link href='#pricing' className='nav-link mx-2'>
                Services
              </Nav.Link>
              <Nav.Link href='#pricing' className='nav-link mx-2'>
                Portfolio
              </Nav.Link>
              <Button variant='primary' className='nav-btn mx-2'>
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
