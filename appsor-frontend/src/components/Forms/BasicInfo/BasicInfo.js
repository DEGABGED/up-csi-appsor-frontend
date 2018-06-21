import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handlePressPrev = this.props.handlePressPrev.bind(this, 'Home');
    this.handlePressNext = this.props.handlePressNext.bind(this, 'SkillsInterests');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to BasicInfo</h1>
        </header>
        <button onClick={this.handlePressPrev}>Prev Page!</button>
        <button onClick={this.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

BasicInfo.propTypes = {
  handlePressNext: PropTypes.func.isRequired,
  handlePressPrev: PropTypes.func.isRequired,
};

export default BasicInfo;
