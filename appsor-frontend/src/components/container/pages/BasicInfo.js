import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasicInfoView from '../../presentational/view/BasicInfoView';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
    };
    this.handleFirstName = this.props.handleForm.bind(this, 'basicInfo', 'firstName');
    this.handleLastName = this.props.handleForm.bind(this, 'basicInfo', 'lastName');
    this.handleMidInitial = this.props.handleForm.bind(this, 'basicInfo', 'middleInitial');
    this.handleNickname = this.props.handleForm.bind(this, 'basicInfo', 'nickname');
    this.handleStudentNo = this.props.handleForm.bind(this, 'basicInfo', 'studentNumber');
    this.handleBirthday = this.props.handleForm.bind(this, 'basicInfo', 'birthday');
    this.handleContactNo = this.props.handleForm.bind(this, 'basicInfo', 'contactNumber');
    this.handleEmail = this.props.handleForm.bind(this, 'basicInfo', 'email');
    this.handleAddress = this.props.handleForm.bind(this, 'basicInfo', 'address');
  }

  componentDidMount() {
    if (this.state.animate === true) {
      this.setState({ animate: false });
    }
  }

  render() {
    return (
      <div>
        <BasicInfoView
          basicInfo={this.props.basicInfo}
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleMidInitial={this.handleMidInitial}
          handleNickname={this.handleNickname}
          handleStudentNo={this.handleStudentNo}
          handleBirthday={this.handleBirthday}
          handleContactNo={this.handleContactNo}
          handleEmail={this.handleEmail}
          handleAddress={this.handleAddress}
        />
        <button onClick={this.props.handlePressPrev}>Prev Page!</button>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

BasicInfo.propTypes = {
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
  basicInfo: PropTypes.object.isRequired,
};

export default BasicInfo;
