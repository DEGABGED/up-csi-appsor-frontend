import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
    };
    this.handleChange = this.props.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.state.animate === true) {
      this.setState({ animate: false });
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to BasicInfo</h1>
        </header>
        <input onChange={event => this.handleChange(event.target.value, 'basicInfo', 'firstName')} />
        <input onChange={event => this.handleChange(event.target.value, 'basicInfo', 'lastName')} />
        <button onClick={this.props.handlePressPrev}>Prev Page!</button>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

BasicInfo.propTypes = {
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BasicInfo;
