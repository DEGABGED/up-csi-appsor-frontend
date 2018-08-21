import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "../../../assets/stylesheets/Carousel.css";

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
			className={className}
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
		nextArrow: <SampleNextArrow className="slider-arrows"/>,
		prevArrow: <SamplePrevArrow className="slider-arrows"/>,
	};

  return (
		<div className="carousel-container">
			<Slider {...settings}>
        <div className="carousel-div">
          <img src={enggcomm} />
        </div>
        <div className="carousel-div">
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        </div>
        <div className="carousel-div">
          <img src="https://i.ytimg.com/vi/IF9OaXTzoRs/maxresdefault.jpg" />
        </div>
        <div className="carousel-div">
          <img src="http://placekitten.com/g/400/200" />
        </div>
				<div className="carousel-div">
					<img src="https://i.ytimg.com/vi/QiVZrzqwyR8/maxresdefault.jpg" />
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
