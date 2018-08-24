import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "../../../assets/stylesheets/Carousel.css";
import { Button, Modal, Icon, Header, Image } from 'semantic-ui-react'

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

  const commArray = [
    {
      name: 'ENGINEERING',
      img: enggcomm
    },
    {
      name: 'ENGINEERING',
      img: enggcomm
    },
    {
      name: 'PLATELET',
      img: "https://i.ytimg.com/vi/IF9OaXTzoRs/maxresdefault.jpg"
    },
    {
      name: 'ENGINEERING',
      img: enggcomm
    },
    {
      name: 'NANACHI',
      img: "https://i.ytimg.com/vi/QiVZrzqwyR8/maxresdefault.jpg"
    },
  ]

  return (
		<div className="carousel-container">
			<Slider {...settings}>
        {commArray.map(comm => (
            <div className="carousel-div">
              <img src={comm.img} alt='engg-comm'/>
              <div className="slide-title">
                <p>{comm.name}<br/>COMMITTEE</p>
                <Modal trigger={<Button>Read More</Button>}>
                  <Modal.Header>This is the read-more section of the {comm.name.toLowerCase().replace(/^\w/, c => c.toUpperCase())} committee</Modal.Header>
                  <Modal.Content>
                    <p>Explain the committee here</p>
                  </Modal.Content>
                </Modal>
              </div>
            </div>
        ))}
      </Slider>
		</div>
  );
}


CommCarousel.propTypes = {
};


CommCarousel.defaultProps = {
};

export default CommCarousel;
