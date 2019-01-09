import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Label } from 'semantic-ui-react';

import preventDefaultEnter from '../../helpers/preventDefaultEnter';
import CommitteeChoiceIcon from './CommitteeChoiceIcon';
import FormDropdown from '../FormDropdown';


function Form(props) {
  function getDropdownError() {
    let error = typeof (props.errors) !== 'undefined' && !!props.errors.committee_id;
    error = error || (typeof (props.duplicates) !== 'undefined' && !!props.duplicates);
    return error;
  }

  return (
    <div className="column">
      <CommitteeChoiceIcon committee_id={props.committees.committee_id} />
      <Label circular size="big" color="black">{props.formID + 1}</Label>
      <div className="committee-fields">
        <p>Committee</p>
        <FormDropdown
          className="committee-field"
          placeholder="Select a Committee"
          options={props.options}
          name={`${props.formID}`}
          onChange={props.handleChangeCommittee}
          error={getDropdownError()}
        />
        <TextField
          className="reason-field"
          label="Reason"
          name={`${props.formID}`}
          value={props.committees.reason || ''}
          onChange={(event) => {
            props.handleChangeReason(event.target.name, event.target.value);
          }}
          error={typeof (props.errors) !== 'undefined' && !!props.errors.reason}
          helperText={typeof (props.errors) !== 'undefined' ? props.errors.reason : undefined}
          onKeyPress={preventDefaultEnter}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  errors: PropTypes.object,
  duplicates: PropTypes.string,
  formID: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  committees: PropTypes.object.isRequired,
  handleChangeCommittee: PropTypes.func.isRequired,
  handleChangeReason: PropTypes.func.isRequired,
};

Form.defaultProps = {
  errors: undefined,
  duplicates: undefined,
};

export default Form;
