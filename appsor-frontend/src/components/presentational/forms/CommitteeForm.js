import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Dropdown, Label } from 'semantic-ui-react';

function Form(props) {
  function getDropdownError() {
    let error = typeof (props.errors) !== 'undefined' && !!props.errors.committee_id;
    error = error || (typeof (props.duplicates) !== 'undefined' && !!props.duplicates);
    return error;
  }

  function getDropdownHelperText() {
    let errorMessage = typeof (props.errors) !== 'undefined' ? props.errors.committee_id : undefined;
    if (errorMessage === undefined) {
      errorMessage = props.duplicates != null ? props.duplicates : undefined;
    }
    return errorMessage;
  }

  return (
    <div>
      <Label>
        <Dropdown
          placeholder="Committee"
          options={props.options}
          name={`${props.formID}`}
          value={props.committees.committee_id}
          selection
          search
          onChange={props.handleChangeCommittee}
          error={getDropdownError()}
        />
        {getDropdownHelperText()}
      </Label>
      <TextField
        label="Reason"
        name={`${props.formID}`}
        value={props.committees.reason || ''}
        onChange={props.handleChangeReason}
        error={typeof (props.errors) !== 'undefined' && !!props.errors.reason}
        helperText={typeof (props.errors) !== 'undefined' ? props.errors.reason : undefined}
      />
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
