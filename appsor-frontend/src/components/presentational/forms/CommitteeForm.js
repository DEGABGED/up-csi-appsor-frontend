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
        value={props.committees.committee_id}
        selection
        search
        onChange={(event, data) => props.handleCommittee(props.formID, event, data)}
      />

      <TextField
        label="Reason"
        value={props.committees.reason || ''}
        onChange={event => props.handleReason(props.formID, event)}
      />
    </div>
  );
}

Form.propTypes = {
  formID: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  committees: PropTypes.object.isRequired,
  handleCommittee: PropTypes.func.isRequired,
  handleReason: PropTypes.func.isRequired,
};

export default Form;
