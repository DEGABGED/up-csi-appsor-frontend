import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import preventDefaultEnter from '../helpers/preventDefaultEnter';

function FormTextField(props) {
  return (
    <TextField
      {...props}
      onChange={(event) => {
        const { name, value } = event.currentTarget;
        const params = { name, value };
        if (typeof (props.formID) !== 'undefined') {
          params.formID = props.formID;
        }
        props.onChange(params);
      }}
      error={typeof (props.errors) !== 'undefined' && !!props.errors[props.name]}
      helperText={typeof (props.errors) !== 'undefined' && props.errors[props.name]}
      className={`text-field ${props.className}`}
      onKeyPress={preventDefaultEnter}
    />
  );
}

FormTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  className: PropTypes.string.isRequired,
  formID: PropTypes.number,
};

FormTextField.defaultProps = {
  type: '',
  errors: undefined,
  formID: undefined,
};

export default FormTextField;
