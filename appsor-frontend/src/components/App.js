import React, { Component } from 'react';
import Page from './Route/Page';
import pages from './Route/pageorder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
    };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(direction) {
    switch (direction) {
      case 'Prev': {
        this.setState({ currentPage: pages.prev().value });
        break;
      }
      case 'Next': {
        this.setState({ currentPage: pages.next().value });
        break;
      }
      default: {
        break;
      }
    }
  }

  render() {
    return (
      <Page
        handlePress={this.handlePress}
        currentPage={this.state.currentPage}
      />
    );
  }
}

export default App;
