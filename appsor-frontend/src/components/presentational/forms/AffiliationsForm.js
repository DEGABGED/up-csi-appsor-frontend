import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function AffiliationsForm(props) {
  return (
    <div>
      <TextField
        label="Org Name"
        value={props.affiliations.orgName || ''}
        onChange={event => props.handleOrgName(props.formID, event)}
      />

      <TextField
        label="Position"
        value={props.affiliations.position || ''}
        onChange={event => props.handlePosition(props.formID, event)}
      />

      <TextField
        label="Duties"
        value={props.affiliations.duties || ''}
        onChange={event => props.handleDuties(props.formID, event)}
      />

      <button onClick={() => props.deleteForm(props.formID)}>Delete Form</button>
    </div>
  );
}

AffiliationsForm.propTypes = {
  formID: PropTypes.number.isRequired,
  affiliations: PropTypes.object.isRequired,
  deleteForm: PropTypes.func.isRequired,
  handleOrgName: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  handleDuties: PropTypes.func.isRequired,
};

export default AffiliationsForm;
