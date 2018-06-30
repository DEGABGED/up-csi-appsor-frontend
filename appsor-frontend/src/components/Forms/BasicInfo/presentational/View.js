import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { ContactNoMask, StudentNoMask } from './TextMask';

function View(props) {
  const contactNoFormat = '(+63) 9           ';
  const studentNoFormat = '20  -     ';

  return (
    <div>
      <TextField
        label="First Name"
        defaultValue={props.basicInfo.firstName ? props.basicInfo.firstName : ''}
        onChange={props.handleFirstName}
      />

      <TextField
        label="Last Name"
        defaultValue={props.basicInfo.lastName ? props.basicInfo.lastName : ''}
        onChange={props.handleLastName}
      />

      <TextField
        label="Middle Initial"
        defaultValue={props.basicInfo.middleInitial ? props.basicInfo.middleInitial : ''}
        onChange={props.handleMidInitial}
      />

      <TextField
        label="Nickname"
        defaultValue={props.basicInfo.nickname ? props.basicInfo.nickname : ''}
        onChange={props.handleNickname}
      />

      <TextField
        label="Student Number"
        value={studentNoFormat}
        onChange={props.handleStudentNo}
        InputProps={{
          inputComponent: StudentNoMask,
        }}
      />

      <TextField
        label="Birthday"
        type="date"
        defaultValue={props.basicInfo.birthday ? props.basicInfo.birthday : '1999-01-01'}
        onChange={props.handleBirthday}
      />

      <TextField
        label="Contact Number"
        value={contactNoFormat}
        onChange={props.handleContactNo}
        InputProps={{
          inputComponent: ContactNoMask,
        }}
      />

      <TextField
        label="Email"
        defaultValue={props.basicInfo.email ? props.basicInfo.email : ''}
        onChange={props.handleEmail}
      />

      <TextField
        label="Address"
        defaultValue={props.basicInfo.address ? props.basicInfo.address : ''}
        onChange={props.handleAddress}
      />
    </div>
  );
}

View.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired,
  handleMidInitial: PropTypes.func.isRequired,
  handleNickname: PropTypes.func.isRequired,
  handleStudentNo: PropTypes.func.isRequired,
  handleBirthday: PropTypes.func.isRequired,
  handleContactNo: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handleAddress: PropTypes.func.isRequired,
};

export default View;
