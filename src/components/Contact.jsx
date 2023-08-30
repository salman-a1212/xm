import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import contact_bg from "../images/contact_bg.svg";
import phone_icon from "../images/phone_icon.svg";
import mail from "../images/mail_icon.svg";
import pin from "../images/pin_icon.svg";
import fb from "../images/fb_icon.svg";
import tw from "../images/tw_icon.svg";
import linkedin from "../images/linkedin.svg";
import insta from "../images/insta_icon.svg";
import skype from "../images/skype.svg";
import gmail from "../images/gmail.svg";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className='position-relative'>
      <div className='contact_bg mt-5 pt-5'>
        <Container>
          <Row>
            <Col>
              <h2 className='text-white contact_title'>Contact</h2>
            </Col>
            <Col>
              <Row>
                <Col className='pb-3'>
                  <Image src={phone_icon} />{" "}
                  <p className='d-inline text-white'>+91 999-888-0845</p>
                </Col>
              </Row>
              <Row>
                <Col className='pb-3'>
                  <Image src={mail} />{" "}
                  <p className='d-inline text-white'>
                    info@xmtechnologoies.com
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Image src={pin} />{" "}
                  <p className='d-inline text-white'>
                    207, Dhara trade center, Mahadev Chowk, Mota varachha, Surat
                    394101
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Image src={fb} className='mx-2' />
                  <Image src={tw} className='mx-2' />
                  <Image src={linkedin} className='mx-2' />
                  <Image src={insta} className='mx-2' />
                  <Image src={skype} className='mx-2' />
                  <Image src={gmail} className='mx-2' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='form pt-5 px-5 position-absolute top-50 start-50 translate-middle-x'>
        <div className='form_title text-center'>
          <h2>Still have questions?</h2>
          <p>
            We’re ready to answer your questions and jump start your project
          </p>
        </div>
        <Container className="mt-5">
          <Form>
            <Row>
              <Col className='mb-3'>
                <Form.Control placeholder='First name' className='rounded-0' />
              </Col>
              <Col>
                <PhoneInput
                  country={"eg"}
                  enableSearch={true}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </Col>
              <Col>
                <Form.Control placeholder='Last name' className='rounded-0' />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Your Message'
                  className='rounded-0'
                />
              </Col>
            </Row>
            <div className="formbtn_con text-center mt-5">
            <Button
              className='text-center rounded-0 form_btn'
            >
              SEND MESSAGE
            </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
