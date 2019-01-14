import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

import preventDefaultEnter from '../helpers/preventDefaultEnter';

class FormCustomDropdown extends Component {
  shouldComponentUpdate(nextProps) {
    const prev = this.props.values;
    const next = nextProps.values;

    // Check if the arrays are different in length
    if (prev.length !== next.length) {
      return true;
    }

    // Check if the arrays are equal
    const areEqual = prev
      .map((element, index) => element === next[index])
      .reduce((acc, element) => acc && element, true);

    return !areEqual;
  }

  render() {
    return (
      <Dropdown
        {...this.props}
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
          this.props.onChange(field, value);
        }}
        className="dropdown"
        onKeyPress={preventDefaultEnter}
      />
    );
  }
}

FormCustomDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormCustomDropdown;
