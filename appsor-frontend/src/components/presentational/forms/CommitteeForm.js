import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Dropdown } from 'semantic-ui-react';

function Form(props) {
  return (
    <div>
      <Dropdown
        placeholder="Committee"
        options={props.options}
        name={props.formID}
        value={props.committees.committee_id}
        selection
        search
        onChange={props.handleChangeCommittee}
      />

      <TextField
        label="Reason"
        name={props.formID}
        value={props.committees.reason || ''}
        onChange={props.handleChangeReason}
      />
    </div>
  );
}

Form.propTypes = {
  formID: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  committees: PropTypes.object.isRequired,
  handleChangeCommittee: PropTypes.func.isRequired,
  handleReason: PropTypes.func.isRequired,
};

export default Form;
