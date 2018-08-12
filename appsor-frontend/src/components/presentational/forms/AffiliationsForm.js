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
        error={typeof (props.errors) !== 'undefined' && !!props.errors.orgName}
        helpertext={typeof (props.errors) !== 'undefined' ? props.errors.orgName : undefined}
      />

      <TextField
        label="Position"
        name="position"
        value={props.affiliations.position || ''}
        onChange={props.handleChange}
        error={typeof (props.errors) !== 'undefined' && !!props.errors.position}
        helpertext={typeof (props.errors) !== 'undefined' ? props.errors.position : undefined}
      />

      <TextField
        label="Duties"
        name="duties"
        value={props.affiliations.duties || ''}
        onChange={props.handleChange}
        error={typeof (props.errors) !== 'undefined' && !!props.errors.duties}
        helpertext={typeof (props.errors) !== 'undefined' ? props.errors.duties : undefined}
      />

      <button
        type="button"
        onClick={() => props.deleteForm(props.formID)}
      >Delete Form
      </button>
    </div>
  );
}

AffiliationsForm.propTypes = {
  formID: PropTypes.number.isRequired,
  affiliations: PropTypes.object.isRequired,
  deleteForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

AffiliationsForm.defaultProps = {
  errors: undefined,
};

export default AffiliationsForm;
