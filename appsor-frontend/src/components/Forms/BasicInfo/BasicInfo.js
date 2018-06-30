import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
    };
    this.handleFirstName = this.props.handleChange.bind(this, 'basicInfo', 'firstName');
    this.handleLastName = this.props.handleChange.bind(this, 'basicInfo', 'lastName');
    this.handleMidInitial = this.props.handleChange.bind(this, 'basicInfo', 'midInitial');
    this.handleNickName = this.props.handleChange.bind(this, 'basicInfo', 'nickName');
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
        <input onChange={this.handleFirstName} />
        <input onChange={this.handleLastName} />
        <input onChange={this.handleMidInitial} />
        <input onChange={this.handleNickName} />
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
