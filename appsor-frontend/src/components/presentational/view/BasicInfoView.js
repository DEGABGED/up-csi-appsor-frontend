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
        error={typeof(props.errors)!='undefined' && props.errors.firstName}
        helperText={typeof(props.errors)!='undefined' && props.errors.firstName}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={props.basicInfo.lastName || ''}
        onChange={props.handleChange}
        error={typeof(props.errors)!='undefined' && props.errors.lastName}
        helperText={typeof(props.errors)!='undefined' && props.errors.lastName}
      />

      <TextField
        label="Middle Initial"
        name="middleInitial"
        value={props.basicInfo.middleInitial || ''}
        onChange={props.handleChange}
        error={typeof(props.errors)!='undefined' && props.errors.middleInitial}
        helperText={typeof(props.errors)!='undefined' && props.errors.middleInitial}
      />

      <TextField
        label="Nickname"
        name="nickname"
        value={props.basicInfo.nickname || ''}
        onChange={props.handleChange}
        error={typeof(props.errors)!='undefined' && props.errors.nickname}
        helperText={typeof(props.errors)!='undefined' && props.errors.nickname}
      />

      <TextField
        label="Student Number"
        name="studentNumber"
        value={props.basicInfo.studentNumber || studentNoFormat}
        onChange={props.handleChange}
        InputProps={{
          inputComponent: StudentNoMask,
        }}
        error={typeof(props.errors)!='undefined' && props.errors.studentNumber}
        helperText={typeof(props.errors)!='undefined' && props.errors.studentNumber}
      />

      <TextField
        label="Birthday"
        name="birthday"
        type="date"
        value={props.basicInfo.birthday || defaultDate}
        onChange={props.handleChange}
        error={typeof(props.errors)!='undefined' && props.errors.birthday}
        helperText={typeof(props.errors)!='undefined' && props.errors.birthday}
      />

      <TextField
        label="Contact Number"
        name="contactNumber"
        value={props.basicInfo.contactNumber || contactNoFormat}
        onChange={props.handleChange}
        InputProps={{
          inputComponent: ContactNoMask,
        }}
        error={typeof(props.errors)!='undefined' && props.errors.contactNumber}
        helperText={typeof(props.errors)!='undefined' && props.errors.contactNumber}
      />

      <TextField
        label="Email"
        name="email"
        value={props.basicInfo.email || ''}
        onChange={props.handleChange}
        error={typeof(props.errors)!='undefined' && props.errors.email}
        helperText={typeof(props.errors)!='undefined' && props.errors.email}
      />

      <TextField
        label="Address"
        name="address"
        value={props.basicInfo.address || ''}
        onChange={props.handleChange}
        error={typeof(props.errors)!='undefined' && props.errors.address}
        helperText={typeof(props.errors)!='undefined' && props.errors.address}
      />
    </div>
  );
}

View.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default View;
