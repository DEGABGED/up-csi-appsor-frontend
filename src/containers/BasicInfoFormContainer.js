import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FormTextField from '../components/FormTextField';
import FormMaskedField from '../components/FormMaskedField';
import { shallowEqual } from '../helpers/generics';

class BasicInfoFormContainer extends Component {
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props.values, nextProps.values)
      || !shallowEqual(this.props.errors, nextProps.errors);
  }

  render() {
    return (
      <Container className="basic-info-container">
        <div className="row">
          <FormTextField
            label="Last Name"
            name="lastName"
            value={this.props.values.lastName}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="last-name"
          />
          <FormTextField
            label="M. I."
            name="middleInitial"
            value={this.props.values.middleInitial}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="middle-initial"
          />
          <FormTextField
            label="First Name"
            name="firstName"
            value={this.props.values.firstName}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="first-name"
          />
        </div>
        <div className="row">
          <FormTextField
            label="Nickname"
            name="nickname"
            value={this.props.values.nickname}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="nickname"
          />
          <FormMaskedField
            label="Student Number"
            name="studentNumber"
            value={this.props.values.studentNumber}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="student-number"
          />
          <FormTextField
            label="Birthday"
            name="birthday"
            type="date"
            value={this.props.values.birthday}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="birthday"
          />
        </div>
        <div className="row">
          <FormTextField
            label="Email"
            name="email"
            value={this.props.values.email}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="email"
          />
          <FormMaskedField
            label="Contact Number"
            name="contactNumber"
            value={this.props.values.contactNumber}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="contact-number"
          />
        </div>
        <div className="row">
          <FormTextField
            label="Address"
            name="address"
            value={this.props.values.address}
            onChange={this.props.onChange}
            errors={this.props.errors}
            className="address"
          />
        </div>
      </Container>
    );
  }
}

BasicInfoFormContainer.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

BasicInfoFormContainer.defaultProps = {
  errors: undefined,
};

export default BasicInfoFormContainer;
