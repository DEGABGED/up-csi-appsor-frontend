import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FormTextField from '../components/FormTextField';
import FormMaskedField from '../components/FormMaskedField';

function BasicInfo(props) {
  const contactNoFormat = '(+63) 9';
  const studentNoFormat = '20  -';
  const defaultDate = '1999-01-01';

  return (
    <Container className="basic-info-container">
      <div className="row">
        <FormTextField
          label="Last Name"
          name="lastName"
          values={props.basicInfo}
          onChange={props.handleChange}
          errors={props.errors}
          className="last-name"
        />
        <FormTextField
          label="M. I."
          name="middleInitial"
          values={props.basicInfo}
          onChange={props.handleChange}
          errors={props.errors}
          className="middle-initial"
        />
        <FormTextField
          label="First Name"
          name="firstName"
          values={props.basicInfo}
          onChange={props.handleChange}
          errors={props.errors}
          className="first-name"
        />
      </div>
      <div className="row">
        <FormTextField
          label="Nickname"
          name="nickname"
          values={props.basicInfo}
          onChange={props.handleChange}
          errors={props.errors}
          className="nickname"
        />
        <FormMaskedField
          label="Student Number"
          name="studentNumber"
          values={props.basicInfo}
          defaultValue={studentNoFormat}
          onChange={props.handleChange}
          errors={props.errors}
          className="student-number"
        />
        <FormTextField
          label="Birthday"
          name="birthday"
          type="date"
          values={props.basicInfo}
          defaultValue={defaultDate}
          onChange={props.handleChange}
          errors={props.errors}
          className="birthday"
        />
      </div>
      <div className="row">
        <FormTextField
          label="Email"
          name="email"
          values={props.basicInfo}
          onChange={props.handleChange}
          errors={props.errors}
          className="email"
        />
        <FormMaskedField
          label="Contact Number"
          name="contactNumber"
          values={props.basicInfo}
          defaultValue={contactNoFormat}
          onChange={props.handleChange}
          errors={props.errors}
          className="contact-number"
        />
      </div>
      <div className="row">
        <FormTextField
          label="Address"
          name="address"
          values={props.basicInfo}
          onChange={props.handleChange}
          errors={props.errors}
          className="address"
        />
      </div>
    </Container>
  );
};


BasicInfo.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

BasicInfo.defaultProps = {
  errors: undefined,
};

export default BasicInfo;
