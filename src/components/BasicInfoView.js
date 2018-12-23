import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Container } from 'semantic-ui-react';

import FormTextField from './FormTextField';
import { ContactNoMask, StudentNoMask } from '../helpers/textMask';
import preventDefaultEnter from '../helpers/preventDefaultEnter';

function View(props) {
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
        <TextField
          label="Student Number"
          name="studentNumber"
          value={props.basicInfo.studentNumber || studentNoFormat}
          onChange={props.handleChange}
          InputProps={{
            inputComponent: StudentNoMask,
          }}
          error={typeof (props.errors) !== 'undefined' && !!props.errors.studentNumber}
          helperText={typeof (props.errors) !== 'undefined' && props.errors.studentNumber}
          className="text-field student-number"
          onKeyPress={preventDefaultEnter}
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
        <TextField
          label="Contact Number"
          name="contactNumber"
          value={props.basicInfo.contactNumber || contactNoFormat}
          onChange={props.handleChange}
          InputProps={{
            inputComponent: ContactNoMask,
          }}
          error={typeof (props.errors) !== 'undefined' && !!props.errors.contactNumber}
          helperText={typeof (props.errors) !== 'undefined' && props.errors.contactNumber}
          className="text-field contact-number"
          onKeyPress={preventDefaultEnter}
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
}

View.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

View.defaultProps = {
  errors: undefined,
};

export default View;
