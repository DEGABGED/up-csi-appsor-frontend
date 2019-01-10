import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function FormDropdown(props) {
  return (
    <Dropdown
      {...props}
      selection
      search
      onChange={(event, { value }) => {
        let field;
        if (event.keyCode === 13) { /* Enter */
          field = event.target.parentNode.attributes.name.value;
        } else {
          try {
            field = event.currentTarget.parentNode.parentNode.attributes.name.value;
          } catch (error) {
            field = event.target.parentNode.attributes.name.value;
          }
        }
        props.onChange(field, value);
      }}
    />
  );
}

FormDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FormDropdown;
