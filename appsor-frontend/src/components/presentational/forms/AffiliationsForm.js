import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function AffiliationsForm(props) {
  return (
    <div>
      <TextField
        label="Org Name"
        name="orgName"
        value={props.affiliations.orgName || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Position"
        name="position"
        value={props.affiliations.position || ''}
        onChange={props.handleChange}
      />

      <TextField
        label="Duties"
        name="duties"
        value={props.affiliations.duties || ''}
        onChange={props.handleChange}
      />

      <button onClick={() => props.deleteForm(props.formID)}>Delete Form</button>
    </div>
  );
}

AffiliationsForm.propTypes = {
  formID: PropTypes.number.isRequired,
  affiliations: PropTypes.object.isRequired,
  deleteForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AffiliationsForm;
