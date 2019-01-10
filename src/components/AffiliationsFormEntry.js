import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import preventDefaultEnter from '../helpers/preventDefaultEnter';

function AffiliationsForm(props) {
  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    props.handleChange(props.formID, name, value);
  };

  return (
    <div className="affiliation-form">
      <TextField
        className="org-name-input"
        label="Organization"
        name="orgName"
        value={props.affiliations.orgName || ''}
        onChange={onChange}
        error={typeof (props.errors) !== 'undefined' && !!props.errors.orgName}
        helpertext={typeof (props.errors) !== 'undefined' ? props.errors.orgName : undefined}
        onKeyPress={preventDefaultEnter}
      />

      <TextField
        className="position-input"
        label="Position"
        name="position"
        value={props.affiliations.position || ''}
        onChange={onChange}
        error={typeof (props.errors) !== 'undefined' && !!props.errors.position}
        helpertext={typeof (props.errors) !== 'undefined' ? props.errors.position : undefined}
        onKeyPress={preventDefaultEnter}
      />

      <TextField
        className="duties-input"
        label="Duties"
        name="duties"
        value={props.affiliations.duties || ''}
        onChange={onChange}
        error={typeof (props.errors) !== 'undefined' && !!props.errors.duties}
        helpertext={typeof (props.errors) !== 'undefined' ? props.errors.duties : undefined}
        onKeyPress={preventDefaultEnter}
      />

      <Button
        className="delete-org-button"
        onClick={() => props.deleteForm(props.formID)}
      >X
      </Button>
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
