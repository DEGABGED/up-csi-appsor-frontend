import React from 'react';
import { Container, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import upcsi from '../assets/images/upcsi_white.png';
import landingBackground from '../assets/images/landing_bg.png';
import '../assets/stylesheets/Home.css';

const Home = () => (
  <div
    className="home-landing-bg"
    style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${landingBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <Container className="home-container" textAlign="center">
      <Image className="animated fadeInUp" src={upcsi} size="mini" centered />
      <div className="animated bounceInUp delay-5s">
        <h1 className="sub-title">TAKE A LOOK AT THE</h1>
        <h1 className="main-title">KALEIDOSCOPE</h1>
      </div>
      <Link className="animated fadeInUp chevron-button" to="/committees">
        <Icon name="chevron circle right" link size="huge" />
      </Link>
    </Container>
  </div>
);

export default Home;
