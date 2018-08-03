import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function View(props) {
  return (
    <div>
      <Dropdown
        placeholder="Skills"
        name="skills"
        options={props.options.skills}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChange}
      />

      <Dropdown
        placeholder="Interests"
        name="interests"
        options={props.options.interests}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChange}
      />

      <Dropdown
        placeholder="Experience"
        name="experience"
        options={props.options.experience}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChange}
      />
    </div>
  );
}

View.propTypes = {
  options: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default View;
