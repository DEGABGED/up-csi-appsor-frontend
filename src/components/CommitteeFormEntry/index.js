import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import FormTextField from '../FormTextField';
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
      <CommitteeChoiceIcon committee_id={props.value.committee_id} />
      <Label circular size="big" color="black">{props.formID + 1}</Label>
      <div className="committee-fields">
        <p>Committee</p>
        <FormDropdown
          className="committee-field"
          placeholder="Select a Committee"
          options={props.options}
          name={`${props.formID}`}
          value={props.value.committee_id}
          onChange={props.onChangeCommittee}
          error={getDropdownError()}
        />
        <FormTextField
          className="reason-field"
          label="Reason"
          name="reason"
          value={props.value.reason}
          formID={props.formID}
          onChange={props.onChangeReason}
          errors={props.errors}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  value: PropTypes.object.isRequired,
  errors: PropTypes.object,
  duplicates: PropTypes.string,
  formID: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  onChangeCommittee: PropTypes.func.isRequired,
  onChangeReason: PropTypes.func.isRequired,
};

Form.defaultProps = {
  errors: undefined,
  duplicates: undefined,
};

export default Form;
