import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class FormDropdown extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Dropdown
        {...this.props}
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
          this.props.onChange(field, value);
        }}
      />
    );
  }
}

FormDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FormDropdown;
