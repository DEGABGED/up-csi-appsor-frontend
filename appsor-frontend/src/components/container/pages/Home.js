import React from 'react';
import { Container, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import upcsi from '../../../assets/images/upcsi.png';
import '../../../assets/stylesheets/Home.css';

const Home = () => (
  <Container className="home-container" textAlign="center">
    <Image src={upcsi} size="mini" centered />
    <div>
      <h1 className="main-title">INSERT TEXT HERE</h1>
      <h1 className="sub-title">Insert Text Here</h1>
    </div>
    <Link className="chevron-button" to="/committees">
      <Icon name="chevron circle right" link size="huge" />
    </Link>
  </Container>
);

export default Home;
