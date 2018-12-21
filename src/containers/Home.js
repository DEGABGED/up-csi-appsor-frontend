import React from 'react';
import { Container, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import upcsi from '../assets/images/upcsi.png';
import '../assets/stylesheets/Home.css';

const Home = () => (
  <Container className="home-container" textAlign="center">
    <Image className="animated fadeInUp" src={upcsi} size="mini" centered />
    <div className="animated bounceInUp delay-5s">
      <h1 className="sub-title">TAKE A SIP AT</h1>
      <h1 className="main-title">Innov Cafe</h1>
    </div>
    <Link className="animated fadeInUp chevron-button" to="/committees">
      <Icon name="chevron circle right" link size="huge" />
    </Link>
  </Container>
);

export default Home;
