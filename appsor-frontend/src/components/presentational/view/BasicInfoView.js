import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { ContactNoMask, StudentNoMask } from '../helper/TextMask';
import { Field } from 'formik';

function View(props) {
  const contactNoFormat = '(+63) 9';
  const studentNoFormat = '20  -';
  const defaultDate = '1999-01-01';

  return (
    <div>
      <TextField
        label="First Name"
        name="firstName"
        value={props.basicInfo.firstName || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Last Name"
        name="lastName"
        value={props.basicInfo.lastName || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Middle Initial"
        name="middleInitial"
        value={props.basicInfo.middleInitial || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Nickname"
        name="nickname"
        value={props.basicInfo.nickname || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Student Number"
        name="studentNumber"
        value={props.basicInfo.studentNumber || studentNoFormat}
        onChange={props.handleChange}
        InputProps={{
          inputComponent: StudentNoMask,
        }}
      />

      <TextField
        label="Birthday"
        name="birthday"
        type="date"
        value={props.basicInfo.birthday || defaultDate}
        onChange={props.handleChange}
      />

      <TextField
        label="Contact Number"
        name="contactNumber"
        value={props.basicInfo.contactNumber || contactNoFormat}
        onChange={props.handleChange}
        InputProps={{
          inputComponent: ContactNoMask,
        }}
      />

      <TextField
        label="Email"
        name="email"
        value={props.basicInfo.email || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Address"
        name="address"
        value={props.basicInfo.address || ''}
        onChange={props.handleChange}        
      />
    </div>
  );
}

View.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default View;
