import React, { Component } from 'react';
import CommCarousel from '../../presentational/design/DesktopCarousel'
import MobileCarousel from '../../presentational/design/MobileCarousel';

import { Responsive } from 'semantic-ui-react'

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight
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

   componentDidMount() {
     // window.onresize = () => {
     //   this.setState({
     //     windowHeight: window.innerHeight
     //   })
     // }
   }
}

export default Result;
