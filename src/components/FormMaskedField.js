import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

import FormTextField from './FormTextField';

function StudentNoMaskedField(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        '2', '0', /\d/, /\d/, '-',
        /\d/, /\d/, /\d/, /\d/, /\d/,
      ]}
      guide={false}
      keepCharPositions
      showMask
    />
  );
}

StudentNoMaskedField.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function ContactNoMaskedField(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        '(', '+', '6', '3', ')', ' ',
        '9', /\d/, /\d/, ' ', /\d/, /\d/,
        /\d/, ' ', /\d/, /\d/, /\d/, /\d/,
      ]}
      guide={false}
      keepCharPositions
      showMask
    />
  );
}

ContactNoMaskedField.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function FormMaskedField(props) {
  let inputComponent;

  if (props.name === 'studentNumber') {
    inputComponent = StudentNoMaskedField;
  } else if (props.name === 'contactNumber') {
    inputComponent = ContactNoMaskedField;
  }

  return (
    <FormTextField
      {...props}
      InputProps={{
        inputComponent,
      }}
    />
  );
}

export default FormMaskedField;
