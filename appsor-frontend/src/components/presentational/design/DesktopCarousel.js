import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../assets/stylesheets/DesktopCarousel.css';
import { Button } from 'semantic-ui-react';

import ReadMeModal from './ReadMeModal';
import CommArray from './CommitteeData';


class DesktopCarousel extends Component {
  constructor(props) {
    super(props);

    this.slideScroll = this.slideScroll.bind(this);
    this.playCarousel = this.playCarousel.bind(this);
    this.pauseCarousel = this.pauseCarousel.bind(this);
  }

  slideScroll(y) {
    if (this.slider != null) {
      y < 0 ? (
        this.slider.slickNext()
      ) : (
        this.slider.slickPrev()
      );
    }
  }

  componentWillMount() {
    // window.addEventListener('wheel', (e) => {
    //   this.slideScroll(e.wheelDelta);
    // });
  }

  playCarousel() {
    this.slider.slickPlay();
  }

  pauseCarousel() {
    this.slider.slickPause();
  }

  render() {
    return (
      <div className="carousel-container">
        <Slider
          ref={slider => this.slider = slider}
          dots
          infinite
          speed={500}
          arrows={false}
          className="carousel-main"
          dotsClass="slick-dots carousel-dots"
          variableHeight
          autoplay
          autoplaySpeed={3000}
          pauseOnHover={false}
        >
          {CommArray.map((comm, index) => (
            <div className="carousel-div" key={index}>
              <img src={comm.img} alt="engg-comm" />
              <div className="slide-title">
                <p>{comm.name}<br />COMMITTEE</p>
                <ReadMeModal
                  name={comm.name}
                  description={comm.description}
                  img={comm.img}
                  key={index}
                  pauseCarousel={this.pauseCarousel}
                  playCarousel={this.playCarousel}
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
