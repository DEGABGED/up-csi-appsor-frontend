import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handlePressNext = this.props.handlePress.bind(this, 'Next');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to HOME</h1>
        </header>
        <button onClick={this.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

Home.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default Home;
