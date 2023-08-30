import React from "react";
import Image from "react-bootstrap/Image";
import stars from "../images/stars.svg";
import client_1 from "../images/client_1.svg";
import client_2 from "../images/client_2.svg";
import client_3 from "../images/client_3.svg";
import Container from "react-bootstrap/Container";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className='item border border-1 p-3 text-center m-2' data-value='1'>
    <div className='img_pos pb-3'>
      <Image src={client_1} fluid className='rounded-circle' />
    </div>
    <p className="client_col_p1">Tim Brown</p>
    <p className="client_col_p2">Aora Company</p>
    <p className="client_col_p2">
      Can say about these guys only good words. After we build a website the
      customer's flow is quite stable and our SEO results growing.{" "}
    </p>
    <Image src={stars} fluid />
  </div>,
  <div className='item border border-1 p-3 text-center m-2' data-value='2'>
    <div className='img_pos pb-3'>
      <Image src={client_2} fluid className='rounded-circle' />
    </div>
    <p className="client_col_p1">Michael Vice</p>
    <p className="client_col_p2">Bowl Room</p>
    <p className="client_col_p2">
      High-quality WordPress theme and the team who is behind the project had
      helped me a lot. 100% recommended.
    </p>
    <Image src={stars} fluid />
  </div>,
  <div className='item border border-1 p-3 text-center m-2' data-value='3'>
    <div className='img_pos pb-3'>
      <Image src={client_3} fluid className='rounded-circle' />
    </div>
    <p className="client_col_p1">Lucy Raymond</p>
    <p className="client_col_p2">Ive Logistic</p>
    <p className="client_col_p2">
      Worked with the company last 5 years and can rate the support on 5 stars
      as well as documentation.
    </p>
    <Image src={stars} fluid />
  </div>,
  <div className='item border border-1 p-3 text-center m-2' data-value='4'>
    <div className='img_pos pb-3'>
      <Image src={client_1} fluid className='rounded-circle' />
    </div>
    <p className="client_col_p1">Tim Brown</p>
    <p className="client_col_p2">Aora Company</p>
    <p className="client_col_p2">
      Can say about these guys only good words. After we build a website the
      customer's flow is quite stable and our SEO results growing.{" "}
    </p>
    <Image src={stars} fluid />
  </div>,
  <div className='item border border-1 p-3 text-center m-2' data-value='5'>
    {" "}
    <div className='img_pos pb-3'>
      <Image src={client_2} fluid className='rounded-circle' />
    </div>
    <p className="client_col_p1">Michael Vice</p>
    <p className="client_col_p2">Bowl Room</p>
    <p className="client_col_p2">
      High-quality WordPress theme and the team who is behind the project had
      helped me a lot. 100% recommended.
    </p>
    <Image src={stars} fluid />
  </div>,
  <div className='item border border-1 p-3 text-center m-2' data-value='6'>
    {" "}
    <div className='img_pos pb-3'>
      <Image src={client_3} fluid className='rounded-circle' />
    </div>
    <p className="client_col_p1">Lucy Raymond</p>
    <p className="client_col_p2">Ive Logistic</p>
    <p className="client_col_p2">
      Worked with the company last 5 years and can rate the support on 5 stars
      as well as documentation.
    </p>
    <Image src={stars} fluid />
  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
//   1200: { items: 4 },
//   1400: { items: 5 },
//   1920: { items: 6 },
};

const Client = () => {
  return (
    <div className='pt-5 mt-5'>
      <div className='client_title'>
        <h2 className='text-center'>Testimonials</h2>
        <p className='text-center'>What our Customers are Saying</p>
      </div>
      <Container>
        <AliceCarousel
            autoPlay
            autoPlayStrategy='none'
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType='fadeout'
            infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </Container>
    </div>
  );
};

export default Client;
