import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FormTextField from '../components/FormTextField';
import FormMaskedField from '../components/FormMaskedField';

function BasicInfo(props) {
  return (
    <Container className="basic-info-container">
      <div className="row">
        <FormTextField
          label="Last Name"
          name="lastName"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="last-name"
        />
        <FormTextField
          label="M. I."
          name="middleInitial"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="middle-initial"
        />
        <FormTextField
          label="First Name"
          name="firstName"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="first-name"
        />
      </div>
      <div className="row">
        <FormTextField
          label="Nickname"
          name="nickname"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="nickname"
        />
        <FormMaskedField
          label="Student Number"
          name="studentNumber"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="student-number"
        />
        <FormTextField
          label="Birthday"
          name="birthday"
          type="date"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="birthday"
        />
      </div>
      <div className="row">
        <FormTextField
          label="Email"
          name="email"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="email"
        />
        <FormMaskedField
          label="Contact Number"
          name="contactNumber"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="contact-number"
        />
      </div>
      <div className="row">
        <FormTextField
          label="Address"
          name="address"
          values={props.basicInfo}
          onChange={props.onChange}
          errors={props.errors}
          className="address"
        />
      </div>
    </Container>
  );
}

BasicInfo.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

BasicInfo.defaultProps = {
  errors: undefined,
};

export default BasicInfo;
