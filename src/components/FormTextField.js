import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import preventDefaultEnter from '../helpers/preventDefaultEnter';
import { shallowEqual } from '../helpers/generics';

class FormTextField extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
      || (!!nextProps.errors !== !!this.props.errors)
      || (!!nextProps.errors && !shallowEqual(nextProps.errors, this.props.errors));
  }

  render() {
    return (
      <TextField
        {...this.props}
        onChange={(event) => {
          const { name, value } = event.currentTarget;
          const params = { name, value };
          if (typeof (this.props.formID) !== 'undefined') {
            params.formID = this.props.formID;
          }
          this.props.onChange(params);
        }}
        error={typeof (this.props.errors) !== 'undefined' && !!this.props.errors[this.props.name]}
        helperText={typeof (this.props.errors) !== 'undefined' && this.props.errors[this.props.name]}
        className={`text-field ${this.props.className}`}
        onKeyPress={preventDefaultEnter}
      />
    );
  }
}

FormTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
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
