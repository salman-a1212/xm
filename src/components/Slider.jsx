import React from "react";
import Image from "react-bootstrap/Image";
import logo_slider1 from "../images/logo_slider1.svg";
import logo_slider2 from "../images/logo_slider2.svg";
import logo_slider3 from "../images/logo_slider3.svg";
import logo_slider4 from "../images/logo_slider4.svg";
import logo_slider5 from "../images/logo_slider5.svg";
import logo_slider6 from "../images/logo_slider6.svg";
import Container from "react-bootstrap/Container";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className='item' data-value='1'>
    <Image src={logo_slider1} />
  </div>,
  <div className='item' data-value='2'>
    <Image src={logo_slider2} />
  </div>,
  <div className='item' data-value='3'>
    <Image src={logo_slider3} />
  </div>,
  <div className='item' data-value='4'>
    <Image src={logo_slider4} />
  </div>,
  <div className='item' data-value='5'>
    {" "}
    <Image src={logo_slider5} />
  </div>,
  <div className='item' data-value='6'>
    {" "}
    <Image src={logo_slider6} />
  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1200: { items: 4 },
  1400: { items: 5 },
  1920: { items: 6 },
};

const Slider = () => {
  return (
    <div>
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

export default Slider;
