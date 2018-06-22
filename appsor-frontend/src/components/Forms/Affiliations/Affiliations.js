import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Affiliations extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handlePressPrev = this.props.handlePress.bind(this, 'Prev');
    this.handlePressNext = this.props.handlePress.bind(this, 'Next');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Affiliations</h1>
        </header>
        <button onClick={this.handlePressPrev}>Prev Page!</button>
        <button onClick={this.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

Affiliations.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default Affiliations;
