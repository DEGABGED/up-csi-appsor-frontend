import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

import preventDefaultEnter from '../helpers/preventDefaultEnter';

function CustomDropdown(props) {
  return (
    <Dropdown
      placeholder={props.placeholder}
      name={props.name}
      options={props.options}
      closeOnBlur
      allowAdditions
      multiple
      selection
      search
      fluid
      onChange={(event, { value }) => {
        let field;
        if ([13, 8, 46].includes(event.keyCode)) { /* Enter, Backspace, Delete */
          field = event.target.parentNode.attributes.name.value;
        } else {
          field = event.currentTarget.parentNode.parentNode.attributes.name.value;
        }
        props.onChange(event, { field, value });
      }}
      className="dropdown"
      onKeyPress={preventDefaultEnter}
    />
  );
}

CustomDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomDropdown;
