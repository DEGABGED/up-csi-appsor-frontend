import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import preventDefaultEnter from '../helpers/preventDefaultEnter';

function FormTextField(props) {
  return (
    <TextField
      {...props}
      label={props.label}
      name={props.name}
      type={props.type}
      value={props.values[props.name] || props.defaultvalues}
      onChange={(event) => {
        const { name, value } = event.currentTarget;
        const newValues = { ...props.values, [name]: value };
        newValues[name] = value;
        props.onChange(newValues);
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
  defaultvalues: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  className: PropTypes.string.isRequired,
};

FormTextField.defaultProps = {
  type: '',
  defaultvalues: '',
  errors: undefined,
};

export default FormTextField;
