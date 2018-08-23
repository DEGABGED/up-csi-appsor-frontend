import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "../../../assets/stylesheets/Carousel.css";

import { Button } from 'semantic-ui-react'

import enggcomm from "../../../assets/images/carousel/enggcomm.png";

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

function CommCarousel(props){
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		className: 'carousel-main',
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
    dotsClass: 'slick-dots carousel-dots'
	};

  return (
		<div className="carousel-container">
			<Slider {...settings}>
        <div className="carousel-div">
          <img src={enggcomm} alt='engg-comm'/>
          <div className="slide-title">
            <p>ENGINEERINGG<br/>COMMITTEE</p>
          </div>
          <Button>Read more</Button>
        </div>
        <div className="carousel-div">
          <img src={enggcomm} alt='engg-comm'/>
          <div className="slide-title">
            <p>ENGINEERINGG<br/>COMMITTEE</p>
          </div>
          <Button>Read more</Button>
        </div>
        <div className="carousel-div">
          <img src="https://i.ytimg.com/vi/IF9OaXTzoRs/maxresdefault.jpg" alt='platelets'/>
          <div className="slide-title">
            <p>PLATELET<br/>COMMITTEE</p>
          </div>
            <Button>Read more</Button>
        </div>
        <div className="carousel-div">
          <img src={enggcomm} alt='engg-comm'/>
          <div className="slide-title">
            <p>ENGINEERING<br/>COMMITTEE</p>
          </div>
          <Button>Read more</Button>
        </div>
				<div className="carousel-div">
					<img src="https://i.ytimg.com/vi/QiVZrzqwyR8/maxresdefault.jpg" alt='nanachi'/>
          <div className="slide-title">
            <p>NANACHI<br/>COMMITTEE</p>
          </div>
          <Button>Read more</Button>
				</div>
      </Slider>
		</div>
  );
}

CommCarousel.propTypes = {
};


CommCarousel.defaultProps = {
};

export default CommCarousel;
