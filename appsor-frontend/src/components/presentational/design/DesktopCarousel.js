import React from 'react';
import Slider from "react-slick";
import "../../../assets/stylesheets/DesktopCarousel.css";
import { Button } from 'semantic-ui-react'

import ReadMeModal from './ReadMeModal';
import CommArray from './CommitteeData';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slider-arrows"}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


function CommCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'carousel-main',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: 'slick-dots carousel-dots',
  }

  return (
		<div className="carousel-container">
			<Slider {...settings}>
        {CommArray.map((comm, index) => (
          <div className="carousel-div" key={index}>
            <img src={comm.img} alt='engg-comm'/>
            <div className="slide-title">
              <p>{comm.name}<br/>COMMITTEE</p>
              <ReadMeModal
                name={comm.name}
                key={index}
                trigger={<Button>Read More</Button>}
              />
            </div>
          </div>
        ))}
      </Slider>
		</div>
  );
}

export default CommCarousel;
