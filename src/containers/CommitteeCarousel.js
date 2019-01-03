import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

import CommCarousel from '../components/Carousel/DesktopCarousel';
import MobileCarousel from '../components/Carousel/MobileCarousel';

class CommitteCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Responsive minWidth={768}>
          <CommCarousel />
        </Responsive>
        <Responsive maxWidth={767}>
          <MobileCarousel />
        </Responsive>
      </div>
    );
  }
}

export default CommitteCarousel;
