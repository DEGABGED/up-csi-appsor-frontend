import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillsInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to SkillsInterests</h1>
        </header>
        <button onClick={this.props.handlePressPrev}>Prev Page!</button>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

SkillsInterests.propTypes = {
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
};

export default SkillsInterests;
