import React from 'react';
import '../../App.css';
import '../main/Main.css';
import Slider from "react-slick";
import testimonial from '../../Assests/data/Testimonials.json';
import Card from '../../Components/Card';
import About from '../../Components/about/About';
import TopPicks from '../../Components/TopPicks';
// Images

import mysore_pak from '../../Assests/images/mysore_pak.webp';
import ooty from '../../Assests/images/ooty.webp';
import rajasthan from '../../Assests/images/rajasthan.webp';
import fastfood from '../../Assests/images/fastfood.jpg'
import sweets from '../../Assests/images/sweets.jpg'
import bakery from '../../Assests/images/bakery.jpg'


const Main = () => {

  
  

  // For Testimonial Slider
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  // For Above the fold Slider
  const settings1 = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    arrows: true,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }

  return (
    <div id="mainContainer">

      {/* Carousel Container starts */}
      <div id="carouselMain">
        <Slider {...settings1}>
          <div >
            <img src={fastfood} alt="ghewar" width={'100%'} height={"100%"} />
          </div>
          <div >
            <img src={bakery} alt="hyderabad" width={'100%'} height={"100%"} />
          </div>
          <div >
            <img src={sweets} alt="kolkata" width={'100%'} height={"100%"} />
          </div>
          <div >
            <img src={mysore_pak} alt="mysore-pak" width={'100%'} height={"100%"} />
          </div>
          <div >
            <img src={ooty} alt="ooty" width={'100%'} height={"100%"} />
          </div>
          <div >
            <img src={rajasthan} alt="rajasthan" width={'100%'} height={"100%"} />
          </div>
        </Slider>
      </div>
      {/* Carousel Container Ends */}

      {/* Top Picks  and Category Starts */}
      {/* <Category /> */}
      <TopPicks />
      {/* Top Picks and Category Ends  */}

      {/* Testimonials Starts */}
      <div id="testimonials">
        <h1> CUSTOMER'S SPEAK </h1>
        <div id='testimonialSlider'>
          <Slider {...settings}>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[0]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[1]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[2]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[3]} />
            </div>
            <div style={{ width: "100%", height: "80%" }}>
              <Card val={testimonial[4]} />
            </div>
          </Slider>
        </div>
      </div>
      {/* Testimonial Ends */}

      {/* About Section starts */}

      <About />

      {/* About Sections Ends */}

    </div>
  )
}

export default Main
