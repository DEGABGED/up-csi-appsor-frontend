import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to HOME</h1>
        </header>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

Home.propTypes = {
  handlePressNext: PropTypes.func.isRequired,
};

export default Home;
