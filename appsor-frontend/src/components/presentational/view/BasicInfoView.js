import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { ContactNoMask, StudentNoMask } from '../helper/TextMask';

function View(props) {
  const contactNoFormat = '(+63) 9';
  const studentNoFormat = '20  -';
  const defaultDate = '1999-01-01';

  return (
    <div>
      <TextField
        label="First Name"
        value={props.basicInfo.firstName || ''}
        onChange={props.handleFirstName}
      />

      <TextField
        label="Last Name"
        value={props.basicInfo.lastName || ''}
        onChange={props.handleLastName}
      />

      <TextField
        label="Middle Initial"
        value={props.basicInfo.middleInitial || ''}
        onChange={props.handleMidInitial}
      />

      <TextField
        label="Nickname"
        value={props.basicInfo.nickname || ''}
        onChange={props.handleNickname}
      />

      <TextField
        label="Student Number"
        value={props.basicInfo.studentNumber || studentNoFormat}
        onChange={props.handleStudentNo}
        InputProps={{
          inputComponent: StudentNoMask,
        }}
      />

      <TextField
        label="Birthday"
        type="date"
        value={props.basicInfo.birthday || defaultDate}
        onChange={props.handleBirthday}
      />

      <TextField
        label="Contact Number"
        value={props.basicInfo.contactNumber || contactNoFormat}
        onChange={props.handleContactNo}
        InputProps={{
          inputComponent: ContactNoMask,
        }}
      />

      <TextField
        label="Email"
        value={props.basicInfo.email || ''}
        onChange={props.handleEmail}
      />

      <TextField
        label="Address"
        value={props.basicInfo.address || ''}
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
