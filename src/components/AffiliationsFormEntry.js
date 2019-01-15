import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import FormTextField from './FormTextField';

function AffiliationsFormEntry(props) {
  return (
    <div className="affiliation-form">
      <FormTextField
        className="org-name-input"
        label="Organization"
        name="orgName"
        value={props.value.orgName}
        onChange={props.onChange}
        formID={props.formID}
        errors={props.errors}
      />

      <FormTextField
        className="position-input"
        label="Position"
        name="position"
        value={props.value.position}
        onChange={props.onChange}
        formID={props.formID}
        errors={props.errors}
      />

      <FormTextField
        className="duties-input"
        label="Duties"
        name="duties"
        value={props.value.duties}
        onChange={props.onChange}
        formID={props.formID}
        errors={props.errors}
      />

      <Button
        className="delete-org-button"
        onClick={() => props.deleteForm(props.formID)}
      >X
      </Button>
    </div>
  );
}

AffiliationsFormEntry.propTypes = {
  formID: PropTypes.number.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  deleteForm: PropTypes.func.isRequired,
};

AffiliationsFormEntry.defaultProps = {
  errors: undefined,
};

export default AffiliationsFormEntry;
