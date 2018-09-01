import React, { Component } from 'react';
import Slider, {slickNext} from "react-slick";
import "../../../assets/stylesheets/DesktopCarousel.css";
import { Button } from 'semantic-ui-react'

import ReadMeModal from './ReadMeModal';
import CommArray from './CommitteeData';


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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " slider-arrows"}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

class DesktopCarousel extends Component {
  constructor(props) {
    super(props)
    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      className: 'carousel-main',
      dotsClass: 'slick-dots carousel-dots',
      variableHeight: true,
    }

    this.slideScroll = this.slideScroll.bind(this);
  }

  slideScroll(y) {
    if(this.slider != null) {
      y < 0? (
        this.slider.slickNext()
      ) : (
        this.slider.slickPrev()
      )
    }
  }

  componentWillMount() {
    window.addEventListener('wheel', (e) => {
      this.slideScroll(e.wheelDelta);
    })
  }

  render() {
    return (
    <div className="carousel-container">
      <Slider
        ref={slider => this.slider = slider}
        {...this.settings}
      >
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
}

export default DesktopCarousel;
